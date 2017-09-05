/*jshint node:true, camelcase:false*/
/**
 *
 * @author pmeijer / https://github.com/pmeijer
 */

'use strict';
module.exports = function getRegistrationEndPoint(middlewareOpts) {
    var gmeConfig = middlewareOpts.gmeConfig,
        gmeAuth = middlewareOpts.gmeAuth,
        logger = middlewareOpts.logger.fork('MIC-Registration');

    return function (req, res, next) {
        var receivedData = req.body,
            logData = JSON.stringify(JSON.stringify(receivedData));

        delete logData.password;

        if (gmeConfig.authentication.enable === false) {
            res.sendStatus(404);
            return;
        }

        logger.info('New user requested:', logData);

        if (typeof receivedData.userId !== 'string' || receivedData.userId.length < 3 ||
            typeof receivedData.email !== 'string' || receivedData.email.length === 0 ||
            typeof receivedData.info !== 'object' || receivedData.info === null ||
            typeof receivedData.info.userName !== 'string' || receivedData.info.userName.length === 0 ||
            receivedData.info.userName.indexOf(' ') === -1 ||
            typeof receivedData.info.major !== 'string' || receivedData.info.major.length === 0) {

            logger.warn('Provided data was invalid!');
            res.sendStatus(400);
            return;
        }

        gmeAuth.listUsers({disabled: undefined, email: receivedData.email})
            .then(function (currentUsers) {
                if (currentUsers.length !== 0) {
                    throw new Error('Email [' + receivedData.email + '] is already registered!');
                }

                console.log('registering user');
                return gmeAuth.addUser(receivedData.userId, receivedData.email, receivedData.password, true, {
                    disabled: false,
                    data: {
                        userName: receivedData.info.userName,
                        major: receivedData.info.major
                    }
                });
            })
            .then(function () {
                res.sendStatus(200);
            })
            .catch(function (err) {
                if (err.message.indexOf('] is already registered!') > -1 ||
                    err.message.indexOf('user already exists') > -1) {
                    logger.error(err);
                    res.sendStatus(400);
                    return;
                }

                next(err);
            });
    };
};
/*jshint node:true, camelcase:false*/
/**
 *
 * @author pmeijer / https://github.com/pmeijer
 */

var Q = require('q');

'use strict';
module.exports = function getRegistrationEndPoint(middlewareOpts) {
    var gmeConfig = middlewareOpts.gmeConfig,
        gmeAuth = middlewareOpts.gmeAuth,
        logger = middlewareOpts.logger.fork('GSN-Registration');


    return function (req, res, next) {
        var receivedData = req.body,
            logData = JSON.stringify(JSON.stringify(receivedData));

        delete logData.password;

        if (gmeConfig.authentication.enable === false) {
            res.sendStatus(404);
            return;
        }

        logger.info('New user request!', logData);

        // TODO: Add regex for userId and check other data too.
        if (typeof receivedData.userId !== 'string' || receivedData.userId.length === 0 ||
            typeof receivedData.email !== 'string' || receivedData.email.length === 0) {

            logger.warn('Provided data was invalid!');
            res.sendStatus(400);
            return;
        }

        gmeAuth.listUsers({disabled: undefined, email: receivedData.email})
            .then(function (currentUsers) {
                if (currentUsers.length !== 0) {
                    throw new Error('Email [' + receivedData.email + '] is already registered!');
                }

                return gmeAuth.addUser(receivedData.userId, receivedData.email, receivedData.password, true, {
                    disabled: true,
                    data: {
                        userName: receivedData.userName,
                        orgName: receivedData.orgName,
                        orgAddr: receivedData.orgAddr,
                        orgCountry: receivedData.orgCountry
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
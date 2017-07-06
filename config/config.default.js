/* jshint node: true*/
/**
 * @author patrickkerrypei / https://github.com/patrickkerrypei
 */

var config = require('webgme/config/config.default'),
    path = require('path');

config.server.port = 8888;
config.mongo.uri = 'mongodb://127.0.0.1:27017/multi';

config.authentication.enable = true;
config.authentication.allowGuests = true;
config.authentication.allowUserRegistration = path.join(__dirname, '../src/server/registrationEndPoint');
config.authentication.userManagementPage = path.join(__dirname, '../src/server/usermanagement');

// config.client.appDir = './dist';
module.exports = config;
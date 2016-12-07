'use strict';

var logger = require('logger');

module.exports = function(settings) {
  var fbq = require('../helpers/getFbQueue');

  fbq('track', 'Lead', settings);
  logger.log('Queue command: fbq("track", "Lead", ' + JSON.stringify(settings) + ').');
};
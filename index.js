/* jshint node: true */
'use strict';
var contentForHead = require('./lib/content-for-head');

module.exports = {
  name: 'ember-cli-stack-trace-limit',
  contentFor: function(type, config) {
    if (type === 'head') {
      return contentForHead(config);
    }
  }
};

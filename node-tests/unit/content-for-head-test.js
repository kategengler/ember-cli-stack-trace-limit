/* jshint node: true */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var contentForHead = require('../../lib/content-for-head');

var config;

describe('contentForHead', function() {
  beforeEach(function() {
    config = defaultConfiguration();
  });

  it('is undefined with no config', function() {
    expect(contentForHead()).to.equal(undefined);
  });

  describe('production', function() {
    beforeEach(function() {
      config.environment = 'production';
    });

    it('ignores invalid config', function() {
      testInvalidConfigs(config, undefined);
    });

    it('with no special config returns nothing', function() {
      expect(contentForHead(config)).to.equal(undefined);
    });

  });

  ['development', 'test'].forEach(function(env) {
     describe(env, function() {

       beforeEach(function() {
         config.environment = env;
       });

       it('ignores invalid config', function() {
         testInvalidConfigs(config, expectedScript(100));
       });

       it('defaults to 100 when not configured', function() {
         expect(contentForHead(config)).to.equal(expectedScript(100));
       });
     });
  });

  ['development', 'test', 'production'].forEach(function(env) {
    describe('Default behavior: ' + env, function() {

      beforeEach(function() {
        config.environment = env;
      });

      it('uses config value if there is a valid one', function() {
        config.stackTraceLimit = 101;
        expect(contentForHead(config)).to.equal(expectedScript(101));
      });

    });

  });

});

// Double entry bookkeeping
function expectedScript(value) {
  return '<script>Error.stackTraceLimit=' + value + ';</script>';
}

function defaultConfiguration() {
  return {};
}

function testInvalidConfigs(config, expected) {
  var invalidValues = ["101", {}, [], true, function() { return 40; }, null];
  var count = invalidValues.length;
  invalidValues.forEach(function(val) {
    config.stackTraceLimit = val;
    expect(contentForHead(config)).to.equal(expected);
    count--;
  });
  expect(count).to.equal(0);
}

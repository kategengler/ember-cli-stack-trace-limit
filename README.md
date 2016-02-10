# ember-cli-stack-trace-limit
<!--[![Build Status](https://travis-ci.org/kategengler/ember-cli-stack-trace.svg?branch=master)](https://travis-ci.org/kategengler/ember-cli-stack-trace-limit) [![Ember Observer Score](http://emberobserver.com/badges/ember-cli-stack-trace-limit.svg)](http://emberobserver.com/addons/ember-cli-stack-trace-limit)-->

An ember-cli addon to set `Error.stackTraceLimit` early.  

### Installation

```
ember install ember-cli-stack-trace-limit
```

### Usage

By default, this addon sets `Error.stackTraceLimit` to 100 in development and test environments. 
This number can be overridden with this `stackTraceLimit` configuration property.
It can be enabled in other environments by configuring `stackTraceLimit` for those environments.

### Configuration

#### `ENV.stackTraceLimit`

You can configure the limit in your project's `config/environment.js` file. This
is an easy way to change settings for a given environment. For example:

```javascript
// config/environment.js
module.exports = function(environment) {
  var ENV = { };

  if (environment === 'test') {
    ENV.stackTraceLimit = 30;
  }
  
  if (environment === 'development') {
    ENV.stackTraceLimit = 120;
  }

  return ENV;
};
```

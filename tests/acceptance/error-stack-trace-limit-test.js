import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

let originalStackTraceLimit;
module('Acceptance | Stack Trace Limit', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    originalStackTraceLimit = Error.stackTraceLimit;
  });
  hooks.afterEach(function() {
    Error.stackTraceLimit = originalStackTraceLimit;
  });

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(Error.stackTraceLimit, 100, 'Error.stackTraceLimit should default to 100 in test');
  });
});

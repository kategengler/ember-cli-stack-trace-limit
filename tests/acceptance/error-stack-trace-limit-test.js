import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

let originalStackTraceLimit;
moduleForAcceptance('Acceptance | Stack Trace Limit', {
  beforeEach() {
    originalStackTraceLimit = Error.stackTraceLimit;
  },
  afterEach() {
    Error.stackTraceLimit = originalStackTraceLimit;
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(Error.stackTraceLimit, 100, 'Error.stackTraceLimit should default to 100 in test');
  });
});

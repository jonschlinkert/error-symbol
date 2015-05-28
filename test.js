'use strict';

/* deps: mocha */
var assert = require('assert');
var error = require('./');

describe('error', function () {
  it('should return a error symbol based on OS:', function () {
    if (process.platform === 'win32') {
      assert.equal(error, 'x');
    } else {
      assert.equal(error, '✖');
    }
  });
});

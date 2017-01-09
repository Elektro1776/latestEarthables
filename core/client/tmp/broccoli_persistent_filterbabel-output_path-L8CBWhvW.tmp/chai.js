define("chai", ["exports"], function (exports) {
  /* globals chai */

  "use strict";

  var expect = chai.expect;
  exports.expect = expect;
  var assert = chai.assert;

  exports.assert = assert;
  var config = chai.config;
  exports.config = config;
  var use = chai.use;
  exports.use = use;
  var Assertion = chai.Assertion;
  exports.Assertion = Assertion;
});
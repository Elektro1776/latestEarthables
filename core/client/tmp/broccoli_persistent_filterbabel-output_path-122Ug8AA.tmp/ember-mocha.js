define('ember-mocha', ['exports', 'ember-mocha/describe-module', 'ember-mocha/describe-component', 'ember-mocha/describe-model', 'ember-mocha/it', 'ember-test-helpers'], function (exports, _emberMochaDescribeModule, _emberMochaDescribeComponent, _emberMochaDescribeModel, _emberMochaIt, _emberTestHelpers) {
  'use strict';

  exports.describeModule = _emberMochaDescribeModule['default'];
  exports.describeComponent = _emberMochaDescribeComponent['default'];
  exports.describeModel = _emberMochaDescribeModel['default'];
  exports.it = _emberMochaIt['default'];
  exports.setResolver = _emberTestHelpers.setResolver;
});
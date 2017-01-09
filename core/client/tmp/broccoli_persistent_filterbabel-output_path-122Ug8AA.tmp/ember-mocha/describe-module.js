define('ember-mocha/describe-module', ['exports', 'ember-mocha/mocha-module', 'ember-test-helpers'], function (exports, _emberMochaMochaModule, _emberTestHelpers) {
  'use strict';

  function describeModule(name, description, callbacks, tests) {
    (0, _emberMochaMochaModule.createModule)(_emberTestHelpers.TestModule, name, description, callbacks, tests);
  }

  describeModule.only = (0, _emberMochaMochaModule.createOnly)(_emberTestHelpers.TestModule);

  describeModule.skip = (0, _emberMochaMochaModule.createSkip)(_emberTestHelpers.TestModule);

  exports['default'] = describeModule;
});
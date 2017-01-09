define('ember-mocha/describe-model', ['exports', 'ember-mocha/mocha-module', 'ember-test-helpers'], function (exports, _emberMochaMochaModule, _emberTestHelpers) {
  'use strict';

  function describeModel(name, description, callbacks, tests) {
    (0, _emberMochaMochaModule.createModule)(_emberTestHelpers.TestModuleForModel, name, description, callbacks, tests);
  }

  describeModel.only = (0, _emberMochaMochaModule.createOnly)(_emberTestHelpers.TestModuleForModel);

  describeModel.skip = (0, _emberMochaMochaModule.createSkip)(_emberTestHelpers.TestModuleForModel);

  exports['default'] = describeModel;
});
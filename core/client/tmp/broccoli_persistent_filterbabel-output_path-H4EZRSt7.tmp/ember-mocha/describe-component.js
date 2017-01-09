define('ember-mocha/describe-component', ['exports', 'ember-mocha/mocha-module', 'ember-test-helpers'], function (exports, _emberMochaMochaModule, _emberTestHelpers) {
  'use strict';

  function describeComponent(name, description, callbacks, tests) {
    (0, _emberMochaMochaModule.createModule)(_emberTestHelpers.TestModuleForComponent, name, description, callbacks, tests);
  }

  describeComponent.only = (0, _emberMochaMochaModule.createOnly)(_emberTestHelpers.TestModuleForComponent);

  describeComponent.skip = (0, _emberMochaMochaModule.createSkip)(_emberTestHelpers.TestModuleForComponent);

  exports['default'] = describeComponent;
});
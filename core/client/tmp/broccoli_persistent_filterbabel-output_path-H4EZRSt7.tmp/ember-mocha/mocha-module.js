define('ember-mocha/mocha-module', ['exports', 'mocha', 'ember', 'ember-test-helpers'], function (exports, _mocha, _ember, _emberTestHelpers) {
  'use strict';

  exports.createModule = createModule;
  exports.createOnly = createOnly;
  exports.createSkip = createSkip;

  function createModule(Constructor, name, description, callbacks, tests, method) {
    var module;

    if (!tests) {
      if (!callbacks) {
        tests = description;
        callbacks = {};
      } else {
        tests = callbacks;
        callbacks = description;
      }
      module = new Constructor(name, callbacks);
    } else {
      module = new Constructor(name, description, callbacks);
    }

    function moduleBody() {
      (0, _mocha.beforeEach)(function () {
        var self = this;
        return module.setup().then(function () {
          var context = (0, _emberTestHelpers.getContext)();
          var keys = Object.keys(context);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            self[key] = context[key];
          }
        });
      });

      (0, _mocha.afterEach)(function () {
        return module.teardown();
      });

      tests = tests || function () {};
      tests();
    }
    if (method) {
      _mocha.describe[method](module.name, moduleBody);
    } else {
      (0, _mocha.describe)(module.name, moduleBody);
    }
  }

  function createOnly(Constructor) {
    return function (name, description, callbacks, tests) {
      createModule(Constructor, name, description, callbacks, tests, "only");
    };
  }

  function createSkip(Constructor) {
    return function (name, description, callbacks, tests) {
      createModule(Constructor, name, description, callbacks, tests, "skip");
    };
  }
});
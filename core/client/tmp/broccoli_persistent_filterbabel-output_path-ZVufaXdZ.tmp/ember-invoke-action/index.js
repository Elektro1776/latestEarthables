define('ember-invoke-action/index', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }

  var _slice = Array.prototype.slice;

  var assert = _ember['default'].assert;
  var get = _ember['default'].get;

  var makeInvokeAction = function makeInvokeAction() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$strict = _ref.strict;
    var strict = _ref$strict === undefined ? false : _ref$strict;

    return function (object, actionName) {
      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      assert('The first argument passed to invokeAction must be an object', (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object');
      assert('The second argument passed to invokeAction must be a string as actionName', typeof actionName === 'string');

      var action = get(object, actionName);

      if (typeof action === 'string') {
        object.sendAction.apply(object, [actionName].concat(args));
      } else if (typeof action === 'function') {
        return action.apply(undefined, args);
      } else if (strict) {
        assert('No invokable action ' + actionName + ' was found', false);
      }
    };
  };

  var makeInvoke = function makeInvoke() {
    var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref2$strict = _ref2.strict;
    var strict = _ref2$strict === undefined ? false : _ref2$strict;

    return function (object, actionName) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      var action = object.actions && object.actions[actionName];

      if (typeof action === 'function') {
        var _object$actions$actionName;

        return (_object$actions$actionName = object.actions[actionName]).call.apply(_object$actions$actionName, [object].concat(args));
      } else if (strict) {
        assert('No invokable action ' + actionName + ' was found', false);
      }
    };
  };

  var _invokeAction = makeInvokeAction();
  exports.invokeAction = _invokeAction;

  var _strictInvokeAction = makeInvokeAction({ strict: true });

  exports.strictInvokeAction = _strictInvokeAction;

  var _invoke = makeInvoke();
  exports.invoke = _invoke;

  var _strictInvoke = makeInvoke({ strict: true });

  exports.strictInvoke = _strictInvoke;

  var InvokeActionMixin = _ember['default'].Mixin.create({
    invokeAction: function invokeAction() {
      return _invokeAction.apply(undefined, [this].concat(_slice.call(arguments)));
    },

    strictInvokeAction: function strictInvokeAction() {
      return _strictInvokeAction.apply(undefined, [this].concat(_slice.call(arguments)));
    },

    invoke: function invoke() {
      return _invoke.apply(undefined, [this].concat(_slice.call(arguments)));
    },

    strictInvoke: function strictInvoke() {
      return _strictInvoke.apply(undefined, [this].concat(_slice.call(arguments)));
    }
  });

  exports.InvokeActionMixin = InvokeActionMixin;
  exports['default'] = _invokeAction;
});
define("liquid-fire/action", ["exports", "liquid-fire/promise"], function (exports, _liquidFirePromise) {
  "use strict";

  function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  })();

  function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Action = (function () {
    function Action(nameOrHandler) {
      var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
      var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      _classCallCheck(this, Action);

      if (typeof nameOrHandler === 'function') {
        this.handler = nameOrHandler;
      } else {
        this.name = nameOrHandler;
      }
      this.reversed = opts.reversed;
      this.args = args;
    }

    _createClass(Action, [{
      key: "validateHandler",
      value: function validateHandler(transitionMap) {
        if (!this.handler) {
          this.handler = transitionMap.lookup(this.name);
        }
      }
    }, {
      key: "run",
      value: function run(context) {
        var _this = this;

        return new _liquidFirePromise["default"](function (resolve, reject) {
          _liquidFirePromise["default"].resolve(_this.handler.apply(context, _this.args)).then(resolve, reject);
        });
      }
    }]);

    return Action;
  })();

  exports["default"] = Action;
});
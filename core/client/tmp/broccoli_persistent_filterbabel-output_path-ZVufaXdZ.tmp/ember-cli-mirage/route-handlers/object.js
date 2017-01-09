define("ember-cli-mirage/route-handlers/object", ["exports"], function (exports) {
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

  var ObjectRouteHandler = (function () {
    function ObjectRouteHandler(dbOrSchema, serializerOrRegistry, object) {
      _classCallCheck(this, ObjectRouteHandler);

      this.dbOrSchema = dbOrSchema;
      this.serializerOrRegistry = serializerOrRegistry;
      this.object = object;
    }

    _createClass(ObjectRouteHandler, [{
      key: "handle",
      value: function handle(request) {
        return this.object;
      }
    }]);

    return ObjectRouteHandler;
  })();

  exports["default"] = ObjectRouteHandler;
});
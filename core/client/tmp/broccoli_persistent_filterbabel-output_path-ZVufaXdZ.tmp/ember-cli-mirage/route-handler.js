define('ember-cli-mirage/route-handler', ['exports', 'ember', 'ember-cli-mirage/response', 'ember-cli-mirage/route-handlers/function', 'ember-cli-mirage/route-handlers/object', 'ember-cli-mirage/route-handlers/shorthands/get', 'ember-cli-mirage/route-handlers/shorthands/post', 'ember-cli-mirage/route-handlers/shorthands/put', 'ember-cli-mirage/route-handlers/shorthands/delete'], function (exports, _ember, _emberCliMirageResponse, _emberCliMirageRouteHandlersFunction, _emberCliMirageRouteHandlersObject, _emberCliMirageRouteHandlersShorthandsGet, _emberCliMirageRouteHandlersShorthandsPost, _emberCliMirageRouteHandlersShorthandsPut, _emberCliMirageRouteHandlersShorthandsDelete) {
  'use strict';

  function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }

  function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  })();

  function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var _ref = _;
  var isArray = _ref.isArray;
  var keys = _ref.keys;
  var isBlank = _ember['default'].isBlank;
  var typeOf = _ember['default'].typeOf;

  var RouteHandler = (function () {
    function RouteHandler(dbOrSchema, verb, args, serializerOrRegistry) {
      _classCallCheck(this, RouteHandler);

      var _extractArguments2 = this._extractArguments(args);

      var _extractArguments22 = _slicedToArray(_extractArguments2, 3);

      var rawHandler = _extractArguments22[0];
      var customizedCode = _extractArguments22[1];
      var options = _extractArguments22[2];

      this.dbOrSchema = dbOrSchema;
      this.serializerOrRegistry = serializerOrRegistry;
      this.verb = verb;
      this.rawHandler = rawHandler;
      this.customizedCode = customizedCode;
      this.options = options;
    }

    _createClass(RouteHandler, [{
      key: 'handle',
      value: function handle(request) {
        var mirageResponse = this._getMirageResponseForRequest(request);
        var serializedMirageResponse = this._serialize(mirageResponse, request);

        return serializedMirageResponse.toRackResponse();
      }
    }, {
      key: '_getMirageResponseForRequest',
      value: function _getMirageResponseForRequest(request) {
        var type = this._rawHandlerType();
        var handler = undefined;

        if (type === 'function') {
          handler = new _emberCliMirageRouteHandlersFunction['default'](this.dbOrSchema, this.serializerOrRegistry, this.rawHandler);
        } else if (type === 'object') {
          handler = new _emberCliMirageRouteHandlersObject['default'](this.dbOrSchema, this.serializerOrRegistry, this.rawHandler);
        } else if (this.verb === 'get') {
          handler = new _emberCliMirageRouteHandlersShorthandsGet['default'](this.dbOrSchema, this.serializerOrRegistry, this.rawHandler, this.options);
        } else if (this.verb === 'post') {
          handler = new _emberCliMirageRouteHandlersShorthandsPost['default'](this.dbOrSchema, this.serializerOrRegistry, this.rawHandler, this.options);
        } else if (this.verb === 'put') {
          handler = new _emberCliMirageRouteHandlersShorthandsPut['default'](this.dbOrSchema, this.serializerOrRegistry, this.rawHandler, this.options);
        } else if (this.verb === 'delete') {
          handler = new _emberCliMirageRouteHandlersShorthandsDelete['default'](this.dbOrSchema, this.serializerOrRegistry, this.rawHandler, this.options);
        }

        var response = undefined;

        try {
          response = handler.handle(request);
        } catch (error) {
          console.error('Mirage: Your handler for the url ' + request.url + ' threw an error:', error.message, error.stack);
        }

        return this._toMirageResponse(response);
      }

      /*
        Args can be of the form
          [function, code]
          [object, code]
          [shorthand, code, options]
          [shorthand, options]
          [options]
        with all optional. This method returns an array of
          [handler (i.e. the function, object or shorthand), code, options].
      */
    }, {
      key: '_extractArguments',
      value: function _extractArguments(ary) {
        var argsInitialLength = ary.length;
        var lastArgument = ary && ary[ary.length - 1];
        var options;
        var i = 0;
        if (lastArgument && lastArgument.hasOwnProperty('coalesce')) {
          argsInitialLength--;
        } else {
          options = { colesce: false };
          ary.push(options);
        }
        for (; i < 4 - ary.length; i++) {
          ary.splice(argsInitialLength, 0, undefined);
        }
        return ary;
      }
    }, {
      key: '_rawHandlerType',
      value: function _rawHandlerType() {
        return isArray(this.rawHandler) ? 'array' : _typeof(this.rawHandler);
      }
    }, {
      key: '_toMirageResponse',
      value: function _toMirageResponse(response) {
        var mirageResponse = undefined;

        if (_instanceof(response, _emberCliMirageResponse['default'])) {
          mirageResponse = response;
        } else {
          var code = this._getCodeForResponse(response);
          mirageResponse = new _emberCliMirageResponse['default'](code, {}, response);
        }

        return mirageResponse;
      }
    }, {
      key: '_getCodeForResponse',
      value: function _getCodeForResponse(response) {
        var code = undefined;
        var responseIsEmptyObject = typeOf(response) === 'object' && keys(response).length === 0;
        var responseHasContent = response && !responseIsEmptyObject && (isArray(response) || !isBlank(response));

        if (this.customizedCode) {
          code = this.customizedCode;
        } else {
          code = this._defaultCodeFor[this.verb];

          if (code === 204 && responseHasContent) {
            code = 200;
          }
        }

        return code;
      }
    }, {
      key: '_defaultCodeFor',
      value: function _defaultCodeFor(verb) {
        return ({ get: 200, put: 204, post: 201, 'delete': 204 })[verb];
      }
    }, {
      key: '_serialize',
      value: function _serialize(mirageResponse, request) {
        mirageResponse.data = this.serializerOrRegistry.serialize(mirageResponse.data, request);

        return mirageResponse;
      }
    }]);

    return RouteHandler;
  })();

  exports['default'] = RouteHandler;
});
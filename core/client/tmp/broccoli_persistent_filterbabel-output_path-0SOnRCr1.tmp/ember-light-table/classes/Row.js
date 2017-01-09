define('ember-light-table/classes/Row', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }

  function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  var _get = function get(_x, _x2, _x3) {
    var _again = true;_function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
          return undefined;
        } else {
          _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;if (getter === undefined) {
          return undefined;
        }return getter.call(receiver);
      }
    }
  };

  function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  /**
   * @module Classes
   * @class Row
   */

  var Row = (function (_Ember$ObjectProxy$extend) {
    _inherits(Row, _Ember$ObjectProxy$extend);

    /**
     * @class Row
     * @constructor
     * @param {Object} content
     */

    function Row(content) {
      _classCallCheck(this, Row);

      if (_instanceof(content, Row)) {
        return content;
      }

      _get(Object.getPrototypeOf(Row.prototype), 'constructor', this).call(this);
      this.set('content', content);
    }

    return Row;
  })(_ember['default'].ObjectProxy.extend({
    /**
     * @property expanded
     * @type {Boolean}
     * @default false
     */
    expanded: false,

    /**
     * @property selected
     * @type {Boolean}
     * @default false
     */
    selected: false
  }));

  exports['default'] = Row;
});
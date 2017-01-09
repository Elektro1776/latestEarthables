define('lodash/internal/isIterateeCall', ['exports', 'lodash/internal/isArrayLike', 'lodash/internal/isIndex', 'lodash/lang/isObject'], function (exports, _lodashInternalIsArrayLike, _lodashInternalIsIndex, _lodashLangIsObject) {
  'use strict';

  function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }

  /**
   * Checks if the provided arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!(0, _lodashLangIsObject['default'])(object)) {
      return false;
    }
    var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
    if (type == 'number' ? (0, _lodashInternalIsArrayLike['default'])(object) && (0, _lodashInternalIsIndex['default'])(index, object.length) : type == 'string' && index in object) {
      var other = object[index];
      return value === value ? value === other : other !== other;
    }
    return false;
  }

  exports['default'] = isIterateeCall;
});
define('lodash/internal/createBindWrapper', ['exports', 'lodash/internal/createCtorWrapper', 'lodash/internal/root'], function (exports, _lodashInternalCreateCtorWrapper, _lodashInternalRoot) {
  'use strict';

  function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  /**
   * Creates a function that wraps `func` and invokes it with the `this`
   * binding of `thisArg`.
   *
   * @private
   * @param {Function} func The function to bind.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @returns {Function} Returns the new bound function.
   */
  function createBindWrapper(func, thisArg) {
    var Ctor = (0, _lodashInternalCreateCtorWrapper['default'])(func);

    function wrapper() {
      var fn = this && this !== _lodashInternalRoot['default'] && _instanceof(this, wrapper) ? Ctor : func;
      return fn.apply(thisArg, arguments);
    }
    return wrapper;
  }

  exports['default'] = createBindWrapper;
});
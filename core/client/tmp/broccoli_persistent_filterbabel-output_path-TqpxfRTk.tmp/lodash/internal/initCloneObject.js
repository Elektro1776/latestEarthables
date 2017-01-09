define('lodash/internal/initCloneObject', ['exports'], function (exports) {
  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  'use strict';

  function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  function initCloneObject(object) {
    var Ctor = object.constructor;
    if (!(typeof Ctor == 'function' && _instanceof(Ctor, Ctor))) {
      Ctor = Object;
    }
    return new Ctor();
  }

  exports['default'] = initCloneObject;
});
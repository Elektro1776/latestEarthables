define('lodash/internal/wrapperClone', ['exports', 'lodash/internal/LazyWrapper', 'lodash/internal/LodashWrapper', 'lodash/internal/arrayCopy'], function (exports, _lodashInternalLazyWrapper, _lodashInternalLodashWrapper, _lodashInternalArrayCopy) {
  'use strict';

  function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  /**
   * Creates a clone of `wrapper`.
   *
   * @private
   * @param {Object} wrapper The wrapper to clone.
   * @returns {Object} Returns the cloned wrapper.
   */
  function wrapperClone(wrapper) {
    return _instanceof(wrapper, _lodashInternalLazyWrapper['default']) ? wrapper.clone() : new _lodashInternalLodashWrapper['default'](wrapper.__wrapped__, wrapper.__chain__, (0, _lodashInternalArrayCopy['default'])(wrapper.__actions__));
  }

  exports['default'] = wrapperClone;
});
define('lodash/internal/reorder', ['exports', 'lodash/internal/arrayCopy', 'lodash/internal/isIndex'], function (exports, _lodashInternalArrayCopy, _lodashInternalIsIndex) {
  'use strict';

  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeMin = Math.min;

  /**
   * Reorder `array` according to the specified indexes where the element at
   * the first index is assigned as the first element, the element at
   * the second index is assigned as the second element, and so on.
   *
   * @private
   * @param {Array} array The array to reorder.
   * @param {Array} indexes The arranged array indexes.
   * @returns {Array} Returns `array`.
   */
  function reorder(array, indexes) {
    var arrLength = array.length,
        length = nativeMin(indexes.length, arrLength),
        oldArray = (0, _lodashInternalArrayCopy['default'])(array);

    while (length--) {
      var index = indexes[length];
      array[length] = (0, _lodashInternalIsIndex['default'])(index, arrLength) ? oldArray[index] : undefined;
    }
    return array;
  }

  exports['default'] = reorder;
});
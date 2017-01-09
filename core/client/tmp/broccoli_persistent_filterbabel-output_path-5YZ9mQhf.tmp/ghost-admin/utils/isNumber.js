define('ghost-admin/utils/isNumber', ['exports'], function (exports) {
  function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }

  // isNumber function from lodash

  var toString = Object.prototype.toString;

  exports['default'] = function (value) {
    return typeof value === 'number' || value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && toString.call(value) === '[object Number]' || false;
  };
});
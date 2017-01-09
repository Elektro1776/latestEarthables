define('ember-simple-auth/utils/objects-are-equal', ['exports'], function (exports) {
  'use strict';

  function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }

  function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  exports['default'] = objectsAreEqual;

  function objectsAreEqual(a, b) {
    function compare(x, y) {
      var property = undefined;
      if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
        return true;
      }

      if (x === y) {
        return true;
      }

      if (!(_instanceof(x, Object) && _instanceof(y, Object))) {
        return false;
      }

      for (property in y) {
        if (y.hasOwnProperty(property) !== x.hasOwnProperty(property)) {
          return false;
        } else if (_typeof(y[property]) !== _typeof(x[property])) {
          return false;
        }
      }

      for (property in x) {
        if (y.hasOwnProperty(property) !== x.hasOwnProperty(property)) {
          return false;
        } else if (_typeof(y[property]) !== _typeof(x[property])) {
          return false;
        }

        switch (_typeof(x[property])) {
          case 'object':
            if (!compare(x[property], y[property])) {
              return false;
            }
            break;
          default:
            if (x[property] !== y[property]) {
              return false;
            }
            break;
        }
      }

      return true;
    }

    return compare(a, b);
  }
});
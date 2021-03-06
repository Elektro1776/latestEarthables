define('liquid-fire/helpers/lf-or', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.lfOr = lfOr;

  function lfOr(params /*, hash*/) {
    return params.reduce(function (a, b) {
      return a || b;
    }, false);
  }

  exports['default'] = _ember['default'].Helper.helper(lfOr);
});
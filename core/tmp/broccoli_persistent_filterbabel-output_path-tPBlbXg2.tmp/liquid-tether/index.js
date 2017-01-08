define('liquid-tether/index', ['exports', 'liquid-fire/constraint'], function (exports, _liquidFireConstraint) {
  'use strict';

  exports.target = target;
  exports.onOpenTether = onOpenTether;
  exports.onCloseTether = onCloseTether;

  function target(name) {
    return new _liquidFireConstraint['default']('parentElementClass', function (className) {
      if (className.match('-liquid-target')) {
        var targetName = className.replace('-liquid-target', '');
        return targetName.match(name);
      }
    });
  }

  function onOpenTether() {
    return new _liquidFireConstraint['default']('newValue', function (_ref) {
      var emptyTarget = _ref.emptyTarget;
      return !emptyTarget;
    });
  }

  function onCloseTether() {
    return new _liquidFireConstraint['default']('newValue', function (_ref2) {
      var emptyTarget = _ref2.emptyTarget;
      return emptyTarget;
    });
  }
});
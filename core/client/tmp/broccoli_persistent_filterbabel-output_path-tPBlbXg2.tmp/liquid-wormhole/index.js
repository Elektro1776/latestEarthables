define('liquid-wormhole/index', ['exports', 'liquid-fire/constraint'], function (exports, _liquidFireConstraint) {
  'use strict';

  exports.target = target;
  exports.onOpenWormhole = onOpenWormhole;
  exports.onCloseWormhole = onCloseWormhole;

  function target(name) {
    return new _liquidFireConstraint['default']('parentElementClass', name + '-liquid-target');
  }

  function onOpenWormhole() {
    return new _liquidFireConstraint['default']('newValue', function (_ref) {
      var emptyTarget = _ref.emptyTarget;
      return !emptyTarget;
    });
  }

  function onCloseWormhole() {
    return new _liquidFireConstraint['default']('newValue', function (_ref2) {
      var emptyTarget = _ref2.emptyTarget;
      return emptyTarget;
    });
  }
});
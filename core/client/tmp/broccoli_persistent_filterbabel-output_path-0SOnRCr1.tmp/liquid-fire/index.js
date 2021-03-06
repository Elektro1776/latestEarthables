define("liquid-fire/index", ["exports", "liquid-fire/transition-map", "liquid-fire/animate", "liquid-fire/promise", "liquid-fire/mutation-observer", "liquid-fire/velocity-ext", "liquid-fire/mixins/pausable"], function (exports, _liquidFireTransitionMap, _liquidFireAnimate, _liquidFirePromise, _liquidFireMutationObserver, _liquidFireVelocityExt, _liquidFireMixinsPausable) {
  "use strict";

  Object.defineProperty(exports, "Pausable", {
    enumerable: true,
    get: function get() {
      return _liquidFireMixinsPausable["default"];
    }
  });
  exports.TransitionMap = _liquidFireTransitionMap["default"];
  exports.animate = _liquidFireAnimate.animate;
  exports.stop = _liquidFireAnimate.stop;
  exports.isAnimating = _liquidFireAnimate.isAnimating;
  exports.timeSpent = _liquidFireAnimate.timeSpent;
  exports.timeRemaining = _liquidFireAnimate.timeRemaining;
  exports.finish = _liquidFireAnimate.finish;
  exports.Promise = _liquidFirePromise["default"];
  exports.MutationObserver = _liquidFireMutationObserver["default"];
});
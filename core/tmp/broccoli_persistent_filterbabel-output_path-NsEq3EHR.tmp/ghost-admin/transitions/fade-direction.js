define('ghost-admin/transitions/fade-direction', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  exports['default'] = fade;

  function fade(dimension, direction, opts) {
    var _this = this;

    var offset = arguments.length <= 3 || arguments[3] === undefined ? 20 : arguments[3];

    var oldParams = { opacity: 0 },
        newParams = { opacity: [opts.maxOpacity || 1, 0] },
        fadingElement = findFadingElement(this);

    var outOpts = opts,
        firstStep = undefined;

    if (dimension.toLowerCase() === 'x') {
      oldParams.translateX = direction * offset + 'px';
      newParams.translateX = ['0px', direction * offset + 'px'];
    } else {
      oldParams.translateY = direction * offset + 'px';
      newParams.translateY = ['0px', direction * offset + 'px'];
    }

    if (fadingElement) {
      // We still have some older version that is in the process of
      // fading out, so out first step is waiting for it to finish.
      firstStep = (0, _liquidFire.finish)(fadingElement, 'fade-out');
    } else {
      if ((0, _liquidFire.isAnimating)(this.oldElement, 'fade-in')) {
        // if the previous view is partially faded in, scale its
        // fade-out duration appropriately.
        outOpts = { duration: (0, _liquidFire.timeSpent)(this.oldElement, 'fade-in') };
      }
      (0, _liquidFire.stop)(this.oldElement);
      firstStep = (0, _liquidFire.animate)(this.oldElement, oldParams, outOpts, 'fade-out');
    }
    return firstStep.then(function () {
      return (0, _liquidFire.animate)(_this.newElement, newParams, opts, 'fade-in');
    });
  }

  function findFadingElement(context) {
    for (var i = 0; i < context.older.length; i++) {
      var entry = context.older[i];
      if ((0, _liquidFire.isAnimating)(entry.element, 'fade-out')) {
        return entry.element;
      }
    }
    if ((0, _liquidFire.isAnimating)(context.oldElement, 'fade-out')) {
      return context.oldElement;
    }
  }
});
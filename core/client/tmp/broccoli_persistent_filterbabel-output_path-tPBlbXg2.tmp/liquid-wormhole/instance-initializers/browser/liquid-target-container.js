define('liquid-wormhole/instance-initializers/browser/liquid-target-container', ['exports'], function (exports) {
  'use strict';

  exports.initialize = initialize;

  function initialize(instance) {
    var liquidTargetContainer = undefined;

    if (instance.lookup) {
      liquidTargetContainer = instance.lookup('component:liquid-target-container');
    } else {
      liquidTargetContainer = instance.container.lookup('component:liquid-target-container');
    }

    liquidTargetContainer.appendTo(instance.rootElement);
  }

  exports['default'] = {
    name: 'liquid-target-container',
    initialize: initialize
  };
});
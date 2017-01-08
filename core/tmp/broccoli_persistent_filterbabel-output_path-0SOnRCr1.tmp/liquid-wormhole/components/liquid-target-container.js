define('liquid-wormhole/components/liquid-target-container', ['exports', 'ember', 'liquid-wormhole/templates/components/liquid-target-container'], function (exports, _ember, _liquidWormholeTemplatesComponentsLiquidTargetContainer) {
  'use strict';

  var inject = _ember['default'].inject;
  var computed = _ember['default'].computed;
  var service = inject.service;

  exports['default'] = _ember['default'].Component.extend({
    layout: _liquidWormholeTemplatesComponentsLiquidTargetContainer['default'],
    classNames: ['liquid-target-container'],
    classNameBindings: ['hasTargets'],

    hasTargets: computed.bool('liquidTargetService.targets.length'),
    liquidTargetService: service('liquid-target')
  });
});
define('liquid-wormhole/components/liquid-wormhole', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var A = _ember['default'].A;
  var computed = _ember['default'].computed;
  var inject = _ember['default'].inject;
  var observer = _ember['default'].observer;
  var run = _ember['default'].run;
  var service = inject.service;
  var alias = computed.alias;

  var LiquidWormhole = _ember['default'].Component.extend({
    to: null,
    classNames: ['liquid-wormhole-container'],

    liquidTarget: alias('to'),
    liquidTargetService: service('liquid-target'),

    nodes: computed(function () {
      if (this.element) {
        return this.$().children();
      }
    }),

    childWormholes: computed(function () {
      return A();
    }),

    liquidTargetDidChange: observer('liquidTarget', function () {
      this.get('liquidTargetService').removeItem(this._target, this);
      this.get('liquidTargetService').appendItem(this._target, this);
    }),

    didInsertElement: function didInsertElement() {
      var parentWormhole = this.nearestOfType(LiquidWormhole);
      var childWormholes = this.get('childWormholes');
      var liquidTargetService = this.get('liquidTargetService');

      this._target = this.get('liquidTarget');

      if (parentWormhole && parentWormhole._state !== 'inDOM') {
        parentWormhole.get('childWormholes').unshiftObject(this);
        parentWormhole.get('childWormholes').unshiftObjects(childWormholes);
      } else {
        liquidTargetService.appendItem(this._target, this);

        childWormholes.forEach(function (wormhole) {
          return liquidTargetService.appendItem(wormhole._target, wormhole);
        });
      }

      this._super.apply(this, arguments);
    },

    willDestroyElement: function willDestroyElement() {
      this.get('liquidTargetService').removeItem(this._target, this);

      this._super.apply(this, arguments);
    }
  });

  exports['default'] = LiquidWormhole;
});
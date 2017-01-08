import Ember from 'ember';

var A = Ember.A;
var computed = Ember.computed;
var inject = Ember.inject;
var observer = Ember.observer;
var run = Ember.run;
var service = inject.service;
var alias = computed.alias;

var LiquidWormhole = Ember.Component.extend({
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

export default LiquidWormhole;
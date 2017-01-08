define('liquid-wormhole/components/liquid-target', ['exports', 'ember', 'liquid-wormhole/templates/components/liquid-target'], function (exports, _ember, _liquidWormholeTemplatesComponentsLiquidTarget) {
  'use strict';

  var computed = _ember['default'].computed;
  var inject = _ember['default'].inject;
  var htmlSafe = _ember['default'].String.htmlSafe;
  var service = inject.service;

  exports['default'] = _ember['default'].Component.extend({
    layout: _liquidWormholeTemplatesComponentsLiquidTarget['default'],
    classNames: ['liquid-target'],
    classNameBindings: ['contextClass'],
    attributeBindings: ['style'],

    firstTime: true,

    liquidTargetService: service('liquidTarget'),

    style: computed('index', function () {
      return htmlSafe('z-index: ' + (1000000 + this.get('index')));
    }),

    currentItem: computed('items.lastObject', function () {
      return this.get('items.lastObject') || { emptyTarget: true };
    }),

    actions: {
      willTransition: function willTransition() {
        this.set('target.isAnimating', true);
      },

      afterChildInsertion: function afterChildInsertion() {
        var currentItem = this.get('currentItem');

        if (currentItem.didAppendNodes) {
          this.get('currentItem').didAppendNodes();
        }
      },

      afterTransition: function afterTransition() {
        if (!this.firstTime && !this.isDestroyed) {
          var contextClass = this.get('currentItem.targetClass');
          this.set('contextClass', contextClass);
        }

        this.firstTime = false;
        this.set('target.isAnimating', false);
        this.get('liquidTargetService').didAnimate();
      }
    }
  });
});
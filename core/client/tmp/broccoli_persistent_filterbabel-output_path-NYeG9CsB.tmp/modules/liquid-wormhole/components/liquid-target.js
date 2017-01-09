import Ember from 'ember';
import layout from '../templates/components/liquid-target';

var computed = Ember.computed;
var inject = Ember.inject;
var htmlSafe = Ember.String.htmlSafe;
var service = inject.service;

export default Ember.Component.extend({
  layout: layout,
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
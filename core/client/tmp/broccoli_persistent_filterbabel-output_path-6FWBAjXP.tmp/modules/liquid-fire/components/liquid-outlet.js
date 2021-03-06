import Ember from "ember";
import layout from 'liquid-fire/templates/components/liquid-outlet';
import { childRoute, routeIsStable, modelIsStable } from 'liquid-fire/ember-internals';

var LiquidOutlet = Ember.Component.extend({
  layout: layout,
  positionalParams: ['inputOutletName'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
  tagName: '',
  versionEquality: Ember.computed('outletName', 'watchModels', function () {
    var outletName = this.get('outletName');
    var watchModels = this.get('watchModels');
    return function (oldValue, newValue) {
      var oldChild = childRoute(oldValue, outletName);
      var newChild = childRoute(newValue, outletName);
      return routeIsStable(oldChild, newChild) && (!watchModels || modelIsStable(oldChild, newChild));
    };
  }),
  didReceiveAttrs: function didReceiveAttrs() {
    this._super();
    this.set('outletName', this.get('inputOutletName') || 'main');
  }
});

LiquidOutlet.reopenClass({
  positionalParams: ['inputOutletName']
});

export default LiquidOutlet;
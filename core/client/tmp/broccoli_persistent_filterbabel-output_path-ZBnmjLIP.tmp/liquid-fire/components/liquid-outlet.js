define('liquid-fire/components/liquid-outlet', ['exports', 'ember', 'liquid-fire/templates/components/liquid-outlet', 'liquid-fire/ember-internals'], function (exports, _ember, _liquidFireTemplatesComponentsLiquidOutlet, _liquidFireEmberInternals) {
  'use strict';

  var LiquidOutlet = _ember['default'].Component.extend({
    layout: _liquidFireTemplatesComponentsLiquidOutlet['default'],
    positionalParams: ['inputOutletName'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    versionEquality: _ember['default'].computed('outletName', 'watchModels', function () {
      var outletName = this.get('outletName');
      var watchModels = this.get('watchModels');
      return function (oldValue, newValue) {
        var oldChild = (0, _liquidFireEmberInternals.childRoute)(oldValue, outletName);
        var newChild = (0, _liquidFireEmberInternals.childRoute)(newValue, outletName);
        return (0, _liquidFireEmberInternals.routeIsStable)(oldChild, newChild) && (!watchModels || (0, _liquidFireEmberInternals.modelIsStable)(oldChild, newChild));
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

  exports['default'] = LiquidOutlet;
});
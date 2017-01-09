define('liquid-fire/components/-lf-get-outlet-state', ['exports', 'ember', 'liquid-fire/ember-internals'], function (exports, _ember, _liquidFireEmberInternals) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    layout: _liquidFireEmberInternals.getOutletStateTemplate
  });
});
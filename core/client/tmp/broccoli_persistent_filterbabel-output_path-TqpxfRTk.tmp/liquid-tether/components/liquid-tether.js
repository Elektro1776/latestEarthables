define('liquid-tether/components/liquid-tether', ['exports', 'ember', 'liquid-wormhole/components/liquid-wormhole', 'liquid-tether/templates/components/liquid-tether'], function (exports, _ember, _liquidWormholeComponentsLiquidWormhole, _liquidTetherTemplatesComponentsLiquidTether) {
  'use strict';

  var computed = _ember['default'].computed;
  var get = _ember['default'].get;
  var observer = _ember['default'].observer;
  var run = _ember['default'].run;
  var camelize = _ember['default'].String.camelize;

  exports['default'] = _liquidWormholeComponentsLiquidWormhole['default'].extend({
    layout: _liquidTetherTemplatesComponentsLiquidTether['default'],

    to: 'liquid-tether',

    classPrefix: 'liquid-tether',
    target: null,
    attachment: null,
    targetAttachment: null,
    offset: null,
    targetOffset: null,
    targetModifier: null,
    constraints: null,
    optimizations: null,

    didInsertElement: function didInsertElement() {
      this._tetherElement = this.$('.liquid-tether')[0];

      this._super.apply(this, arguments);
    },

    didAppendNodes: function didAppendNodes() {
      this.addTether();
    },

    willDestroyElement: function willDestroyElement() {
      var _this = this;

      this._super.apply(this, arguments);

      run.schedule('render', function () {
        _this.removeTether();
      });
    },

    addTether: function addTether() {
      if (get(this, '_tetherTarget')) {
        this._tether = new Tether(this._tetherOptions());
      }
    },

    removeTether: function removeTether() {
      if (this._tether) {
        this._tether.destroy();
      }
    },

    tetherDidChange: observer('class-prefix', 'target', 'attachment', 'targetAttachment', 'offset', 'targetOffset', 'targetModifier', 'constraints', 'optimizations', 'liquidTarget', function () {
      this.removeTether(this._tether);
      this.addTether();
    }),

    _tetherTarget: computed('target', function () {
      var target = get(this, 'target');
      if (target && target.element) {
        target = target.element;
      } else if (target === 'document.body') {
        target = document.body;
      }
      return target;
    }),

    _tetherOptions: function _tetherOptions() {
      var _this2 = this;

      var options = {
        element: this._tetherElement,
        target: get(this, '_tetherTarget'),
        moveRoot: false
      };
      ['classPrefix', 'attachment', 'targetAttachment', 'offset', 'targetOffset', 'targetModifier', 'constraints', 'optimizations'].forEach(function (k) {
        var v = get(_this2, k);
        if (!_ember['default'].isNone(v)) {
          options[camelize(k)] = v;
        }
      });
      return options;
    },

    actions: {
      clickOverlay: function clickOverlay() {
        if (this.get('on-overlay-click')) {
          this.sendAction('on-overlay-click');
        }
      }
    }
  });
});
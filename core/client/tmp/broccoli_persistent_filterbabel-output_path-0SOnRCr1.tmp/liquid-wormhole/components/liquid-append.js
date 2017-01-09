define('liquid-wormhole/components/liquid-append', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    didInsertElement: function didInsertElement() {
      var nodes = this.get('nodes');

      this.$().append(nodes);
    }
  });
});
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function didInsertElement() {
    var nodes = this.get('nodes');

    this.$().append(nodes);
  }
});
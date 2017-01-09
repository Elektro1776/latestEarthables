import Ember from 'ember';
import layout from '../templates/components/lt-cell';

var computed = Ember.computed;

export default Ember.Component.extend({
  layout: layout,
  tagName: 'td',
  classNames: ['lt-cell'],
  attributeBindings: ['width'],
  classNameBindings: ['align', 'isSorted'],

  column: null,
  row: null,
  tableActions: null,

  rawValue: null,

  align: computed('column.align', function () {
    return 'align-' + this.get('column.align');
  }).readOnly(),

  isSorted: computed.readOnly('column.sorted'),

  width: computed.readOnly('column.width'),

  value: computed('rawValue', function () {
    var rawValue = this.get('rawValue');
    var format = this.get('column.format');
    if (format && typeof format === 'function') {
      return format.call(this, rawValue);
    }
    return rawValue;
  }).readOnly()
});
import Ember from 'ember';
import layout from '../templates/components/lt-column';

var isEmpty = Ember.isEmpty;
var computed = Ember.computed;

export default Ember.Component.extend({
  layout: layout,
  tagName: 'th',
  classNames: ['lt-column'],
  attributeBindings: ['width', 'colspan', 'rowspan'],
  classNameBindings: ['align', 'isGroupColumn:lt-group-column', 'isSortable', 'isSorted'],

  column: null,
  tableActions: null,
  sortIcons: null,

  width: computed.oneWay('column.width'),
  isGroupColumn: computed.oneWay('column.isGroupColumn'),
  isSortable: computed.oneWay('column.sortable'),
  isSorted: computed.oneWay('column.sorted'),

  colspan: computed('column', 'column.visibleSubColumns.[]', function () {
    var subColumns = this.get('column.visibleSubColumns');
    return !isEmpty(subColumns) ? subColumns.length : 1;
  }),

  rowspan: computed('column.visibleSubColumns.[]', function () {
    var subColumns = this.get('column.visibleSubColumns');
    return !isEmpty(subColumns) ? 1 : 2;
  }),

  align: computed('column.align', function () {
    return 'align-' + this.get('column.align');
  })
});
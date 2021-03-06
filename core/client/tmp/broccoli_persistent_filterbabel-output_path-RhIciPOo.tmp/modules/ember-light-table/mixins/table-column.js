var _slice = Array.prototype.slice;
import Ember from 'ember';
import callAction from '../utils/call-action';

var computed = Ember.computed;

/**
 * @module Mixins
 */

/**
 * @class TableColumnMixin
 * @extends Ember.Mixin
 * @private
 */

export default Ember.Mixin.create({
  /**
   * @property sortOnClick
   * @type {Boolean}
   * @default true
   */
  sortOnClick: true,

  /**
   * @property multiColumnSort
   * @type {Boolean}
   * @default false
   */
  multiColumnSort: false,

  /**
   * @property iconAscending
   * @type {String}
   * @default ''
   */
  iconAscending: '',

  /**
   * @property iconDescending
   * @type {String}
   * @default ''
   */
  iconDescending: '',

  visibleColumnGroups: computed.oneWay('table.visibleColumnGroups'),
  visibleSubColumns: computed.oneWay('table.visibleSubColumns'),
  visibleColumns: computed.oneWay('table.visibleColumns'),

  sortIcons: computed('iconAscending', 'iconDescending', function () {
    return this.getProperties(['iconAscending', 'iconDescending']);
  }),

  actions: {
    /**
     * onColumnClick action. Handles column sorting.
     *
     * @event onColumnClick
     * @param  {Column}   column The column that was clicked
     * @param  {Event}   event   The click event
     */
    onColumnClick: function onColumnClick(column) {
      if (column.sortable && this.get('sortOnClick')) {
        if (column.sorted) {
          column.toggleProperty('ascending');
        } else {
          if (!this.get('multiColumnSort')) {
            this.get('table.sortedColumns').setEach('sorted', false);
          }
          column.set('sorted', true);
        }
      }
      callAction.apply(undefined, [this, 'onColumnClick'].concat(_slice.call(arguments)));
    },

    /**
     * onColumnDoubleClick action.
     *
     * @event onColumnDoubleClick
     * @param  {Column}   column The column that was clicked
     * @param  {Event}   event   The click event
     */
    onColumnDoubleClick: function onColumnDoubleClick() /* column */{
      callAction.apply(undefined, [this, 'onColumnDoubleClick'].concat(_slice.call(arguments)));
    }
  }
});
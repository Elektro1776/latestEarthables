var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Ember from 'ember';

var isEmpty = Ember.isEmpty;
var computed = Ember.computed;
var emberArray = Ember.A;

/**
 * @module Classes
 * @class Column
 */

var Column = (function (_Ember$Object$extend) {
  _inherits(Column, _Ember$Object$extend);

  /**
   * @class Column
   * @constructor
   * @param {Object} options
   */

  function Column() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Column);

    if (options instanceof Column) {
      return options;
    }

    _get(Object.getPrototypeOf(Column.prototype), 'constructor', this).call(this);
    this.setProperties(options);

    if (!isEmpty(options.subColumns)) {
      this.set('subColumns', emberArray(options.subColumns.map(function (sc) {
        return new Column(sc);
      })));
    }
  }

  return Column;
})(Ember.Object.extend({
  /**
   * @property hidden
   * @type {Boolean}
   * @default false
   */
  hidden: false,

  /**
   * @property ascending
   * @type {Boolean}
   * @default true
   */
  ascending: true,

  /**
   * @property sortable
   * @type {Boolean}
   * @default true
   */
  sortable: true,

  /**
   * @property sorted
   * @type {Boolean}
   * @default false
   */
  sorted: false,

  /**
   * Column header label
   * @property label
   * @type {String}
   * @default ''
   */
  label: '',

  /**
   * Text alignment. Possible values are ['left', 'right', 'center']
   * @property align
   * @type {String}
   * @default 'left'
   */
  align: 'left',

  /**
   * An array of sub columns to be grouped together
   * @property subColumns
   * @type {Array}
   * @optional
   */
  subColumns: null,

  /**
   * Component name for the column header
   * @property headerComponent
   * @type {String}
   * @optional
   */
  headerComponent: null,

  /**
   * Component name for the column cells
   * @property cellComponent
   * @type {String}
   * @optional
   */
  cellComponent: null,

  /**
   * @property valuePath
   * @type {String}
   */
  valuePath: null,

  /**
   * @property width
   * @type {String}
   */
  width: null,

  /**
   * A format function used to calculate a cell's value
   * @property format
   * @type {Function}
   */
  format: null,

  /**
   * @property isGroupColumn
   * @type {Boolean}
   * @private
   */
  isGroupColumn: computed.notEmpty('subColumns').readOnly(),

  /**
   * @property isVisibleGroupColumn
   * @type {Boolean}
   * @private
   */
  isVisibleGroupColumn: computed('visibleSubColumns.[]', 'hidden', function () {
    return !isEmpty(this.get('visibleSubColumns')) && !this.get('hidden');
  }).readOnly(),

  /**
   * @property visibleSubColumns
   * @type {Array}
   * @private
   */
  visibleSubColumns: computed('subColumns.@each.hidden', 'hidden', function () {
    var subColumns = this.get('subColumns');
    return isEmpty(subColumns) || this.get('hidden') ? [] : subColumns.filterBy('hidden', false);
  }).readOnly()
}));

export default Column;
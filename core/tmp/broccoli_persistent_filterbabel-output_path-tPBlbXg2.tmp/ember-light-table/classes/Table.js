define('ember-light-table/classes/Table', ['exports', 'ember', 'ember-light-table/classes/Row', 'ember-light-table/classes/Column'], function (exports, _ember, _emberLightTableClassesRow, _emberLightTableClassesColumn) {
  'use strict';

  function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }

  function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  })();

  var _get = function get(_x13, _x14, _x15) {
    var _again = true;_function: while (_again) {
      var object = _x13,
          property = _x14,
          receiver = _x15;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
          return undefined;
        } else {
          _x13 = parent;_x14 = property;_x15 = receiver;_again = true;desc = parent = undefined;continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;if (getter === undefined) {
          return undefined;
        }return getter.call(receiver);
      }
    }
  };

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var computed = _ember['default'].computed;
  var isNone = _ember['default'].isNone;
  var isEmpty = _ember['default'].isEmpty;
  var emberArray = _ember['default'].A;

  /**
   * @module Classes
   * @class Table
   */

  var Table = (function (_Ember$Object$extend) {
    _inherits(Table, _Ember$Object$extend);

    /**
     * @class Table
     * @constructor
     * @param  {Array} columns
     * @param  {Array} rows
     */

    function Table() {
      var columns = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
      var rows = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

      _classCallCheck(this, Table);

      _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this);
      this.setProperties({
        rows: emberArray(Table.createRows(rows)),
        columns: emberArray(Table.createColumns(columns))
      });
    }

    // Rows

    /**
     * Replace all the row's content with content of the argument. If argument is an empty array rows will be cleared.
     * @method setRows
     * @param  {Array} rows
     * @return {Array} rows
     */

    _createClass(Table, [{
      key: 'setRows',
      value: function setRows() {
        var rows = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        return this.rows.setObjects(Table.createRows(rows));
      }

      /**
       * Push the object onto the end of the row array if it is not already present.
       * @method addRow
       * @param  {Object} row
       */
    }, {
      key: 'addRow',
      value: function addRow(row) {
        if (_instanceof(row, _emberLightTableClassesRow['default'])) {
          this.rows.addObject(row);
        } else if (isNone(this.rows.findBy('content', row))) {
          this.pushRow(row);
        }
      }

      /**
       * Push the objects onto the end of the row array if it is not already present.
       * @method addRows
       * @param  {Array} rows
       */
    }, {
      key: 'addRows',
      value: function addRows() {
        var _this = this;

        var rows = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        rows.forEach(function (r) {
          return _this.addRow(r);
        });
      }

      /**
       * Push the object onto the end of the row array.
       * @method pushRow
       * @param  {Object} row
       * @return {Row} pushed row
       */
    }, {
      key: 'pushRow',
      value: function pushRow(row) {
        var _row = Table.createRow(row);
        this.rows.pushObject(_row);
        return _row;
      }

      /**
       * Push the object onto the end of the row array.
       * @method pushRows
       * @param  {Array}  rows
       * @return {Array} pushed rows
       */
    }, {
      key: 'pushRows',
      value: function pushRows() {
        var rows = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        var _rows = Table.createRows(rows);
        this.rows.pushObjects(_rows);
        return _rows;
      }

      /**
       * Insert a row at the specified index.
       * @method insertRowAt
       * @param  {Number}  index
       * @param  {Object}  row
       * @return {Row} inserted row
       */
    }, {
      key: 'insertRowAt',
      value: function insertRowAt(index, row) {
        var _row = Table.createRow(row);
        this.rows.insertAt(index, _row);
        return _row;
      }

      /**
       * Remove all occurrences of an object in the rows
       * @method removeRow
       * @param  {Object}  row
       */
    }, {
      key: 'removeRow',
      value: function removeRow(row) {
        if (_instanceof(row, _emberLightTableClassesRow['default'])) {
          this.rows.removeObject(row);
        } else {
          this.rows.removeObjects(this.rows.filterBy('content', row));
        }
      }

      /**
       * Removes each object in the passed enumerable from the rows.
       * @method removeRows
       * @param  {Array}    rows
       */
    }, {
      key: 'removeRows',
      value: function removeRows() {
        var _this2 = this;

        var rows = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        rows.forEach(function (r) {
          return _this2.removeRow(r);
        });
      }

      // Columns

      /**
       * Replace all the column's content with content of the argument. If argument is an empty array columns will be cleared.
       * @method setColumns
       * @param  {Array} columns
       * @return {Array} columns
       */
    }, {
      key: 'setColumns',
      value: function setColumns() {
        var columns = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        return this.columns.setObjects(Table.createColumns(columns));
      }

      /**
       * Push the object onto the end of the column array if it is not already present.
       * @method addColumn
       * @param  {Object} column
       */
    }, {
      key: 'addColumn',
      value: function addColumn(column) {
        this.columns.addObject(Table.createColumn(column));
      }

      /**
       * Push the objects onto the end of the column array if it is not already present.
       * @method addColumns
       * @param  {Array} columns
       */
    }, {
      key: 'addColumns',
      value: function addColumns() {
        var columns = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        this.columns.addObjects(Table.createColumns(columns));
      }

      /**
       * Push the object onto the end of the column array.
       * @method pushColumn
       * @param  {Object} column
       * @return {Column} pushed column
       */
    }, {
      key: 'pushColumn',
      value: function pushColumn(column) {
        var _column = Table.createColumn(column);
        this.columns.pushObject(_column);
        return _column;
      }

      /**
       * Push the object onto the end of the column array.
       * @method pushColumns
       * @param  {Array}  columns
       * @return {Array} pushed columns
       */
    }, {
      key: 'pushColumns',
      value: function pushColumns() {
        var columns = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        var _columns = Table.createColumns(columns);
        this.columns.pushObjects(_columns);
        return _columns;
      }

      /**
       * Insert a column at the specified index.
       * @method insertColumnAt
       * @param  {Number}  index
       * @param  {Object}  column
       * @return {Column} inserted column
       */
    }, {
      key: 'insertColumnAt',
      value: function insertColumnAt(index, column) {
        var _column = Table.createColumn(column);
        this.columns.insertAt(index, _column);
        return _column;
      }

      /**
       * Remove all occurrences of an object in the columns
       * @method removeColumn
       * @param  {Object}  column
       */
    }, {
      key: 'removeColumn',
      value: function removeColumn(column) {
        return this.columns.removeObject(column);
      }

      /**
       * Removes each object in the passed enumerable from the columns.
       * @method removeColumns
       * @param  {Array}    columns
       */
    }, {
      key: 'removeColumns',
      value: function removeColumns() {
        var columns = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        return this.columns.removeObjects(columns);
      }

      /**
       * Create a Row object with the given content
       * @method createRow
       * @static
       * @param  {Object}  content
       * @return {Row}
       */
    }], [{
      key: 'createRow',
      value: function createRow(content) {
        return new _emberLightTableClassesRow['default'](content);
      }

      /**
       * Create a collection of Row objects with the given collection
       * @method createRows
       * @static
       * @param  {Array}  rows
       * @return {Array}
       */
    }, {
      key: 'createRows',
      value: function createRows() {
        var rows = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        return rows.map(function (r) {
          return Table.createRow(r);
        });
      }

      /**
       * Create a Column object with the given options
       * @method createColumn
       * @static
       * @param  {Object}  column
       * @return {Column}
       */
    }, {
      key: 'createColumn',
      value: function createColumn(column) {
        return new _emberLightTableClassesColumn['default'](column);
      }

      /**
       * Create a collection of Column objects with the given collection
       * @method createColumns
       * @static
       * @param  {Array}  columns
       * @return {Array}
       */
    }, {
      key: 'createColumns',
      value: function createColumns() {
        var columns = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        return columns.map(function (c) {
          return Table.createColumn(c);
        });
      }
    }]);

    return Table;
  })(_ember['default'].Object.extend({
    /**
     * @property columns
     * @type {Ember.Array}
     * @default []
     */
    columns: null,

    /**
     * @property rows
     * @type {Ember.Array}
     * @default []
     */
    rows: null,

    /**
     * @property isEmpty
     * @type {Boolean}
     */
    isEmpty: computed.empty('rows').readOnly(),

    /**
     * @property expandedRows
     * @type {Ember.Array}
     */
    expandedRows: computed.filterBy('rows', 'expanded', true).readOnly(),

    /**
     * @property selectedRows
     * @type {Ember.Array}
     */
    selectedRows: computed.filterBy('rows', 'selected', true).readOnly(),

    /**
     * @property sortedColumns
     * @type {Ember.Array}
     */
    sortedColumns: computed.filterBy('visibleColumns', 'sorted', true).readOnly(),

    /**
     * @property sortableColumns
     * @type {Ember.Array}
     */
    sortableColumns: computed.filterBy('visibleColumns', 'sortable', true).readOnly(),

    /**
     * @property visibleColumns
     * @type {Ember.Array}
     */
    visibleColumns: computed.filterBy('flattenedColumns', 'hidden', false).readOnly(),

    /**
     * @property visibleColumnGroups
     * @type {Ember.Array}
     */
    visibleColumnGroups: computed('columns.@each.{hidden,isVisibleGroupColumn}', function () {
      return emberArray(this.get('columns').reduce(function (arr, c) {
        if (c.get('isVisibleGroupColumn') || !c.get('isGroupColumn') && !c.get('hidden')) {
          arr.push(c);
        }
        return arr;
      }, []));
    }).readOnly(),

    /**
     * @property visibleSubColumns
     * @type {Ember.Array}
     */
    visibleSubColumns: computed('columns.@each.visibleSubColumns', function () {
      var _ref;

      return emberArray((_ref = []).concat.apply(_ref, _toConsumableArray(this.get('columns').getEach('visibleSubColumns'))));
    }).readOnly(),

    /**
     * @property flattenedColumns
     * @type {Ember.Array}
     */
    flattenedColumns: computed('columns.[]', 'columns.@each.subColumns', function () {
      return emberArray(this.get('columns').reduce(function (arr, c) {
        var subColumns = c.get('subColumns');
        if (isEmpty(subColumns)) {
          arr.push(c);
        } else {
          subColumns.forEach(function (sc) {
            return arr.push(sc);
          });
        }
        return arr;
      }, []));
    }).readOnly()
  }));

  exports['default'] = Table;
});
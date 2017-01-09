define('ember-sortable/components/sortable-group', ['exports', 'ember', 'ember-sortable/templates/components/sortable-group', 'ember-new-computed'], function (exports, _ember, _emberSortableTemplatesComponentsSortableGroup, _emberNewComputed) {
  'use strict';

  var A = _ember['default'].A;
  var Component = _ember['default'].Component;
  var get = _ember['default'].get;
  var set = _ember['default'].set;
  var run = _ember['default'].run;

  var a = A;
  var NO_MODEL = {};

  exports['default'] = Component.extend({
    layout: _emberSortableTemplatesComponentsSortableGroup['default'],

    /**
      @property direction
      @type string
      @default y
    */
    direction: 'y',

    /**
      @property model
      @type Any
      @default null
    */
    model: NO_MODEL,

    /**
      @property items
      @type Ember.NativeArray
    */
    items: (0, _emberNewComputed['default'])(function () {
      return a();
    }),

    /**
      Position for the first item.
      If spacing is present, first item's position will have to change as well.
      @property itemPosition
      @type Number
    */
    itemPosition: (0, _emberNewComputed['default'])(function () {
      var direction = this.get('direction');

      return this.get('sortedItems.firstObject.' + direction) - this.get('sortedItems.firstObject.spacing');
    }).volatile(),

    /**
      @property sortedItems
      @type Array
    */
    sortedItems: (0, _emberNewComputed['default'])(function () {
      var items = a(this.get('items'));
      var direction = this.get('direction');

      return items.sortBy(direction);
    }).volatile(),

    /**
      Register an item with this group.
      @method registerItem
      @param {SortableItem} [item]
    */
    registerItem: function registerItem(item) {
      this.get('items').addObject(item);
    },

    /**
      De-register an item with this group.
      @method deregisterItem
      @param {SortableItem} [item]
    */
    deregisterItem: function deregisterItem(item) {
      this.get('items').removeObject(item);
    },

    /**
      Prepare for sorting.
      Main purpose is to stash the current itemPosition so
      we don’t incur expensive re-layouts.
      @method prepare
    */
    prepare: function prepare() {
      this._itemPosition = this.get('itemPosition');
    },

    /**
      Update item positions (relatively to the first element position).
      @method update
    */
    update: function update() {
      var _this = this;

      var sortedItems = this.get('sortedItems');
      // Position of the first element
      var position = this._itemPosition;

      // Just in case we haven’t called prepare first.
      if (position === undefined) {
        position = this.get('itemPosition');
      }

      sortedItems.forEach(function (item) {
        var dimension = undefined;
        var direction = _this.get('direction');

        if (!get(item, 'isDragging')) {
          set(item, direction, position);
        }

        // add additional spacing around active element
        if (get(item, 'isBusy')) {
          position += get(item, 'spacing') * 2;
        }

        if (direction === 'x') {
          dimension = 'width';
        }
        if (direction === 'y') {
          dimension = 'height';
        }

        position += get(item, dimension);
      });
    },

    /**
      @method commit
    */
    commit: function commit() {
      var items = this.get('sortedItems');
      var groupModel = this.get('model');
      var itemModels = items.mapBy('model');
      var draggedItem = items.findBy('wasDropped', true);
      var draggedModel = undefined;

      if (draggedItem) {
        set(draggedItem, 'wasDropped', false); // Reset
        draggedModel = get(draggedItem, 'model');
      }

      delete this._itemPosition;

      run.schedule('render', function () {
        items.invoke('freeze');
      });

      run.schedule('afterRender', function () {
        items.invoke('reset');
      });

      run.next(function () {
        run.schedule('render', function () {
          items.invoke('thaw');
        });
      });

      if (groupModel !== NO_MODEL) {
        this.sendAction('onChange', groupModel, itemModels, draggedModel);
      } else {
        this.sendAction('onChange', itemModels, draggedModel);
      }
    }
  });
});
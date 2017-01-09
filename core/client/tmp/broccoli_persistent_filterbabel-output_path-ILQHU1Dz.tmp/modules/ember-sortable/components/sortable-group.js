import Ember from 'ember';
import layout from '../templates/components/sortable-group';
import computed from 'ember-new-computed';
var A = Ember.A;
var Component = Ember.Component;
var get = Ember.get;
var set = Ember.set;
var run = Ember.run;

var a = A;
var NO_MODEL = {};

export default Component.extend({
  layout: layout,

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
  items: computed(function () {
    return a();
  }),

  /**
    Position for the first item.
    If spacing is present, first item's position will have to change as well.
    @property itemPosition
    @type Number
  */
  itemPosition: computed(function () {
    var direction = this.get('direction');

    return this.get('sortedItems.firstObject.' + direction) - this.get('sortedItems.firstObject.spacing');
  }).volatile(),

  /**
    @property sortedItems
    @type Array
  */
  sortedItems: computed(function () {
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
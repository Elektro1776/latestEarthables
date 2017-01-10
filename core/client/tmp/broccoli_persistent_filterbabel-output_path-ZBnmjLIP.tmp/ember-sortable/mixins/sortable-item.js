define('ember-sortable/mixins/sortable-item', ['exports', 'ember', 'ember-new-computed'], function (exports, _ember, _emberNewComputed) {
  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  var Mixin = _ember['default'].Mixin;
  var $ = _ember['default'].$;
  var run = _ember['default'].run;
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = Mixin.create({
    classNames: ['sortable-item'],
    classNameBindings: ['isDragging', 'isDropping'],

    /**
      Group to which the item belongs.
      @property group
      @type SortableGroup
      @default null
    */
    group: null,

    /**
      Model which the item represents.
      @property model
      @type Object
      @default null
    */
    model: null,

    /**
      Selector for the element to use as handle.
      If unset, the entire element will be used as the handle.
      @property handle
      @type String
      @default null
    */
    handle: null,

    /**
      True if the item is currently being dragged.
      @property isDragging
      @type Boolean
      @default false
    */
    isDragging: false,

    /**
      Action that fires when the item starts being dragged.
      @property onDragStart
      @type Action
      @default null
    */
    onDragStart: null,

    /**
      Action that fires when the item stops being dragged.
      @property onDragStop
      @type Action
      @default null
    */
    onDragStop: null,

    /**
      True if the item is currently dropping.
      @property isDropping
      @type Boolean
      @default false
    */
    isDropping: false,

    /**
      True if the item was dropped during the interaction
      @property wasDropped
      @type Boolean
      @default false
    */
    wasDropped: false,

    /**
      @property isBusy
      @type Boolean
    */
    isBusy: _emberNewComputed['default'].or('isDragging', 'isDropping'),

    /**
      The frequency with which the group is informed
      that an update is required.
      @property updateInterval
      @type Number
      @default 125
    */
    updateInterval: 125,

    /**
      Additional spacing between active item and the rest of the elements.
      @property spacing
      @type Number
      @default 0[px]
    */
    spacing: 0,

    /**
      True if the item transitions with animation.
      @property isAnimated
      @type Boolean
    */
    isAnimated: (0, _emberNewComputed['default'])(function () {
      if (!this.element || !this.$()) {
        return;
      }

      var el = this.$();
      var property = el.css('transition-property');

      return (/all|transform/.test(property)
      );
    }).volatile(),

    /**
      The current transition duration in milliseconds.
      @property transitionDuration
      @type Number
    */
    transitionDuration: (0, _emberNewComputed['default'])(function () {
      var el = this.$();
      var rule = el.css('transition-duration');
      var match = rule.match(/([\d\.]+)([ms]*)/);

      if (match) {
        var value = parseFloat(match[1]);
        var unit = match[2];

        if (unit === 's') {
          value = value * 1000;
        }

        return value;
      }

      return 0;
    }).volatile(),

    /**
      Horizontal position of the item.
      @property x
      @type Number
    */
    x: (0, _emberNewComputed['default'])({
      get: function get() {
        if (this._x === undefined) {
          var marginLeft = parseFloat(this.$().css('margin-left'));
          this._x = this.element.scrollLeft + this.element.offsetLeft - marginLeft;
        }

        return this._x;
      },
      set: function set(_, value) {
        if (value !== this._x) {
          this._x = value;
          this._scheduleApplyPosition();
        }
      }
    }).volatile(),

    /**
      Vertical position of the item relative to its offset parent.
      @property y
      @type Number
    */
    y: (0, _emberNewComputed['default'])({
      get: function get() {
        if (this._y === undefined) {
          this._y = this.element.offsetTop;
        }

        return this._y;
      },
      set: function set(key, value) {
        if (value !== this._y) {
          this._y = value;
          this._scheduleApplyPosition();
        }
      }
    }).volatile(),

    /**
      Width of the item.
      @property height
      @type Number
    */
    width: (0, _emberNewComputed['default'])(function () {
      var el = this.$();
      var width = el.outerWidth(true);

      width += getBorderSpacing(el).horizontal;

      return width;
    }).volatile(),

    /**
      Height of the item including margins.
      @property height
      @type Number
    */
    height: (0, _emberNewComputed['default'])(function () {
      var el = this.$();
      var height = el.outerHeight();

      var marginBottom = parseFloat(el.css('margin-bottom'));
      height += marginBottom;

      height += getBorderSpacing(el).vertical;

      return height;
    }).volatile(),

    /**
      @method didInsertElement
    */
    didInsertElement: function didInsertElement() {
      this._super();
      // scheduled to prevent deprecation warning:
      // "never change properties on components, services or models during didInsertElement because it causes significant performance degradation"
      run.schedule("afterRender", this, "_tellGroup", "registerItem", this);
    },

    /**
      @method willDestroyElement
    */
    willDestroyElement: function willDestroyElement() {
      // scheduled to prevent deprecation warning:
      // "never change properties on components, services or models during didInsertElement because it causes significant performance degradation"
      run.schedule("afterRender", this, "_tellGroup", "deregisterItem", this);
    },

    /**
      @method mouseDown
    */
    mouseDown: function mouseDown(event) {
      if (event.which !== 1) {
        return;
      }
      if (event.ctrlKey) {
        return;
      }

      this._primeDrag(event);
    },

    /**
      @method touchStart
    */
    touchStart: function touchStart(event) {
      this._primeDrag(event);
    },

    /**
      @method freeze
    */
    freeze: function freeze() {
      var el = this.$();
      if (!el) {
        return;
      }

      el.css({ transition: 'none' });
      el.height(); // Force-apply styles
    },

    /**
      @method reset
    */
    reset: function reset() {
      var el = this.$();
      if (!el) {
        return;
      }

      delete this._y;
      delete this._x;

      el.css({ transform: '' });
      el.height(); // Force-apply styles
    },

    /**
      @method thaw
    */
    thaw: function thaw() {
      var el = this.$();
      if (!el) {
        return;
      }

      el.css({ transition: '' });
      el.height(); // Force-apply styles
    },

    /**
      @method _primeDrag
      @private
    */
    _primeDrag: function _primeDrag(event) {
      var _this = this;

      var handle = this.get('handle');

      if (handle && !$(event.target).closest(handle).length) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      var startDragListener = function startDragListener(event) {
        return _this._startDrag(event);
      };

      function cancelStartDragListener() {
        $(window).off('mousemove touchmove', startDragListener);
      }

      $(window).one('mousemove touchmove', startDragListener);
      $(window).one('click mouseup touchend', cancelStartDragListener);
    },

    /**
      @method _startDrag
      @private
    */
    _startDrag: function _startDrag(event) {
      var _this2 = this;

      if (this.get('isBusy')) {
        return;
      }

      var drag = this._makeDragHandler(event);

      var drop = function drop() {
        $(window).off('mousemove touchmove', drag).off('click mouseup touchend', drop);

        _this2._drop();
      };

      $(window).on('mousemove touchmove', drag).on('click mouseup touchend', drop);

      this._tellGroup('prepare');
      this.set('isDragging', true);
      this.sendAction('onDragStart', this.get('model'));
    },

    /**
      @method _makeDragHandler
      @param {Event} startEvent
      @return {Function}
      @private
    */
    _makeDragHandler: function _makeDragHandler(startEvent) {
      var _this3 = this;

      var groupDirection = this.get('group.direction');
      var dragOrigin = undefined;
      var elementOrigin = undefined;
      var scrollOrigin = undefined;
      var parentElement = $(this.element.parentNode);

      if (groupDirection === 'x') {
        dragOrigin = getX(startEvent);
        elementOrigin = this.get('x');
        scrollOrigin = parentElement.offset().left;

        return function (event) {
          var dx = getX(event) - dragOrigin;
          var scrollX = parentElement.offset().left;
          var x = elementOrigin + dx + (scrollOrigin - scrollX);

          _this3._drag(x);
        };
      }

      if (groupDirection === 'y') {
        dragOrigin = getY(startEvent);
        elementOrigin = this.get('y');
        scrollOrigin = parentElement.offset().top;

        return function (event) {
          var dy = getY(event) - dragOrigin;
          var scrollY = parentElement.offset().top;
          var y = elementOrigin + dy + (scrollOrigin - scrollY);

          _this3._drag(y);
        };
      }
    },

    /**
      @method _tellGroup
      @private
    */
    _tellGroup: function _tellGroup(method) {
      var group = this.get('group');

      if (group) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        group[method].apply(group, args);
      }
    },

    /**
      @method _scheduleApplyPosition
      @private
    */
    _scheduleApplyPosition: function _scheduleApplyPosition() {
      run.scheduleOnce('render', this, '_applyPosition');
    },

    /**
      @method _applyPosition
      @private
    */
    _applyPosition: function _applyPosition() {
      if (!this.element || !this.$()) {
        return;
      }

      var groupDirection = this.get('group.direction');

      if (groupDirection === 'x') {
        var x = this.get('x');
        var dx = x - this.element.offsetLeft + parseFloat(this.$().css('margin-left'));

        this.$().css({
          transform: 'translateX(' + dx + 'px)'
        });
      }
      if (groupDirection === 'y') {
        var y = this.get('y');
        var dy = y - this.element.offsetTop;

        this.$().css({
          transform: 'translateY(' + dy + 'px)'
        });
      }
    },

    /**
      @method _drag
      @private
    */
    _drag: function _drag(dimension) {
      var updateInterval = this.get('updateInterval');
      var groupDirection = this.get('group.direction');

      if (groupDirection === 'x') {
        this.set('x', dimension);
      }
      if (groupDirection === 'y') {
        this.set('y', dimension);
      }

      run.throttle(this, '_tellGroup', 'update', updateInterval);
    },

    /**
      @method _drop
      @private
    */
    _drop: function _drop() {
      if (!this.element || !this.$()) {
        return;
      }

      this._preventClick(this.element);

      this.set('isDragging', false);
      this.set('isDropping', true);

      this._tellGroup('update');

      this._waitForTransition().then(run.bind(this, '_complete'));
    },

    /**
      @method _preventClick
      @private
    */
    _preventClick: function _preventClick(element) {
      $(element).one('click', function (e) {
        e.stopImmediatePropagation();
      });
    },

    /**
      @method _waitForTransition
      @private
      @return Promise
    */
    _waitForTransition: function _waitForTransition() {
      var _this4 = this;

      return new Promise(function (resolve) {
        run.next(function () {
          var duration = 0;

          if (_this4.get('isAnimated')) {
            duration = _this4.get('transitionDuration');
          }

          run.later(_this4, resolve, duration);
        });
      });
    },

    /**
      @method _complete
      @private
    */
    _complete: function _complete() {
      this.sendAction('onDragStop', this.get('model'));
      this.set('isDropping', false);
      this.set('wasDropped', true);
      this._tellGroup('commit');
    }
  });

  /**
    Gets the y offset for a given event.
    Work for touch and mouse events.
    @method getY
    @return {Number}
    @private
  */
  function getY(event) {
    var originalEvent = event.originalEvent;
    var touches = originalEvent && originalEvent.changedTouches;
    var touch = touches && touches[0];

    if (touch) {
      return touch.screenY;
    } else {
      return event.pageY;
    }
  }

  /**
    Gets the x offset for a given event.
    @method getX
    @return {Number}
    @private
  */
  function getX(event) {
    var originalEvent = event.originalEvent;
    var touches = originalEvent && originalEvent.changedTouches;
    var touch = touches && touches[0];

    if (touch) {
      return touch.screenX;
    } else {
      return event.pageX;
    }
  }

  /**
    Gets a numeric border-spacing values for a given element.
  
    @method getBorderSpacing
    @param {Element} element
    @return {Object}
    @private
  */
  function getBorderSpacing(el) {
    el = $(el);

    var css = el.css('border-spacing'); // '0px 0px'

    var _css$split = css.split(' ');

    var _css$split2 = _slicedToArray(_css$split, 2);

    var horizontal = _css$split2[0];
    var vertical = _css$split2[1];

    return {
      horizontal: parseFloat(horizontal),
      vertical: parseFloat(vertical)
    };
  }
});
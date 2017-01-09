import Ember from 'ember';

var $ = Ember.$;
var run = Ember.run;
var computed = Ember.computed;

/**
 * @module Mixins
 */

/**
 * @class TableScrollMixin
 * @extends Ember.Mixin
 * @private
 */
export default Ember.Mixin.create({
  /**
   * @property scrollBuffer
   * @type {Number}
   * @default 500
   */
  scrollBuffer: 500,

  /**
   * @property scrollContainer
   * @type {String | Object}
   * @default window
   */
  scrollContainer: window,

  /**
   * @property touchMoveContainer
   * @type {String | Object}
   * @default document
   */
  touchMoveContainer: document,

  /**
   * @property _shouldSetupScroll
   * @type {Boolean}
   * @private
   */
  _shouldSetupScroll: computed.notEmpty('attrs.onScrolledToBottom'),

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    if (this.get('_shouldSetupScroll')) {
      run.scheduleOnce('afterRender', this, this._setupScrollEvents);
    }
  },

  destroy: function destroy() {
    this._super.apply(this, arguments);
    if (this.get('_shouldSetupScroll')) {
      this._teardownScrollEvents();
    }
  },

  _setupScrollEvents: function _setupScrollEvents() {
    $(this.get('touchMoveContainer')).on('touchmove.light-table', run.bind(this, this._scrollHandler, '_touchmoveTimer'));
    $(this.get('scrollContainer')).on('scroll.light-table', run.bind(this, this._scrollHandler, '_scrollTimer'));
  },

  _teardownScrollEvents: function _teardownScrollEvents() {
    var scrollContainer = this.get('scrollContainer');
    var touchMoveContainer = this.get('touchMoveContainer');

    if (scrollContainer) {
      $(scrollContainer).off('scroll.light-table');
    }

    if (touchMoveContainer) {
      $(touchMoveContainer).off('touchmove.light-table');
    }

    run.cancel(this.get('_touchmoveTimer'));
    run.cancel(this.get('_scrollTimer'));
  },

  _scrollHandler: function _scrollHandler(timer) {
    this.set(timer, run.throttle(this, this._onScroll, 100));
  },

  _onScroll: function _onScroll() {
    var _this = this;

    if (this.isScrolledToBottom()) {
      run(function () {
        return _this.send('onScrolledToBottom');
      });
    }
  },

  isScrolledToBottom: function isScrolledToBottom() {
    var element = this.get('element');
    var container = this.get('scrollContainer');
    var buffer = this.get('scrollBuffer');
    if (element) {
      return $(container).scrollTop() + $(container).innerHeight() + buffer >= $(container)[0].scrollHeight;
    }
  }
});
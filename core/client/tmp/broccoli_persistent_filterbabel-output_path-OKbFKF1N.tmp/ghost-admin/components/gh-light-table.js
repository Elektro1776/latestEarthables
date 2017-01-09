define('ghost-admin/components/gh-light-table', ['exports', 'jquery', 'ember-runloop', 'ember-light-table/components/light-table'], function (exports, _jquery, _emberRunloop, _emberLightTableComponentsLightTable) {
    exports['default'] = _emberLightTableComponentsLightTable['default'].extend({

        // HACK: infinite pagination was not triggering when scrolling very fast
        // as the throttle triggers before scrolling into the buffer area but
        // the scroll finishes before the throttle timeout. Adding a debounce that
        // does the same thing means that we are guaranteed a final trigger when
        // scrolling stops
        //
        // An issue has been opened upstream, this can be removed if it gets fixed
        // https://github.com/offirgolan/ember-light-table/issues/15

        _setupScrollEvents: function _setupScrollEvents() {
            (0, _jquery['default'])(this.get('touchMoveContainer')).on('touchmove.light-table', _emberRunloop['default'].bind(this, this._scrollHandler, '_touchmoveTimer'));
            (0, _jquery['default'])(this.get('scrollContainer')).on('scroll.light-table', _emberRunloop['default'].bind(this, this._scrollHandler, '_scrollTimer'));
            (0, _jquery['default'])(this.get('scrollContainer')).on('scroll.light-table', _emberRunloop['default'].bind(this, this._scrollHandler, '_scrollDebounce'));
        },

        _scrollHandler: function _scrollHandler(timer) {
            this.set(timer, _emberRunloop['default'].debounce(this, this._onScroll, 100));
            this.set(timer, _emberRunloop['default'].throttle(this, this._onScroll, 100));
        }
    });
});
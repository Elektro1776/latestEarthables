define('ghost-admin/mixins/ed-editor-scroll', ['exports', 'ember-metal/mixin', 'ember-runloop', 'ember-invoke-action'], function (exports, _emberMetalMixin, _emberRunloop, _emberInvokeAction) {
    exports['default'] = _emberMetalMixin['default'].create({
        /**
         * Determine if the cursor is at the end of the textarea
         */
        isCursorAtEnd: function isCursorAtEnd() {
            var selection = this.$().getSelection();
            var value = this.getValue();
            var linesAtEnd = 3;
            var match = undefined,
                stringAfterCursor = undefined;

            stringAfterCursor = value.substring(selection.end);
            match = stringAfterCursor.match(/\n/g);

            if (!match || match.length < linesAtEnd) {
                return true;
            }

            return false;
        },

        /**
         * Build an object that represents the scroll state
         */
        getScrollInfo: function getScrollInfo() {
            var scroller = this.get('element');
            var scrollInfo = {
                top: scroller.scrollTop,
                height: scroller.scrollHeight,
                clientHeight: scroller.clientHeight,
                diff: scroller.scrollHeight - scroller.clientHeight,
                padding: 50,
                isCursorAtEnd: this.isCursorAtEnd()
            };

            return scrollInfo;
        },

        /**
         * Calculate if we're within scrollInfo.padding of the end of the document, and scroll the rest of the way
         */
        adjustScrollPosition: function adjustScrollPosition() {
            // If we're receiving change events from the end of the document, i.e the user is typing-at-the-end, update the
            // scroll position to ensure both panels stay in view and in sync
            var scrollInfo = this.getScrollInfo();

            if (scrollInfo.isCursorAtEnd && scrollInfo.diff >= scrollInfo.top && scrollInfo.diff < scrollInfo.top + scrollInfo.padding) {
                scrollInfo.top += scrollInfo.padding;
                // Scroll the left pane
                this.$().scrollTop(scrollInfo.top);
            }
        },

        /**
         * Send the scrollInfo for scrollEvents to the view so that the preview pane can be synced
         */
        scrollHandler: function scrollHandler() {
            var _this = this;

            this.set('scrollThrottle', _emberRunloop['default'].throttle(this, function () {
                (0, _emberInvokeAction.invokeAction)(_this, 'updateScrollInfo', _this.getScrollInfo());
            }, 10));
        },

        /**
         * once the element is in the DOM bind to the events which control scroll behaviour
         */
        attachScrollHandlers: function attachScrollHandlers() {
            var $el = this.$();

            $el.on('keypress', _emberRunloop['default'].bind(this, this.adjustScrollPosition));

            $el.on('scroll', _emberRunloop['default'].bind(this, this.scrollHandler));
        },

        /**
         * once the element has been removed from the DOM unbind from the events which control scroll behaviour
         */
        detachScrollHandlers: function detachScrollHandlers() {
            this.$().off('keypress');
            this.$().off('scroll');
            _emberRunloop['default'].cancel(this.get('scrollThrottle'));
        },

        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);

            this.attachScrollHandlers();
        },

        willDestroyElement: function willDestroyElement() {
            this._super.apply(this, arguments);

            this.detachScrollHandlers();
        }
    });
});
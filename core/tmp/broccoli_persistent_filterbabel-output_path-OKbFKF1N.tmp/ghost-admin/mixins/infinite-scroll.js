define('ghost-admin/mixins/infinite-scroll', ['exports', 'ember-metal/mixin', 'ember-runloop'], function (exports, _emberMetalMixin, _emberRunloop) {
    exports['default'] = _emberMetalMixin['default'].create({
        isLoading: false,
        triggerPoint: 100,

        /**
         * Determines if we are past a scroll point where we need to fetch the next page
         */
        _checkScroll: function _checkScroll() {
            var element = this.get('element');
            var triggerPoint = this.get('triggerPoint');
            var isLoading = this.get('isLoading');

            // If we haven't passed our threshold or we are already fetching content, exit
            if (isLoading || element.scrollTop + element.clientHeight + triggerPoint <= element.scrollHeight) {
                return;
            }

            this.sendAction('fetch');
        },

        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);

            var el = this.get('element');

            el.onscroll = _emberRunloop['default'].bind(this, this._checkScroll);

            // run on load, on the offchance that the initial load
            // did not fill the view.
            this._checkScroll();
        },

        willDestroyElement: function willDestroyElement() {
            this._super.apply(this, arguments);

            // turn off the scroll handler
            this.get('element').onscroll = null;
        }
    });
});
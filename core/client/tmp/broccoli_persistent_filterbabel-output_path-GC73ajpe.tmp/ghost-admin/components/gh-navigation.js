define('ghost-admin/components/gh-navigation', ['exports', 'ember-component', 'ember-runloop'], function (exports, _emberComponent, _emberRunloop) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'section',
        classNames: 'gh-view',

        didInsertElement: function didInsertElement() {
            var navContainer = this.$('.js-gh-blognav');
            var navElements = '.gh-blognav-item:not(.gh-blognav-item:last-child)';
            // needed because jqueryui sortable doesn't trigger babel's autoscoping
            var _this = this;

            this._super.apply(this, arguments);

            navContainer.sortable({
                handle: '.gh-blognav-grab',
                items: navElements,

                start: function start(event, ui) {
                    (0, _emberRunloop['default'])(function () {
                        ui.item.data('start-index', ui.item.index());
                    });
                },

                update: function update(event, ui) {
                    (0, _emberRunloop['default'])(function () {
                        _this.sendAction('moveItem', ui.item.data('start-index'), ui.item.index());
                    });
                }
            });
        },

        willDestroyElement: function willDestroyElement() {
            this._super.apply(this, arguments);
            this.$('.ui-sortable').sortable('destroy');
        }
    });
});
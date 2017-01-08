define('ghost-admin/components/gh-activating-list-item', ['exports', 'ember-component', 'ember-runloop'], function (exports, _emberComponent, _emberRunloop) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'li',
        classNameBindings: ['active'],
        active: false,
        linkClasses: null,

        click: function click() {
            this.$('a').blur();
        },

        actions: {
            setActive: function setActive(value) {
                (0, _emberRunloop.schedule)('afterRender', this, function () {
                    this.set('active', value);
                });
            }
        }
    });
});
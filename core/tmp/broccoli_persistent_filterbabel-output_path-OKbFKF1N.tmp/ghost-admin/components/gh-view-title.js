define('ghost-admin/components/gh-view-title', ['exports', 'ember-component'], function (exports, _emberComponent) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'h2',
        classNames: ['view-title'],

        actions: {
            openMobileMenu: function openMobileMenu() {
                this.sendAction('openMobileMenu');
            }
        }
    });
});
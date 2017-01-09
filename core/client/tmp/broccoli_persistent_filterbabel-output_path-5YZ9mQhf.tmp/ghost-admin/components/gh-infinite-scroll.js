define('ghost-admin/components/gh-infinite-scroll', ['exports', 'ember-component', 'ghost-admin/mixins/infinite-scroll'], function (exports, _emberComponent, _ghostAdminMixinsInfiniteScroll) {
    exports['default'] = _emberComponent['default'].extend(_ghostAdminMixinsInfiniteScroll['default'], {
        actions: {
            checkScroll: function checkScroll() {
                this._checkScroll();
            }
        }
    });
});
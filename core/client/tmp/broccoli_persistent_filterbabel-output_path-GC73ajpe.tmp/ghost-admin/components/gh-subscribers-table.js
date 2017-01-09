define('ghost-admin/components/gh-subscribers-table', ['exports', 'ember-component'], function (exports, _emberComponent) {
    exports['default'] = _emberComponent['default'].extend({
        classNames: ['subscribers-table'],

        table: null,

        actions: {
            onScrolledToBottom: function onScrolledToBottom() {
                var loadNextPage = this.get('loadNextPage');

                if (!this.get('isLoading')) {
                    loadNextPage();
                }
            }
        }
    });
});
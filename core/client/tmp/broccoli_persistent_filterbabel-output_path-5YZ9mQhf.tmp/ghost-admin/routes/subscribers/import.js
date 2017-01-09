define('ghost-admin/routes/subscribers/import', ['exports', 'ember-route'], function (exports, _emberRoute) {
    exports['default'] = _emberRoute['default'].extend({
        actions: {
            cancel: function cancel() {
                this.transitionTo('subscribers');
            }
        }
    });
});
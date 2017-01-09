define('ghost-admin/routes/settings/tags/index', ['exports', 'ember-service/inject', 'ghost-admin/routes/authenticated'], function (exports, _emberServiceInject, _ghostAdminRoutesAuthenticated) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend({
        mediaQueries: (0, _emberServiceInject['default'])(),

        beforeModel: function beforeModel() {
            var firstTag = this.modelFor('settings.tags').get('firstObject');

            this._super.apply(this, arguments);

            if (firstTag && !this.get('mediaQueries.maxWidth600')) {
                this.transitionTo('settings.tags.tag', firstTag);
            }
        }
    });
});
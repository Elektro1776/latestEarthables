define('ghost-admin/adapters/base', ['exports', 'ember-service/inject', 'ember-data/adapters/rest', 'ghost-admin/utils/ghost-paths', 'ember-simple-auth/mixins/data-adapter-mixin', 'ghost-admin/config/environment'], function (exports, _emberServiceInject, _emberDataAdaptersRest, _ghostAdminUtilsGhostPaths, _emberSimpleAuthMixinsDataAdapterMixin, _ghostAdminConfigEnvironment) {
    exports['default'] = _emberDataAdaptersRest['default'].extend(_emberSimpleAuthMixinsDataAdapterMixin['default'], {
        authorizer: 'authorizer:oauth2',

        host: window.location.origin,
        namespace: (0, _ghostAdminUtilsGhostPaths['default'])().apiRoot.slice(1),

        session: (0, _emberServiceInject['default'])(),

        headers: {
            'X-Ghost-Version': _ghostAdminConfigEnvironment['default'].APP.version
        },

        shouldBackgroundReloadRecord: function shouldBackgroundReloadRecord() {
            return false;
        },

        query: function query(store, type, _query) {
            var id = undefined;

            if (_query.id) {
                id = _query.id;
                delete _query.id;
            }

            return this.ajax(this.buildURL(type.modelName, id), 'GET', { data: _query });
        },

        buildURL: function buildURL() {
            // Ensure trailing slashes
            var url = this._super.apply(this, arguments);

            if (url.slice(-1) !== '/') {
                url += '/';
            }

            return url;
        },

        handleResponse: function handleResponse(status) {
            if (status === 401) {
                if (this.get('session.isAuthenticated')) {
                    this.get('session').invalidate();
                }
            }

            return this._super.apply(this, arguments);
        }
    });
});
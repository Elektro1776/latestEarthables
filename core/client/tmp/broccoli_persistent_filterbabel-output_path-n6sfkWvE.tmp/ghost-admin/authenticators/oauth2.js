define('ghost-admin/authenticators/oauth2', ['exports', 'ember-computed', 'ember-service/inject', 'ember-simple-auth/authenticators/oauth2-password-grant', 'ember-runloop'], function (exports, _emberComputed, _emberServiceInject, _emberSimpleAuthAuthenticatorsOauth2PasswordGrant, _emberRunloop) {
    exports['default'] = _emberSimpleAuthAuthenticatorsOauth2PasswordGrant['default'].extend({
        session: (0, _emberServiceInject['default'])(),
        config: (0, _emberServiceInject['default'])(),
        ghostPaths: (0, _emberServiceInject['default'])(),

        init: function init() {
            var _this = this;

            this._super.apply(this, arguments);

            var handler = _emberRunloop['default'].bind(this, function () {
                _this.onOnline();
            });
            window.addEventListener('online', handler);
        },

        serverTokenEndpoint: (0, _emberComputed['default'])('ghostPaths.apiRoot', function () {
            return this.get('ghostPaths.apiRoot') + '/authentication/token';
        }),

        serverTokenRevocationEndpoint: (0, _emberComputed['default'])('ghostPaths.apiRoot', function () {
            return this.get('ghostPaths.apiRoot') + '/authentication/revoke';
        }),

        makeRequest: function makeRequest(url, data) {
            /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
            data.client_id = this.get('config.clientId');
            data.client_secret = this.get('config.clientSecret');
            /* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */
            return this._super(url, data);
        },

        /**
         * Invoked when "navigator.online" event is trigerred.
         * This is a helper function to handle intermittent internet connectivity. Token is refreshed
         * when browser status becomes "online".
         */
        onOnline: function onOnline() {
            if (this.get('session.isAuthenticated')) {
                var autoRefresh = this.get('refreshAccessTokens');
                if (autoRefresh) {
                    var expiresIn = this.get('session.data.authenticated.expires_in');
                    var token = this.get('session.data.authenticated.refresh_token');
                    return this._refreshAccessToken(expiresIn, token);
                }
            }
        }
    });
});
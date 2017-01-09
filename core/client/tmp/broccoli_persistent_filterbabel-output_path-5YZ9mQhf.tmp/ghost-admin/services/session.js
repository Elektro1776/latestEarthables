define('ghost-admin/services/session', ['exports', 'ember-computed', 'ember-service/inject', 'ember-simple-auth/services/session'], function (exports, _emberComputed, _emberServiceInject, _emberSimpleAuthServicesSession) {
    exports['default'] = _emberSimpleAuthServicesSession['default'].extend({
        store: (0, _emberServiceInject['default'])(),
        feature: (0, _emberServiceInject['default'])(),

        user: (0, _emberComputed['default'])(function () {
            return this.get('store').findRecord('user', 'me');
        }),

        authenticate: function authenticate() {
            var _this = this;

            return this._super.apply(this, arguments).then(function (authResult) {
                return _this.get('feature').fetch().then(function () {
                    return authResult;
                });
            });
        }
    });
});
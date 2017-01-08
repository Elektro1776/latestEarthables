define('ghost-admin/routes/authenticated', ['exports', 'ember-route', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _emberRoute, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _emberRoute['default'].extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default']);
});
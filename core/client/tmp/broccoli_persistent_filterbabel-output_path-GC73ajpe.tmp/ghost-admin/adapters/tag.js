define('ghost-admin/adapters/tag', ['exports', 'ghost-admin/adapters/application', 'ghost-admin/mixins/slug-url'], function (exports, _ghostAdminAdaptersApplication, _ghostAdminMixinsSlugUrl) {
  exports['default'] = _ghostAdminAdaptersApplication['default'].extend(_ghostAdminMixinsSlugUrl['default']);
});
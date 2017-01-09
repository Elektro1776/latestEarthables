define('ghost-admin/adapters/application', ['exports', 'ghost-admin/adapters/embedded-relation-adapter'], function (exports, _ghostAdminAdaptersEmbeddedRelationAdapter) {
    exports['default'] = _ghostAdminAdaptersEmbeddedRelationAdapter['default'].extend({

        shouldBackgroundReloadRecord: function shouldBackgroundReloadRecord() {
            return false;
        }

    });
});
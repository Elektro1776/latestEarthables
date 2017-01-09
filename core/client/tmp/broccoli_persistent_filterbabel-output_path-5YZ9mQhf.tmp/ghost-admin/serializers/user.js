define('ghost-admin/serializers/user', ['exports', 'ember', 'ghost-admin/serializers/application', 'ember-data/serializers/embedded-records-mixin'], function (exports, _ember, _ghostAdminSerializersApplication, _emberDataSerializersEmbeddedRecordsMixin) {
    var pluralize = _ember['default'].String.pluralize;
    exports['default'] = _ghostAdminSerializersApplication['default'].extend(_emberDataSerializersEmbeddedRecordsMixin['default'], {
        attrs: {
            roles: { embedded: 'always' },
            lastLoginUTC: { key: 'last_login' },
            createdAtUTC: { key: 'created_at' },
            updatedAtUTC: { key: 'updated_at' }
        },

        extractSingle: function extractSingle(store, primaryType, payload) {
            var root = this.keyForAttribute(primaryType.modelName);
            var pluralizedRoot = pluralize(primaryType.modelName);

            payload[root] = payload[pluralizedRoot][0];
            delete payload[pluralizedRoot];

            return this._super.apply(this, arguments);
        },

        normalizeSingleResponse: function normalizeSingleResponse(store, primaryModelClass, payload) {
            var root = this.keyForAttribute(primaryModelClass.modelName);
            var pluralizedRoot = pluralize(primaryModelClass.modelName);

            payload[root] = payload[pluralizedRoot][0];
            delete payload[pluralizedRoot];

            return this._super.apply(this, arguments);
        }
    });
});
define('ghost-admin/serializers/tag', ['exports', 'ember', 'ghost-admin/serializers/application'], function (exports, _ember, _ghostAdminSerializersApplication) {
    var pluralize = _ember['default'].String.pluralize;
    exports['default'] = _ghostAdminSerializersApplication['default'].extend({
        attrs: {
            createdAtUTC: { key: 'created_at' },
            updatedAtUTC: { key: 'updated_at' }
        },

        serializeIntoHash: function serializeIntoHash(hash, type, record, options) {
            options = options || {};
            options.includeId = true;

            var root = pluralize(type.modelName);
            var data = this.serialize(record, options);

            // Properties that exist on the model but we don't want sent in the payload

            delete data.uuid;
            delete data.count;

            hash[root] = [data];
        }
    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
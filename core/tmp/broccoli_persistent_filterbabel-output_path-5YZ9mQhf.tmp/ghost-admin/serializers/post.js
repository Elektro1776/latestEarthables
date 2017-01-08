define('ghost-admin/serializers/post', ['exports', 'ember', 'ghost-admin/serializers/application', 'ember-data/serializers/embedded-records-mixin'], function (exports, _ember, _ghostAdminSerializersApplication, _emberDataSerializersEmbeddedRecordsMixin) {
    var pluralize = _ember['default'].String.pluralize;
    exports['default'] = _ghostAdminSerializersApplication['default'].extend(_emberDataSerializersEmbeddedRecordsMixin['default'], {
        // settings for the EmbeddedRecordsMixin.
        attrs: {
            tags: { embedded: 'always' },
            publishedAtUTC: { key: 'published_at' },
            createdAtUTC: { key: 'created_at' },
            updatedAtUTC: { key: 'updated_at' }
        },

        normalize: function normalize(model, hash, prop) {
            // this is to enable us to still access the raw authorId
            // without requiring an extra get request (since it is an
            // async relationship).
            if ((prop === 'post' || prop === 'posts') && hash.author !== undefined) {
                hash.author_id = hash.author;
            }

            return this._super.apply(this, arguments);
        },

        normalizeSingleResponse: function normalizeSingleResponse(store, primaryModelClass, payload) {
            var root = this.keyForAttribute(primaryModelClass.modelName);
            var pluralizedRoot = pluralize(primaryModelClass.modelName);

            payload[root] = payload[pluralizedRoot][0];
            delete payload[pluralizedRoot];

            return this._super.apply(this, arguments);
        },

        normalizeArrayResponse: function normalizeArrayResponse() {
            return this._super.apply(this, arguments);
        },

        serializeIntoHash: function serializeIntoHash(hash, type, record, options) {
            options = options || {};
            options.includeId = true;

            // We have a plural root in the API
            var root = pluralize(type.modelName);
            var data = this.serialize(record, options);

            // Properties that exist on the model but we don't want sent in the payload

            delete data.uuid;
            delete data.html;
            // Inserted locally as a convenience.
            delete data.author_id;
            // Read-only virtual property.
            delete data.url;

            hash[root] = [data];
        }
    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
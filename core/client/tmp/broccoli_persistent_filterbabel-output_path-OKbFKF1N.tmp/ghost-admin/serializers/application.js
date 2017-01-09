define('ghost-admin/serializers/application', ['exports', 'ember', 'ember-string', 'ember-data/serializers/rest'], function (exports, _ember, _emberString, _emberDataSerializersRest) {
    var pluralize = _ember['default'].String.pluralize;
    exports['default'] = _emberDataSerializersRest['default'].extend({
        serializeIntoHash: function serializeIntoHash(hash, type, record, options) {
            // Our API expects an id on the posted object
            options = options || {};
            options.includeId = true;

            // We have a plural root in the API
            var root = pluralize(type.modelName);
            var data = this.serialize(record, options);

            // Don't ever pass uuid's
            delete data.uuid;

            hash[root] = [data];
        },

        keyForAttribute: function keyForAttribute(attr) {
            return (0, _emberString.decamelize)(attr);
        }
    });
});
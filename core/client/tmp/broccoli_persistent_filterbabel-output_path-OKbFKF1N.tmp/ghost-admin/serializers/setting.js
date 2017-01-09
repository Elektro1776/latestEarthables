define('ghost-admin/serializers/setting', ['exports', 'ember', 'ghost-admin/serializers/application'], function (exports, _ember, _ghostAdminSerializersApplication) {
    var pluralize = _ember['default'].String.pluralize;
    exports['default'] = _ghostAdminSerializersApplication['default'].extend({
        serializeIntoHash: function serializeIntoHash(hash, type, record, options) {
            // Settings API does not want ids
            options = options || {};
            options.includeId = false;

            var root = pluralize(type.modelName);
            var data = this.serialize(record, options);
            var payload = [];

            delete data.id;

            Object.keys(data).forEach(function (k) {
                payload.push({ key: k, value: data[k] });
            });

            hash[root] = payload;
        },

        normalizeArrayResponse: function normalizeArrayResponse(store, primaryModelClass, _payload, id, requestType) {
            var payload = { settings: [this._extractObjectFromArrayPayload(_payload)] };
            return this._super(store, primaryModelClass, payload, id, requestType);
        },

        normalizeSingleResponse: function normalizeSingleResponse(store, primaryModelClass, _payload, id, requestType) {
            var payload = { setting: this._extractObjectFromArrayPayload(_payload) };
            return this._super(store, primaryModelClass, payload, id, requestType);
        },

        keyForAttribute: function keyForAttribute(attr) {
            return attr;
        },

        _extractObjectFromArrayPayload: function _extractObjectFromArrayPayload(_payload) {
            var payload = { id: '0' };

            _payload.settings.forEach(function (setting) {
                payload[setting.key] = setting.value;
            });

            return payload;
        }
    });
});
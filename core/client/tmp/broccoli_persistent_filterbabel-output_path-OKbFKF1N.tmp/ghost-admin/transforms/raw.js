define('ghost-admin/transforms/raw', ['exports', 'ember-data/transform'], function (exports, _emberDataTransform) {
    exports['default'] = _emberDataTransform['default'].extend({
        deserialize: function deserialize(serialized) {
            return serialized;
        },

        serialize: function serialize(deserialized) {
            return deserialized;
        }
    });
});
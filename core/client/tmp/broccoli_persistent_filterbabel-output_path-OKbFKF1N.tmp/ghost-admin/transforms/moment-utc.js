define('ghost-admin/transforms/moment-utc', ['exports', 'ember-data/transform'], function (exports, _emberDataTransform) {
    exports['default'] = _emberDataTransform['default'].extend({
        deserialize: function deserialize(serialized) {
            if (serialized) {
                return moment.utc(serialized);
            }
            return serialized;
        },

        serialize: function serialize(deserialized) {
            if (deserialized) {
                try {
                    return deserialized.toJSON();
                } catch (e) {
                    return deserialized;
                }
            }
            return deserialized;
        }
    });
});
/* global moment */
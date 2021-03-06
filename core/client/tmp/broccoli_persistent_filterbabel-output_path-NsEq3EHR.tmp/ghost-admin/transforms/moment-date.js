define('ghost-admin/transforms/moment-date', ['exports', 'ember-data/transform'], function (exports, _emberDataTransform) {
    exports['default'] = _emberDataTransform['default'].extend({
        deserialize: function deserialize(serialized) {
            if (serialized) {
                return moment(serialized);
            }
            return serialized;
        },

        serialize: function serialize(deserialized) {
            if (deserialized) {
                return moment(deserialized).toDate();
            }
            return deserialized;
        }
    });
});
/* global moment */
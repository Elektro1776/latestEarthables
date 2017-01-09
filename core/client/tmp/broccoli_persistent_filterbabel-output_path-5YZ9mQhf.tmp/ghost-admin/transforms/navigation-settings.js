define('ghost-admin/transforms/navigation-settings', ['exports', 'ember-array/utils', 'ember-data/transform', 'ghost-admin/models/navigation-item'], function (exports, _emberArrayUtils, _emberDataTransform, _ghostAdminModelsNavigationItem) {
    exports['default'] = _emberDataTransform['default'].extend({
        deserialize: function deserialize(serialized) {
            var navItems = undefined,
                settingsArray = undefined;

            try {
                settingsArray = JSON.parse(serialized) || [];
            } catch (e) {
                settingsArray = [];
            }

            navItems = settingsArray.map(function (itemDetails) {
                return _ghostAdminModelsNavigationItem['default'].create(itemDetails);
            });

            return (0, _emberArrayUtils.A)(navItems);
        },

        serialize: function serialize(deserialized) {
            var settingsArray = undefined;

            if ((0, _emberArrayUtils.isEmberArray)(deserialized)) {
                settingsArray = deserialized.map(function (item) {
                    var label = item.get('label').trim();
                    var url = item.get('url').trim();

                    return { label: label, url: url };
                }).compact();
            } else {
                settingsArray = [];
            }

            return JSON.stringify(settingsArray);
        }
    });
});
define('ghost-admin/transforms/slack-settings', ['exports', 'ember-array/utils', 'ember-data/transform', 'ghost-admin/models/slack-integration'], function (exports, _emberArrayUtils, _emberDataTransform, _ghostAdminModelsSlackIntegration) {
    exports['default'] = _emberDataTransform['default'].extend({
        deserialize: function deserialize(serialized) {
            var slackObj = undefined,
                settingsArray = undefined;
            try {
                settingsArray = JSON.parse(serialized) || [];
            } catch (e) {
                settingsArray = [];
            }

            slackObj = settingsArray.map(function (itemDetails) {
                return _ghostAdminModelsSlackIntegration['default'].create(itemDetails);
            });
            return (0, _emberArrayUtils.A)(slackObj);
        },

        serialize: function serialize(deserialized) {
            var settingsArray = undefined;
            if ((0, _emberArrayUtils.isEmberArray)(deserialized)) {
                settingsArray = deserialized.map(function (item) {
                    var url = (item.get('url') || '').trim();

                    return { url: url };
                }).compact();
            } else {
                settingsArray = [];
            }
            return JSON.stringify(settingsArray);
        }
    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
define('ghost-admin/models/slack-integration', ['exports', 'ember-computed', 'ember-utils', 'ember-object', 'ghost-admin/mixins/validation-engine'], function (exports, _emberComputed, _emberUtils, _emberObject, _ghostAdminMixinsValidationEngine) {
    exports['default'] = _emberObject['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        // values entered here will act as defaults
        url: '',

        validationType: 'slackIntegration',

        isActive: (0, _emberComputed['default'])('url', function () {
            var url = this.get('url');
            return !(0, _emberUtils.isBlank)(url);
        })
    });
});
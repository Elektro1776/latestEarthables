define('ghost-admin/models/navigation-item', ['exports', 'ember-computed', 'ember-utils', 'ember-object', 'ghost-admin/mixins/validation-engine'], function (exports, _emberComputed, _emberUtils, _emberObject, _ghostAdminMixinsValidationEngine) {
    exports['default'] = _emberObject['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        label: '',
        url: '',
        isNew: false,

        validationType: 'navItem',

        isComplete: (0, _emberComputed['default'])('label', 'url', function () {
            var _getProperties = this.getProperties('label', 'url');

            var label = _getProperties.label;
            var url = _getProperties.url;

            return !(0, _emberUtils.isBlank)(label) && !(0, _emberUtils.isBlank)(url);
        }),

        isBlank: (0, _emberComputed['default'])('label', 'url', function () {
            var _getProperties2 = this.getProperties('label', 'url');

            var label = _getProperties2.label;
            var url = _getProperties2.url;

            return (0, _emberUtils.isBlank)(label) && (0, _emberUtils.isBlank)(url);
        })
    });
});
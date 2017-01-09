define('ghost-admin/components/gh-input', ['exports', 'ember-one-way-controls/components/one-way-input', 'ghost-admin/mixins/text-input'], function (exports, _emberOneWayControlsComponentsOneWayInput, _ghostAdminMixinsTextInput) {
    exports['default'] = _emberOneWayControlsComponentsOneWayInput['default'].extend(_ghostAdminMixinsTextInput['default'], {
        classNames: 'gh-input'
    });
});
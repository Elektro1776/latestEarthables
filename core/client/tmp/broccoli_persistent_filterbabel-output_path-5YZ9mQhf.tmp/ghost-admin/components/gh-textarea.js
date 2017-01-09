define('ghost-admin/components/gh-textarea', ['exports', 'ember-one-way-controls/components/one-way-textarea', 'ghost-admin/mixins/text-input'], function (exports, _emberOneWayControlsComponentsOneWayTextarea, _ghostAdminMixinsTextInput) {
    exports['default'] = _emberOneWayControlsComponentsOneWayTextarea['default'].extend(_ghostAdminMixinsTextInput['default'], {
        classNames: 'gh-input'
    });
});
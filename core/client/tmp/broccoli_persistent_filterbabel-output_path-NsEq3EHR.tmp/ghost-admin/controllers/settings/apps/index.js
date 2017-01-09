define('ghost-admin/controllers/settings/apps/index', ['exports', 'ember-controller', 'ember-controller/inject', 'ember-computed'], function (exports, _emberController, _emberControllerInject, _emberComputed) {
    exports['default'] = _emberController['default'].extend({
        appsController: (0, _emberControllerInject['default'])('settings.apps'),

        slack: (0, _emberComputed.alias)('appsController.model.slack.firstObject')
    });
});
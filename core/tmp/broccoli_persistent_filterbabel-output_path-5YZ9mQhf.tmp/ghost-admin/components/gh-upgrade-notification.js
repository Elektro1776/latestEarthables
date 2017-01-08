define('ghost-admin/components/gh-upgrade-notification', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject'], function (exports, _emberComponent, _emberComputed, _emberServiceInject) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'section',

        classNames: ['gh-upgrade-notification'],

        upgradeNotification: (0, _emberServiceInject['default'])('upgrade-notification'),

        message: (0, _emberComputed.alias)('upgradeNotification.content')
    });
});
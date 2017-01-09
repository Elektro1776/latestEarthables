define('ghost-admin/components/gh-notifications', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject'], function (exports, _emberComponent, _emberComputed, _emberServiceInject) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'aside',
        classNames: 'gh-notifications',

        notifications: (0, _emberServiceInject['default'])(),

        messages: (0, _emberComputed.alias)('notifications.notifications')
    });
});
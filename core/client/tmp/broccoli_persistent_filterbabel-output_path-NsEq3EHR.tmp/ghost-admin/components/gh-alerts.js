define('ghost-admin/components/gh-alerts', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject', 'ember-metal/observer'], function (exports, _emberComponent, _emberComputed, _emberServiceInject, _emberMetalObserver) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'aside',
        classNames: 'gh-alerts',

        notifications: (0, _emberServiceInject['default'])(),

        messages: (0, _emberComputed.alias)('notifications.alerts'),

        messageCountObserver: (0, _emberMetalObserver['default'])('messages.[]', function () {
            this.sendAction('notify', this.get('messages').length);
        })
    });
});
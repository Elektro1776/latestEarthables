define('ghost-admin/components/gh-alert', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject'], function (exports, _emberComponent, _emberComputed, _emberServiceInject) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'article',
        classNames: ['gh-alert'],
        classNameBindings: ['typeClass'],

        notifications: (0, _emberServiceInject['default'])(),

        typeClass: (0, _emberComputed['default'])('message.type', function () {
            var type = this.get('message.type');
            var classes = '';
            var typeMapping = undefined;

            typeMapping = {
                success: 'green',
                error: 'red',
                warn: 'yellow',
                info: 'blue'
            };

            if (typeMapping[type] !== undefined) {
                classes += 'gh-alert-' + typeMapping[type];
            }

            return classes;
        }),

        actions: {
            closeNotification: function closeNotification() {
                this.get('notifications').closeNotification(this.get('message'));
            }
        }
    });
});
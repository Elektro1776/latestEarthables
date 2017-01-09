define('ghost-admin/services/event-bus', ['exports', 'ember-service', 'ember-evented'], function (exports, _emberService, _emberEvented) {
    exports['default'] = _emberService['default'].extend(_emberEvented['default'], {
        publish: function publish() {
            return this.trigger.apply(this, arguments);
        },
        subscribe: function subscribe() {
            return this.on.apply(this, arguments);
        },
        unsubscribe: function unsubscribe() {
            return this.off.apply(this, arguments);
        }
    });
});
define('ghost-admin/tests/unit/serializers/notification-test', ['exports', 'chai', 'ember-mocha', 'ember-runloop', 'pretender'], function (exports, _chai, _emberMocha, _emberRunloop, _pretender) {

    (0, _emberMocha.describeModel)('notification', 'Unit: Serializer: notification', {
        // Specify the other units that are required for this test.
        needs: ['serializer:notification']
    }, function () {
        var server = undefined;

        beforeEach(function () {
            server = new _pretender['default']();
        });

        afterEach(function () {
            server.shutdown();
        });

        (0, _emberMocha.it)('converts location->key when deserializing', function () {
            server.get('/notifications', function () {
                var response = {
                    notifications: [{
                        id: 1,
                        dismissible: false,
                        status: 'alert',
                        type: 'info',
                        location: 'test.foo',
                        message: 'This is a test'
                    }]
                };

                return [200, { 'Content-Type': 'application/json' }, JSON.stringify(response)];
            });

            return this.store().findAll('notification').then(function (notifications) {
                (0, _chai.expect)(notifications.get('length')).to.equal(1);
                (0, _chai.expect)(notifications.get('firstObject.key')).to.equal('test.foo');
            });
        });
    });
});
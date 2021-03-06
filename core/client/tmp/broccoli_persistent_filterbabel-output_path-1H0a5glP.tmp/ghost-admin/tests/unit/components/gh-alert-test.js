define('ghost-admin/tests/unit/components/gh-alert-test', ['exports', 'chai', 'ember-mocha', 'sinon'], function (exports, _chai, _emberMocha, _sinon) {

    (0, _emberMocha.describeComponent)('gh-alert', 'Unit: Component: gh-alert', {
        unit: true
        // specify the other units that are required for this test
        // needs: ['component:foo', 'helper:bar']
    }, function () {
        (0, _emberMocha.it)('closes notification through notifications service', function () {
            var component = this.subject();
            var notifications = {};
            var notification = { message: 'Test close', type: 'success' };

            notifications.closeNotification = _sinon['default'].spy();
            component.set('notifications', notifications);
            component.set('message', notification);

            this.$().find('button').click();

            (0, _chai.expect)(notifications.closeNotification.calledWith(notification)).to.be['true'];
        });
    });
});
/* jshint expr:true */
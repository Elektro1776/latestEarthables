define('ghost-admin/tests/unit/services/event-bus-test', ['exports', 'chai', 'ember-mocha', 'sinon'], function (exports, _chai, _emberMocha, _sinon) {

    (0, _emberMocha.describeModule)('service:event-bus', 'Unit: Service: event-bus', {}, function () {
        (0, _emberMocha.it)('works', function () {
            var service = this.subject();
            var eventHandler = _sinon['default'].spy();

            service.subscribe('test-event', eventHandler);

            service.publish('test-event', 'test');

            service.unsubscribe('test-event', eventHandler);

            service.publish('test-event', 'test two');

            (0, _chai.expect)(eventHandler.calledOnce, 'event handler only triggered once').to.be['true'];

            (0, _chai.expect)(eventHandler.calledWith('test'), 'event handler was passed correct arguments').to.be['true'];
        });
    });
});
/* jshint expr:true */
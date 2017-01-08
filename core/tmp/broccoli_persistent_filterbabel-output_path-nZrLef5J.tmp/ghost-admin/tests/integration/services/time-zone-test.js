define('ghost-admin/tests/integration/services/time-zone-test', ['exports', 'chai', 'ember-mocha', 'pretender'], function (exports, _chai, _emberMocha, _pretender) {

    function settingsStub(server) {
        var settings = [{
            id: '1',
            type: 'blog',
            key: 'activeTimezone',
            value: 'Africa/Cairo'
        }];

        server.get('/ghost/api/v0.1/settings/', function () {
            return [200, { 'Content-Type': 'application/json' }, JSON.stringify({ settings: settings })];
        });
    }

    (0, _emberMocha.describeModule)('service:time-zone', 'Integration: Service: time-zone', {
        integration: true
    }, function () {
        var server = undefined;

        beforeEach(function () {
            server = new _pretender['default']();
        });

        afterEach(function () {
            server.shutdown();
        });

        (0, _emberMocha.it)('should return the blogs timezone', function (done) {
            var service = this.subject();

            settingsStub(server);

            service.get('blogTimezone').then(function (blogTimezone) {
                (0, _chai.expect)(blogTimezone).to.equal('Africa/Cairo');
                done();
            });
        });
    });
});
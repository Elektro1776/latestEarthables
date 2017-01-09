define('ghost-admin/tests/integration/services/feature-test', ['exports', 'ember-mocha', 'pretender', 'ember-test-helpers/wait', 'ghost-admin/services/feature', 'ember', 'ember-runloop', 'ember-platform', 'rsvp', 'ghost-admin/tests/helpers/adapter-error'], function (exports, _emberMocha, _pretender, _emberTestHelpersWait, _ghostAdminServicesFeature, _ember, _emberRunloop, _emberPlatform, _rsvp, _ghostAdminTestsHelpersAdapterError) {
    var EmberError = _ember['default'].Error;

    function stubSettings(server, labs) {
        var validSave = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
        var validSettings = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

        var settings = [{
            id: '1',
            type: 'blog',
            key: 'labs',
            value: JSON.stringify(labs)
        }];

        if (validSettings) {
            settings.push({
                id: '2',
                type: 'blog',
                key: 'postsPerPage',
                value: 1
            });
        }

        server.get('/ghost/api/v0.1/settings/', function () {
            return [200, { 'Content-Type': 'application/json' }, JSON.stringify({ settings: settings })];
        });

        server.put('/ghost/api/v0.1/settings/', function (request) {
            var statusCode = validSave ? 200 : 400;
            var response = validSave ? request.requestBody : JSON.stringify({
                errors: [{
                    message: 'Test Error'
                }]
            });

            return [statusCode, { 'Content-Type': 'application/json' }, response];
        });
    }

    function addTestFlag() {
        _ghostAdminServicesFeature['default'].reopen({
            testFlag: (0, _ghostAdminServicesFeature.feature)('testFlag')
        });
    }

    (0, _emberMocha.describeModule)('service:feature', 'Integration: Service: feature', {
        integration: true
    }, function () {
        var server = undefined;

        beforeEach(function () {
            server = new _pretender['default']();
        });

        afterEach(function () {
            server.shutdown();
        });

        (0, _emberMocha.it)('loads labs settings correctly', function (done) {
            stubSettings(server, { testFlag: true });
            addTestFlag();

            var service = this.subject();

            service.fetch().then(function () {
                expect(service.get('testFlag')).to.be['true'];
                done();
            });
        });

        (0, _emberMocha.it)('returns false for set flag with config false and labs false', function (done) {
            stubSettings(server, { testFlag: false });
            addTestFlag();

            var service = this.subject();
            service.get('config').set('testFlag', false);

            service.fetch().then(function () {
                expect(service.get('labs.testFlag')).to.be['false'];
                expect(service.get('testFlag')).to.be['false'];
                done();
            });
        });

        (0, _emberMocha.it)('returns true for set flag with config true and labs false', function (done) {
            stubSettings(server, { testFlag: false });
            addTestFlag();

            var service = this.subject();
            service.get('config').set('testFlag', true);

            service.fetch().then(function () {
                expect(service.get('labs.testFlag')).to.be['false'];
                expect(service.get('testFlag')).to.be['true'];
                done();
            });
        });

        (0, _emberMocha.it)('returns true for set flag with config false and labs true', function (done) {
            stubSettings(server, { testFlag: true });
            addTestFlag();

            var service = this.subject();
            service.get('config').set('testFlag', false);

            service.fetch().then(function () {
                expect(service.get('labs.testFlag')).to.be['true'];
                expect(service.get('testFlag')).to.be['true'];
                done();
            });
        });

        (0, _emberMocha.it)('returns true for set flag with config true and labs true', function (done) {
            stubSettings(server, { testFlag: true });
            addTestFlag();

            var service = this.subject();
            service.get('config').set('testFlag', true);

            service.fetch().then(function () {
                expect(service.get('labs.testFlag')).to.be['true'];
                expect(service.get('testFlag')).to.be['true'];
                done();
            });
        });

        (0, _emberMocha.it)('saves correctly', function (done) {
            stubSettings(server, { testFlag: false });
            addTestFlag();

            var service = this.subject();

            service.fetch().then(function () {
                expect(service.get('testFlag')).to.be['false'];

                (0, _emberRunloop['default'])(function () {
                    service.set('testFlag', true);
                });

                return (0, _emberTestHelpersWait['default'])().then(function () {
                    expect(server.handlers[1].numberOfCalls).to.equal(1);
                    expect(service.get('testFlag')).to.be['true'];
                    done();
                });
            });
        });

        (0, _emberMocha.it)('notifies for server errors', function (done) {
            stubSettings(server, { testFlag: false }, false);
            addTestFlag();

            var service = this.subject();

            service.fetch().then(function () {
                expect(service.get('testFlag')).to.be['false'];

                (0, _emberRunloop['default'])(function () {
                    service.set('testFlag', true);
                });

                return (0, _emberTestHelpersWait['default'])().then(function () {
                    expect(server.handlers[1].numberOfCalls, 'PUT call is made').to.equal(1);

                    expect(service.get('notifications.alerts').length, 'number of alerts shown').to.equal(1);

                    expect(service.get('testFlag')).to.be['false'];
                    done();
                });
            });
        });

        (0, _emberMocha.it)('notifies for validation errors', function (done) {
            stubSettings(server, { testFlag: false }, true, false);
            addTestFlag();

            var service = this.subject();

            service.fetch().then(function () {
                expect(service.get('testFlag')).to.be['false'];

                (0, _emberRunloop['default'])(function () {
                    expect(function () {
                        service.set('testFlag', true);
                    }, EmberError, 'threw validation error');
                });

                return (0, _emberTestHelpersWait['default'])().then(function () {
                    // ensure validation is happening before the API is hit
                    expect(server.handlers[1].numberOfCalls).to.equal(0);
                    expect(service.get('testFlag')).to.be['false'];
                    done();
                });
            });
        });
    });
});
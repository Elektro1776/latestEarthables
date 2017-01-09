define('ghost-admin/tests/integration/services/lazy-loader-test', ['exports', 'chai', 'ember-mocha', 'pretender', 'rsvp', 'jquery'], function (exports, _chai, _emberMocha, _pretender, _rsvp, _jquery) {

    (0, _emberMocha.describeModule)('service:lazy-loader', 'Integration: Service: lazy-loader', { integration: true }, function () {
        var server = undefined;
        var ghostPaths = {
            adminRoot: '/assets/'
        };

        beforeEach(function () {
            server = new _pretender['default']();
        });

        afterEach(function () {
            server.shutdown();
        });

        (0, _emberMocha.it)('loads a script correctly and only once', function (done) {
            var subject = this.subject({
                ghostPaths: ghostPaths,
                scriptPromises: {},
                testing: false
            });

            server.get('/assets/test.js', function (_ref) {
                var requestHeaders = _ref.requestHeaders;

                (0, _chai.expect)(requestHeaders.Accept).to.match(/text\/javascript/);

                return [200, { 'Content-Type': 'text/javascript' }, 'window.testLoadScript = \'testvalue\''];
            });

            subject.loadScript('test-script', 'test.js').then(function () {
                (0, _chai.expect)(subject.get('scriptPromises.test-script')).to.exist;
                (0, _chai.expect)(window.testLoadScript).to.equal('testvalue');
                (0, _chai.expect)(server.handlers[0].numberOfCalls).to.equal(1);

                return subject.loadScript('test-script', 'test.js');
            }).then(function () {
                (0, _chai.expect)(server.handlers[0].numberOfCalls).to.equal(1);

                done();
            });
        });

        (0, _emberMocha.it)('loads styles correctly', function () {
            var subject = this.subject({
                ghostPaths: ghostPaths,
                testing: false
            });

            subject.loadStyle('testing', 'style.css');

            (0, _chai.expect)((0, _jquery['default'])('#testing-styles').length).to.equal(1);
            (0, _chai.expect)((0, _jquery['default'])('#testing-styles').attr('href')).to.equal('/assets/style.css');
        });
    });
});
/* jshint expr:true */
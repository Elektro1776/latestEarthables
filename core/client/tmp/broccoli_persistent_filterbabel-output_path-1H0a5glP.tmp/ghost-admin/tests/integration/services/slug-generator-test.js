define('ghost-admin/tests/integration/services/slug-generator-test', ['exports', 'chai', 'ember-mocha', 'pretender', 'ember-string'], function (exports, _chai, _emberMocha, _pretender, _emberString) {

    function stubSlugEndpoint(server, type, slug) {
        server.get('/ghost/api/v0.1/slugs/:type/:slug/', function (request) {
            (0, _chai.expect)(request.params.type).to.equal(type);
            (0, _chai.expect)(request.params.slug).to.equal(slug);

            return [200, { 'Content-Type': 'application/json' }, JSON.stringify({ slugs: [{ slug: (0, _emberString.dasherize)(slug) }] })];
        });
    }

    (0, _emberMocha.describeModule)('service:slug-generator', 'Integration: Service: slug-generator', {
        integration: true
    }, function () {
        var server = undefined;

        beforeEach(function () {
            server = new _pretender['default']();
        });

        afterEach(function () {
            server.shutdown();
        });

        (0, _emberMocha.it)('returns empty if no slug is provided', function (done) {
            var service = this.subject();

            service.generateSlug('post', '').then(function (slug) {
                (0, _chai.expect)(slug).to.equal('');
                done();
            });
        });

        (0, _emberMocha.it)('calls correct endpoint and returns correct data', function (done) {
            var rawSlug = 'a test post';
            stubSlugEndpoint(server, 'post', rawSlug);

            var service = this.subject();

            service.generateSlug('post', rawSlug).then(function (slug) {
                (0, _chai.expect)(slug).to.equal((0, _emberString.dasherize)(rawSlug));
                done();
            });
        });
    });
});
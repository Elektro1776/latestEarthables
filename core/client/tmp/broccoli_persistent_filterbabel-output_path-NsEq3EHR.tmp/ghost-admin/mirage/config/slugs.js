define('ghost-admin/mirage/config/slugs', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = mockSlugs;
    var dasherize = _ember['default'].String.dasherize;

    function mockSlugs(server) {
        server.get('/slugs/post/:slug/', function (db, request) {
            return {
                slugs: [{ slug: dasherize(decodeURIComponent(request.params.slug)) }]
            };
        });

        server.get('/slugs/user/:slug/', function (db, request) {
            return {
                slugs: [{ slug: dasherize(decodeURIComponent(request.params.slug)) }]
            };
        });
    }
});
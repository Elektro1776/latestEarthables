define('ghost-admin/tests/integration/adapters/tag-test', ['exports', 'chai', 'ember-mocha', 'pretender'], function (exports, _chai, _emberMocha, _pretender) {

    (0, _emberMocha.describeModule)('adapter:tag', 'Integration: Adapter: tag', {
        integration: true
    }, function () {
        var server = undefined,
            store = undefined;

        beforeEach(function () {
            store = this.container.lookup('service:store');
            server = new _pretender['default']();
        });

        afterEach(function () {
            server.shutdown();
        });

        (0, _emberMocha.it)('loads tags from regular endpoint when all are fetched', function (done) {
            server.get('/ghost/api/v0.1/tags/', function () {
                return [200, { 'Content-Type': 'application/json' }, JSON.stringify({ tags: [{
                        id: 1,
                        name: 'Tag 1',
                        slug: 'tag-1'
                    }, {
                        id: 2,
                        name: 'Tag 2',
                        slug: 'tag-2'
                    }] })];
            });

            store.findAll('tag', { reload: true }).then(function (tags) {
                (0, _chai.expect)(tags).to.be.ok;
                (0, _chai.expect)(tags.objectAtContent(0).get('name')).to.equal('Tag 1');
                done();
            });
        });

        (0, _emberMocha.it)('loads tag from slug endpoint when single tag is queried and slug is passed in', function (done) {
            server.get('/ghost/api/v0.1/tags/slug/tag-1/', function () {
                return [200, { 'Content-Type': 'application/json' }, JSON.stringify({ tags: [{
                        id: 1,
                        slug: 'tag-1',
                        name: 'Tag 1'
                    }] })];
            });

            store.queryRecord('tag', { slug: 'tag-1' }).then(function (tag) {
                (0, _chai.expect)(tag).to.be.ok;
                (0, _chai.expect)(tag.get('name')).to.equal('Tag 1');
                done();
            });
        });
    });
});
/* jshint expr:true */
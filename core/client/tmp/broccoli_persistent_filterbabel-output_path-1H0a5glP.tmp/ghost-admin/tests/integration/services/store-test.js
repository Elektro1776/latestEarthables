define('ghost-admin/tests/integration/services/store-test', ['exports', 'chai', 'ember-mocha', 'pretender', 'ghost-admin/config/environment'], function (exports, _chai, _emberMocha, _pretender, _ghostAdminConfigEnvironment) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    (0, _emberMocha.describeModule)('service:store', 'Integration: Service: store', {
        integration: true
    }, function () {
        var server = undefined;

        beforeEach(function () {
            server = new _pretender['default']();
        });

        afterEach(function () {
            server.shutdown();
        });

        (0, _emberMocha.it)('adds Ghost version header to requests', function (done) {
            var version = _ghostAdminConfigEnvironment['default'].APP.version;

            var store = this.subject();

            server.get('/ghost/api/v0.1/posts/1/', function () {
                return [404, { 'Content-Type': 'application/json' }, JSON.stringify({})];
            });

            store.find('post', 1)['catch'](function () {
                var _server$handledRequests = _slicedToArray(server.handledRequests, 1);

                var request = _server$handledRequests[0];

                (0, _chai.expect)(request.requestHeaders['X-Ghost-Version']).to.equal(version);
                done();
            });
        });
    });
});
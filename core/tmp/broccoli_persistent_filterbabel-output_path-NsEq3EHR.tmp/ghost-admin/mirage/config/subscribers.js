define('ghost-admin/mirage/config/subscribers', ['exports', 'ember-cli-mirage', 'ghost-admin/mirage/utils'], function (exports, _emberCliMirage, _ghostAdminMirageUtils) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = mockSubscribers;

    function mockSubscribers(server) {
        server.get('/subscribers/', function (db, request) {
            var response = (0, _ghostAdminMirageUtils.paginatedResponse)('subscribers', db.subscribers, request);
            return response;
        });

        server.post('/subscribers/', function (db, request) {
            var _JSON$parse$subscribers = _slicedToArray(JSON.parse(request.requestBody).subscribers, 1);

            var attrs = _JSON$parse$subscribers[0];

            var _db$subscribers$where = db.subscribers.where({ email: attrs.email });

            var _db$subscribers$where2 = _slicedToArray(_db$subscribers$where, 1);

            var subscriber = _db$subscribers$where2[0];

            if (subscriber) {
                return new _emberCliMirage['default'].Response(422, {}, {
                    errors: [{
                        errorType: 'ValidationError',
                        message: 'Email already exists.',
                        property: 'email'
                    }]
                });
            } else {
                attrs.created_at = new Date();
                attrs.created_by = 0;

                subscriber = db.subscribers.insert(attrs);

                return {
                    subscriber: subscriber
                };
            }
        });

        server.put('/subscribers/:id/', function (db, request) {
            var id = request.params.id;

            var _JSON$parse$subscribers2 = _slicedToArray(JSON.parse(request.requestBody).subscribers, 1);

            var attrs = _JSON$parse$subscribers2[0];

            var subscriber = db.subscribers.update(id, attrs);

            return {
                subscriber: subscriber
            };
        });

        server.del('/subscribers/:id/', function (db, request) {
            db.subscribers.remove(request.params.id);

            return new _emberCliMirage['default'].Response(204, {}, {});
        });

        server.post('/subscribers/csv/', function () /*db, request*/{
            // NB: we get a raw FormData object with no way to inspect it in Chrome
            // until version 50 adds the additional read methods
            // https://developer.mozilla.org/en-US/docs/Web/API/FormData#Browser_compatibility

            server.createList('subscriber', 50);

            return {
                meta: {
                    stats: {
                        imported: 50,
                        duplicates: 3,
                        invalid: 2
                    }
                }
            };
        });
    }
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
define('ghost-admin/mirage/config/users', ['exports', 'ember-cli-mirage', 'ember-utils', 'ember-platform'], function (exports, _emberCliMirage, _emberUtils, _emberPlatform) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = mockUsers;

    var userPostsCount = function userPostsCount(user, db) {
        var posts = db.posts.where({ author_id: user.id });
        return posts.length;
    };

    function mockUsers(server) {
        server.post('/users/', function (db, request) {
            var _JSON$parse$users = _slicedToArray(JSON.parse(request.requestBody).users, 1);

            var attrs = _JSON$parse$users[0];

            var user = undefined;

            if (!(0, _emberUtils.isBlank)(attrs.email)) {
                attrs.slug = attrs.email.split('@')[0].dasherize();
            }

            // NOTE: this does not use the user factory to fill in blank fields
            user = db.users.insert(attrs);

            return {
                users: [user]
            };
        });

        // /users/me = Always return the user with ID=1
        server.get('/users/me', function (db) {
            return {
                users: [db.users.find(1)]
            };
        });

        server.get('/users/', 'users');

        server.get('/users/slug/:slug/', function (db, request) {
            var _db$users$where = db.users.where({ slug: request.params.slug });

            var _db$users$where2 = _slicedToArray(_db$users$where, 1);

            var user = _db$users$where2[0];

            if (request.queryParams.include.match(/count\.posts/)) {
                var postCount = userPostsCount(user, db);
                user = (0, _emberPlatform.assign)(user, { count: { posts: postCount } });
            }

            return {
                users: [user]
            };
        });

        server.del('/users/:id/', function (db, request) {
            db.users.remove(request.params.id);

            return new _emberCliMirage['default'].Response(204, {}, {});
        });

        server.get('/users/:id', function (db, request) {
            var user = db.users.find(request.params.id);

            if (request.queryParams.include.match(/count\.posts/)) {
                var postCount = userPostsCount(user, db);
                user = (0, _emberPlatform.assign)(user, { count: { posts: postCount } });
            }

            return {
                users: [user]
            };
        });

        server.put('/users/:id/', function (db, request) {
            var id = request.params.id;

            if (id === 'password') {
                return {
                    password: [{ message: 'Password changed successfully.' }]
                };
            } else {
                var _JSON$parse$users2 = _slicedToArray(JSON.parse(request.requestBody).users, 1);

                var attrs = _JSON$parse$users2[0];

                var record = db.users.update(id, attrs);

                return {
                    user: record
                };
            }
        });
    }
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
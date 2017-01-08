define('ghost-admin/mirage/config/posts', ['exports', 'ember-cli-mirage', 'ember-utils', 'ghost-admin/mirage/utils'], function (exports, _emberCliMirage, _emberUtils, _ghostAdminMirageUtils) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = mockPosts;

    function mockPosts(server) {
        server.post('/posts/', function (db, request) {
            var _JSON$parse$posts = _slicedToArray(JSON.parse(request.requestBody).posts, 1);

            var attrs = _JSON$parse$posts[0];

            var post = undefined;

            if ((0, _emberUtils.isBlank)(attrs.slug) && !(0, _emberUtils.isBlank)(attrs.title)) {
                attrs.slug = attrs.title.dasherize();
            }

            // NOTE: this does not use the post factory to fill in blank fields
            post = db.posts.insert(attrs);

            return {
                posts: [post]
            };
        });

        server.get('/posts/', function (db, request) {
            // TODO: handle status/staticPages/author params
            var response = (0, _ghostAdminMirageUtils.paginatedResponse)('posts', db.posts, request);
            return response;
        });

        server.get('/posts/:id/', function (db, request) {
            var id = request.params.id;

            var post = db.posts.find(id);

            if (!post) {
                return new _emberCliMirage['default'].Response(404, {}, {
                    errors: [{
                        errorType: 'NotFoundError',
                        message: 'Post not found.'
                    }]
                });
            } else {
                return { posts: [post] };
            }
        });

        server.put('/posts/:id/', function (db, request) {
            var id = request.params.id;

            var _JSON$parse$posts2 = _slicedToArray(JSON.parse(request.requestBody).posts, 1);

            var attrs = _JSON$parse$posts2[0];

            delete attrs.id;

            var post = db.posts.update(id, attrs);

            return {
                posts: [post]
            };
        });

        server.del('/posts/:id/', function (db, request) {
            db.posts.remove(request.params.id);

            return new _emberCliMirage['default'].Response(204, {}, {});
        });
    }
});
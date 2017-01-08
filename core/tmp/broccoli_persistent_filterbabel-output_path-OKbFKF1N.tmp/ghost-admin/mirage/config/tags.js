define('ghost-admin/mirage/config/tags', ['exports', 'ember-cli-mirage', 'ember-utils', 'ghost-admin/mirage/utils'], function (exports, _emberCliMirage, _emberUtils, _ghostAdminMirageUtils) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = mockTags;

    function mockTags(server) {
        server.post('/tags/', function (db, request) {
            var _JSON$parse$tags = _slicedToArray(JSON.parse(request.requestBody).tags, 1);

            var attrs = _JSON$parse$tags[0];

            var tag = undefined;

            if ((0, _emberUtils.isBlank)(attrs.slug) && !(0, _emberUtils.isBlank)(attrs.name)) {
                attrs.slug = attrs.name.dasherize();
            }

            // NOTE: this does not use the tag factory to fill in blank fields
            tag = db.tags.insert(attrs);

            return {
                tag: tag
            };
        });

        server.get('/tags/', function (db, request) {
            var response = (0, _ghostAdminMirageUtils.paginatedResponse)('tags', db.tags, request);
            // TODO: remove post_count unless requested?
            return response;
        });

        server.get('/tags/slug/:slug/', function (db, request) {
            var _db$tags$where = db.tags.where({ slug: request.params.slug });

            var _db$tags$where2 = _slicedToArray(_db$tags$where, 1);

            var tag = _db$tags$where2[0];

            // TODO: remove post_count unless requested?

            return {
                tag: tag
            };
        });

        server.put('/tags/:id/', function (db, request) {
            var id = request.params.id;

            var _JSON$parse$tags2 = _slicedToArray(JSON.parse(request.requestBody).tags, 1);

            var attrs = _JSON$parse$tags2[0];

            var record = db.tags.update(id, attrs);

            return {
                tag: record
            };
        });

        server.del('/tags/:id/', function (db, request) {
            db.tags.remove(request.params.id);

            return new _emberCliMirage['default'].Response(204, {}, {});
        });
    }
});
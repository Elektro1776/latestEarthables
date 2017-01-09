define('ghost-admin/mirage/config/themes', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = mockThemes;

    var themeCount = 1;

    function mockThemes(server) {
        server.post('/themes/upload/', function (db /*, request*/) {
            var _db$settings$where = db.settings.where({ key: 'availableThemes' });

            var _db$settings$where2 = _slicedToArray(_db$settings$where, 1);

            var availableThemes = _db$settings$where2[0];

            // pretender/mirage doesn't currently process FormData so we can't use
            // any info passed in through the request
            var theme = {
                name: 'test-' + themeCount,
                'package': {
                    name: 'Test ' + themeCount,
                    version: '0.1'
                },
                active: false
            };

            themeCount++;

            availableThemes.value.pushObject(theme);
            db.settings.remove({ key: 'availableThemes' });
            db.settings.insert(availableThemes);

            return {
                themes: [theme]
            };
        });

        server.del('/themes/:theme/', function (db, request) {
            var _db$settings$where3 = db.settings.where({ key: 'availableThemes' });

            var _db$settings$where32 = _slicedToArray(_db$settings$where3, 1);

            var availableThemes = _db$settings$where32[0];

            availableThemes.value = availableThemes.value.filter(function (theme) {
                return theme.name !== request.params.theme;
            });

            db.settings.remove({ key: 'availableThemes' });
            db.settings.insert(availableThemes);

            return new _emberCliMirage['default'].Response(204, {}, null);
        });
    }
});
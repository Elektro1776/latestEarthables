define('ghost-admin/mirage/config/settings', ['exports'], function (exports) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = mockSettings;

    function mockSettings(server) {
        server.get('/settings/', function (db, request) {
            var filters = request.queryParams.type.split(',');
            var settings = [];

            filters.forEach(function (filter) {
                settings.pushObjects(db.settings.where({ type: filter }));
            });

            return {
                settings: settings,
                meta: {
                    filters: {
                        type: request.queryParams.type
                    }
                }
            };
        });

        server.put('/settings/', function (db, request) {
            var newSettings = JSON.parse(request.requestBody).settings;

            newSettings.forEach(function (newSetting) {
                db.settings.update({ key: newSetting.key }, newSetting);
            });

            var _db$settings$where = db.settings.where({ key: 'activeTheme' });

            var _db$settings$where2 = _slicedToArray(_db$settings$where, 1);

            var activeTheme = _db$settings$where2[0];

            var _db$settings$where3 = db.settings.where({ key: 'availableThemes' });

            var _db$settings$where32 = _slicedToArray(_db$settings$where3, 1);

            var availableThemes = _db$settings$where32[0];

            availableThemes.value.forEach(function (theme) {
                if (theme.name === activeTheme.value) {
                    theme.active = true;
                } else {
                    theme.active = false;
                }
            });

            db.settings.remove({ key: 'availableThemes' });
            db.settings.insert(availableThemes);

            return {
                meta: {},
                settings: db.settings
            };
        });
    }
});
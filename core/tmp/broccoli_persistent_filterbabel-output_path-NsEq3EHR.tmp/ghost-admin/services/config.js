define('ghost-admin/services/config', ['exports', 'jquery', 'ember', 'ember-service', 'ember-computed', 'ember-service/inject'], function (exports, _jquery, _ember, _emberService, _emberComputed, _emberServiceInject) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    // ember-cli-shims doesn't export _ProxyMixin
    var _ProxyMixin = _ember['default']._ProxyMixin;
    var isNumeric = _jquery['default'].isNumeric;

    function _mapType(val, type) {
        if (val === '') {
            return null;
        } else if (type === 'bool') {
            return val === 'true' ? true : false;
        } else if (type === 'int' && isNumeric(val)) {
            return +val;
        } else if (type === 'json') {
            try {
                return JSON.parse(val);
            } catch (e) {
                return val;
            }
        } else {
            // assume string if type is null or matches nothing else
            return val;
        }
    }

    exports['default'] = _emberService['default'].extend(_ProxyMixin, {
        ajax: (0, _emberServiceInject['default'])(),
        ghostPaths: (0, _emberServiceInject['default'])(),

        content: (0, _emberComputed['default'])(function () {
            var metaConfigTags = (0, _jquery['default'])('meta[name^="env-"]');
            var config = {};

            metaConfigTags.each(function (i, el) {
                var key = el.name;
                var value = el.content;
                var type = el.getAttribute('data-type');

                var propertyName = key.substring(4);

                config[propertyName] = _mapType(value, type);
            });

            return config;
        }),

        availableTimezones: (0, _emberComputed['default'])(function () {
            var timezonesUrl = this.get('ghostPaths.url').api('configuration', 'timezones');

            return this.get('ajax').request(timezonesUrl).then(function (configTimezones) {
                var _configTimezones$configuration = _slicedToArray(configTimezones.configuration, 1);

                var timezonesObj = _configTimezones$configuration[0];

                timezonesObj = timezonesObj.timezones;

                return timezonesObj;
            });
        })
    });
});
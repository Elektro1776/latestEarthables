define('ghost-admin/helpers/gh-format-time-scheduled', ['exports', 'ember-helper'], function (exports, _emberHelper) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports.timeToSchedule = timeToSchedule;

    function timeToSchedule(params) {
        if (!params || !params.length) {
            return;
        }

        var _params = _slicedToArray(params, 2);

        var blogTimezone = _params[1];

        var _params2 = _slicedToArray(params, 1);

        var time = _params2[0];

        if (blogTimezone.get('isFulfilled')) {
            return moment.utc(time).tz(blogTimezone.get('content')).format('DD MMM YYYY, HH:mm');
        }
    }

    exports['default'] = (0, _emberHelper.helper)(function (params) {
        return timeToSchedule(params);
    });
});
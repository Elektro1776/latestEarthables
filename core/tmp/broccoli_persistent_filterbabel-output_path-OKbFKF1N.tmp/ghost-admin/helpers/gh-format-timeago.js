define('ghost-admin/helpers/gh-format-timeago', ['exports', 'ember-helper'], function (exports, _emberHelper) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports.timeAgo = timeAgo;

    function timeAgo(params) {
        if (!params || !params.length) {
            return;
        }

        var _params = _slicedToArray(params, 1);

        var timeago = _params[0];

        return moment(timeago).from(moment.utc());
    }

    exports['default'] = (0, _emberHelper.helper)(function (params) {
        return timeAgo(params);
        // stefanpenner says cool for small number of timeagos.
        // For large numbers moment sucks => single Ember.Object based clock better
        // https://github.com/manuelmitasch/ghost-admin-ember-demo/commit/fba3ab0a59238290c85d4fa0d7c6ed1be2a8a82e#commitcomment-5396524
    });
});
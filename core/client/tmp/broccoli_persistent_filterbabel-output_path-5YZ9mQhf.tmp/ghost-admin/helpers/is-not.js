define('ghost-admin/helpers/is-not', ['exports', 'ember-helper'], function (exports, _emberHelper) {
    exports.isNot = isNot;

    function isNot(params) {
        return !params;
    }

    exports['default'] = (0, _emberHelper.helper)(function (params) {
        return isNot(params);
    });
});
define('ghost-admin/tests/test-helper', ['exports', 'ghost-admin/tests/helpers/resolver', 'ember-mocha'], function (exports, _ghostAdminTestsHelpersResolver, _emberMocha) {

    (0, _emberMocha.setResolver)(_ghostAdminTestsHelpersResolver['default']);

    /* jshint ignore:start */
    mocha.setup({
        timeout: 15000,
        slow: 500
    });
    /* jshint ignore:end */
});
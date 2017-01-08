define('ghost-admin/tests/unit/helpers/is-equal-test', ['exports', 'chai', 'mocha', 'ghost-admin/helpers/is-equal'], function (exports, _chai, _mocha, _ghostAdminHelpersIsEqual) {

    (0, _mocha.describe)('Unit: Helper: is-equal', function () {
        // Replace this with your real tests.
        (0, _mocha.it)('works', function () {
            var result = (0, _ghostAdminHelpersIsEqual.isEqual)([42, 42]);

            (0, _chai.expect)(result).to.be.ok;
        });
    });
});
/* jshint expr:true */
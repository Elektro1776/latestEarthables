define('ghost-admin/tests/unit/helpers/is-not-test', ['exports', 'chai', 'mocha', 'ghost-admin/helpers/is-not'], function (exports, _chai, _mocha, _ghostAdminHelpersIsNot) {

    (0, _mocha.describe)('Unit: Helper: is-not', function () {
        // Replace this with your real tests.
        (0, _mocha.it)('works', function () {
            var result = (0, _ghostAdminHelpersIsNot.isNot)(false);

            (0, _chai.expect)(result).to.be.ok;
        });
    });
});
/* jshint expr:true */
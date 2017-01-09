define('ghost-admin/tests/unit/helpers/highlighted-text-test', ['exports', 'chai', 'mocha', 'ghost-admin/helpers/highlighted-text'], function (exports, _chai, _mocha, _ghostAdminHelpersHighlightedText) {

    (0, _mocha.describe)('Unit: Helper: highlighted-text', function () {

        (0, _mocha.it)('works', function () {
            var result = (0, _ghostAdminHelpersHighlightedText.highlightedText)(['Test', 'e']);
            (0, _chai.expect)(result).to.be.an('object');
            (0, _chai.expect)(result.string).to.equal('T<span class="highlight">e</span>st');
        });
    });
});
/* jshint expr:true */
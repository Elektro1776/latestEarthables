define('ghost-admin/tests/unit/helpers/gh-format-timeago-test', ['exports', 'chai', 'mocha', 'ghost-admin/helpers/gh-format-timeago', 'sinon'], function (exports, _chai, _mocha, _ghostAdminHelpersGhFormatTimeago, _sinon) {

    (0, _mocha.describe)('Unit: Helper: gh-format-timeago', function () {
        var mockDate = undefined;
        var utcStub = undefined;

        (0, _mocha.it)('calculates the correct time difference', function () {
            mockDate = '2016-05-30T10:00:00.000Z';
            utcStub = _sinon['default'].stub(moment, 'utc').returns('2016-05-30T11:00:00.000Z');

            var result = (0, _ghostAdminHelpersGhFormatTimeago.timeAgo)([mockDate]);
            (0, _chai.expect)(result).to.be.equal('an hour ago');

            moment.utc.restore();
        });
    });
});
/* jshint expr:true */
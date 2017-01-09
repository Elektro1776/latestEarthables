define('ghost-admin/tests/unit/helpers/gh-format-time-scheduled-test', ['exports', 'ember-object', 'chai', 'mocha', 'ghost-admin/helpers/gh-format-time-scheduled', 'sinon'], function (exports, _emberObject, _chai, _mocha, _ghostAdminHelpersGhFormatTimeScheduled, _sinon) {

    (0, _mocha.describe)('Unit: Helper: gh-format-time-scheduled', function () {
        var mockDate = undefined;
        var mockTimezone = undefined;

        (0, _mocha.it)('renders the date with the bog timezone', function () {
            mockDate = '2016-05-30T10:00:00.000Z';
            mockTimezone = _emberObject['default'].create({
                content: 'Africa/Cairo',
                isFulfilled: true
            });

            var result = (0, _ghostAdminHelpersGhFormatTimeScheduled.timeToSchedule)([mockDate, mockTimezone]);
            (0, _chai.expect)(result).to.be.equal('30 May 2016, 12:00');
        });
        (0, _mocha.it)('returns only when the timezone promise is fulfilled', function () {
            mockDate = '2016-05-30T10:00:00.000Z';
            mockTimezone = _emberObject['default'].create({
                content: undefined,
                isFulfilled: false
            });

            var result = (0, _ghostAdminHelpersGhFormatTimeScheduled.timeToSchedule)([mockDate, mockTimezone]);
            (0, _chai.expect)(result).to.be.equal(undefined);
        });
    });
});
/* jshint expr:true */
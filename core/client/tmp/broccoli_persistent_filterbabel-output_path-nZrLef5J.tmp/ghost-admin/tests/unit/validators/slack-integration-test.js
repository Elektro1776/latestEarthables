define('ghost-admin/tests/unit/validators/slack-integration-test', ['exports', 'chai', 'mocha', 'ghost-admin/validators/slack-integration', 'ghost-admin/models/slack-integration'], function (exports, _chai, _mocha, _ghostAdminValidatorsSlackIntegration, _ghostAdminModelsSlackIntegration) {

    var testInvalidUrl = function testInvalidUrl(url) {
        var slackObject = _ghostAdminModelsSlackIntegration['default'].create({ url: url });

        _ghostAdminValidatorsSlackIntegration['default'].check(slackObject, 'url');

        (0, _chai.expect)(_ghostAdminValidatorsSlackIntegration['default'].get('passed'), '"' + url + '" passed').to.be['false'];
        (0, _chai.expect)(slackObject.get('errors').errorsFor('url').toArray()).to.deep.equal([{
            attribute: 'url',
            message: 'The URL must be in a format like https://hooks.slack.com/services/<your personal key>'
        }]);
        (0, _chai.expect)(slackObject.get('hasValidated')).to.include('url');
    };

    var testValidUrl = function testValidUrl(url) {
        var slackObject = _ghostAdminModelsSlackIntegration['default'].create({ url: url });

        _ghostAdminValidatorsSlackIntegration['default'].check(slackObject, 'url');

        (0, _chai.expect)(_ghostAdminValidatorsSlackIntegration['default'].get('passed'), '"' + url + '" failed').to.be['true'];
        (0, _chai.expect)(slackObject.get('hasValidated')).to.include('url');
    };

    (0, _mocha.describe)('Unit: Validator: slack-integration', function () {
        (0, _mocha.it)('fails on invalid url values', function () {
            var invalidUrls = ['test@example.com', '/has spaces', 'no-leading-slash', 'http://example.com/with spaces'];

            invalidUrls.forEach(function (url) {
                testInvalidUrl(url);
            });
        });

        (0, _mocha.it)('passes on valid url values', function () {
            var validUrls = ['https://hooks.slack.com/services/;alskdjf', 'https://hooks.slack.com/services/123445678', 'https://hooks.slack.com/services/some_webhook'];

            validUrls.forEach(function (url) {
                testValidUrl(url);
            });
        });

        (0, _mocha.it)('validates url by default', function () {
            var slackObject = _ghostAdminModelsSlackIntegration['default'].create();

            _ghostAdminValidatorsSlackIntegration['default'].check(slackObject);

            (0, _chai.expect)(slackObject.get('errors').errorsFor('url')).to.be.empty;
            (0, _chai.expect)(_ghostAdminValidatorsSlackIntegration['default'].get('passed')).to.be['true'];
        });
    });
});
/* jshint expr:true */
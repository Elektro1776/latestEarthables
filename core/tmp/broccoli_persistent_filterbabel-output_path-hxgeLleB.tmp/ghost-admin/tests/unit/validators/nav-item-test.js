define('ghost-admin/tests/unit/validators/nav-item-test', ['exports', 'chai', 'mocha', 'ghost-admin/validators/nav-item', 'ghost-admin/models/navigation-item'], function (exports, _chai, _mocha, _ghostAdminValidatorsNavItem, _ghostAdminModelsNavigationItem) {

    var testInvalidUrl = function testInvalidUrl(url) {
        var navItem = _ghostAdminModelsNavigationItem['default'].create({ url: url });

        _ghostAdminValidatorsNavItem['default'].check(navItem, 'url');

        (0, _chai.expect)(_ghostAdminValidatorsNavItem['default'].get('passed'), '"' + url + '" passed').to.be['false'];
        (0, _chai.expect)(navItem.get('errors').errorsFor('url').toArray()).to.deep.equal([{
            attribute: 'url',
            message: 'You must specify a valid URL or relative path'
        }]);
        (0, _chai.expect)(navItem.get('hasValidated')).to.include('url');
    };

    var testValidUrl = function testValidUrl(url) {
        var navItem = _ghostAdminModelsNavigationItem['default'].create({ url: url });

        _ghostAdminValidatorsNavItem['default'].check(navItem, 'url');

        (0, _chai.expect)(_ghostAdminValidatorsNavItem['default'].get('passed'), '"' + url + '" failed').to.be['true'];
        (0, _chai.expect)(navItem.get('hasValidated')).to.include('url');
    };

    (0, _mocha.describe)('Unit: Validator: nav-item', function () {
        (0, _mocha.it)('requires label presence', function () {
            var navItem = _ghostAdminModelsNavigationItem['default'].create();

            _ghostAdminValidatorsNavItem['default'].check(navItem, 'label');

            (0, _chai.expect)(_ghostAdminValidatorsNavItem['default'].get('passed')).to.be['false'];
            (0, _chai.expect)(navItem.get('errors').errorsFor('label').toArray()).to.deep.equal([{
                attribute: 'label',
                message: 'You must specify a label'
            }]);
            (0, _chai.expect)(navItem.get('hasValidated')).to.include('label');
        });

        (0, _mocha.it)('requires url presence', function () {
            var navItem = _ghostAdminModelsNavigationItem['default'].create();

            _ghostAdminValidatorsNavItem['default'].check(navItem, 'url');

            (0, _chai.expect)(_ghostAdminValidatorsNavItem['default'].get('passed')).to.be['false'];
            (0, _chai.expect)(navItem.get('errors').errorsFor('url').toArray()).to.deep.equal([{
                attribute: 'url',
                message: 'You must specify a URL or relative path'
            }]);
            (0, _chai.expect)(navItem.get('hasValidated')).to.include('url');
        });

        (0, _mocha.it)('fails on invalid url values', function () {
            var invalidUrls = ['test@example.com', '/has spaces', 'no-leading-slash', 'http://example.com/with spaces'];

            invalidUrls.forEach(function (url) {
                testInvalidUrl(url);
            });
        });

        (0, _mocha.it)('passes on valid url values', function () {
            var validUrls = ['http://localhost:2368', 'http://localhost:2368/some-path', 'https://localhost:2368/some-path', '//localhost:2368/some-path', 'http://localhost:2368/#test', 'http://localhost:2368/?query=test&another=example', 'http://localhost:2368/?query=test&another=example#test', 'tel:01234-567890', 'mailto:test@example.com', 'http://some:user@example.com:1234', '/relative/path'];

            validUrls.forEach(function (url) {
                testValidUrl(url);
            });
        });

        (0, _mocha.it)('validates url and label by default', function () {
            var navItem = _ghostAdminModelsNavigationItem['default'].create();

            _ghostAdminValidatorsNavItem['default'].check(navItem);

            (0, _chai.expect)(navItem.get('errors').errorsFor('label')).to.not.be.empty;
            (0, _chai.expect)(navItem.get('errors').errorsFor('url')).to.not.be.empty;
            (0, _chai.expect)(_ghostAdminValidatorsNavItem['default'].get('passed')).to.be['false'];
        });
    });
});
/* jshint expr:true */
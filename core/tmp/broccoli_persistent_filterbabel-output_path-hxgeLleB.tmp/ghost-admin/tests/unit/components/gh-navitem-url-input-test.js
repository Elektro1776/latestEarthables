define('ghost-admin/tests/unit/components/gh-navitem-url-input-test', ['exports', 'ember-runloop', 'chai', 'ember-mocha'], function (exports, _emberRunloop, _chai, _emberMocha) {

    (0, _emberMocha.describeComponent)('gh-navitem-url-input', 'Unit: Component: gh-navitem-url-input', {
        unit: true
    }, function () {
        (0, _emberMocha.it)('identifies a URL as the base URL', function () {
            var component = this.subject({
                url: '',
                baseUrl: 'http://example.com/'
            });

            this.render();

            (0, _emberRunloop['default'])(function () {
                component.set('value', 'http://example.com/');
            });

            (0, _chai.expect)(component.get('isBaseUrl')).to.be.ok;

            (0, _emberRunloop['default'])(function () {
                component.set('value', 'http://example.com/go/');
            });

            (0, _chai.expect)(component.get('isBaseUrl')).to.not.be.ok;
        });
    });
});
/* jshint expr:true */
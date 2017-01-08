define('ghost-admin/tests/unit/components/gh-user-invited-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeComponent)('gh-user-invited', 'Unit: Component: gh-user-invited', {
        unit: true
        // specify the other units that are required for this test
        // needs: ['component:foo', 'helper:bar']
    }, function () {
        (0, _emberMocha.it)('renders', function () {
            // creates the component instance
            var component = this.subject();

            (0, _chai.expect)(component._state).to.equal('preRender');

            // renders the component on the page
            this.render();
            (0, _chai.expect)(component._state).to.equal('inDOM');
        });
    });
});
/* jshint expr:true */
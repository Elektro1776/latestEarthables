define('ghost-admin/tests/unit/components/gh-editor-save-button-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeComponent)('gh-editor-save-button', 'Unit: Component: gh-editor-save-button', {
        unit: true,
        needs: ['component:gh-dropdown-button', 'component:gh-dropdown', 'component:gh-spin-button', 'service:dropdown']
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
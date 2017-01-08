define('ghost-admin/tests/unit/components/gh-selectize-test', ['exports', 'chai', 'ember-mocha', 'ember-array/utils', 'ember-runloop'], function (exports, _chai, _emberMocha, _emberArrayUtils, _emberRunloop) {

    (0, _emberMocha.describeComponent)('gh-selectize', 'Unit: Component: gh-selectize', {
        // Specify the other units that are required for this test
        // needs: ['component:foo', 'helper:bar'],
        unit: true
    }, function () {
        (0, _emberMocha.it)('re-orders selection when selectize order is changed', function () {
            var component = this.subject();

            (0, _emberRunloop['default'])(function () {
                component.set('content', (0, _emberArrayUtils.A)(['item 1', 'item 2', 'item 3']));
                component.set('selection', (0, _emberArrayUtils.A)(['item 2', 'item 3']));
                component.set('multiple', true);
            });

            this.render();

            (0, _emberRunloop['default'])(function () {
                component._selectize.setValue(['item 3', 'item 2']);
            });

            (0, _chai.expect)(component.get('value').toArray(), 'component value').to.deep.equal(['item 3', 'item 2']);
            (0, _chai.expect)(component.get('selection').toArray(), 'component selection').to.deep.equal(['item 3', 'item 2']);
        });
    });
});
/* jshint expr:true */
define('ghost-admin/tests/unit/transforms/navigation-settings-test', ['exports', 'chai', 'ember-mocha', 'ember-array/utils', 'ghost-admin/models/navigation-item'], function (exports, _chai, _emberMocha, _emberArrayUtils, _ghostAdminModelsNavigationItem) {

    (0, _emberMocha.describeModule)('transform:navigation-settings', 'Unit: Transform: navigation-settings', {}, function () {
        (0, _emberMocha.it)('deserializes navigation json', function () {
            var transform = this.subject();
            var serialized = '[{"label":"One","url":"/one"},{"label":"Two","url":"/two"}]';
            var result = transform.deserialize(serialized);

            (0, _chai.expect)(result.length).to.equal(2);
            (0, _chai.expect)(result[0]).to.be['instanceof'](_ghostAdminModelsNavigationItem['default']);
            (0, _chai.expect)(result[0].get('label')).to.equal('One');
            (0, _chai.expect)(result[0].get('url')).to.equal('/one');
            (0, _chai.expect)(result[1]).to.be['instanceof'](_ghostAdminModelsNavigationItem['default']);
            (0, _chai.expect)(result[1].get('label')).to.equal('Two');
            (0, _chai.expect)(result[1].get('url')).to.equal('/two');
        });

        (0, _emberMocha.it)('serializes array of NavigationItems', function () {
            var transform = this.subject();
            var deserialized = (0, _emberArrayUtils.A)([_ghostAdminModelsNavigationItem['default'].create({ label: 'One', url: '/one' }), _ghostAdminModelsNavigationItem['default'].create({ label: 'Two', url: '/two' })]);
            var result = transform.serialize(deserialized);

            (0, _chai.expect)(result).to.equal('[{"label":"One","url":"/one"},{"label":"Two","url":"/two"}]');
        });
    });
});
/* jshint expr:true */
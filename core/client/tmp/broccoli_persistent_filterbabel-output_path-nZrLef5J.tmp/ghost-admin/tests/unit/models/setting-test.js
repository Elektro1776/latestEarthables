define('ghost-admin/tests/unit/models/setting-test', ['exports', 'ember-mocha'], function (exports, _emberMocha) {

    (0, _emberMocha.describeModel)('setting', 'Unit: Model: setting', function () {
        (0, _emberMocha.it)('has a validation type of "setting"', function () {
            var model = this.subject();

            expect(model.get('validationType')).to.equal('setting');
        });
    });
});
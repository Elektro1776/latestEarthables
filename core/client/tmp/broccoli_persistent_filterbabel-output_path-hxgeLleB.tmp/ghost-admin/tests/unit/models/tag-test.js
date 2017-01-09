define('ghost-admin/tests/unit/models/tag-test', ['exports', 'ember-mocha'], function (exports, _emberMocha) {

    (0, _emberMocha.describeModel)('tag', 'Unit: Model: tag', function () {
        (0, _emberMocha.it)('has a validation type of "tag"', function () {
            var model = this.subject();

            expect(model.get('validationType')).to.equal('tag');
        });
    });
});
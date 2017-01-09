define('ghost-admin/tests/unit/models/role-test', ['exports', 'ember-runloop', 'ember-mocha'], function (exports, _emberRunloop, _emberMocha) {

    (0, _emberMocha.describeModel)('role', 'Unit: Model: role', function () {
        (0, _emberMocha.it)('provides a lowercase version of the name', function () {
            var model = this.subject({
                name: 'Author'
            });

            expect(model.get('name')).to.equal('Author');
            expect(model.get('lowerCaseName')).to.equal('author');

            (0, _emberRunloop['default'])(function () {
                model.set('name', 'Editor');

                expect(model.get('name')).to.equal('Editor');
                expect(model.get('lowerCaseName')).to.equal('editor');
            });
        });
    });
});
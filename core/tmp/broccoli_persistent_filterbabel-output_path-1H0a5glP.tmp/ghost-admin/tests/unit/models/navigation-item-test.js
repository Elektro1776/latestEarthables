define('ghost-admin/tests/unit/models/navigation-item-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeModule)('model:navigation-item', 'Unit: Model: navigation-item', {
        // Specify the other units that are required for this test.
        needs: []
    }, function () {
        (0, _emberMocha.it)('isComplete is true when label and url are filled', function () {
            var model = this.subject();

            model.set('label', 'test');
            model.set('url', 'test');

            (0, _chai.expect)(model.get('isComplete')).to.be['true'];
        });

        (0, _emberMocha.it)('isComplete is false when label is blank', function () {
            var model = this.subject();

            model.set('label', '');
            model.set('url', 'test');

            (0, _chai.expect)(model.get('isComplete')).to.be['false'];
        });

        (0, _emberMocha.it)('isComplete is false when url is blank', function () {
            var model = this.subject();

            model.set('label', 'test');
            model.set('url', '');

            (0, _chai.expect)(model.get('isComplete')).to.be['false'];
        });

        (0, _emberMocha.it)('isBlank is true when label and url are blank', function () {
            var model = this.subject();

            model.set('label', '');
            model.set('url', '');

            (0, _chai.expect)(model.get('isBlank')).to.be['true'];
        });

        (0, _emberMocha.it)('isBlank is false when label is present', function () {
            var model = this.subject();

            model.set('label', 'test');
            model.set('url', '');

            (0, _chai.expect)(model.get('isBlank')).to.be['false'];
        });

        (0, _emberMocha.it)('isBlank is false when url is present', function () {
            var model = this.subject();

            model.set('label', '');
            model.set('url', 'test');

            (0, _chai.expect)(model.get('isBlank')).to.be['false'];
        });
    });
});
/* jshint expr:true */
define('ghost-admin/tests/unit/models/subscriber-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeModel)('subscriber', 'Unit: Model: subscriber', {
        // Specify the other units that are required for this test.
        needs: ['model:post']
    }, function () {
        // Replace this with your real tests.
        (0, _emberMocha.it)('exists', function () {
            var model = this.subject();
            // var store = this.store();
            (0, _chai.expect)(model).to.be.ok;
        });
    });
});
/* jshint expr:true */
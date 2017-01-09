define('ghost-admin/tests/unit/controllers/subscribers-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeModule)('controller:subscribers', 'Unit: Controller: subscribers', {
        needs: ['service:notifications']
    }, function () {
        // Replace this with your real tests.
        (0, _emberMocha.it)('exists', function () {
            var controller = this.subject();
            (0, _chai.expect)(controller).to.be.ok;
        });
    });
});
/* jshint expr:true */
define('ghost-admin/tests/unit/services/upgrade-status-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeModule)('service:upgrade-status', 'UpgradeStatusService', {
        // Specify the other units that are required for this test.
        // needs: ['service:foo']
        needs: []
    }, function () {
        // Replace this with your real tests.
        (0, _emberMocha.it)('exists', function () {
            var service = this.subject();
            (0, _chai.expect)(service).to.be.ok;
        });
    });
});
/* jshint expr:true */
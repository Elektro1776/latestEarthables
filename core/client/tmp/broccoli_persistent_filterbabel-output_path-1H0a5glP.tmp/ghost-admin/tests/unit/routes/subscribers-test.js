define('ghost-admin/tests/unit/routes/subscribers-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeModule)('route:subscribers', 'Unit: Route: subscribers', {
        needs: ['service:notifications']
    }, function () {
        (0, _emberMocha.it)('exists', function () {
            var route = this.subject();
            (0, _chai.expect)(route).to.be.ok;
        });
    });
});
/* jshint expr:true */
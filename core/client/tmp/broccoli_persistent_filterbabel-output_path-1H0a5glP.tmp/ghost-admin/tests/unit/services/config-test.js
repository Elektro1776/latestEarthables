define('ghost-admin/tests/unit/services/config-test', ['exports', 'chai', 'ember-mocha', 'jquery'], function (exports, _chai, _emberMocha, _jquery) {

    (0, _emberMocha.describeModule)('service:config', 'Unit: Service: config', {}, function () {
        // Replace this with your real tests.
        (0, _emberMocha.it)('exists', function () {
            var service = this.subject();
            (0, _chai.expect)(service).to.be.ok;
        });

        (0, _emberMocha.it)('correctly parses a client secret', function () {
            (0, _jquery['default'])('<meta>').attr('name', 'env-clientSecret').attr('content', '23e435234423').appendTo('head');

            var service = this.subject();

            (0, _chai.expect)(service.get('clientSecret')).to.equal('23e435234423');
        });
    });
});
/* jshint expr:true */
define('ghost-admin/tests/unit/serializers/user-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeModel)('user', 'Unit:Serializer: user', {
        // Specify the other units that are required for this test.
        needs: ['transform:moment-utc', 'transform:raw', 'transform:facebook-url-user', 'transform:twitter-url-user', 'model:role']
    }, function () {
        // Replace this with your real tests.
        (0, _emberMocha.it)('serializes records', function () {
            var record = this.subject();

            var serializedRecord = record.serialize();

            (0, _chai.expect)(record).to.be.ok;
        });
    });
});
/* jshint expr:true */
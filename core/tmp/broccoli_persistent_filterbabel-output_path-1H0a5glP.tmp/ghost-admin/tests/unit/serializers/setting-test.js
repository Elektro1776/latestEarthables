define('ghost-admin/tests/unit/serializers/setting-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeModel)('setting', 'Unit:Serializer: setting', {
        // Specify the other units that are required for this test.
        needs: ['transform:moment-utc', 'transform:facebook-url-user', 'transform:twitter-url-user', 'transform:navigation-settings', 'transform:slack-settings']
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
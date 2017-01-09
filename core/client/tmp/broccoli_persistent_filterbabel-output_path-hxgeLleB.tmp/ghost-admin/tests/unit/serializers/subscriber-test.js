define('ghost-admin/tests/unit/serializers/subscriber-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeModel)('subscriber', 'Unit:Serializer: subscriber', {
        // Specify the other units that are required for this test.
        needs: ['model:post', 'transform:moment-utc']
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
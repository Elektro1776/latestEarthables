define('ghost-admin/tests/unit/transforms/facebook-url-user-test', ['exports', 'chai', 'ember-mocha', 'ember-array/utils'], function (exports, _chai, _emberMocha, _emberArrayUtils) {

    (0, _emberMocha.describeModule)('transform:facebook-url-user', 'Unit: Transform: facebook-url-user', {}, function () {
        (0, _emberMocha.it)('deserializes facebook url', function () {
            var transform = this.subject();
            var serialized = 'testuser';
            var result = transform.deserialize(serialized);

            (0, _chai.expect)(result).to.equal('https://www.facebook.com/testuser');
        });

        (0, _emberMocha.it)('serializes url to facebook username', function () {
            var transform = this.subject();
            var deserialized = 'https://www.facebook.com/testuser';
            var result = transform.serialize(deserialized);

            (0, _chai.expect)(result).to.equal('testuser');
        });
    });
});
/* jshint expr:true */
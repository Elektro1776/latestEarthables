define('ghost-admin/tests/unit/transforms/twitter-url-user-test', ['exports', 'chai', 'ember-mocha', 'ember-array/utils'], function (exports, _chai, _emberMocha, _emberArrayUtils) {

    (0, _emberMocha.describeModule)('transform:twitter-url-user', 'Unit: Transform: twitter-url-user', {}, function () {
        (0, _emberMocha.it)('deserializes twitter url', function () {
            var transform = this.subject();
            var serialized = '@testuser';
            var result = transform.deserialize(serialized);

            (0, _chai.expect)(result).to.equal('https://twitter.com/testuser');
        });

        (0, _emberMocha.it)('serializes url to twitter username', function () {
            var transform = this.subject();
            var deserialized = 'https://twitter.com/testuser';
            var result = transform.serialize(deserialized);

            (0, _chai.expect)(result).to.equal('@testuser');
        });
    });
});
/* jshint expr:true */
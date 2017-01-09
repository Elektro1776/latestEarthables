define('ghost-admin/tests/unit/transforms/slack-settings-test', ['exports', 'chai', 'ember-mocha', 'ember-array/utils', 'ghost-admin/models/slack-integration'], function (exports, _chai, _emberMocha, _emberArrayUtils, _ghostAdminModelsSlackIntegration) {

    (0, _emberMocha.describeModule)('transform:slack-settings', 'Unit: Transform: slack-settings', {}, function () {
        (0, _emberMocha.it)('deserializes settings json', function () {
            var transform = this.subject();
            var serialized = '[{"url":"http://myblog.com/blogpost1"}]';
            var result = transform.deserialize(serialized);

            (0, _chai.expect)(result.length).to.equal(1);
            (0, _chai.expect)(result[0]).to.be['instanceof'](_ghostAdminModelsSlackIntegration['default']);
            (0, _chai.expect)(result[0].get('url')).to.equal('http://myblog.com/blogpost1');
        });

        (0, _emberMocha.it)('serializes array of Slack settings', function () {
            var transform = this.subject();
            var deserialized = (0, _emberArrayUtils.A)([_ghostAdminModelsSlackIntegration['default'].create({ url: 'http://myblog.com/blogpost1' })]);
            var result = transform.serialize(deserialized);

            (0, _chai.expect)(result).to.equal('[{"url":"http://myblog.com/blogpost1"}]');
        });
    });
});
/* jshint expr:true */
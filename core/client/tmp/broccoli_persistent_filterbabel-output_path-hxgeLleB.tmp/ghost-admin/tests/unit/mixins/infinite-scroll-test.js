define('ghost-admin/tests/unit/mixins/infinite-scroll-test', ['exports', 'chai', 'mocha', 'ember-object', 'ghost-admin/mixins/infinite-scroll'], function (exports, _chai, _mocha, _emberObject, _ghostAdminMixinsInfiniteScroll) {

    (0, _mocha.describe)('Unit: Mixin: infinite-scroll', function () {
        // Replace this with your real tests.
        (0, _mocha.it)('works', function () {
            var InfiniteScrollObject = _emberObject['default'].extend(_ghostAdminMixinsInfiniteScroll['default']);
            var subject = InfiniteScrollObject.create();

            (0, _chai.expect)(subject).to.be.ok;
        });
    });
});
/* jshint expr:true */
define('ghost-admin/components/gh-blog-url', ['exports', 'ember-component', 'ember-service/inject'], function (exports, _emberComponent, _emberServiceInject) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: '',

        config: (0, _emberServiceInject['default'])()
    });
});
define('ghost-admin/utils/text-field', ['exports', 'ember-components/text-field'], function (exports, _emberComponentsTextField) {

    _emberComponentsTextField['default'].reopen({
        attributeBindings: ['autofocus']
    });
});
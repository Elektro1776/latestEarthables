define('ghost-admin/components/gh-content-view-container', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject'], function (exports, _emberComponent, _emberComputed, _emberServiceInject) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'section',
        classNames: ['gh-view', 'content-view-container'],

        mediaQueries: (0, _emberServiceInject['default'])(),
        previewIsHidden: (0, _emberComputed.reads)('mediaQueries.maxWidth900')
    });
});
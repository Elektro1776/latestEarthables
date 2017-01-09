define('ghost-admin/components/gh-url-preview', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject'], function (exports, _emberComponent, _emberComputed, _emberServiceInject) {

    /*
    Example usage:
    {{gh-url-preview prefix="tag" slug=theSlugValue tagName="p" classNames="description"}}
    */
    exports['default'] = _emberComponent['default'].extend({
        classNames: 'ghost-url-preview',
        prefix: null,
        slug: null,

        config: (0, _emberServiceInject['default'])(),

        url: (0, _emberComputed['default'])('slug', function () {
            // Get the blog URL and strip the scheme
            var blogUrl = this.get('config.blogUrl');
            // Remove `http[s]://`
            var noSchemeBlogUrl = blogUrl.substr(blogUrl.indexOf('://') + 3);

            // Get the prefix and slug values
            var prefix = this.get('prefix') ? this.get('prefix') + '/' : '';
            var slug = this.get('slug') ? this.get('slug') + '/' : '';

            // Join parts of the URL together with slashes
            var theUrl = noSchemeBlogUrl + '/' + prefix + slug;

            return theUrl;
        })
    });
});
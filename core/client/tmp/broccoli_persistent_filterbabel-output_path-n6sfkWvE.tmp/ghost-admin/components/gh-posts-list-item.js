define('ghost-admin/components/gh-posts-list-item', ['exports', 'jquery', 'ember', 'ember-component', 'ember-string', 'ember-computed', 'ember-service/inject', 'ghost-admin/mixins/active-link-wrapper', 'ember-invoke-action'], function (exports, _jquery, _ember, _emberComponent, _emberString, _emberComputed, _emberServiceInject, _ghostAdminMixinsActiveLinkWrapper, _emberInvokeAction) {

    // ember-cli-shims doesn't export these
    var ObjectProxy = _ember['default'].ObjectProxy;
    var PromiseProxyMixin = _ember['default'].PromiseProxyMixin;

    var ObjectPromiseProxy = ObjectProxy.extend(PromiseProxyMixin);

    exports['default'] = _emberComponent['default'].extend(_ghostAdminMixinsActiveLinkWrapper['default'], {
        tagName: 'li',
        classNameBindings: ['isFeatured:featured', 'isPage:page'],

        post: null,
        previewIsHidden: false,

        isFeatured: (0, _emberComputed.alias)('post.featured'),
        isPage: (0, _emberComputed.alias)('post.page'),
        isPublished: (0, _emberComputed.equal)('post.status', 'published'),
        isScheduled: (0, _emberComputed.equal)('post.status', 'scheduled'),

        ghostPaths: (0, _emberServiceInject['default'])(),
        timeZone: (0, _emberServiceInject['default'])(),

        authorName: (0, _emberComputed['default'])('post.author.name', 'post.author.email', function () {
            return this.get('post.author.name') || this.get('post.author.email');
        }),

        authorAvatar: (0, _emberComputed['default'])('post.author.image', function () {
            return this.get('post.author.image') || this.get('ghostPaths.subdir') + '/ghost/img/user-image.png';
        }),

        authorAvatarBackground: (0, _emberComputed['default'])('authorAvatar', function () {
            return (0, _emberString.htmlSafe)('background-image: url(' + this.get('authorAvatar') + ')');
        }),

        blogTimezone: (0, _emberComputed['default'])('timeZone.blogTimezone', function () {
            return ObjectPromiseProxy.create({
                promise: this.get('timeZone.blogTimezone')
            });
        }),

        click: function click() {
            this.sendAction('onClick', this.get('post'));
        },

        doubleClick: function doubleClick() {
            this.sendAction('onDoubleClick', this.get('post'));
        },

        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);
            this.addObserver('active', this, this.scrollIntoView);
        },

        willDestroyElement: function willDestroyElement() {
            this._super.apply(this, arguments);
            this.removeObserver('active', this, this.scrollIntoView);
            if (this.get('post.isDeleted') && this.get('onDelete')) {
                (0, _emberInvokeAction.invokeAction)(this, 'onDelete');
            }
        },

        scrollIntoView: function scrollIntoView() {
            if (!this.get('active')) {
                return;
            }

            var element = this.$();
            var offset = element.offset().top;
            var elementHeight = element.height();
            var container = (0, _jquery['default'])('.js-content-scrollbox');
            var containerHeight = container.height();
            var currentScroll = container.scrollTop();
            var isBelowTop = undefined,
                isAboveBottom = undefined,
                isOnScreen = undefined;

            isAboveBottom = offset < containerHeight;
            isBelowTop = offset > elementHeight;

            isOnScreen = isBelowTop && isAboveBottom;

            if (!isOnScreen) {
                // Scroll so that element is centered in container
                // 40 is the amount of padding on the container
                container.clearQueue().animate({
                    scrollTop: currentScroll + offset - 40 - containerHeight / 2
                });
            }
        }
    });
});
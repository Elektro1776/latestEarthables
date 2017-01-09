define('ghost-admin/components/gh-skip-link', ['exports', 'jquery', 'ember-component', 'ember-string'], function (exports, _jquery, _emberComponent, _emberString) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'a',
        anchor: '',
        classNames: ['sr-only', 'sr-only-focusable'],
        // Add attributes to component for href
        // href should be set to retain anchor properties
        // such as pointer cursor and text underline
        attributeBindings: ['href'],
        // Used so that upon clicking on the link
        // anchor behaviors or ignored
        href: (0, _emberString.htmlSafe)('javascript:;'),

        click: function click() {
            var anchor = this.get('anchor');
            var $el = (0, _jquery['default'])(anchor);

            if ($el) {
                // Scrolls to the top of main content or whatever
                // is passed to the anchor attribute
                (0, _jquery['default'])('body').scrollTop($el.offset().top);

                // This sets focus on the content which was skipped to
                // upon losing focus, the tabindex should be removed
                // so that normal keyboard navigation picks up from focused
                // element
                (0, _jquery['default'])($el).attr('tabindex', -1).on('blur focusout', function () {
                    (0, _jquery['default'])(this).removeAttr('tabindex');
                }).focus();
            }
        }
    });
});
/*jshint scripturl:true*/
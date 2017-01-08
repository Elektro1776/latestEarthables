define('ghost-admin/components/gh-ed-preview', ['exports', 'ember', 'ember-component', 'ember-object', 'ember-runloop', 'ember-array/utils', 'ghost-admin/helpers/gh-format-markdown'], function (exports, _ember, _emberComponent, _emberObject, _emberRunloop, _emberArrayUtils, _ghostAdminHelpersGhFormatMarkdown) {
    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

    // ember-cli-shims doesn't export uuid
    var uuid = _ember['default'].uuid;
    exports['default'] = _emberComponent['default'].extend({
        _scrollWrapper: null,

        previewHTML: '',

        init: function init() {
            this._super.apply(this, arguments);
            this.set('imageUploadComponents', (0, _emberArrayUtils.A)([]));
            this.buildPreviewHTML();
        },

        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);
            this._scrollWrapper = this.$().closest('.entry-preview-content');
            this.adjustScrollPosition(this.get('scrollPosition'));
        },

        didReceiveAttrs: function didReceiveAttrs(attrs) {
            this._super.apply(this, arguments);

            if (!attrs.oldAttrs) {
                return;
            }

            if (attrs.newAttrs.scrollPosition && attrs.newAttrs.scrollPosition.value !== attrs.oldAttrs.scrollPosition.value) {
                this.adjustScrollPosition(attrs.newAttrs.scrollPosition.value);
            }

            if (attrs.newAttrs.markdown.value !== attrs.oldAttrs.markdown.value) {
                _emberRunloop['default'].throttle(this, this.buildPreviewHTML, 30, false);
            }
        },

        adjustScrollPosition: function adjustScrollPosition(scrollPosition) {
            var scrollWrapper = this._scrollWrapper;

            if (scrollWrapper) {
                scrollWrapper.scrollTop(scrollPosition);
            }
        },

        buildPreviewHTML: function buildPreviewHTML() {
            var _this = this;

            var markdown = this.get('markdown');
            var html = (0, _ghostAdminHelpersGhFormatMarkdown.formatMarkdown)([markdown]).string;
            var template = document.createElement('template');
            template.innerHTML = html;
            var fragment = template.content;

            if (!fragment) {
                fragment = document.createDocumentFragment();

                while (template.childNodes[0]) {
                    fragment.appendChild(template.childNodes[0]);
                }
            }

            var dropzones = fragment.querySelectorAll('.js-drop-zone');
            var components = this.get('imageUploadComponents');

            if (dropzones.length !== components.length) {
                components = (0, _emberArrayUtils.A)([]);
                this.set('imageUploadComponents', components);
            }

            [].concat(_toConsumableArray(dropzones)).forEach(function (oldEl, i) {
                var el = oldEl.cloneNode(true);
                var component = components[i];
                var uploadTarget = el.querySelector('.js-upload-target');
                var altTextWrapper = oldEl.querySelector('.js-drop-zone .description strong');
                var id = uuid();
                var destinationElementId = 'image-uploader-' + id;
                var src = undefined,
                    altText = undefined;

                if (uploadTarget) {
                    src = uploadTarget.getAttribute('src');
                }

                if (altTextWrapper) {
                    altText = altTextWrapper.innerHTML;
                }

                if (component) {
                    component.set('destinationElementId', destinationElementId);
                    component.set('src', src);
                    component.set('altText', altText);
                } else {
                    var imageUpload = _emberObject['default'].create({
                        destinationElementId: destinationElementId,
                        id: id,
                        src: src,
                        altText: altText,
                        index: i
                    });

                    _this.get('imageUploadComponents').pushObject(imageUpload);
                }

                el.id = destinationElementId;
                el.innerHTML = '';
                el.classList.remove('image-uploader');

                oldEl.parentNode.replaceChild(el, oldEl);
            });

            this.set('previewHTML', fragment);
        },

        actions: {
            updateImageSrc: function updateImageSrc(index, url) {
                this.attrs.updateImageSrc(index, url);
            },

            updateHeight: function updateHeight() {
                this.attrs.updateHeight(this.$().height());
            }
        }
    });
});
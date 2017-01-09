define('ghost-admin/components/gh-profile-image', ['exports', 'ember-component', 'ember-computed', 'ember-string', 'ember-service/inject', 'ember-utils', 'ember-runloop', 'ember-ajax/services/ajax', 'ember-ajax/errors'], function (exports, _emberComponent, _emberComputed, _emberString, _emberServiceInject, _emberUtils, _emberRunloop, _emberAjaxServicesAjax, _emberAjaxErrors) {

    /**
     * A component to manage a user profile image. By default it just handles picture uploads,
     * but if passed a bound 'email' property it will render the user's gravatar image
     *
     * Example: {{gh-profile-image email=controllerEmailProperty setImage="controllerActionName" debounce=500}}
     *
     * @param  {int}            size              The size of the image to render
     * @param  {String}         email             Reference to a bound email object if gravatar image behavior is desired.
     * @param  {String|action}  setImage          The string name of the action on the controller to be called when an image is added.
     * @param  {int}            debounce          Period to wait after changes to email before attempting to load gravatar
     * @property  {Boolean}     hasUploadedImage  Whether or not the user has uploaded an image (whether or not to show the default image/gravatar image)
     * @property  {String}      defaultImage      String containing the background-image css property of the default user profile image
     * @property  {String}      imageBackground   String containing the background-image css property with the gravatar url
     */
    exports['default'] = _emberComponent['default'].extend({
        email: '',
        size: 180,
        debounce: 300,

        validEmail: '',
        hasUploadedImage: false,
        fileStorage: true,
        ajax: _emberAjaxServicesAjax['default'].create(),

        config: (0, _emberServiceInject['default'])(),
        ghostPaths: (0, _emberServiceInject['default'])(),

        displayGravatar: (0, _emberComputed.notEmpty)('validEmail'),

        init: function init() {
            this._super.apply(this, arguments);
            // Fire this immediately in case we're initialized with a valid email
            this.trySetValidEmail();
        },

        defaultImage: (0, _emberComputed['default'])('ghostPaths', function () {
            var url = this.get('ghostPaths.subdir') + '/ghost/img/user-image.png';
            return (0, _emberString.htmlSafe)('background-image: url(' + url + ')');
        }),

        trySetValidEmail: function trySetValidEmail() {
            if (!this.get('isDestroyed')) {
                var email = this.get('email');
                this.set('validEmail', validator.isEmail(email) ? email : '');
            }
        },

        didReceiveAttrs: function didReceiveAttrs(attrs) {
            this._super.apply(this, arguments);
            var timeout = parseInt(attrs.newAttrs.throttle || this.get('debounce'));
            _emberRunloop['default'].debounce(this, 'trySetValidEmail', timeout);
        },

        imageBackground: (0, _emberComputed['default'])('validEmail', 'size', function () {
            var _this = this;

            var email = this.get('validEmail');
            var size = this.get('size');
            var style = '';

            if (!(0, _emberUtils.isBlank)(email)) {
                var gravatarUrl = '//www.gravatar.com/avatar/' + window.md5(email) + '?s=' + size + '&d=404';

                this.get('ajax').request(gravatarUrl)['catch'](function (error) {
                    var defaultImageUrl = 'url("' + _this.get('ghostPaths.subdir') + '/ghost/img/user-image.png")';

                    if ((0, _emberAjaxErrors.isNotFoundError)(error)) {
                        _this.$('.placeholder-img')[0].style.backgroundImage = (0, _emberString.htmlSafe)(defaultImageUrl);
                    } else {
                        _this.$('.placeholder-img')[0].style.backgroundImage = 'url()';
                    }
                });

                style = 'background-image: url(' + gravatarUrl + ')';
            }
            return (0, _emberString.htmlSafe)(style);
        }),

        didInsertElement: function didInsertElement() {
            var size = this.get('size');
            var uploadElement = this.$('.js-file-input');

            this._super.apply(this, arguments);

            // while theoretically the 'add' and 'processalways' functions could be
            // added as properties of the hash passed to fileupload(), for some reason
            // they needed to be placed in an on() call for the add method to work correctly
            uploadElement.fileupload({
                url: this.get('ghostPaths.url').api('uploads'),
                dropZone: this.$('.js-img-dropzone'),
                previewMaxHeight: size,
                previewMaxWidth: size,
                previewCrop: true,
                maxNumberOfFiles: 1,
                autoUpload: false
            }).on('fileuploadadd', _emberRunloop['default'].bind(this, this.queueFile)).on('fileuploadprocessalways', _emberRunloop['default'].bind(this, this.triggerPreview));
        },

        willDestroyElement: function willDestroyElement() {
            var $input = this.$('.js-file-input');

            this._super.apply(this, arguments);

            if ($input.length && $input.data()['blueimp-fileupload']) {
                $input.fileupload('destroy');
            }
        },

        queueFile: function queueFile(e, data) {
            var fileName = data.files[0].name;

            if (/\.(gif|jpe?g|png|svg?z)$/i.test(fileName)) {
                this.sendAction('setImage', data);
            }
        },

        triggerPreview: function triggerPreview(e, data) {
            var file = data.files[data.index];

            if (file.preview) {
                this.set('hasUploadedImage', true);
                // necessary jQuery code because file.preview is a raw DOM object
                // potential todo: rename 'gravatar-img' class in the CSS to be something
                // that both the gravatar and the image preview can use that's not so confusing
                this.$('.js-img-preview').empty().append(this.$(file.preview).addClass('gravatar-img'));
            }
        }
    });
});
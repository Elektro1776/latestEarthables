define('ghost-admin/components/modals/upload-image', ['exports', 'ember-computed', 'ember-service/inject', 'ember-utils', 'ghost-admin/components/modals/base', 'ghost-admin/utils/caja-sanitizers'], function (exports, _emberComputed, _emberServiceInject, _emberUtils, _ghostAdminComponentsModalsBase, _ghostAdminUtilsCajaSanitizers) {
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({
        model: null,
        submitting: false,

        url: '',
        newUrl: '',

        config: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),

        image: (0, _emberComputed['default'])('model.model', 'model.imageProperty', {
            get: function get() {
                var imageProperty = this.get('model.imageProperty');

                return this.get('model.model.' + imageProperty);
            },

            set: function set(key, value) {
                var model = this.get('model.model');
                var imageProperty = this.get('model.imageProperty');

                return model.set(imageProperty, value);
            }
        }),

        didReceiveAttrs: function didReceiveAttrs() {
            var image = this.get('image');
            this.set('url', image);
            this.set('newUrl', image);
        },

        // TODO: should validation be handled in the gh-image-uploader component?
        //  pro - consistency everywhere, simplification here
        //  con - difficult if the "save" is happening externally as it does here
        //
        //  maybe it should be handled at the model level?
        //      - automatically present everywhere
        //      - file uploads should always result in valid urls so it should only
        //        affect the url input form
        keyDown: function keyDown() {
            this._setErrorState(false);
        },

        _setErrorState: function _setErrorState(state) {
            if (state) {
                this.$('.url').addClass('error');
            } else {
                this.$('.url').removeClass('error');
            }
        },

        _validateUrl: function _validateUrl(url) {
            if (!(0, _emberUtils.isEmpty)(url) && !_ghostAdminUtilsCajaSanitizers['default'].url(url)) {
                this._setErrorState(true);
                return { message: 'Image URI is not valid' };
            }

            return true;
        },
        // end validation

        actions: {
            fileUploaded: function fileUploaded(url) {
                this.set('url', url);
                this.set('newUrl', url);
            },

            removeImage: function removeImage() {
                this.set('url', '');
                this.set('newUrl', '');
            },

            confirm: function confirm() {
                var _this = this;

                var model = this.get('model.model');
                var newUrl = this.get('newUrl');
                var result = this._validateUrl(newUrl);
                var notifications = this.get('notifications');

                if (result === true) {
                    this.set('submitting', true);
                    this.set('image', newUrl);

                    model.save()['catch'](function (err) {
                        notifications.showAPIError(err, { key: 'image.upload' });
                    })['finally'](function () {
                        _this.send('closeModal');
                    });
                }
            }
        }
    });
});
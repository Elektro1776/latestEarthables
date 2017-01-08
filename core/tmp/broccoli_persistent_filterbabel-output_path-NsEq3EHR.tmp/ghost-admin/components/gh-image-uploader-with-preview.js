define('ghost-admin/components/gh-image-uploader-with-preview', ['exports', 'ember-component'], function (exports, _emberComponent) {
    exports['default'] = _emberComponent['default'].extend({
        actions: {
            update: function update() {
                if (typeof this.attrs.update === 'function') {
                    var _attrs;

                    (_attrs = this.attrs).update.apply(_attrs, arguments);
                }
            },

            onInput: function onInput() {
                if (typeof this.attrs.onInput === 'function') {
                    var _attrs2;

                    (_attrs2 = this.attrs).onInput.apply(_attrs2, arguments);
                }
            },

            uploadStarted: function uploadStarted() {
                if (typeof this.attrs.uploadStarted === 'function') {
                    var _attrs3;

                    (_attrs3 = this.attrs).uploadStarted.apply(_attrs3, arguments);
                }
            },

            uploadFinished: function uploadFinished() {
                if (typeof this.attrs.uploadFinished === 'function') {
                    var _attrs4;

                    (_attrs4 = this.attrs).uploadFinished.apply(_attrs4, arguments);
                }
            },

            formChanged: function formChanged() {
                if (typeof this.attrs.formChanged === 'function') {
                    var _attrs5;

                    (_attrs5 = this.attrs).formChanged.apply(_attrs5, arguments);
                }
            }
        }
    });
});
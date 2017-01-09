define('ghost-admin/components/gh-file-upload', ['exports', 'ember-component'], function (exports, _emberComponent) {
    exports['default'] = _emberComponent['default'].extend({
        _file: null,

        acceptEncoding: null,
        uploadButtonText: 'Text',
        uploadButtonDisabled: true,

        onUpload: null,
        onAdd: null,

        shouldResetForm: true,

        change: function change(event) {
            this.set('uploadButtonDisabled', false);
            this.sendAction('onAdd');
            this._file = event.target.files[0];
        },

        actions: {
            upload: function upload() {
                if (!this.get('uploadButtonDisabled') && this._file) {
                    this.sendAction('onUpload', this._file);
                }

                // Prevent double post by disabling the button.
                this.set('uploadButtonDisabled', true);

                // Reset form
                if (this.get('shouldResetForm')) {
                    this.$().closest('form')[0].reset();
                }
            }
        }
    });
});
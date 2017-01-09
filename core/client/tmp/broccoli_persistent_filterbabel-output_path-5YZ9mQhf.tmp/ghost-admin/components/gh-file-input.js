define('ghost-admin/components/gh-file-input', ['exports', 'ember', 'emberx-file-input/components/x-file-input'], function (exports, _ember, _emberxFileInputComponentsXFileInput) {

    // ember-cli-shims doesn't export Ember.testing
    var testing = _ember['default'].testing;
    exports['default'] = _emberxFileInputComponentsXFileInput['default'].extend({
        change: function change(e) {
            var files = testing ? (e.originalEvent || e).testingFiles : e.target.files;
            this.sendAction('action', files);
        }
    });
});
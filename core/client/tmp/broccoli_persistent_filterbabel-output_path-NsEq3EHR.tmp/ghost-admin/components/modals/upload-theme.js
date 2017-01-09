define('ghost-admin/components/modals/upload-theme', ['exports', 'ghost-admin/components/modals/base', 'ember-computed', 'ember-invoke-action', 'ghost-admin/utils/ghost-paths', 'ghost-admin/services/ajax', 'ember-runloop', 'ember-service/inject', 'ember-metal/get'], function (exports, _ghostAdminComponentsModalsBase, _emberComputed, _emberInvokeAction, _ghostAdminUtilsGhostPaths, _ghostAdminServicesAjax, _emberRunloop, _emberServiceInject, _emberMetalGet) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({

        accept: ['application/zip', 'application/x-zip-compressed'],
        extensions: ['zip'],
        availableThemes: null,
        closeDisabled: false,
        file: null,
        theme: false,
        displayOverwriteWarning: false,

        eventBus: (0, _emberServiceInject['default'])(),

        hideUploader: (0, _emberComputed.or)('theme', 'displayOverwriteWarning'),

        uploadUrl: (0, _emberComputed['default'])(function () {
            return (0, _ghostAdminUtilsGhostPaths['default'])().apiRoot + '/themes/upload/';
        }),

        themeName: (0, _emberComputed['default'])('theme.{name,package.name}', function () {
            var t = this.get('theme');

            return t['package'] ? t['package'].name + ' - ' + t['package'].version : t.name;
        }),

        availableThemeNames: (0, _emberComputed.mapBy)('model.availableThemes', 'name'),

        fileThemeName: (0, _emberComputed['default'])('file', function () {
            var file = this.get('file');
            return file.name.replace(/\.zip$/, '');
        }),

        canActivateTheme: (0, _emberComputed['default'])('theme', function () {
            var theme = this.get('theme');
            return theme && !theme.active;
        }),

        actions: {
            validateTheme: function validateTheme(file) {
                var themeName = file.name.replace(/\.zip$/, '').replace(/[^\w@.]/gi, '-');

                var availableThemeNames = this.get('availableThemeNames');

                this.set('file', file);

                var _$$exec = /(?:\.([^.]+))?$/.exec(file.name);

                var _$$exec2 = _slicedToArray(_$$exec, 2);

                var extension = _$$exec2[1];

                var extensions = this.get('extensions');

                if (!extension || extensions.indexOf(extension.toLowerCase()) === -1) {
                    return new _ghostAdminServicesAjax.UnsupportedMediaTypeError();
                }

                if (file.name.match(/^casper\.zip$/i)) {
                    return { errors: [{ message: 'Sorry, the default Casper theme cannot be overwritten.<br>Please rename your zip file and try again.' }] };
                }

                if (!this._allowOverwrite && availableThemeNames.includes(themeName)) {
                    this.set('displayOverwriteWarning', true);
                    return false;
                }

                return true;
            },

            confirmOverwrite: function confirmOverwrite() {
                this._allowOverwrite = true;
                this.set('displayOverwriteWarning', false);

                // we need to schedule afterRender so that the upload component is
                // displayed again in order to subscribe/respond to the event bus
                _emberRunloop['default'].schedule('afterRender', this, function () {
                    this.get('eventBus').publish('themeUploader:upload', this.get('file'));
                });
            },

            uploadStarted: function uploadStarted() {
                this.set('closeDisabled', true);
            },

            uploadFinished: function uploadFinished() {
                this.set('closeDisabled', false);
            },

            uploadSuccess: function uploadSuccess(response) {
                var _response$themes = _slicedToArray(response.themes, 1);

                var theme = _response$themes[0];

                this.set('theme', theme);

                if ((0, _emberMetalGet['default'])(theme, 'warnings.length') > 0) {
                    this.set('validationWarnings', theme.warnings);
                }

                // invoke the passed in confirm action
                (0, _emberInvokeAction.invokeAction)(this, 'model.uploadSuccess', this.get('theme'));
            },

            uploadFailed: function uploadFailed(error) {
                if ((0, _ghostAdminServicesAjax.isThemeValidationError)(error)) {
                    this.set('validationErrors', error.errors[0].errorDetails);
                }
            },

            confirm: function confirm() {
                // noop - we don't want the enter key doing anything
            },

            activate: function activate() {
                (0, _emberInvokeAction.invokeAction)(this, 'model.activate', this.get('theme'));
                (0, _emberInvokeAction.invokeAction)(this, 'closeModal');
            },

            closeModal: function closeModal() {
                if (!this.get('closeDisabled')) {
                    this._super.apply(this, arguments);
                }
            },

            reset: function reset() {
                this.set('validationErrors', null);
            }
        }
    });
});
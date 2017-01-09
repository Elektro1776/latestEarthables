define('ghost-admin/components/gh-image-uploader', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject', 'ember-string', 'ember-utils', 'ember-array/utils', 'ember-runloop', 'ember-invoke-action', 'ghost-admin/utils/ghost-paths', 'ghost-admin/services/ajax'], function (exports, _emberComponent, _emberComputed, _emberServiceInject, _emberString, _emberUtils, _emberArrayUtils, _emberRunloop, _emberInvokeAction, _ghostAdminUtilsGhostPaths, _ghostAdminServicesAjax) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = _emberComponent['default'].extend({
        tagName: 'section',
        classNames: ['gh-image-uploader'],
        classNameBindings: ['dragClass'],

        image: null,
        text: '',
        altText: '',
        saveButton: true,
        accept: 'image/gif,image/jpg,image/jpeg,image/png,image/svg+xml',
        extensions: ['gif', 'jpg', 'jpeg', 'png', 'svg'],
        validate: null,

        dragClass: null,
        failureMessage: null,
        file: null,
        formType: 'upload',
        url: null,
        uploadPercentage: 0,

        ajax: (0, _emberServiceInject['default'])(),
        config: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),

        // TODO: this wouldn't be necessary if the server could accept direct
        // file uploads
        formData: (0, _emberComputed['default'])('file', function () {
            var file = this.get('file');
            var formData = new FormData();

            formData.append('uploadimage', file);

            return formData;
        }),

        description: (0, _emberComputed['default'])('text', 'altText', function () {
            var altText = this.get('altText');

            return this.get('text') || (altText ? 'Upload image of "' + altText + '"' : 'Upload an image');
        }),

        progressStyle: (0, _emberComputed['default'])('uploadPercentage', function () {
            var percentage = this.get('uploadPercentage');
            var width = '';

            if (percentage > 0) {
                width = percentage + '%';
            } else {
                width = '0';
            }

            return (0, _emberString.htmlSafe)('width: ' + width);
        }),

        canShowUploadForm: (0, _emberComputed['default'])('config.fileStorage', function () {
            return this.get('config.fileStorage') !== false;
        }),

        showUploadForm: (0, _emberComputed['default'])('formType', function () {
            var canShowUploadForm = this.get('canShowUploadForm');
            var formType = this.get('formType');

            return formType === 'upload' && canShowUploadForm;
        }),

        didReceiveAttrs: function didReceiveAttrs() {
            var image = this.get('image');
            this.set('url', image);
        },

        dragOver: function dragOver(event) {
            var showUploadForm = this.get('showUploadForm');

            if (!event.dataTransfer) {
                return;
            }

            // this is needed to work around inconsistencies with dropping files
            // from Chrome's downloads bar
            var eA = event.dataTransfer.effectAllowed;
            event.dataTransfer.dropEffect = eA === 'move' || eA === 'linkMove' ? 'move' : 'copy';

            event.stopPropagation();
            event.preventDefault();

            if (showUploadForm) {
                this.set('dragClass', '-drag-over');
            }
        },

        dragLeave: function dragLeave(event) {
            var showUploadForm = this.get('showUploadForm');

            event.preventDefault();

            if (showUploadForm) {
                this.set('dragClass', null);
            }
        },

        drop: function drop(event) {
            var showUploadForm = this.get('showUploadForm');

            event.preventDefault();

            this.set('dragClass', null);

            if (showUploadForm) {
                if (event.dataTransfer.files) {
                    this.send('fileSelected', event.dataTransfer.files);
                }
            }
        },

        _uploadStarted: function _uploadStarted() {
            (0, _emberInvokeAction.invokeAction)(this, 'uploadStarted');
        },

        _uploadProgress: function _uploadProgress(event) {
            var _this = this;

            if (event.lengthComputable) {
                (0, _emberRunloop['default'])(function () {
                    var percentage = Math.round(event.loaded / event.total * 100);
                    _this.set('uploadPercentage', percentage);
                });
            }
        },

        _uploadFinished: function _uploadFinished() {
            (0, _emberInvokeAction.invokeAction)(this, 'uploadFinished');
        },

        _uploadSuccess: function _uploadSuccess(response) {
            this.set('url', response);
            this.send('saveUrl');
            this.send('reset');
            (0, _emberInvokeAction.invokeAction)(this, 'uploadSuccess', response);
        },

        _uploadFailed: function _uploadFailed(error) {
            var message = undefined;

            if ((0, _ghostAdminServicesAjax.isVersionMismatchError)(error)) {
                this.get('notifications').showAPIError(error);
            }

            if ((0, _ghostAdminServicesAjax.isUnsupportedMediaTypeError)(error)) {
                message = 'The image type you uploaded is not supported. Please use .PNG, .JPG, .GIF, .SVG.';
            } else if ((0, _ghostAdminServicesAjax.isRequestEntityTooLargeError)(error)) {
                message = 'The image you uploaded was larger than the maximum file size your server allows.';
            } else if (error.errors && !(0, _emberUtils.isBlank)(error.errors[0].message)) {
                message = error.errors[0].message;
            } else {
                message = 'Something went wrong :(';
            }

            this.set('failureMessage', message);
            (0, _emberInvokeAction.invokeAction)(this, 'uploadFailed', error);
        },

        generateRequest: function generateRequest() {
            var _this2 = this;

            var ajax = this.get('ajax');
            var formData = this.get('formData');
            var url = (0, _ghostAdminUtilsGhostPaths['default'])().apiRoot + '/uploads/';

            this._uploadStarted();

            ajax.post(url, {
                data: formData,
                processData: false,
                contentType: false,
                dataType: 'text',
                xhr: function xhr() {
                    var xhr = new window.XMLHttpRequest();

                    xhr.upload.addEventListener('progress', function (event) {
                        _this2._uploadProgress(event);
                    }, false);

                    return xhr;
                }
            }).then(function (response) {
                var url = JSON.parse(response);
                _this2._uploadSuccess(url);
            })['catch'](function (error) {
                _this2._uploadFailed(error);
            })['finally'](function () {
                _this2._uploadFinished();
            });
        },

        _validate: function _validate(file) {
            if (this.get('validate')) {
                return (0, _emberInvokeAction.invokeAction)(this, 'validate', file);
            } else {
                return this._defaultValidator(file);
            }
        },

        _defaultValidator: function _defaultValidator(file) {
            var extensions = this.get('extensions');

            var _$$exec = /(?:\.([^.]+))?$/.exec(file.name);

            var _$$exec2 = _slicedToArray(_$$exec, 2);

            var extension = _$$exec2[1];

            if (!(0, _emberArrayUtils.isEmberArray)(extensions)) {
                extensions = extensions.split(',');
            }

            if (!extension || extensions.indexOf(extension.toLowerCase()) === -1) {
                return new _ghostAdminServicesAjax.UnsupportedMediaTypeError();
            }

            return true;
        },

        actions: {
            fileSelected: function fileSelected(fileList) {
                // can't use array destructuring here as FileList is not a strict
                // array and fails in Safari
                // jscs:disable requireArrayDestructuring
                var file = fileList[0];
                // jscs:enable requireArrayDestructuring
                var validationResult = this._validate(file);

                this.set('file', file);
                (0, _emberInvokeAction.invokeAction)(this, 'fileSelected', file);

                if (validationResult === true) {
                    _emberRunloop['default'].schedule('actions', this, function () {
                        this.generateRequest();
                    });
                } else {
                    this._uploadFailed(validationResult);
                }
            },

            onInput: function onInput(url) {
                this.set('url', url);
                (0, _emberInvokeAction.invokeAction)(this, 'onInput', url);
            },

            reset: function reset() {
                this.set('file', null);
                this.set('uploadPercentage', 0);
            },

            switchForm: function switchForm(formType) {
                this.set('formType', formType);

                _emberRunloop['default'].scheduleOnce('afterRender', this, function () {
                    (0, _emberInvokeAction.invokeAction)(this, 'formChanged', formType);
                });
            },

            saveUrl: function saveUrl() {
                var url = this.get('url');
                (0, _emberInvokeAction.invokeAction)(this, 'update', url);
            }
        }
    });
});
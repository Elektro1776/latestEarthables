define('ghost-admin/components/gh-file-uploader', ['exports', 'ember-component', 'ember-string', 'ember-service/inject', 'ember-computed', 'ember-utils', 'ember-runloop', 'ember-array/utils', 'ember-invoke-action', 'ghost-admin/services/ajax'], function (exports, _emberComponent, _emberString, _emberServiceInject, _emberComputed, _emberUtils, _emberRunloop, _emberArrayUtils, _emberInvokeAction, _ghostAdminServicesAjax) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = _emberComponent['default'].extend({
        tagName: 'section',
        classNames: ['gh-image-uploader'],
        classNameBindings: ['dragClass'],

        labelText: 'Select or drag-and-drop a file',
        url: null,
        paramName: 'file',
        accept: ['text/csv'],
        extensions: ['csv'],
        validate: null,

        file: null,
        response: null,

        dragClass: null,
        failureMessage: null,
        uploadPercentage: 0,

        ajax: (0, _emberServiceInject['default'])(),
        eventBus: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),

        formData: (0, _emberComputed['default'])('file', function () {
            var paramName = this.get('paramName');
            var file = this.get('file');
            var formData = new FormData();

            formData.append(paramName, file);

            return formData;
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

        // we can optionally listen to a named event bus channel so that the upload
        // process can be triggered externally
        init: function init() {
            this._super.apply(this, arguments);
            var listenTo = this.get('listenTo');

            if (listenTo) {
                this.get('eventBus').subscribe(listenTo + ':upload', this, function (file) {
                    if (file) {
                        this.set('file', file);
                    }
                    this.send('upload');
                });
            }
        },

        didReceiveAttrs: function didReceiveAttrs() {
            this._super.apply(this, arguments);
            var accept = this.get('accept');
            var extensions = this.get('extensions');

            this._accept = !(0, _emberUtils.isBlank)(accept) && !(0, _emberArrayUtils.isEmberArray)(accept) ? accept.split(',') : accept;
            this._extensions = !(0, _emberUtils.isBlank)(extensions) && !(0, _emberArrayUtils.isEmberArray)(extensions) ? extensions.split(',') : extensions;
        },

        willDestroyElement: function willDestroyElement() {
            var listenTo = this.get('listenTo');

            this._super.apply(this, arguments);

            if (listenTo) {
                this.get('eventBus').unsubscribe(listenTo + ':upload');
            }
        },

        dragOver: function dragOver(event) {
            if (!event.dataTransfer) {
                return;
            }

            // this is needed to work around inconsistencies with dropping files
            // from Chrome's downloads bar
            var eA = event.dataTransfer.effectAllowed;
            event.dataTransfer.dropEffect = eA === 'move' || eA === 'linkMove' ? 'move' : 'copy';

            event.stopPropagation();
            event.preventDefault();

            this.set('dragClass', '-drag-over');
        },

        dragLeave: function dragLeave(event) {
            event.preventDefault();
            this.set('dragClass', null);
        },

        drop: function drop(event) {
            event.preventDefault();
            this.set('dragClass', null);
            if (event.dataTransfer.files) {
                (0, _emberInvokeAction.invoke)(this, 'fileSelected', event.dataTransfer.files);
            }
        },

        generateRequest: function generateRequest() {
            var _this = this;

            var ajax = this.get('ajax');
            var formData = this.get('formData');
            var url = this.get('url');

            (0, _emberInvokeAction.invokeAction)(this, 'uploadStarted');

            ajax.post(url, {
                data: formData,
                processData: false,
                contentType: false,
                dataType: 'text',
                xhr: function xhr() {
                    var xhr = new window.XMLHttpRequest();

                    xhr.upload.addEventListener('progress', function (event) {
                        _this._uploadProgress(event);
                    }, false);

                    return xhr;
                }
            }).then(function (response) {
                _this._uploadSuccess(JSON.parse(response));
            })['catch'](function (error) {
                _this._uploadFailed(error);
            })['finally'](function () {
                (0, _emberInvokeAction.invokeAction)(_this, 'uploadFinished');
            });
        },

        _uploadProgress: function _uploadProgress(event) {
            var _this2 = this;

            if (event.lengthComputable) {
                (0, _emberRunloop['default'])(function () {
                    var percentage = Math.round(event.loaded / event.total * 100);
                    _this2.set('uploadPercentage', percentage);
                });
            }
        },

        _uploadSuccess: function _uploadSuccess(response) {
            (0, _emberInvokeAction.invokeAction)(this, 'uploadSuccess', response);
            (0, _emberInvokeAction.invoke)(this, 'reset');
        },

        _uploadFailed: function _uploadFailed(error) {
            var message = undefined;

            if ((0, _ghostAdminServicesAjax.isVersionMismatchError)(error)) {
                this.get('notifications').showAPIError(error);
            }

            if ((0, _ghostAdminServicesAjax.isUnsupportedMediaTypeError)(error)) {
                message = 'The file type you uploaded is not supported.';
            } else if ((0, _ghostAdminServicesAjax.isRequestEntityTooLargeError)(error)) {
                message = 'The file you uploaded was larger than the maximum file size your server allows.';
            } else if (error.errors && !(0, _emberUtils.isBlank)(error.errors[0].message)) {
                message = (0, _emberString.htmlSafe)(error.errors[0].message);
            } else {
                message = 'Something went wrong :(';
            }

            this.set('failureMessage', message);
            (0, _emberInvokeAction.invokeAction)(this, 'uploadFailed', error);
        },

        _validate: function _validate(file) {
            if (this.get('validate')) {
                return (0, _emberInvokeAction.invokeAction)(this, 'validate', file);
            } else {
                return this._defaultValidator(file);
            }
        },

        _defaultValidator: function _defaultValidator(file) {
            var _$$exec = /(?:\.([^.]+))?$/.exec(file.name);

            var _$$exec2 = _slicedToArray(_$$exec, 2);

            var extension = _$$exec2[1];

            var extensions = this._extensions;

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

            upload: function upload() {
                if (this.get('file')) {
                    this.generateRequest();
                }
            },

            reset: function reset() {
                this.set('file', null);
                this.set('uploadPercentage', 0);
                this.set('failureMessage', null);
            }
        }
    });
});
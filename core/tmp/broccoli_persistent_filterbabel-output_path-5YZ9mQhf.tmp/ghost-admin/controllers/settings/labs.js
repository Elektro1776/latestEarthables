define('ghost-admin/controllers/settings/labs', ['exports', 'jquery', 'rsvp', 'ember-controller', 'ember-service/inject', 'ember-utils', 'ember-array/utils', 'ghost-admin/services/ajax'], function (exports, _jquery, _rsvp, _emberController, _emberServiceInject, _emberUtils, _emberArrayUtils, _ghostAdminServicesAjax) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    var Promise = _rsvp['default'].Promise;
    exports['default'] = _emberController['default'].extend({
        uploadButtonText: 'Import',
        importErrors: '',
        submitting: false,
        showDeleteAllModal: false,

        importMimeType: ['application/json', 'application/zip', 'application/x-zip-compressed'],

        ghostPaths: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),
        ajax: (0, _emberServiceInject['default'])(),

        // TODO: convert to ember-concurrency task
        _validate: function _validate(file) {
            // Windows doesn't have mime-types for json files by default, so we
            // need to have some additional checking
            if (file.type === '') {
                // First check file extension so we can early return

                var _$$exec = /(?:\.([^.]+))?$/.exec(file.name);

                var _$$exec2 = _slicedToArray(_$$exec, 2);

                var extension = _$$exec2[1];

                if (!extension || extension.toLowerCase() !== 'json') {
                    return _rsvp['default'].reject(new _ghostAdminServicesAjax.UnsupportedMediaTypeError());
                }

                return new Promise(function (resolve, reject) {
                    // Extension is correct, so check the contents of the file
                    var reader = new FileReader();

                    reader.onload = function () {
                        var result = reader.result;

                        try {
                            JSON.parse(result);

                            return resolve();
                        } catch (e) {
                            return reject(new _ghostAdminServicesAjax.UnsupportedMediaTypeError());
                        }
                    };

                    reader.readAsText(file);
                });
            }

            var accept = this.get('importMimeType');

            if (!(0, _emberUtils.isBlank)(accept) && file && accept.indexOf(file.type) === -1) {
                return _rsvp['default'].reject(new _ghostAdminServicesAjax.UnsupportedMediaTypeError());
            }

            return _rsvp['default'].resolve();
        },

        actions: {
            onUpload: function onUpload(file) {
                var _this = this;

                var formData = new FormData();
                var notifications = this.get('notifications');
                var currentUserId = this.get('session.user.id');
                var dbUrl = this.get('ghostPaths.url').api('db');

                this.set('uploadButtonText', 'Importing');
                this.set('importErrors', '');

                return this._validate(file).then(function () {
                    formData.append('importfile', file);

                    return _this.get('ajax').post(dbUrl, {
                        data: formData,
                        dataType: 'json',
                        cache: false,
                        contentType: false,
                        processData: false
                    });
                }).then(function () {
                    // Clear the store, so that all the new data gets fetched correctly.
                    _this.store.unloadAll();
                    // Reload currentUser and set session
                    _this.set('session.user', _this.store.findRecord('user', currentUserId));
                    // TODO: keep as notification, add link to view content
                    notifications.showNotification('Import successful.', { key: 'import.upload.success' });
                })['catch'](function (response) {
                    if ((0, _ghostAdminServicesAjax.isUnsupportedMediaTypeError)(response)) {
                        _this.set('importErrors', [response]);
                        return;
                    }

                    if (response && response.errors && (0, _emberArrayUtils.isEmberArray)(response.errors)) {
                        _this.set('importErrors', response.errors);
                    }

                    notifications.showAlert('Import Failed', { type: 'error', key: 'import.upload.failed' });
                })['finally'](function () {
                    _this.set('uploadButtonText', 'Import');
                });
            },

            exportData: function exportData() {
                var dbUrl = this.get('ghostPaths.url').api('db');
                var accessToken = this.get('session.data.authenticated.access_token');
                var downloadURL = dbUrl + '?access_token=' + accessToken;
                var iframe = (0, _jquery['default'])('#iframeDownload');

                if (iframe.length === 0) {
                    iframe = (0, _jquery['default'])('<iframe>', { id: 'iframeDownload' }).hide().appendTo('body');
                }

                iframe.attr('src', downloadURL);
            },

            sendTestEmail: function sendTestEmail() {
                var _this2 = this;

                var notifications = this.get('notifications');
                var emailUrl = this.get('ghostPaths.url').api('mail', 'test');

                this.toggleProperty('submitting');

                this.get('ajax').post(emailUrl).then(function () {
                    notifications.showAlert('Check your email for the test message.', { type: 'info', key: 'test-email.send.success' });
                    _this2.toggleProperty('submitting');
                })['catch'](function (error) {
                    notifications.showAPIError(error, { key: 'test-email:send' });
                    _this2.toggleProperty('submitting');
                });
            },

            toggleDeleteAllModal: function toggleDeleteAllModal() {
                this.toggleProperty('showDeleteAllModal');
            }
        }
    });
});
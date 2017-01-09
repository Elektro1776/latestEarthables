define('ghost-admin/components/modals/new-subscriber', ['exports', 'ember-array/utils', 'ghost-admin/components/modals/base'], function (exports, _emberArrayUtils, _ghostAdminComponentsModalsBase) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({
        actions: {
            updateEmail: function updateEmail(newEmail) {
                this.set('model.email', newEmail);
                this.set('model.hasValidated', (0, _emberArrayUtils.A)());
                this.get('model.errors').clear();
            },

            confirm: function confirm() {
                var _this = this;

                var confirmAction = this.get('confirm');

                this.set('submitting', true);

                confirmAction().then(function () {
                    _this.send('closeModal');
                })['catch'](function (error) {
                    // TODO: server-side validation errors should be serialized
                    // properly so that errors are added to the model's errors
                    // property
                    if (error && error.isAdapterError) {
                        var _error$errors = _slicedToArray(error.errors, 1);

                        var firstError = _error$errors[0];
                        var message = firstError.message;
                        var errorType = firstError.errorType;

                        if (errorType === 'ValidationError') {
                            if (message && message.match(/email/i)) {
                                _this.get('model.errors').add('email', message);
                                _this.get('model.hasValidated').pushObject('email');
                                return;
                            }
                        }
                    }

                    // this is a route action so it should bubble up to the global
                    // error handler
                    throw error;
                })['finally'](function () {
                    if (!_this.get('isDestroying') && !_this.get('isDestroyed')) {
                        _this.set('submitting', false);
                    }
                });
            }
        }
    });
});
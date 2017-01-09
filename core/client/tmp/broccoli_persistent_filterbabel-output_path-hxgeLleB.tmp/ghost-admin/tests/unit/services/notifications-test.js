define('ghost-admin/tests/unit/services/notifications-test', ['exports', 'ember-runloop', 'ember-metal/get', 'ember-array/utils', 'ember-object', 'sinon', 'chai', 'ember-mocha', 'ember-ajax/errors', 'ghost-admin/services/ajax'], function (exports, _emberRunloop, _emberMetalGet, _emberArrayUtils, _emberObject, _sinon, _chai, _emberMocha, _emberAjaxErrors, _ghostAdminServicesAjax) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    (0, _emberMocha.describeModule)('service:notifications', 'Unit: Service: notifications', {}, function () {
        beforeEach(function () {
            this.subject().set('content', (0, _emberArrayUtils.A)());
            this.subject().set('delayedNotifications', (0, _emberArrayUtils.A)());
        });

        (0, _emberMocha.it)('filters alerts/notifications', function () {
            var notifications = this.subject();

            // wrapped in run-loop to enure alerts/notifications CPs are updated
            (0, _emberRunloop['default'])(function () {
                notifications.showAlert('Alert');
                notifications.showNotification('Notification');
            });

            (0, _chai.expect)(notifications.get('alerts.length')).to.equal(1);
            (0, _chai.expect)(notifications.get('alerts.firstObject.message')).to.equal('Alert');

            (0, _chai.expect)(notifications.get('notifications.length')).to.equal(1);
            (0, _chai.expect)(notifications.get('notifications.firstObject.message')).to.equal('Notification');
        });

        (0, _emberMocha.it)('#handleNotification deals with DS.Notification notifications', function () {
            var notifications = this.subject();
            var notification = _emberObject['default'].create({ message: '<h1>Test</h1>', status: 'alert' });

            notification.toJSON = function () {};

            notifications.handleNotification(notification);

            notification = notifications.get('alerts')[0];

            // alerts received from the server should be marked html safe
            (0, _chai.expect)(notification.get('message')).to.have.property('toHTML');
        });

        (0, _emberMocha.it)('#handleNotification defaults to notification if no status supplied', function () {
            var notifications = this.subject();

            notifications.handleNotification({ message: 'Test' }, false);

            (0, _chai.expect)(notifications.get('content')).to.deep.include({ message: 'Test', status: 'notification' });
        });

        (0, _emberMocha.it)('#showAlert adds POJO alerts', function () {
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.showAlert('Test Alert', { type: 'error' });
            });

            (0, _chai.expect)(notifications.get('alerts')).to.deep.include({ message: 'Test Alert', status: 'alert', type: 'error', key: undefined });
        });

        (0, _emberMocha.it)('#showAlert adds delayed notifications', function () {
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.showNotification('Test Alert', { type: 'error', delayed: true });
            });

            (0, _chai.expect)(notifications.get('delayedNotifications')).to.deep.include({ message: 'Test Alert', status: 'notification', type: 'error', key: undefined });
        });

        // in order to cater for complex keys that are suitable for i18n
        // we split on the second period and treat the resulting base as
        // the key for duplicate checking
        (0, _emberMocha.it)('#showAlert clears duplicates', function () {
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.showAlert('Kept');
                notifications.showAlert('Duplicate', { key: 'duplicate.key.fail' });
            });

            (0, _chai.expect)(notifications.get('alerts.length')).to.equal(2);

            (0, _emberRunloop['default'])(function () {
                notifications.showAlert('Duplicate with new message', { key: 'duplicate.key.success' });
            });

            (0, _chai.expect)(notifications.get('alerts.length')).to.equal(2);
            (0, _chai.expect)(notifications.get('alerts.lastObject.message')).to.equal('Duplicate with new message');
        });

        (0, _emberMocha.it)('#showNotification adds POJO notifications', function () {
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.showNotification('Test Notification', { type: 'success' });
            });

            (0, _chai.expect)(notifications.get('notifications')).to.deep.include({ message: 'Test Notification', status: 'notification', type: 'success', key: undefined });
        });

        (0, _emberMocha.it)('#showNotification adds delayed notifications', function () {
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.showNotification('Test Notification', { delayed: true });
            });

            (0, _chai.expect)(notifications.get('delayedNotifications')).to.deep.include({ message: 'Test Notification', status: 'notification', type: undefined, key: undefined });
        });

        (0, _emberMocha.it)('#showNotification clears existing notifications', function () {
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.showNotification('First');
                notifications.showNotification('Second');
            });

            (0, _chai.expect)(notifications.get('notifications.length')).to.equal(1);
            (0, _chai.expect)(notifications.get('notifications')).to.deep.equal([{ message: 'Second', status: 'notification', type: undefined, key: undefined }]);
        });

        (0, _emberMocha.it)('#showNotification keeps existing notifications if doNotCloseNotifications option passed', function () {
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.showNotification('First');
                notifications.showNotification('Second', { doNotCloseNotifications: true });
            });

            (0, _chai.expect)(notifications.get('notifications.length')).to.equal(2);
        });

        (0, _emberMocha.it)('#showAPIError handles single json response error', function () {
            var notifications = this.subject();
            var error = new _emberAjaxErrors.AjaxError([{ message: 'Single error' }]);

            (0, _emberRunloop['default'])(function () {
                notifications.showAPIError(error);
            });

            var alert = notifications.get('alerts.firstObject');
            (0, _chai.expect)((0, _emberMetalGet['default'])(alert, 'message')).to.equal('Single error');
            (0, _chai.expect)((0, _emberMetalGet['default'])(alert, 'status')).to.equal('alert');
            (0, _chai.expect)((0, _emberMetalGet['default'])(alert, 'type')).to.equal('error');
            (0, _chai.expect)((0, _emberMetalGet['default'])(alert, 'key')).to.equal('api-error');
        });

        (0, _emberMocha.it)('#showAPIError handles multiple json response errors', function () {
            var notifications = this.subject();
            var error = new _emberAjaxErrors.AjaxError([{ title: 'First error', message: 'First error message' }, { title: 'Second error', message: 'Second error message' }]);

            (0, _emberRunloop['default'])(function () {
                notifications.showAPIError(error);
            });

            (0, _chai.expect)(notifications.get('alerts.length')).to.equal(2);

            var _notifications$get = notifications.get('alerts');

            var _notifications$get2 = _slicedToArray(_notifications$get, 2);

            var alert1 = _notifications$get2[0];
            var alert2 = _notifications$get2[1];

            (0, _chai.expect)(alert1).to.deep.equal({ message: 'First error message', status: 'alert', type: 'error', key: 'api-error.first-error' });
            (0, _chai.expect)(alert2).to.deep.equal({ message: 'Second error message', status: 'alert', type: 'error', key: 'api-error.second-error' });
        });

        (0, _emberMocha.it)('#showAPIError displays default error text if response has no error/message', function () {
            var notifications = this.subject();
            var resp = false;

            (0, _emberRunloop['default'])(function () {
                notifications.showAPIError(resp);
            });

            (0, _chai.expect)(notifications.get('content').toArray()).to.deep.equal([{ message: 'There was a problem on the server, please try again.', status: 'alert', type: 'error', key: 'api-error' }]);

            notifications.set('content', (0, _emberArrayUtils.A)());

            (0, _emberRunloop['default'])(function () {
                notifications.showAPIError(resp, { defaultErrorText: 'Overridden default' });
            });
            (0, _chai.expect)(notifications.get('content').toArray()).to.deep.equal([{ message: 'Overridden default', status: 'alert', type: 'error', key: 'api-error' }]);
        });

        (0, _emberMocha.it)('#showAPIError sets correct key when passed a base key', function () {
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.showAPIError('Test', { key: 'test.alert' });
            });

            (0, _chai.expect)(notifications.get('alerts.firstObject.key')).to.equal('api-error.test.alert');
        });

        (0, _emberMocha.it)('#showAPIError sets correct key when not passed a key', function () {
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.showAPIError('Test');
            });

            (0, _chai.expect)(notifications.get('alerts.firstObject.key')).to.equal('api-error');
        });

        (0, _emberMocha.it)('#showAPIError parses default ember-ajax errors correctly', function () {
            var notifications = this.subject();
            var error = new _emberAjaxErrors.InvalidError();

            (0, _emberRunloop['default'])(function () {
                notifications.showAPIError(error);
            });

            var notification = notifications.get('alerts.firstObject');
            (0, _chai.expect)((0, _emberMetalGet['default'])(notification, 'message')).to.equal('Request was rejected because it was invalid');
            (0, _chai.expect)((0, _emberMetalGet['default'])(notification, 'status')).to.equal('alert');
            (0, _chai.expect)((0, _emberMetalGet['default'])(notification, 'type')).to.equal('error');
            (0, _chai.expect)((0, _emberMetalGet['default'])(notification, 'key')).to.equal('api-error.ajax-error');
        });

        (0, _emberMocha.it)('#showAPIError parses custom ember-ajax errors correctly', function () {
            var notifications = this.subject();
            var error = new _ghostAdminServicesAjax.ServerUnreachableError();

            (0, _emberRunloop['default'])(function () {
                notifications.showAPIError(error);
            });

            var notification = notifications.get('alerts.firstObject');
            (0, _chai.expect)((0, _emberMetalGet['default'])(notification, 'message')).to.equal('Server was unreachable');
            (0, _chai.expect)((0, _emberMetalGet['default'])(notification, 'status')).to.equal('alert');
            (0, _chai.expect)((0, _emberMetalGet['default'])(notification, 'type')).to.equal('error');
            (0, _chai.expect)((0, _emberMetalGet['default'])(notification, 'key')).to.equal('api-error.ajax-error');
        });

        (0, _emberMocha.it)('#displayDelayed moves delayed notifications into content', function () {
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.showNotification('First', { delayed: true });
                notifications.showNotification('Second', { delayed: true });
                notifications.showNotification('Third', { delayed: false });
                notifications.displayDelayed();
            });

            (0, _chai.expect)(notifications.get('notifications')).to.deep.equal([{ message: 'Third', status: 'notification', type: undefined, key: undefined }, { message: 'First', status: 'notification', type: undefined, key: undefined }, { message: 'Second', status: 'notification', type: undefined, key: undefined }]);
        });

        (0, _emberMocha.it)('#closeNotification removes POJO notifications', function () {
            var notification = { message: 'Close test', status: 'notification' };
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.handleNotification(notification);
            });

            (0, _chai.expect)(notifications.get('notifications')).to.include(notification);

            (0, _emberRunloop['default'])(function () {
                notifications.closeNotification(notification);
            });

            (0, _chai.expect)(notifications.get('notifications')).to.not.include(notification);
        });

        (0, _emberMocha.it)('#closeNotification removes and deletes DS.Notification records', function () {
            var notification = _emberObject['default'].create({ message: 'Close test', status: 'alert' });
            var notifications = this.subject();

            notification.toJSON = function () {};
            notification.deleteRecord = function () {};
            _sinon['default'].spy(notification, 'deleteRecord');
            notification.save = function () {
                return {
                    'finally': function _finally(callback) {
                        return callback(notification);
                    }
                };
            };
            _sinon['default'].spy(notification, 'save');

            (0, _emberRunloop['default'])(function () {
                notifications.handleNotification(notification);
            });

            (0, _chai.expect)(notifications.get('alerts')).to.include(notification);

            (0, _emberRunloop['default'])(function () {
                notifications.closeNotification(notification);
            });

            (0, _chai.expect)(notification.deleteRecord.calledOnce).to.be['true'];
            (0, _chai.expect)(notification.save.calledOnce).to.be['true'];

            (0, _chai.expect)(notifications.get('alerts')).to.not.include(notification);
        });

        (0, _emberMocha.it)('#closeNotifications only removes notifications', function () {
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.showAlert('First alert');
                notifications.showNotification('First notification');
                notifications.showNotification('Second notification', { doNotCloseNotifications: true });
            });

            (0, _chai.expect)(notifications.get('alerts.length'), 'alerts count').to.equal(1);
            (0, _chai.expect)(notifications.get('notifications.length'), 'notifications count').to.equal(2);

            (0, _emberRunloop['default'])(function () {
                notifications.closeNotifications();
            });

            (0, _chai.expect)(notifications.get('alerts.length'), 'alerts count').to.equal(1);
            (0, _chai.expect)(notifications.get('notifications.length'), 'notifications count').to.equal(0);
        });

        (0, _emberMocha.it)('#closeNotifications only closes notifications with specified key', function () {
            var notifications = this.subject();

            (0, _emberRunloop['default'])(function () {
                notifications.showAlert('First alert');
                // using handleNotification as showNotification will auto-prune
                // duplicates and keys will be removed if doNotCloseNotifications
                // is true
                notifications.handleNotification({ message: 'First notification', key: 'test.close', status: 'notification' });
                notifications.handleNotification({ message: 'Second notification', key: 'test.keep', status: 'notification' });
                notifications.handleNotification({ message: 'Third notification', key: 'test.close', status: 'notification' });
            });

            (0, _emberRunloop['default'])(function () {
                notifications.closeNotifications('test.close');
            });

            (0, _chai.expect)(notifications.get('notifications.length'), 'notifications count').to.equal(1);
            (0, _chai.expect)(notifications.get('notifications.firstObject.message'), 'notification message').to.equal('Second notification');
            (0, _chai.expect)(notifications.get('alerts.length'), 'alerts count').to.equal(1);
        });

        (0, _emberMocha.it)('#clearAll removes everything without deletion', function () {
            var notifications = this.subject();
            var notificationModel = _emberObject['default'].create({ message: 'model' });

            notificationModel.toJSON = function () {};
            notificationModel.deleteRecord = function () {};
            _sinon['default'].spy(notificationModel, 'deleteRecord');
            notificationModel.save = function () {
                return {
                    'finally': function _finally(callback) {
                        return callback(notificationModel);
                    }
                };
            };
            _sinon['default'].spy(notificationModel, 'save');

            notifications.handleNotification(notificationModel);
            notifications.handleNotification({ message: 'pojo' });

            notifications.clearAll();

            (0, _chai.expect)(notifications.get('content')).to.be.empty;
            (0, _chai.expect)(notificationModel.deleteRecord.called).to.be['false'];
            (0, _chai.expect)(notificationModel.save.called).to.be['false'];
        });

        (0, _emberMocha.it)('#closeAlerts only removes alerts', function () {
            var notifications = this.subject();

            notifications.showNotification('First notification');
            notifications.showAlert('First alert');
            notifications.showAlert('Second alert');

            (0, _emberRunloop['default'])(function () {
                notifications.closeAlerts();
            });

            (0, _chai.expect)(notifications.get('alerts.length')).to.equal(0);
            (0, _chai.expect)(notifications.get('notifications.length')).to.equal(1);
        });

        (0, _emberMocha.it)('#closeAlerts closes only alerts with specified key', function () {
            var notifications = this.subject();

            notifications.showNotification('First notification');
            notifications.showAlert('First alert', { key: 'test.close' });
            notifications.showAlert('Second alert', { key: 'test.keep' });
            notifications.showAlert('Third alert', { key: 'test.close' });

            (0, _emberRunloop['default'])(function () {
                notifications.closeAlerts('test.close');
            });

            (0, _chai.expect)(notifications.get('alerts.length')).to.equal(1);
            (0, _chai.expect)(notifications.get('alerts.firstObject.message')).to.equal('Second alert');
            (0, _chai.expect)(notifications.get('notifications.length')).to.equal(1);
        });
    });
});
/* jshint expr:true */
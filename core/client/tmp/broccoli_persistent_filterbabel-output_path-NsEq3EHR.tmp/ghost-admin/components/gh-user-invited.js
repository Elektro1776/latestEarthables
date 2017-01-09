define('ghost-admin/components/gh-user-invited', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject'], function (exports, _emberComponent, _emberComputed, _emberServiceInject) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: '',

        user: null,
        isSending: false,

        notifications: (0, _emberServiceInject['default'])(),

        createdAtUTC: (0, _emberComputed['default'])('user.createdAtUTC', function () {
            var createdAtUTC = this.get('user.createdAtUTC');

            return createdAtUTC ? moment(createdAtUTC).fromNow() : '';
        }),

        actions: {
            resend: function resend() {
                var _this = this;

                var user = this.get('user');
                var notifications = this.get('notifications');

                this.set('isSending', true);
                user.resendInvite().then(function (result) {
                    var notificationText = 'Invitation resent! (' + user.get('email') + ')';

                    // If sending the invitation email fails, the API will still return a status of 201
                    // but the user's status in the response object will be 'invited-pending'.
                    if (result.users[0].status === 'invited-pending') {
                        notifications.showAlert('Invitation email was not sent.  Please try resending.', { type: 'error', key: 'invite.resend.not-sent' });
                    } else {
                        user.set('status', result.users[0].status);
                        notifications.showNotification(notificationText, { key: 'invite.resend.success' });
                    }
                })['catch'](function (error) {
                    notifications.showAPIError(error, { key: 'invite.resend' });
                })['finally'](function () {
                    _this.set('isSending', false);
                });
            },

            revoke: function revoke() {
                var _this2 = this;

                var user = this.get('user');
                var email = user.get('email');
                var notifications = this.get('notifications');

                // reload the user to get the most up-to-date information
                user.reload().then(function () {
                    if (user.get('invited')) {
                        user.destroyRecord().then(function () {
                            var notificationText = 'Invitation revoked. (' + email + ')';
                            notifications.showNotification(notificationText, { key: 'invite.revoke.success' });
                        })['catch'](function (error) {
                            notifications.showAPIError(error, { key: 'invite.revoke' });
                        });
                    } else {
                        // if the user is no longer marked as "invited", then show a warning and reload the route
                        _this2.sendAction('reload');
                        notifications.showAlert('This user has already accepted the invitation.', { type: 'error', delayed: true, key: 'invite.revoke.already-accepted' });
                    }
                });
            }
        }
    });
});
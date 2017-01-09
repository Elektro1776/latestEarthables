define('ghost-admin/controllers/team/index', ['exports', 'ember-controller', 'ember-computed', 'ember-service/inject'], function (exports, _emberController, _emberComputed, _emberServiceInject) {
    exports['default'] = _emberController['default'].extend({

        showInviteUserModal: false,

        users: (0, _emberComputed.alias)('model'),

        session: (0, _emberServiceInject['default'])(),

        activeUsers: (0, _emberComputed.filter)('users', function (user) {
            return (/^active|warn-[1-4]|locked$/.test(user.get('status'))
            );
        }),

        invitedUsers: (0, _emberComputed.filter)('users', function (user) {
            var status = user.get('status');

            return status === 'invited' || status === 'invited-pending';
        }),

        actions: {
            toggleInviteUserModal: function toggleInviteUserModal() {
                this.toggleProperty('showInviteUserModal');
            }
        }
    });
});
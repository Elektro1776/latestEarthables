define('ghost-admin/tests/unit/helpers/gh-user-can-admin-test', ['exports', 'ember-mocha', 'ghost-admin/helpers/gh-user-can-admin'], function (exports, _emberMocha, _ghostAdminHelpersGhUserCanAdmin) {

    describe('Unit: Helper: gh-user-can-admin', function () {
        // Mock up roles and test for truthy
        describe('Owner role', function () {
            var user = {
                get: function get(role) {
                    if (role === 'isOwner') {
                        return true;
                    } else if (role === 'isAdmin') {
                        return false;
                    }
                }
            };

            (0, _emberMocha.it)(' - can be Admin', function () {
                var result = (0, _ghostAdminHelpersGhUserCanAdmin.ghUserCanAdmin)([user]);
                expect(result).to.equal(true);
            });
        });

        describe('Administrator role', function () {
            var user = {
                get: function get(role) {
                    if (role === 'isOwner') {
                        return false;
                    } else if (role === 'isAdmin') {
                        return true;
                    }
                }
            };

            (0, _emberMocha.it)(' - can be Admin', function () {
                var result = (0, _ghostAdminHelpersGhUserCanAdmin.ghUserCanAdmin)([user]);
                expect(result).to.equal(true);
            });
        });

        describe('Editor and Author roles', function () {
            var user = {
                get: function get(role) {
                    if (role === 'isOwner') {
                        return false;
                    } else if (role === 'isAdmin') {
                        return false;
                    }
                }
            };

            (0, _emberMocha.it)(' - cannot be Admin', function () {
                var result = (0, _ghostAdminHelpersGhUserCanAdmin.ghUserCanAdmin)([user]);
                expect(result).to.equal(false);
            });
        });
    });
});
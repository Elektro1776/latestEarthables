define('ghost-admin/mirage/config', ['exports', 'ghost-admin/mirage/config/authentication', 'ghost-admin/mirage/config/posts', 'ghost-admin/mirage/config/roles', 'ghost-admin/mirage/config/settings', 'ghost-admin/mirage/config/slugs', 'ghost-admin/mirage/config/subscribers', 'ghost-admin/mirage/config/tags', 'ghost-admin/mirage/config/themes', 'ghost-admin/mirage/config/users'], function (exports, _ghostAdminMirageConfigAuthentication, _ghostAdminMirageConfigPosts, _ghostAdminMirageConfigRoles, _ghostAdminMirageConfigSettings, _ghostAdminMirageConfigSlugs, _ghostAdminMirageConfigSubscribers, _ghostAdminMirageConfigTags, _ghostAdminMirageConfigThemes, _ghostAdminMirageConfigUsers) {
    exports.testConfig = testConfig;

    // import {versionMismatchResponse} from 'utils';

    exports['default'] = function () {
        // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
        this.namespace = '/ghost/api/v0.1'; // make this `api`, for example, if your API is namespaced
        this.timing = 400; // delay for each request, automatically set to 0 during testing

        // Mock endpoints here to override real API requests during development
        // this.put('/posts/:id/', versionMismatchResponse);
        // mockSubscribers(this);
        this.loadFixtures('settings');
        (0, _ghostAdminMirageConfigSettings['default'])(this);
        (0, _ghostAdminMirageConfigThemes['default'])(this);

        // keep this line, it allows all other API requests to hit the real server
        this.passthrough();

        // add any external domains to make sure those get passed through too
        this.passthrough('https://count.ghost.org/');
        this.passthrough('http://www.gravatar.com/**');
    };

    // Mock all endpoints here as there is no real API during testing

    function testConfig() {
        // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
        this.namespace = '/ghost/api/v0.1'; // make this `api`, for example, if your API is namespaced
        // this.timing = 400;      // delay for each request, automatically set to 0 during testing
        // this.logging = true;

        (0, _ghostAdminMirageConfigAuthentication['default'])(this);
        (0, _ghostAdminMirageConfigPosts['default'])(this);
        (0, _ghostAdminMirageConfigRoles['default'])(this);
        (0, _ghostAdminMirageConfigSettings['default'])(this);
        (0, _ghostAdminMirageConfigSlugs['default'])(this);
        (0, _ghostAdminMirageConfigSubscribers['default'])(this);
        (0, _ghostAdminMirageConfigTags['default'])(this);
        (0, _ghostAdminMirageConfigThemes['default'])(this);
        (0, _ghostAdminMirageConfigUsers['default'])(this);

        /* Notifications -------------------------------------------------------- */

        this.get('/notifications/', 'notifications');

        /* Apps - Slack Test Notification --------------------------------------------------------- */

        this.post('/slack/test', function () {
            return {};
        });

        /* Configuration -------------------------------------------------------- */

        this.get('/configuration/timezones/', function (db) {
            return {
                configuration: [{
                    timezones: db.timezones
                }]
            };
        });

        /* External sites ------------------------------------------------------- */

        var downloadCount = 0;
        this.get('https://count.ghost.org/', function () {
            downloadCount++;
            return {
                count: downloadCount
            };
        });

        this.get('http://www.gravatar.com/avatar/:md5', function () {
            return '';
        }, 200);
    }
});
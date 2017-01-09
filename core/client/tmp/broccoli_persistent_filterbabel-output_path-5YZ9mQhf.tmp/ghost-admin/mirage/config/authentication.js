define('ghost-admin/mirage/config/authentication', ['exports', 'ember-cli-mirage', 'jquery', 'ember-utils'], function (exports, _emberCliMirage, _jquery, _emberUtils) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = mockAuthentication;

    function mockAuthentication(server) {
        server.post('/authentication/token', function () {
            return {
                access_token: '5JhTdKI7PpoZv4ROsFoERc6wCHALKFH5jxozwOOAErmUzWrFNARuH1q01TYTKeZkPW7FmV5MJ2fU00pg9sm4jtH3Z1LjCf8D6nNqLYCfFb2YEKyuvG7zHj4jZqSYVodN2YTCkcHv6k8oJ54QXzNTLIDMlCevkOebm5OjxGiJpafMxncm043q9u1QhdU9eee3zouGRMVVp8zkKVoo5zlGMi3zvS2XDpx7xsfk8hKHpUgd7EDDQxmMueifWv7hv6n',
                expires_in: 3600,
                refresh_token: 'XP13eDjwV5mxOcrq1jkIY9idhdvN3R1Br5vxYpYIub2P5Hdc8pdWMOGmwFyoUshiEB62JWHTl8H1kACJR18Z8aMXbnk5orG28br2kmVgtVZKqOSoiiWrQoeKTqrRV0t7ua8uY5HdDUaKpnYKyOdpagsSPn3WEj8op4vHctGL3svOWOjZhq6F2XeVPMR7YsbiwBE8fjT3VhTB3KRlBtWZd1rE0Qo2EtSplWyjGKv1liAEiL0ndQoLeeSOCH4rTP7',
                token_type: 'Bearer'
            };
        });

        server.post('/authentication/passwordreset', function (db, request) {
            // jscs:disable requireObjectDestructuring

            var _$$deparam = _jquery['default'].deparam(request.requestBody);

            var passwordreset = _$$deparam.passwordreset;

            var email = passwordreset[0].email;
            // jscs:enable requireObjectDestructuring

            if (email === 'unknown@example.com') {
                return new _emberCliMirage['default'].Response(404, {}, {
                    errors: [{
                        message: 'There is no user with that email address.',
                        errorType: 'NotFoundError'
                    }]
                });
            } else {
                return {
                    passwordreset: [{ message: 'Check your email for further instructions.' }]
                };
            }
        });

        /* Setup ---------------------------------------------------------------- */

        server.post('/authentication/setup', function (db, request) {
            var _$$deparam$setup = _slicedToArray(_jquery['default'].deparam(request.requestBody).setup, 1);

            var attrs = _$$deparam$setup[0];

            var _db$roles$where = db.roles.where({ name: 'Owner' });

            var _db$roles$where2 = _slicedToArray(_db$roles$where, 1);

            var role = _db$roles$where2[0];

            var user = undefined;

            // create owner role unless already exists
            if (!role) {
                role = db.roles.insert({ name: 'Owner' });
            }
            attrs.roles = [role];

            if (!(0, _emberUtils.isBlank)(attrs.email)) {
                attrs.slug = attrs.email.split('@')[0].dasherize();
            }

            // NOTE: this does not use the user factory to fill in blank fields
            user = db.users.insert(attrs);

            delete user.roles;

            return {
                users: [user]
            };
        });

        server.get('/authentication/setup/', function () {
            return {
                setup: [{ status: true }]
            };
        });
    }
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
define('ghost-admin/components/gh-user-active', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject', 'ember-string'], function (exports, _emberComponent, _emberComputed, _emberServiceInject, _emberString) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: '',

        user: null,

        ghostPaths: (0, _emberServiceInject['default'])(),

        userDefault: (0, _emberComputed['default'])('ghostPaths', function () {
            return this.get('ghostPaths.subdir') + '/ghost/img/user-image.png';
        }),

        userImageBackground: (0, _emberComputed['default'])('user.image', 'userDefault', function () {
            var url = this.get('user.image') || this.get('userDefault');

            return (0, _emberString.htmlSafe)('background-image: url(' + url + ')');
        }),

        lastLoginUTC: (0, _emberComputed['default'])('user.lastLoginUTC', function () {
            var lastLoginUTC = this.get('user.lastLoginUTC');

            return lastLoginUTC ? moment(lastLoginUTC).fromNow() : '(Never)';
        })
    });
});
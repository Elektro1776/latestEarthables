define('ghost-admin/controllers/setup', ['exports', 'ember-controller', 'ember-computed', 'ember-service/inject', 'ember-controller/inject'], function (exports, _emberController, _emberComputed, _emberServiceInject, _emberControllerInject) {
    exports['default'] = _emberController['default'].extend({
        appController: (0, _emberControllerInject['default'])('application'),
        ghostPaths: (0, _emberServiceInject['default'])(),

        showBackLink: (0, _emberComputed.match)('appController.currentRouteName', /^setup\.(two|three)$/),

        backRoute: (0, _emberComputed['default'])('appController.currentRouteName', function () {
            var currentRoute = this.get('appController.currentRouteName');

            return currentRoute === 'setup.two' ? 'setup.one' : 'setup.two';
        })
    });
});
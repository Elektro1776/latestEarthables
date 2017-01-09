define('ghost-admin/validators/slack-integration', ['exports', 'ghost-admin/validators/base'], function (exports, _ghostAdminValidatorsBase) {
    exports['default'] = _ghostAdminValidatorsBase['default'].create({
        properties: ['url'],

        url: function url(model) {
            var url = model.get('url');
            var hasValidated = model.get('hasValidated');

            var urlRegex = new RegExp(/(^https:\/\/hooks\.slack\.com\/services\/)(\S+)/);

            if (!validator.empty(url) && !url.match(urlRegex)) {
                model.get('errors').add('url', 'The URL must be in a format like ' + 'https://hooks.slack.com/services/<your personal key>');

                this.invalidate();
            }

            hasValidated.addObject('url');
        }
    });
});
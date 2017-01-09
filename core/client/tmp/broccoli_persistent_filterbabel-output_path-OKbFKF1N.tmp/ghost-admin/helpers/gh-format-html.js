define('ghost-admin/helpers/gh-format-html', ['exports', 'ember-helper', 'ember-string', 'ghost-admin/utils/caja-sanitizers'], function (exports, _emberHelper, _emberString, _ghostAdminUtilsCajaSanitizers) {
    exports['default'] = (0, _emberHelper.helper)(function (params) {
        if (!params || !params.length) {
            return;
        }

        var escapedhtml = params[0] || '';

        // replace script and iFrame
        escapedhtml = escapedhtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '<pre class="js-embed-placeholder">Embedded JavaScript</pre>');
        escapedhtml = escapedhtml.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '<pre class="iframe-embed-placeholder">Embedded iFrame</pre>');

        // sanitize HTML
        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        escapedhtml = html_sanitize(escapedhtml, _ghostAdminUtilsCajaSanitizers['default'].url, _ghostAdminUtilsCajaSanitizers['default'].id);
        // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

        return (0, _emberString.htmlSafe)(escapedhtml);
    });
});
/* global html_sanitize*/
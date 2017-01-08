define('ghost-admin/components/gh-datetime-input', ['exports', 'ember-component', 'rsvp', 'ember-service/inject', 'ghost-admin/utils/bound-one-way', 'ghost-admin/utils/date-formatting', 'ember-invoke-action'], function (exports, _emberComponent, _rsvp, _emberServiceInject, _ghostAdminUtilsBoundOneWay, _ghostAdminUtilsDateFormatting, _emberInvokeAction) {
    exports['default'] = _emberComponent['default'].extend(_emberInvokeAction.InvokeActionMixin, {
        tagName: 'span',
        classNames: 'input-icon icon-calendar',

        datetime: (0, _ghostAdminUtilsBoundOneWay['default'])('value'),
        inputClass: null,
        inputId: null,
        inputName: null,
        timeZone: (0, _emberServiceInject['default'])(),

        didReceiveAttrs: function didReceiveAttrs() {
            var _this = this;

            var promises = {
                datetime: _rsvp['default'].resolve(this.get('datetime') || moment.utc()),
                blogTimezone: _rsvp['default'].resolve(this.get('timeZone.blogTimezone'))
            };

            if (!this.get('update')) {
                throw new Error('You must provide an `update` action to `{{' + this.templateName + '}}`.');
            }

            _rsvp['default'].hash(promises).then(function (hash) {
                _this.set('datetime', (0, _ghostAdminUtilsDateFormatting.formatDate)(hash.datetime || moment.utc(), hash.blogTimezone));
            });
        },

        focusOut: function focusOut() {
            var datetime = this.get('datetime');

            this.invokeAction('update', datetime);
        }
    });
});
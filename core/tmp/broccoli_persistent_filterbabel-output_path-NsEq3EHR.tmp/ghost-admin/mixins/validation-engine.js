define('ghost-admin/mixins/validation-engine', ['exports', 'ember-metal/mixin', 'rsvp', 'ember-array/utils', 'ember-data', 'ember-data/model', 'ghost-admin/validators/invite-user', 'ghost-admin/validators/nav-item', 'ghost-admin/validators/post', 'ghost-admin/validators/reset', 'ghost-admin/validators/setting', 'ghost-admin/validators/setup', 'ghost-admin/validators/signin', 'ghost-admin/validators/signup', 'ghost-admin/validators/slack-integration', 'ghost-admin/validators/subscriber', 'ghost-admin/validators/tag-settings', 'ghost-admin/validators/user', 'ghost-admin/utils/validator-extensions'], function (exports, _emberMetalMixin, _rsvp, _emberArrayUtils, _emberData, _emberDataModel, _ghostAdminValidatorsInviteUser, _ghostAdminValidatorsNavItem, _ghostAdminValidatorsPost, _ghostAdminValidatorsReset, _ghostAdminValidatorsSetting, _ghostAdminValidatorsSetup, _ghostAdminValidatorsSignin, _ghostAdminValidatorsSignup, _ghostAdminValidatorsSlackIntegration, _ghostAdminValidatorsSubscriber, _ghostAdminValidatorsTagSettings, _ghostAdminValidatorsUser, _ghostAdminUtilsValidatorExtensions) {
    function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

    var Errors = _emberData['default'].Errors;

    // our extensions to the validator library
    _ghostAdminUtilsValidatorExtensions['default'].init();

    /**
    * The class that gets this mixin will receive these properties and functions.
    * It will be able to validate any properties on itself (or the model it passes to validate())
    * with the use of a declared validator.
    */
    exports['default'] = _emberMetalMixin['default'].create({
        // these validators can be passed a model to validate when the class that
        // mixes in the ValidationEngine declares a validationType equal to a key on this object.
        // the model is either passed in via `this.validate({ model: object })`
        // or by calling `this.validate()` without the model property.
        // in that case the model will be the class that the ValidationEngine
        // was mixed into, i.e. the controller or Ember Data model.
        validators: {
            inviteUser: _ghostAdminValidatorsInviteUser['default'],
            navItem: _ghostAdminValidatorsNavItem['default'],
            post: _ghostAdminValidatorsPost['default'],
            reset: _ghostAdminValidatorsReset['default'],
            setting: _ghostAdminValidatorsSetting['default'],
            setup: _ghostAdminValidatorsSetup['default'],
            signin: _ghostAdminValidatorsSignin['default'],
            signup: _ghostAdminValidatorsSignup['default'],
            slackIntegration: _ghostAdminValidatorsSlackIntegration['default'],
            subscriber: _ghostAdminValidatorsSubscriber['default'],
            tag: _ghostAdminValidatorsTagSettings['default'],
            user: _ghostAdminValidatorsUser['default']
        },

        // This adds the Errors object to the validation engine, and shouldn't affect
        // ember-data models because they essentially use the same thing
        errors: null,

        // Store whether a property has been validated yet, so that we know whether or not
        // to show error / success validation for a field
        hasValidated: null,

        init: function init() {
            this._super.apply(this, arguments);
            this.set('errors', Errors.create());
            this.set('hasValidated', (0, _emberArrayUtils.A)());
        },

        /**
        * Passes the model to the validator specified by validationType.
        * Returns a promise that will resolve if validation succeeds, and reject if not.
        * Some options can be specified:
        *
        * `model: Object` - you can specify the model to be validated, rather than pass the default value of `this`,
        *                   the class that mixes in this mixin.
        *
        * `property: String` - you can specify a specific property to validate. If
        * 					   no property is specified, the entire model will be
        * 					   validated
        */
        validate: function validate(opts) {
            var model = this;
            var hasValidated = undefined,
                type = undefined,
                validator = undefined;

            opts = opts || {};

            if (opts.model) {
                model = opts.model;
            } else if (_instanceof(this, _emberDataModel['default'])) {
                model = this;
            } else if (this.get('model')) {
                model = this.get('model');
            }

            type = this.get('validationType') || model.get('validationType');
            validator = this.get('validators.' + type) || model.get('validators.' + type);
            hasValidated = this.get('hasValidated');

            opts.validationType = type;

            return new _rsvp['default'].Promise(function (resolve, reject) {
                var passed = undefined;

                if (!type || !validator) {
                    return reject(['The validator specified, "' + type + '", did not exist!']);
                }

                if (opts.property) {
                    // If property isn't in `hasValidated`, add it to mark that this field can show a validation result
                    hasValidated.addObject(opts.property);
                    model.get('errors').remove(opts.property);
                } else {
                    model.get('errors').clear();
                }

                passed = validator.check(model, opts.property);

                return passed ? resolve() : reject();
            });
        },

        /**
        * The primary goal of this method is to override the `save` method on Ember Data models.
        * This allows us to run validation before actually trying to save the model to the server.
        * You can supply options to be passed into the `validate` method, since the ED `save` method takes no options.
        */
        save: function save(options) {
            var _this = this;

            var _super = this._super;

            options = options || {};
            options.wasSave = true;

            // model.destroyRecord() calls model.save() behind the scenes.
            // in that case, we don't need validation checks or error propagation,
            // because the model itself is being destroyed.
            if (this.get('isDeleted')) {
                return this._super.apply(this, arguments);
            }

            // If validation fails, reject with validation errors.
            // If save to the server fails, reject with server response.
            return this.validate(options).then(function () {
                return _super.call(_this, options);
            })['catch'](function (result) {
                // server save failed or validator type doesn't exist
                if (result && !(0, _emberArrayUtils.isEmberArray)(result)) {
                    throw result;
                }

                return _rsvp['default'].reject(result);
            });
        },

        actions: {
            validate: function validate(property) {
                this.validate({ property: property });
            }
        }
    });
});
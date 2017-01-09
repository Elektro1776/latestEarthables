define('ghost-admin/services/feature', ['exports', 'ember', 'ember-service', 'ember-computed', 'ember-service/inject', 'ember-metal/set'], function (exports, _ember, _emberService, _emberComputed, _emberServiceInject, _emberMetalSet) {
    exports.feature = feature;

    // ember-cli-shims doesn't export Error
    var EmberError = _ember['default'].Error;

    function feature(name) {
        return (0, _emberComputed['default'])('config.' + name, 'labs.' + name, {
            get: function get() {
                if (this.get('config.' + name)) {
                    return this.get('config.' + name);
                }

                return this.get('labs.' + name) || false;
            },
            set: function set(key, value) {
                this.update(key, value);
                return value;
            }
        });
    }

    exports['default'] = _emberService['default'].extend({
        store: (0, _emberServiceInject['default'])(),
        config: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),

        publicAPI: feature('publicAPI'),
        subscribers: feature('subscribers'),
        internalTags: feature('internalTags'),

        _settings: null,

        labs: (0, _emberComputed['default'])('_settings.labs', function () {
            var labs = this.get('_settings.labs');

            try {
                return JSON.parse(labs) || {};
            } catch (e) {
                return {};
            }
        }),

        fetch: function fetch() {
            var _this = this;

            return this.get('store').queryRecord('setting', { type: 'blog,theme,private' }).then(function (settings) {
                _this.set('_settings', settings);
                return true;
            });
        },

        update: function update(key, value) {
            var _this2 = this;

            var settings = this.get('_settings');
            var labs = this.get('labs');

            // set the new labs key value
            (0, _emberMetalSet['default'])(labs, key, value);
            // update the 'labs' key of the settings model
            settings.set('labs', JSON.stringify(labs));

            return settings.save().then(function () {
                // return the labs key value that we get from the server
                _this2.notifyPropertyChange('labs');
                return _this2.get('labs.' + key);
            })['catch'](function (error) {
                settings.rollbackAttributes();
                _this2.notifyPropertyChange('labs');

                // we'll always have an errors object unless we hit a
                // validation error
                if (!error) {
                    throw new EmberError('Validation of the feature service settings model failed when updating labs.');
                }

                _this2.get('notifications').showAPIError(error);

                return _this2.get('labs.' + key);
            });
        }
    });
});
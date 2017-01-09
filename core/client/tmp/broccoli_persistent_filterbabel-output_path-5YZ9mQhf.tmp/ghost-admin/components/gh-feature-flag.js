define('ghost-admin/components/gh-feature-flag', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject'], function (exports, _emberComponent, _emberComputed, _emberServiceInject) {

    var FeatureFlagComponent = _emberComponent['default'].extend({
        tagName: 'label',
        classNames: 'checkbox',
        attributeBindings: ['for'],
        _flagValue: null,

        feature: (0, _emberServiceInject['default'])(),

        init: function init() {
            this._super.apply(this, arguments);

            this.set('_flagValue', this.get('feature.' + this.get('flag')));
        },

        value: (0, _emberComputed['default'])('_flagValue', {
            get: function get() {
                return this.get('_flagValue');
            },
            set: function set(key, value) {
                return this.set('feature.' + this.get('flag'), value);
            }
        }),

        'for': (0, _emberComputed['default'])('flag', function () {
            return 'labs-' + this.get('flag');
        }),

        name: (0, _emberComputed['default'])('flag', function () {
            return 'labs[' + this.get('flag') + ']';
        })
    });

    FeatureFlagComponent.reopenClass({
        positionalParams: ['flag']
    });

    exports['default'] = FeatureFlagComponent;
});
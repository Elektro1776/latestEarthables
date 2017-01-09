define('ghost-admin/components/gh-tags-management-container', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject', 'ember-utils', 'ember-metal/observer', 'ember-runloop'], function (exports, _emberComponent, _emberComputed, _emberServiceInject, _emberUtils, _emberMetalObserver, _emberRunloop) {
    exports['default'] = _emberComponent['default'].extend({
        classNames: ['view-container'],
        classNameBindings: ['isMobile'],

        mediaQueries: (0, _emberServiceInject['default'])(),

        tags: null,
        selectedTag: null,

        isMobile: (0, _emberComputed.reads)('mediaQueries.maxWidth600'),
        isEmpty: (0, _emberComputed.equal)('tags.length', 0),

        init: function init() {
            this._super.apply(this, arguments);
            _emberRunloop['default'].schedule('actions', this, this.fireMobileChangeActions);
        },

        displaySettingsPane: (0, _emberComputed['default'])('isEmpty', 'selectedTag', 'isMobile', function () {
            var isEmpty = this.get('isEmpty');
            var selectedTag = this.get('selectedTag');
            var isMobile = this.get('isMobile');

            // always display settings pane for blank-slate on mobile
            if (isMobile && isEmpty) {
                return true;
            }

            // display list if no tag is selected on mobile
            if (isMobile && (0, _emberUtils.isBlank)(selectedTag)) {
                return false;
            }

            // default to displaying settings pane
            return true;
        }),

        fireMobileChangeActions: (0, _emberMetalObserver['default'])('isMobile', function () {
            if (!this.get('isMobile')) {
                this.sendAction('leftMobile');
            }
        })
    });
});
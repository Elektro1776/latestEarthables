define('ghost-admin/components/gh-fullscreen-modal', ['exports', 'rsvp', 'ember-service/inject', 'ember-array/utils', 'ember-utils', 'ember-evented/on', 'ember-runloop', 'liquid-tether/components/liquid-tether', 'ember-invoke-action'], function (exports, _rsvp, _emberServiceInject, _emberArrayUtils, _emberUtils, _emberEventedOn, _emberRunloop, _liquidTetherComponentsLiquidTether, _emberInvokeAction) {
    var Promise = _rsvp['default'].Promise;

    var FullScreenModalComponent = _liquidTetherComponentsLiquidTether['default'].extend({
        to: 'fullscreen-modal',
        target: 'document.body',
        targetModifier: 'visible',
        targetAttachment: 'top center',
        attachment: 'top center',
        tetherClass: 'fullscreen-modal',
        overlayClass: 'fullscreen-modal-background',
        modalPath: 'unknown',

        dropdown: (0, _emberServiceInject['default'])(),

        init: function init() {
            this._super.apply(this, arguments);
            this.modalPath = 'modals/' + this.get('modal');
        },

        setTetherClass: (0, _emberEventedOn['default'])('init', function () {
            var tetherClass = this.get('tetherClass');
            var modifiers = (this.get('modifier') || '').split(' ');
            var tetherClasses = (0, _emberArrayUtils.A)([tetherClass]);

            modifiers.forEach(function (modifier) {
                if (!(0, _emberUtils.isBlank)(modifier)) {
                    var className = tetherClass + '-' + modifier;
                    tetherClasses.push(className);
                }
            });

            this.set('tetherClass', tetherClasses.join(' '));
        }),

        closeDropdowns: (0, _emberEventedOn['default'])('didInsertElement', function () {
            _emberRunloop['default'].schedule('afterRender', this, function () {
                this.get('dropdown').closeDropdowns();
            });
        }),

        actions: {
            close: function close() {
                // Because we return the promise from invokeAction, we have
                // to check if "close" exists first
                if (this.get('close')) {
                    return (0, _emberInvokeAction.invokeAction)(this, 'close');
                }

                return new Promise(function (resolve) {
                    resolve();
                });
            },

            confirm: function confirm() {
                if (this.get('confirm')) {
                    return (0, _emberInvokeAction.invokeAction)(this, 'confirm');
                }

                return new Promise(function (resolve) {
                    resolve();
                });
            },

            clickOverlay: function clickOverlay() {
                this.send('close');
            }
        }
    });

    FullScreenModalComponent.reopenClass({
        positionalParams: ['modal']
    });

    exports['default'] = FullScreenModalComponent;
});
define('ghost-admin/components/gh-selectize', ['exports', 'ember-array/utils', 'ember-computed', 'ember-utils', 'ember-metal/get', 'ember-runloop', 'ember-cli-selectize/components/ember-selectize'], function (exports, _emberArrayUtils, _emberComputed, _emberUtils, _emberMetalGet, _emberRunloop, _emberCliSelectizeComponentsEmberSelectize) {
    exports['default'] = _emberCliSelectizeComponentsEmberSelectize['default'].extend({

        selectizeOptions: (0, _emberComputed['default'])(function () {
            var options = this._super.apply(this, arguments);

            options.onChange = _emberRunloop['default'].bind(this, '_onChange');

            return options;
        }),

        /**
        * Event callback that is triggered when user creates a tag
        * - modified to pass the caret position to the action
        */
        _create: function _create(input, callback) {
            var caret = this._selectize.caretPos;

            // Delete user entered text
            this._selectize.setTextboxValue('');
            // Send create action

            // allow the observers and computed properties to run first
            _emberRunloop['default'].schedule('actions', this, function () {
                this.sendAction('create-item', input, caret);
            });
            // We cancel the creation here, so it's up to you to include the created element
            // in the content and selection property
            callback(null);
        },

        _addSelection: function _addSelection(obj) {
            var _valuePath = this.get('_valuePath');
            var val = (0, _emberMetalGet['default'])(obj, _valuePath);
            var caret = this._selectize.caretPos;

            // caret position is always 1 more than the desired index as this method
            // is called after selectize has inserted the item and the caret has moved
            // to the right
            caret = caret - 1;

            this.get('selection').insertAt(caret, obj);

            _emberRunloop['default'].schedule('actions', this, function () {
                this.sendAction('add-item', obj);
                this.sendAction('add-value', val);
            });
        },

        _onChange: function _onChange(args) {
            var selection = (0, _emberMetalGet['default'])(this, 'selection');
            var valuePath = (0, _emberMetalGet['default'])(this, '_valuePath');
            var reorderedSelection = (0, _emberArrayUtils.A)([]);

            if (!args || !selection || !(0, _emberArrayUtils.isEmberArray)(selection) || args.length !== (0, _emberMetalGet['default'])(selection, 'length')) {
                return;
            }

            // exit if we're not dealing with the same objects as the selection
            var objectsHaveChanged = selection.any(function (obj) {
                return args.indexOf((0, _emberMetalGet['default'])(obj, valuePath)) === -1;
            });

            if (objectsHaveChanged) {
                return;
            }

            // exit if the order is still the same
            var orderIsSame = selection.every(function (obj, idx) {
                return (0, _emberMetalGet['default'])(obj, valuePath) === args[idx];
            });

            if (orderIsSame) {
                return;
            }

            // we have a re-order, update the selection
            args.forEach(function (value) {
                var obj = selection.find(function (item) {
                    return '' + (0, _emberMetalGet['default'])(item, valuePath) === value;
                });

                if (obj) {
                    reorderedSelection.addObject(obj);
                }
            });

            this.set('selection', reorderedSelection);
        },

        _preventOpeningWhenBlank: function _preventOpeningWhenBlank() {
            var openOnFocus = this.get('openOnFocus');

            if (!openOnFocus) {
                _emberRunloop['default'].schedule('afterRender', this, function () {
                    var selectize = this._selectize;
                    if (selectize) {
                        selectize.on('dropdown_open', function () {
                            if ((0, _emberUtils.isBlank)(selectize.$control_input.val())) {
                                selectize.close();
                            }
                        });
                        selectize.on('type', function (filter) {
                            if ((0, _emberUtils.isBlank)(filter)) {
                                selectize.close();
                            }
                        });
                    }
                });
            }
        },

        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);
            this._preventOpeningWhenBlank();
        }

    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
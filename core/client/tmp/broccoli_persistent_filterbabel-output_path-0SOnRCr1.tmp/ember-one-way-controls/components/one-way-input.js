define('ember-one-way-controls/components/one-way-input', ['exports', 'ember', 'ember-invoke-action', 'ember-one-way-controls/-private/dynamic-attribute-bindings'], function (exports, _ember, _emberInvokeAction, _emberOneWayControlsPrivateDynamicAttributeBindings) {
  'use strict';

  var Component = _ember['default'].Component;
  var assert = _ember['default'].assert;
  var get = _ember['default'].get;
  var set = _ember['default'].set;
  var run = _ember['default'].run;

  var OneWayInputComponent = Component.extend(_emberOneWayControlsPrivateDynamicAttributeBindings['default'], {
    tagName: 'input',
    type: 'text',

    NON_ATTRIBUTE_BOUND_PROPS: ['keyEvents', 'update', 'sanitizeInput', 'paramValue'],

    attributeBindings: ['type', '_value:value'],

    keyEvents: {
      '13': 'onenter',
      '27': 'onescape'
    },

    input: function input() {
      this._handleChangeEvent();
    },

    change: function change() {
      this._handleChangeEvent();
    },

    keyUp: function keyUp(event) {
      this._interpretKeyEvents(event);
    },

    _interpretKeyEvents: function _interpretKeyEvents(event) {
      var method = get(this, 'keyEvents.' + event.keyCode);

      if (method) {
        this._sanitizedValue = null;
        this._handleChangeEvent(method);
      }
    },

    _handleChangeEvent: function _handleChangeEvent() {
      var method = arguments.length <= 0 || arguments[0] === undefined ? 'update' : arguments[0];

      var value = this.readDOMAttr('value');
      this._processNewValue(method, value);
    },

    _processNewValue: function _processNewValue(method, rawValue) {
      var _this = this;

      var value = this.sanitizeInput(rawValue);

      if (this._sanitizedValue !== value) {
        this._sanitizedValue = value;

        run.schedule('afterRender', function () {
          if (_this.isDestroyed) {
            return;
          }

          if (typeof method === 'function') {
            method(value);
          } else {
            (0, _emberInvokeAction.invokeAction)(_this, method, value);
          }
        });
      }
    },

    _raiseTypeAssertion: function _raiseTypeAssertion(type) {
      assert('The {{one-way-input}} component does not support type="' + type + '", use {{one-way-' + type + '}} instead.', false);
    },

    sanitizeInput: function sanitizeInput(input) {
      return input;
    },

    init: function init() {
      this._super.apply(this, arguments);

      if (this.type === 'checkbox' || this.type === 'radio') {
        this._raiseTypeAssertion(this.type);
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);

      var value = get(this, 'paramValue');
      if (value === undefined) {
        value = get(this, 'value');
      }

      set(this, '_value', value);

      this._sanitizedValue = value;
      this._processNewValue('update', value);
    }
  });

  OneWayInputComponent.reopenClass({
    positionalParams: ['paramValue']
  });

  exports['default'] = OneWayInputComponent;
});
import Ember from 'ember';
import layout from '../templates/components/one-way-select';
import DynamicAttributeBindings from '../-private/dynamic-attribute-bindings';

import { invokeAction } from 'ember-invoke-action';

var emberArray = Ember.A;
var Component = Ember.Component;
var computed = Ember.computed;
var _Ember$computed = Ember.computed;
var alias = _Ember$computed.alias;
var empty = _Ember$computed.empty;
var not = _Ember$computed.not;
var or = _Ember$computed.or;
var EmberObject = Ember.Object;
var get = Ember.get;
var isArray = Ember.isArray;
var isBlank = Ember.isBlank;
var isPresent = Ember.isPresent;
var set = Ember.set;
var w = Ember.String.w;

var OneWaySelectComponent = Component.extend(DynamicAttributeBindings, {
  layout: layout,
  tagName: 'select',

  NON_ATTRIBUTE_BOUND_PROPS: ['value', 'update', 'options', 'prompt', 'promptText', 'includeBlank', 'optionValuePath', 'optionLabelPath', 'groupLabelPath'],

  attributeBindings: ['multiple'],

  didReceiveAttrs: function didReceiveAttrs() {
    this._super.apply(this, arguments);

    var value = get(this, 'paramValue');
    if (value === undefined) {
      value = get(this, 'value');
    }

    set(this, 'selectedValue', value);

    var options = get(this, 'options');
    if (typeof options === 'string') {
      options = w(options);
    }

    var firstOption = get(emberArray(options), 'firstObject');
    if (firstOption && isPresent(get(firstOption, 'groupName')) && isArray(get(firstOption, 'options'))) {
      set(this, 'optionsArePreGrouped', true);
    }

    if (isBlank(get(this, 'promptIsSelectable'))) {
      set(this, 'promptIsSelectable', false);
    }

    set(this, 'options', emberArray(options));
  },

  nothingSelected: empty('selectedValue'),
  promptIsDisabled: not('promptIsSelectable'),
  hasGrouping: or('optionsArePreGrouped', 'groupLabelPath'),

  optionGroups: computed('options.[]', function () {
    var groupLabelPath = get(this, 'groupLabelPath');
    var options = get(this, 'options');
    var groups = emberArray();

    if (!groupLabelPath) {
      return options;
    }

    options.forEach(function (item) {
      var label = get(item, groupLabelPath);

      if (label) {
        var group = groups.findBy('groupName', label);

        if (group == null) {
          group = EmberObject.create({
            groupName: label,
            options: emberArray()
          });

          groups.pushObject(group);
        }

        get(group, 'options').pushObject(item);
      } else {
        groups.pushObject(item);
      }
    });

    return groups;
  }),

  change: function change() {
    var value = undefined;

    if (get(this, 'multiple') === true) {
      value = this._selectedMultiple();
    } else {
      value = this._selectedSingle();
    }

    invokeAction(this, 'update', value);
  },

  prompt: alias('includeBlank'),

  promptText: computed('prompt', function () {
    var prompt = get(this, 'prompt');
    if (typeof prompt === 'string') {
      return prompt;
    }
  }),

  _selectedMultiple: function _selectedMultiple() {
    var _this = this;

    var selectedValues = this.$().val() || [];

    return selectedValues.map(function (selectedValue) {
      return _this._findOption(selectedValue);
    });
  },

  _selectedSingle: function _selectedSingle() {
    var selectedValue = this.$().val();
    return this._findOption(selectedValue);
  },

  _findOption: function _findOption(value) {
    var options = get(this, 'options');
    var optionValuePath = get(this, 'optionValuePath');
    var optionsArePreGrouped = get(this, 'optionsArePreGrouped');

    var findOption = function findOption(item) {
      if (optionValuePath) {
        return '' + get(item, optionValuePath) === value;
      } else {
        return '' + item === value;
      }
    };

    if (optionsArePreGrouped) {
      return options.reduce(function (found, group) {
        return found || get(group, 'options').find(findOption);
      }, undefined);
    } else {
      return options.find(findOption);
    }
  }
});

OneWaySelectComponent.reopenClass({
  positionalParams: ['paramValue']
});

export default OneWaySelectComponent;
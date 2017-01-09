define('ember-light-table/components/lt-row', ['exports', 'ember', 'ember-light-table/templates/components/lt-row'], function (exports, _ember, _emberLightTableTemplatesComponentsLtRow) {
  'use strict';

  var computed = _ember['default'].computed;

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberLightTableTemplatesComponentsLtRow['default'],
    tagName: 'tr',
    classNames: ['lt-row'],
    classNameBindings: ['isSelected', 'isExpanded', 'canExpand:is-expandable', 'canSelect:is-selectable'],
    attributeBindings: ['colspan'],

    columns: null,
    row: null,
    tableActions: null,
    canExpand: false,
    canSelect: false,
    colpan: 1,

    isSelected: computed.readOnly('row.selected'),
    isExpanded: computed.readOnly('row.expanded')
  });
});
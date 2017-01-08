define('ember-sortable/components/sortable-item', ['exports', 'ember', 'ember-sortable/templates/components/sortable-item', 'ember-sortable/mixins/sortable-item'], function (exports, _ember, _emberSortableTemplatesComponentsSortableItem, _emberSortableMixinsSortableItem) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_emberSortableMixinsSortableItem['default'], {
    layout: _emberSortableTemplatesComponentsSortableItem['default']
  });
});
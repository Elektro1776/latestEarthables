define('ember-light-table/components/lt-head', ['exports', 'ember', 'ember-light-table/templates/components/lt-head', 'ember-light-table/mixins/table-column'], function (exports, _ember, _emberLightTableTemplatesComponentsLtHead, _emberLightTableMixinsTableColumn) {
  'use strict';

  /**
   * @module Components
   */

  /**
   * ```hbs
   * {{#light-table table as |t|}}
   *   {{t.head onColumnClick=(action 'sortByColumn')}}
   * {{/light-table}}
   * ```
   *
   * If you want to define your own thead, just declare the contextual component in a block.
   *
   * ```hbs
   * {{#light-table table as |t|}}
   *   {{#t.head onColumnClick=(action 'sortByColumn') as |groups subColumn table|}}
   *     {{#each groups as |group|}}
   *       {{!-- ... --}}
   *     {{/each}}
   *   {{/t.head}}
   * {{/light-table}}
   * ```
   *
   * If you dont have grouped columns, the yielded `groups` will be an array of all visibile columns and `subColumns`
   * will be empty
   *
   * @class Head
   * @uses TableColumnMixin
   */

  exports['default'] = _ember['default'].Component.extend(_emberLightTableMixinsTableColumn['default'], {
    layout: _emberLightTableTemplatesComponentsLtHead['default'],
    tagName: 'thead',
    classNames: ['lt-head'],
    table: null
  });
});
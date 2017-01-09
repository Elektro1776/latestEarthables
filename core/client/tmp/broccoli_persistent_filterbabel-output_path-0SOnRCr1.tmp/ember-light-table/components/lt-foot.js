define('ember-light-table/components/lt-foot', ['exports', 'ember', 'ember-light-table/templates/components/lt-foot', 'ember-light-table/mixins/table-column'], function (exports, _ember, _emberLightTableTemplatesComponentsLtFoot, _emberLightTableMixinsTableColumn) {
  'use strict';

  /**
   * @module Components
   */

  /**
   * ```hbs
   * {{#light-table table as |t|}}
   *   {{t.foot onColumnClick=(action 'sortByColumn')}}
   * {{/light-table}}
   * ```
   * If you want to define your own tfoot, just declare the contextual component in a block.
   *
   * ```hbs
   * {{#light-table table as |t|}}
   *   {{#t.foot onColumnClick=(action 'sortByColumn') as |columns table|}}
   *     {{#each columns as |column|}}
   *       {{!-- ... --}}
   *     {{/each}}
   *   {{/t.foot}}
   * {{/light-table}}
   * ```
   *
   * will be empty
   * @class Foot
   * @uses TableColumnMixin
   */

  exports['default'] = _ember['default'].Component.extend(_emberLightTableMixinsTableColumn['default'], {
    layout: _emberLightTableTemplatesComponentsLtFoot['default'],
    tagName: 'tfoot',
    classNames: ['lt-foot'],
    table: null
  });
});
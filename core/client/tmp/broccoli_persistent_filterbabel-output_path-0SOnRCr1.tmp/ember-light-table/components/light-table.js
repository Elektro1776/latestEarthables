define('ember-light-table/components/light-table', ['exports', 'ember', 'ember-light-table/templates/components/light-table', 'ember-light-table/utils/call-action', 'ember-light-table/mixins/table-scroll', 'ember-light-table/classes/Table'], function (exports, _ember, _emberLightTableTemplatesComponentsLightTable, _emberLightTableUtilsCallAction, _emberLightTableMixinsTableScroll, _emberLightTableClassesTable) {
  'use strict';

  function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  var _slice = Array.prototype.slice;

  var assert = _ember['default'].assert;

  /**
   * @module Components
   * @main ligh-table
   */

  /**
   * ```hbs
   * {{#light-table table as |t|}}
   *   {{t.head}}
   *   {{t.body}}
   *   {{t.foot}}
   * {{/light-table}}
   * ```
   *
   * Please see the documentation for the [Head](../classes/Head.html), [Body](../classes/Body.html), and [Foot](../classes/Foot.html) components
   * for more details on all possible options and actions.
   *
   * @class Light Table
   * @main Components
   * @uses TableScrollMixin
   */

  var LightTable = _ember['default'].Component.extend(_emberLightTableMixinsTableScroll['default'], {
    layout: _emberLightTableTemplatesComponentsLightTable['default'],
    tagName: 'table',
    classNames: ['ember-light-table'],

    /**
     * @property table
     * @type {Table}
     */
    table: null,

    /**
     * This is used to propate custom user defined actions to custom cell and header components.
     * As an example, lets say I have a table with a column defined with `cellComponent: 'delete-user'`
     *
     * ```hbs
     * {{#light-table table tableActions=(hash
     *   deleteUser=(action 'deleteUser')
     *  ) as |t|}}
     *   {{t.head}}
     *   {{t.body}}
     *   {{t.foot}}
     * {{/light-table}}
     * ```
     *
     * Now in the `delete-user` component, we can access that `deleteUser` action and pass it the
     * row object which will bubble all the way to where you defined that action.
     *
     * ```hbs
     * <button {{action tableActions.deleteUser row}}>Delete Me</button>
     * ```
     *
     *
     * @property tableActions
     * @type {Object}
     */
    tableActions: null,

    init: function init() {
      this._super.apply(this, arguments);
      assert('[ember-light-table] table must be an instance of Table', _instanceof(this.get('table'), _emberLightTableClassesTable['default']));
    },

    actions: {
      /**
       * Action to be called when user reached the bottom of the scroll container
       *
       * @event onScrolledToBottom
       */
      onScrolledToBottom: function onScrolledToBottom() {
        _emberLightTableUtilsCallAction['default'].apply(undefined, [this, 'onScrolledToBottom'].concat(_slice.call(arguments)));
      }
    }
  });

  LightTable.reopenClass({
    positionalParams: ['table']
  });

  exports['default'] = LightTable;
});
export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type"
        ]
      },
      "revision": "Ember@2.6.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 3
        }
      },
      "moduleName": "modules/ember-light-table/templates/components/light-table.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["inline","yield",[["subexpr","hash",[],["head",["subexpr","component",["lt-head"],["table",["subexpr","@mut",[["get","table",["loc",[null,[2,34],[2,39]]]]],[],[]],"tableActions",["subexpr","@mut",[["get","tableActions",["loc",[null,[2,53],[2,65]]]]],[],[]]],["loc",[null,[2,7],[2,66]]]],"body",["subexpr","component",["lt-body"],["table",["subexpr","@mut",[["get","table",["loc",[null,[3,34],[3,39]]]]],[],[]],"tableActions",["subexpr","@mut",[["get","tableActions",["loc",[null,[3,53],[3,65]]]]],[],[]]],["loc",[null,[3,7],[3,66]]]],"foot",["subexpr","component",["lt-foot"],["table",["subexpr","@mut",[["get","table",["loc",[null,[4,34],[4,39]]]]],[],[]],"tableActions",["subexpr","@mut",[["get","tableActions",["loc",[null,[4,53],[4,65]]]]],[],[]]],["loc",[null,[4,7],[4,66]]]]],["loc",[null,[1,8],[5,1]]]]],[],["loc",[null,[1,0],[5,3]]]]
    ],
    locals: [],
    templates: []
  };
}()));
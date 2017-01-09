export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "modules/ember-light-table/templates/components/lt-row.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","lt-cell",[],["column",["subexpr","@mut",[["get","column",["loc",[null,[2,19],[2,25]]]]],[],[]],"row",["subexpr","@mut",[["get","row",["loc",[null,[2,30],[2,33]]]]],[],[]],"rawValue",["subexpr","get",[["get","row",["loc",[null,[2,48],[2,51]]]],["get","column.valuePath",["loc",[null,[2,52],[2,68]]]]],[],["loc",[null,[2,43],[2,69]]]],"tableActions",["subexpr","@mut",[["get","tableActions",["loc",[null,[2,83],[2,95]]]]],[],[]]],["loc",[null,[2,2],[2,97]]]]
      ],
      locals: ["column"],
      templates: []
    };
  }());
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
          "line": 4,
          "column": 0
        }
      },
      "moduleName": "modules/ember-light-table/templates/components/lt-row.hbs"
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
      ["block","each",[["get","columns",["loc",[null,[1,8],[1,15]]]]],[],0,null,["loc",[null,[1,0],[3,9]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));
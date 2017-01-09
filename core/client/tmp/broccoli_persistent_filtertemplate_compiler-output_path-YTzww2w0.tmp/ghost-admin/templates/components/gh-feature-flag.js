export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
          "multiple-nodes"
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
      "moduleName": "ghost-admin/templates/components/gh-feature-flag.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("span");
      dom.setAttribute(el1,"class","input-toggle-component");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createUnsafeMorphAt(dom.childAt(fragment, [4]),0,0);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","one-way-checkbox",[["get","value",["loc",[null,[1,19],[1,24]]]]],["id",["subexpr","@mut",[["get","for",["loc",[null,[1,28],[1,31]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[1,37],[1,41]]]]],[],[]],"update",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[1,62],[1,67]]]]],[],["loc",[null,[1,57],[1,68]]]]],[],["loc",[null,[1,49],[1,69]]]]],["loc",[null,[1,0],[1,71]]]],
      ["content","yield",["loc",[null,[3,3],[3,14]]]]
    ],
    locals: [],
    templates: []
  };
}()));
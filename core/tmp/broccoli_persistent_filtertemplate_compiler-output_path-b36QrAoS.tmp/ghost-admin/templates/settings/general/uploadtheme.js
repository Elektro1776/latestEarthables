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
          "line": 9,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/settings/general/uploadtheme.hbs"
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
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","gh-fullscreen-modal",["upload-theme"],["model",["subexpr","hash",[],["availableThemes",["get","model",["loc",[null,[3,24],[3,29]]]],"uploadSuccess",["subexpr","route-action",["reloadSettings"],[],["loc",[null,[4,22],[4,53]]]],"activate",["subexpr","route-action",["activateTheme"],[],["loc",[null,[5,17],[5,47]]]]],["loc",[null,[2,10],[6,5]]]],"close",["subexpr","route-action",["cancel"],[],["loc",[null,[7,10],[7,33]]]],"modifier","action wide"],["loc",[null,[1,0],[8,28]]]]
    ],
    locals: [],
    templates: []
  };
}()));
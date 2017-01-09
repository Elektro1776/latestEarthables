export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
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
          "line": 5,
          "column": 0
        }
      },
      "moduleName": "modules/liquid-tether/templates/components/liquid-tether.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(fragment, [2]);
      var morphs = new Array(4);
      morphs[0] = dom.createAttrMorph(element0, 'class');
      morphs[1] = dom.createElementMorph(element0);
      morphs[2] = dom.createAttrMorph(element1, 'class');
      morphs[3] = dom.createMorphAt(element1,1,1);
      return morphs;
    },
    statements: [
      ["attribute","class",["concat",["liquid-tether-overlay ",["get","overlayClass",["loc",[null,[1,36],[1,48]]]]," ",["subexpr","if",[["get","on-overlay-click",["loc",[null,[1,56],[1,72]]]],"clickable"],[],["loc",[null,[1,51],[1,86]]]]]]],
      ["element","action",["clickOverlay"],[],["loc",[null,[1,88],[1,113]]]],
      ["attribute","class",["concat",["liquid-tether ",["get","tetherClass",["loc",[null,[2,28],[2,39]]]]]]],
      ["content","yield",["loc",[null,[3,2],[3,11]]]]
    ],
    locals: [],
    templates: []
  };
}()));
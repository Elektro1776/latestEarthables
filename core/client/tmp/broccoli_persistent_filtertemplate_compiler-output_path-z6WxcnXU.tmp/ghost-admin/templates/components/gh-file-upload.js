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
      "moduleName": "ghost-admin/templates/components/gh-file-upload.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("input");
      dom.setAttribute(el1,"data-url","upload");
      dom.setAttribute(el1,"class","gh-input btn-block");
      dom.setAttribute(el1,"type","file");
      dom.setAttribute(el1,"name","importfile");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("button");
      dom.setAttribute(el1,"type","submit");
      dom.setAttribute(el1,"class","btn btn-green btn-block");
      dom.setAttribute(el1,"id","startupload");
      var el2 = dom.createTextNode("\n    ");
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
      morphs[0] = dom.createAttrMorph(element0, 'accept');
      morphs[1] = dom.createAttrMorph(element1, 'disabled');
      morphs[2] = dom.createElementMorph(element1);
      morphs[3] = dom.createMorphAt(element1,1,1);
      return morphs;
    },
    statements: [
      ["attribute","accept",["concat",[["get","acceptEncoding",["loc",[null,[1,92],[1,106]]]]]]],
      ["attribute","disabled",["get","uploadButtonDisabled",["loc",[null,[2,82],[2,102]]]]],
      ["element","action",["upload"],[],["loc",[null,[2,105],[2,124]]]],
      ["content","uploadButtonText",["loc",[null,[3,4],[3,24]]]]
    ],
    locals: [],
    templates: []
  };
}()));
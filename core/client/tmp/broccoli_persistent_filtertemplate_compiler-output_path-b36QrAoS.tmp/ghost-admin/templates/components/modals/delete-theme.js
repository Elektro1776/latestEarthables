export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 19,
            "column": 4
          },
          "end": {
            "line": 19,
            "column": 88
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/delete-theme.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Delete");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
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
          "line": 21,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/components/modals/delete-theme.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("header");
      dom.setAttribute(el1,"class","modal-header");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h1");
      var el3 = dom.createTextNode("Are you sure you want to delete this theme?");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("a");
      dom.setAttribute(el1,"class","close icon-x");
      dom.setAttribute(el1,"href","");
      dom.setAttribute(el1,"title","Close");
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"class","hidden");
      var el3 = dom.createTextNode("Close");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","modal-body");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("strong");
      var el3 = dom.createTextNode("WARNING:");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    You're about to delete \"");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("strong");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\".\n    This is permanent!\n    No backups, no restores, no magic undo button. We warned you, ok?\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("strong");
      var el3 = dom.createTextNode("RECOMMENDED:");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"href","#");
      var el3 = dom.createTextNode("Download your theme before continuing");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","modal-footer");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","btn btn-default btn-minor");
      var el3 = dom.createTextNode("Cancel");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
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
      var element0 = dom.childAt(fragment, [2]);
      var element1 = dom.childAt(fragment, [4]);
      var element2 = dom.childAt(element1, [11]);
      var element3 = dom.childAt(fragment, [6]);
      var element4 = dom.childAt(element3, [1]);
      var morphs = new Array(5);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
      morphs[2] = dom.createElementMorph(element2);
      morphs[3] = dom.createElementMorph(element4);
      morphs[4] = dom.createMorphAt(element3,3,3);
      return morphs;
    },
    statements: [
      ["element","action",["closeModal"],[],["loc",[null,[4,46],[4,69]]]],
      ["content","theme.label",["loc",[null,[8,36],[8,51]]]],
      ["element","action",[["get","download",["loc",[null,[14,25],[14,33]]]]],[],["loc",[null,[14,16],[14,35]]]],
      ["element","action",["closeModal"],[],["loc",[null,[18,12],[18,35]]]],
      ["block","gh-spin-button",[],["action","confirm","class","btn btn-red","submitting",["subexpr","@mut",[["get","submitting",["loc",[null,[19,70],[19,80]]]]],[],[]]],0,null,["loc",[null,[19,4],[19,107]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));
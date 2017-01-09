export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 8,
            "column": 4
          },
          "end": {
            "line": 10,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/delete-tag.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","red");
        var el2 = dom.createTextNode("This tag is attached to ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["content","tag.count.posts",["loc",[null,[9,50],[9,69]]]],
        ["content","postInflection",["loc",[null,[9,70],[9,88]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 16,
            "column": 4
          },
          "end": {
            "line": 16,
            "column": 88
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/delete-tag.hbs"
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
          "line": 18,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/components/modals/delete-tag.hbs"
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
      var el3 = dom.createTextNode("Are you sure you want to delete this tag?");
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
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("    You're about to delete \"");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("strong");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\". This is permanent! No backups, no restores, no magic undo button. We warned you, ok?\n");
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
      var element1 = dom.childAt(fragment, [2]);
      var element2 = dom.childAt(fragment, [4]);
      var element3 = dom.childAt(fragment, [6]);
      var element4 = dom.childAt(element3, [1]);
      var morphs = new Array(5);
      morphs[0] = dom.createElementMorph(element1);
      morphs[1] = dom.createMorphAt(element2,3,3);
      morphs[2] = dom.createMorphAt(dom.childAt(element2, [5]),0,0);
      morphs[3] = dom.createElementMorph(element4);
      morphs[4] = dom.createMorphAt(element3,3,3);
      return morphs;
    },
    statements: [
      ["element","action",["closeModal"],[],["loc",[null,[4,46],[4,69]]]],
      ["block","if",[["get","tag.post_count",["loc",[null,[8,10],[8,24]]]]],[],0,null,["loc",[null,[8,4],[10,11]]]],
      ["content","tag.name",["loc",[null,[11,36],[11,48]]]],
      ["element","action",["closeModal"],[],["loc",[null,[15,12],[15,35]]]],
      ["block","gh-spin-button",[],["action","confirm","class","btn btn-red","submitting",["subexpr","@mut",[["get","submitting",["loc",[null,[16,70],[16,80]]]]],[],[]]],1,null,["loc",[null,[16,4],[16,107]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));
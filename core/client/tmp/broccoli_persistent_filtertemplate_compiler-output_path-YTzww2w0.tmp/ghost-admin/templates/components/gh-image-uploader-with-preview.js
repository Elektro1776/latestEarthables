export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-image-uploader-with-preview.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","gh-image-uploader -with-image");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createElement("img");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","image-cancel icon-trash");
        dom.setAttribute(el2,"title","Delete");
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","hidden");
        var el4 = dom.createTextNode("Delete");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1, 0]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element1, 'src');
        morphs[1] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [
        ["attribute","src",["get","image",["loc",[null,[3,24],[3,29]]]]],
        ["element","action",[["get","remove",["loc",[null,[4,67],[4,73]]]]],[],["loc",[null,[4,58],[4,75]]]]
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
            "line": 8,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-image-uploader-with-preview.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
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
        ["inline","gh-image-uploader",[],["text",["subexpr","@mut",[["get","text",["loc",[null,[10,13],[10,17]]]]],[],[]],"altText",["subexpr","@mut",[["get","altText",["loc",[null,[11,16],[11,23]]]]],[],[]],"update",["subexpr","action",["update"],[],["loc",[null,[12,15],[12,32]]]],"onInput",["subexpr","action",["onInput"],[],["loc",[null,[13,16],[13,34]]]],"uploadStarted",["subexpr","action",["uploadStarted"],[],["loc",[null,[14,22],[14,46]]]],"uploadFinished",["subexpr","action",["uploadFinished"],[],["loc",[null,[15,23],[15,48]]]],"formChanged",["subexpr","action",["formChanged"],[],["loc",[null,[16,20],[16,42]]]]],["loc",[null,[9,4],[17,6]]]]
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
          "line": 19,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/components/gh-image-uploader-with-preview.hbs"
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
      ["block","if",[["get","image",["loc",[null,[1,6],[1,11]]]]],[],0,1,["loc",[null,[1,0],[18,7]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));
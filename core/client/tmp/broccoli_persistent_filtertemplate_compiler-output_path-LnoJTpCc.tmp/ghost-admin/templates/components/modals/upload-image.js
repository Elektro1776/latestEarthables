export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 2,
            "column": 4
          },
          "end": {
            "line": 9,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/upload-image.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","gh-image-uploader -with-image");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createElement("img");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","image-cancel icon-trash");
        dom.setAttribute(el2,"title","Delete");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","hidden");
        var el4 = dom.createTextNode("Delete");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
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
        ["attribute","src",["get","url",["loc",[null,[4,28],[4,31]]]]],
        ["element","action",["removeImage"],[],["loc",[null,[5,62],[5,86]]]]
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
            "line": 9,
            "column": 4
          },
          "end": {
            "line": 16,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/upload-image.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
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
        ["inline","gh-image-uploader",[],["image",["subexpr","@mut",[["get","newUrl",["loc",[null,[11,18],[11,24]]]]],[],[]],"saveButton",false,"update",["subexpr","action",["fileUploaded"],[],["loc",[null,[13,19],[13,42]]]],"onInput",["subexpr","action",[["subexpr","mut",[["get","newUrl",["loc",[null,[14,33],[14,39]]]]],[],["loc",[null,[14,28],[14,40]]]]],[],["loc",[null,[14,20],[14,41]]]]],["loc",[null,[10,8],[15,10]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 21,
            "column": 4
          },
          "end": {
            "line": 21,
            "column": 110
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/upload-image.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Save");
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
          "line": 23,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/components/modals/upload-image.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","modal-body");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
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
      var element3 = dom.childAt(fragment, [2]);
      var element4 = dom.childAt(element3, [1]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
      morphs[1] = dom.createElementMorph(element4);
      morphs[2] = dom.createMorphAt(element3,3,3);
      return morphs;
    },
    statements: [
      ["block","if",[["get","url",["loc",[null,[2,10],[2,13]]]]],[],0,1,["loc",[null,[2,4],[16,11]]]],
      ["element","action",["closeModal"],[],["loc",[null,[20,12],[20,35]]]],
      ["block","gh-spin-button",[],["action","confirm","class","btn btn-blue right js-button-accept","submitting",["subexpr","@mut",[["get","submitting",["loc",[null,[21,94],[21,104]]]]],[],[]]],2,null,["loc",[null,[21,4],[21,129]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));
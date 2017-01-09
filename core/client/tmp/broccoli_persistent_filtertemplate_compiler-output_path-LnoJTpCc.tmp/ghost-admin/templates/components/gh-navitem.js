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
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-navitem.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","gh-blognav-grab icon-grab");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","sr-only");
        var el3 = dom.createTextNode("Reorder");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
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
  var child1 = (function() {
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
            "line": 11,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-navitem.hbs"
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
        var el1 = dom.createTextNode("\n        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","gh-trim-focus-input",[["get","navItem.label",["loc",[null,[9,30],[9,43]]]]],["shouldFocus",["subexpr","@mut",[["get","navItem.last",["loc",[null,[9,56],[9,68]]]]],[],[]],"placeholder","Label","keyPress",["subexpr","action",["clearLabelErrors"],[],["loc",[null,[9,98],[9,125]]]],"update",["subexpr","action",[["subexpr","mut",[["get","navItem.label",["loc",[null,[9,146],[9,159]]]]],[],["loc",[null,[9,141],[9,160]]]]],[],["loc",[null,[9,133],[9,161]]]]],["loc",[null,[9,8],[9,163]]]],
        ["inline","gh-error-message",[],["errors",["subexpr","@mut",[["get","navItem.errors",["loc",[null,[10,34],[10,48]]]]],[],[]],"property","label"],["loc",[null,[10,8],[10,67]]]]
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
            "line": 12,
            "column": 4
          },
          "end": {
            "line": 15,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-navitem.hbs"
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
        var el1 = dom.createTextNode("\n        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","gh-navitem-url-input",[],["baseUrl",["subexpr","@mut",[["get","baseUrl",["loc",[null,[13,39],[13,46]]]]],[],[]],"url",["subexpr","@mut",[["get","navItem.url",["loc",[null,[13,51],[13,62]]]]],[],[]],"isNew",["subexpr","@mut",[["get","navItem.isNew",["loc",[null,[13,69],[13,82]]]]],[],[]],"change","updateUrl","clearErrors",["subexpr","action",["clearUrlErrors"],[],["loc",[null,[13,114],[13,139]]]]],["loc",[null,[13,8],[13,141]]]],
        ["inline","gh-error-message",[],["errors",["subexpr","@mut",[["get","navItem.errors",["loc",[null,[14,34],[14,48]]]]],[],[]],"property","url"],["loc",[null,[14,8],[14,65]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child3 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 18,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-navitem.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"type","button");
        dom.setAttribute(el1,"class","gh-blognav-add");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","icon-add2");
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","sr-only");
        var el4 = dom.createTextNode("Add");
        dom.appendChild(el3, el4);
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
        var element1 = dom.childAt(fragment, [1]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [
        ["element","action",["addItem"],[],["loc",[null,[19,49],[19,69]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child4 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 22,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-navitem.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"type","button");
        dom.setAttribute(el1,"class","gh-blognav-delete");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","icon-trash");
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","sr-only");
        var el4 = dom.createTextNode("Delete");
        dom.appendChild(el3, el4);
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
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [
        ["element","action",["deleteItem",["get","navItem",["loc",[null,[23,74],[23,81]]]]],[],["loc",[null,[23,52],[23,83]]]]
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
          "line": 27,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/components/gh-navitem.hbs"
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
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","gh-blognav-line");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [2]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(element2,1,1);
      morphs[2] = dom.createMorphAt(element2,2,2);
      morphs[3] = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","unless",[["get","navItem.isNew",["loc",[null,[1,10],[1,23]]]]],[],0,null,["loc",[null,[1,0],[5,11]]]],
      ["block","gh-validation-status-container",[],["tagName","span","class","gh-blognav-label","errors",["subexpr","@mut",[["get","navItem.errors",["loc",[null,[8,85],[8,99]]]]],[],[]],"property","label","hasValidated",["subexpr","@mut",[["get","navItem.hasValidated",["loc",[null,[8,130],[8,150]]]]],[],[]]],1,null,["loc",[null,[8,4],[11,39]]]],
      ["block","gh-validation-status-container",[],["tagName","span","class","gh-blognav-url","errors",["subexpr","@mut",[["get","navItem.errors",["loc",[null,[12,83],[12,97]]]]],[],[]],"property","url","hasValidated",["subexpr","@mut",[["get","navItem.hasValidated",["loc",[null,[12,126],[12,146]]]]],[],[]]],2,null,["loc",[null,[12,4],[15,39]]]],
      ["block","if",[["get","navItem.isNew",["loc",[null,[18,6],[18,19]]]]],[],3,4,["loc",[null,[18,0],[26,7]]]]
    ],
    locals: [],
    templates: [child0, child1, child2, child3, child4]
  };
}()));
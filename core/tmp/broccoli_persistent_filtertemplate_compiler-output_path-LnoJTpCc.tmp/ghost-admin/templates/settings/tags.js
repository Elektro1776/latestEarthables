export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 3,
            "column": 8
          },
          "end": {
            "line": 3,
            "column": 75
          }
        },
        "moduleName": "ghost-admin/templates/settings/tags.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        var el2 = dom.createTextNode("Tags");
        dom.appendChild(el1, el2);
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
            "line": 5,
            "column": 12
          },
          "end": {
            "line": 5,
            "column": 89
          }
        },
        "moduleName": "ghost-admin/templates/settings/tags.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("New Tag");
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
  var child2 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 16
              },
              "end": {
                "line": 20,
                "column": 16
              }
            },
            "moduleName": "ghost-admin/templates/settings/tags.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                    ");
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
            ["inline","gh-tag",[],["tag",["subexpr","@mut",[["get","tag",["loc",[null,[19,33],[19,36]]]]],[],[]],"onDelete",["subexpr","action",[["get","checkScroll",["loc",[null,[19,54],[19,65]]]]],[],["loc",[null,[19,46],[19,66]]]]],["loc",[null,[19,20],[19,68]]]]
          ],
          locals: ["tag"],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 8
            },
            "end": {
              "line": 22,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/settings/tags.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("section");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0,1,1);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["tag-list-content settings-tags ",["subexpr","if",[["get","tagListFocused",["loc",[null,[17,64],[17,78]]]],"keyboard-focused"],[],["loc",[null,[17,59],[17,99]]]]]]],
          ["block","each",[["get","tags",["loc",[null,[18,24],[18,28]]]]],[],0,null,["loc",[null,[18,16],[20,25]]]]
        ],
        locals: ["checkScroll"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 10,
            "column": 4
          },
          "end": {
            "line": 26,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/settings/tags.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createAttrMorph(element1, 'class');
        morphs[2] = dom.createMorphAt(element1,1,1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","gh-infinite-scroll",[],["fetch","loadNextPage","isLoading",["subexpr","@mut",[["get","isLoading",["loc",[null,[13,22],[13,31]]]]],[],[]],"classNames","tag-list"],0,null,["loc",[null,[11,8],[22,31]]]],
        ["attribute","class",["concat",["settings-menu-container tag-settings ",["subexpr","if",[["get","tagContentFocused",["loc",[null,[23,66],[23,83]]]],"keyboard-focused"],[],["loc",[null,[23,61],[23,104]]]]," ",["subexpr","if",[["get","container.displaySettingsPane",["loc",[null,[23,110],[23,139]]]],"tag-settings-in"],[],["loc",[null,[23,105],[23,159]]]]]]],
        ["content","outlet",["loc",[null,[24,12],[24,22]]]]
      ],
      locals: ["container"],
      templates: [child0]
    };
  }());
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
          "line": 28,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/settings/tags.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","gh-view");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("header");
      dom.setAttribute(el2,"class","view-header");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      dom.setAttribute(el3,"class","view-actions");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [0]);
      var element3 = dom.childAt(element2, [1]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(element3,1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element3, [3]),1,1);
      morphs[2] = dom.createMorphAt(element2,3,3);
      return morphs;
    },
    statements: [
      ["block","gh-view-title",[],["openMobileMenu","openMobileMenu"],0,null,["loc",[null,[3,8],[3,93]]]],
      ["block","link-to",["settings.tags.new"],["class","btn btn-green","title","New Tag"],1,null,["loc",[null,[5,12],[5,101]]]],
      ["block","gh-tags-management-container",[],["tags",["subexpr","@mut",[["get","tags",["loc",[null,[10,41],[10,45]]]]],[],[]],"selectedTag",["subexpr","@mut",[["get","selectedTag",["loc",[null,[10,58],[10,69]]]]],[],[]],"enteredMobile","enteredMobile","leftMobile","leftMobile"],2,null,["loc",[null,[10,4],[26,37]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));
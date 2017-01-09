export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
              "line": 2,
              "column": 59
            }
          },
          "moduleName": "ghost-admin/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Skip to main content");
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
              "line": 7,
              "column": 8
            },
            "end": {
              "line": 9,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
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
          ["inline","gh-nav-menu",[],["open",["subexpr","@mut",[["get","autoNavOpen",["loc",[null,[8,31],[8,42]]]]],[],[]],"toggleMaximise","toggleAutoNav","openAutoNav","openAutoNav","showMarkdownHelp","toggleMarkdownHelpModal","closeMobileMenu","closeMobileMenu"],["loc",[null,[8,12],[8,178]]]]
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
              "line": 11,
              "column": 8
            },
            "end": {
              "line": 13,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
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
          ["content","outlet",["loc",[null,[12,12],[12,22]]]]
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
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/application.hbs"
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
        var el1 = dom.createTextNode("\n\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [5]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[2] = dom.createAttrMorph(element0, 'class');
        morphs[3] = dom.createMorphAt(element0,1,1);
        morphs[4] = dom.createMorphAt(element0,3,3);
        morphs[5] = dom.createMorphAt(element0,5,5);
        morphs[6] = dom.createMorphAt(element0,7,7);
        morphs[7] = dom.createMorphAt(element0,9,9);
        return morphs;
      },
      statements: [
        ["block","gh-skip-link",[],["anchor",".gh-main"],0,null,["loc",[null,[2,4],[2,76]]]],
        ["inline","gh-alerts",[],["notify","topNotificationChange"],["loc",[null,[4,4],[4,48]]]],
        ["attribute","class",["concat",["gh-viewport ",["subexpr","if",[["get","autoNav",["loc",[null,[6,33],[6,40]]]],"gh-autonav"],[],["loc",[null,[6,28],[6,55]]]]," ",["subexpr","if",[["get","showSettingsMenu",["loc",[null,[6,61],[6,77]]]],"settings-menu-expanded"],[],["loc",[null,[6,56],[6,104]]]]," ",["subexpr","if",[["get","showMobileMenu",["loc",[null,[6,110],[6,124]]]],"mobile-menu-expanded"],[],["loc",[null,[6,105],[6,149]]]]]]],
        ["block","if",[["get","showNavMenu",["loc",[null,[7,14],[7,25]]]]],[],1,null,["loc",[null,[7,8],[9,15]]]],
        ["block","gh-main",[],["onMouseEnter","closeAutoNav","data-notification-count",["subexpr","@mut",[["get","topNotificationCount",["loc",[null,[11,71],[11,91]]]]],[],[]]],2,null,["loc",[null,[11,8],[13,20]]]],
        ["content","gh-notifications",["loc",[null,[16,8],[16,28]]]],
        ["inline","gh-content-cover",[],["onClick","closeMenus","onMouseEnter","closeAutoNav"],["loc",[null,[18,8],[18,77]]]],
        ["inline","outlet",["settings-menu"],[],["loc",[null,[20,8],[20,34]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
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
            "line": 24,
            "column": 0
          },
          "end": {
            "line": 28,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/application.hbs"
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
        ["inline","gh-fullscreen-modal",["markdown-help"],["close",["subexpr","route-action",["toggleMarkdownHelpModal"],[],["loc",[null,[26,32],[26,72]]]],"modifier","wide"],["loc",[null,[25,4],[27,43]]]]
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
          "line": 29,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/application.hbs"
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
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","gh-app",[],["showSettingsMenu",["subexpr","@mut",[["get","showSettingsMenu",["loc",[null,[1,27],[1,43]]]]],[],[]]],0,null,["loc",[null,[1,0],[22,11]]]],
      ["block","if",[["get","showMarkdownHelpModal",["loc",[null,[24,6],[24,27]]]]],[],1,null,["loc",[null,[24,0],[28,7]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));
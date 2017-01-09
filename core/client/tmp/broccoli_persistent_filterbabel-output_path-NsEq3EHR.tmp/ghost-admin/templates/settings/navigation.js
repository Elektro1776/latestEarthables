define("ghost-admin/templates/settings/navigation", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
              "column": 81
            }
          },
          "moduleName": "ghost-admin/templates/settings/navigation.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("span");
          var el2 = dom.createTextNode("Navigation");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
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
              "column": 92
            }
          },
          "moduleName": "ghost-admin/templates/settings/navigation.hbs"
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
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 16
              },
              "end": {
                "line": 14,
                "column": 16
              }
            },
            "moduleName": "ghost-admin/templates/settings/navigation.hbs"
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
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "gh-navitem", [], ["navItem", ["subexpr", "@mut", [["get", "navItem", ["loc", [null, [13, 41], [13, 48]]]]], [], []], "baseUrl", ["subexpr", "@mut", [["get", "blogUrl", ["loc", [null, [13, 57], [13, 64]]]]], [], []], "addItem", "addItem", "deleteItem", "deleteItem", "updateUrl", "updateUrl", "group", ["subexpr", "@mut", [["get", "group", ["loc", [null, [13, 135], [13, 140]]]]], [], []]], ["loc", [null, [13, 20], [13, 142]]]]],
          locals: ["navItem"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 12
            },
            "end": {
              "line": 15,
              "column": 12
            }
          },
          "moduleName": "ghost-admin/templates/settings/navigation.hbs"
        },
        isEmpty: false,
        arity: 1,
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
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.navigation", ["loc", [null, [12, 24], [12, 40]]]]], [], 0, null, ["loc", [null, [12, 16], [14, 25]]]]],
        locals: ["group"],
        templates: [child0]
      };
    })();
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
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/settings/navigation.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "gh-view");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        dom.setAttribute(el2, "class", "view-header");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "class", "view-actions");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "view-container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3, "id", "settings-navigation");
        dom.setAttribute(el3, "class", "gh-blognav");
        dom.setAttribute(el3, "novalidate", "novalidate");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
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
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(element2, 1, 1);
        morphs[3] = dom.createMorphAt(element2, 3, 3);
        return morphs;
      },
      statements: [["block", "gh-view-title", [], ["openMobileMenu", "openMobileMenu"], 0, null, ["loc", [null, [3, 8], [3, 99]]]], ["block", "gh-spin-button", [], ["class", "btn btn-blue", "action", "save", "submitting", ["subexpr", "@mut", [["get", "submitting", ["loc", [null, [5, 76], [5, 86]]]]], [], []]], 1, null, ["loc", [null, [5, 12], [5, 111]]]], ["block", "sortable-group", [], ["onChange", ["subexpr", "action", ["reorderItems"], [], ["loc", [null, [11, 39], [11, 62]]]]], 2, null, ["loc", [null, [11, 12], [15, 31]]]], ["inline", "gh-navitem", [], ["navItem", ["subexpr", "@mut", [["get", "newNavItem", ["loc", [null, [16, 33], [16, 43]]]]], [], []], "baseUrl", ["subexpr", "@mut", [["get", "blogUrl", ["loc", [null, [16, 52], [16, 59]]]]], [], []], "addItem", "addItem", "updateUrl", "updateUrl"], ["loc", [null, [16, 12], [16, 101]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
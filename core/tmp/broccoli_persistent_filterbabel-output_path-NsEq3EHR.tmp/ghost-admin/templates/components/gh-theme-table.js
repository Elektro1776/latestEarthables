define("ghost-admin/templates/components/gh-theme-table", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 20
                },
                "end": {
                  "line": 13,
                  "column": 20
                }
              },
              "moduleName": "ghost-admin/templates/components/gh-theme-table.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("a");
              dom.setAttribute(el1, "href", "#");
              dom.setAttribute(el1, "class", "theme-list-action");
              var el2 = dom.createTextNode("\n                            Delete\n                        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element1 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element1, 'disabled');
              morphs[1] = dom.createElementMorph(element1);
              return morphs;
            },
            statements: [["attribute", "disabled", ["get", "theme.active", ["loc", [null, [10, 76], [10, 88]]]]], ["element", "action", [["get", "deleteTheme", ["loc", [null, [10, 45], [10, 56]]]], ["get", "theme", ["loc", [null, [10, 57], [10, 62]]]]], [], ["loc", [null, [10, 36], [10, 64]]]]],
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
                  "line": 19,
                  "column": 20
                },
                "end": {
                  "line": 21,
                  "column": 20
                }
              },
              "moduleName": "ghost-admin/templates/components/gh-theme-table.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "theme-list-action theme-list-action-activate");
              var el2 = dom.createTextNode("Active");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
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
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 21,
                  "column": 20
                },
                "end": {
                  "line": 25,
                  "column": 20
                }
              },
              "moduleName": "ghost-admin/templates/components/gh-theme-table.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("a");
              dom.setAttribute(el1, "href", "#");
              dom.setAttribute(el1, "class", "theme-list-action theme-list-action-activate");
              var el2 = dom.createTextNode("\n                            Activate\n                        ");
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
            statements: [["element", "action", [["get", "activateTheme", ["loc", [null, [22, 45], [22, 58]]]], ["get", "theme", ["loc", [null, [22, 59], [22, 64]]]]], [], ["loc", [null, [22, 36], [22, 66]]]]],
            locals: [],
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
                "line": 3,
                "column": 8
              },
              "end": {
                "line": 28,
                "column": 8
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-theme-table.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "theme-list-item-body");
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3, "class", "name");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "theme-list-item-aside");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "href", "#");
            dom.setAttribute(el3, "class", "theme-list-action");
            var el4 = dom.createTextNode("\n                        Download\n                    ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var element3 = dom.childAt(element2, [3]);
            var element4 = dom.childAt(element3, [3]);
            var morphs = new Array(5);
            morphs[0] = dom.createAttrMorph(element2, 'class');
            morphs[1] = dom.createMorphAt(dom.childAt(element2, [1, 1]), 0, 0);
            morphs[2] = dom.createMorphAt(element3, 1, 1);
            morphs[3] = dom.createElementMorph(element4);
            morphs[4] = dom.createMorphAt(element3, 5, 5);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["theme-list-item ", ["subexpr", "if", [["get", "theme.active", ["loc", [null, [4, 45], [4, 57]]]], "theme-list-item--active"], [], ["loc", [null, [4, 40], [4, 85]]]]]]], ["content", "theme.label", ["loc", [null, [6, 39], [6, 54]]]], ["block", "if", [["get", "theme.isDeletable", ["loc", [null, [9, 26], [9, 43]]]]], [], 0, null, ["loc", [null, [9, 20], [13, 27]]]], ["element", "action", [["get", "downloadTheme", ["loc", [null, [15, 41], [15, 54]]]], ["get", "theme", ["loc", [null, [15, 55], [15, 60]]]]], [], ["loc", [null, [15, 32], [15, 62]]]], ["block", "if", [["get", "theme.active", ["loc", [null, [19, 26], [19, 38]]]]], [], 1, 2, ["loc", [null, [19, 20], [25, 27]]]]],
          locals: ["theme"],
          templates: [child0, child1, child2]
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
              "line": 30,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-theme-table.hbs"
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
          dom.setAttribute(el1, "class", "theme-list");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "themes", ["loc", [null, [3, 16], [3, 22]]]]], [], 0, null, ["loc", [null, [3, 8], [28, 17]]]]],
        locals: [],
        templates: [child0]
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
              "line": 30,
              "column": 0
            },
            "end": {
              "line": 32,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-theme-table.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    No theme found!\n");
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
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 33,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-theme-table.hbs"
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
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "themes", ["loc", [null, [1, 6], [1, 12]]]]], [], 0, 1, ["loc", [null, [1, 0], [32, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
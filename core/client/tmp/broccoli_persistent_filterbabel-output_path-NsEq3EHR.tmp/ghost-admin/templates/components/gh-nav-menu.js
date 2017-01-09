define("ghost-admin/templates/components/gh-nav-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
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
          "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
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
          dom.setAttribute(el1, "class", "gh-nav-menu-icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "gh-nav-menu-details");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "gh-nav-menu-details-blog");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "gh-nav-menu-details-user");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon-arrow");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var element4 = dom.childAt(fragment, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element3, 'style');
          morphs[1] = dom.createMorphAt(dom.childAt(element4, [1]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element4, [3]), 0, 0);
          return morphs;
        },
        statements: [["attribute", "style", ["get", "navMenuIcon", ["loc", [null, [2, 42], [2, 53]]]]], ["content", "config.blogTitle", ["loc", [null, [4, 46], [4, 66]]]], ["content", "session.user.name", ["loc", [null, [5, 46], [5, 67]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 32
              },
              "end": {
                "line": 11,
                "column": 176
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon-shop");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" About Ghost");
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
                "line": 13,
                "column": 32
              },
              "end": {
                "line": 13,
                "column": 199
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon-user");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Your Profile");
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
                "line": 14,
                "column": 32
              },
              "end": {
                "line": 14,
                "column": 166
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon-signout");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Sign Out");
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
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "dropdown-menu dropdown-triangle-top js-user-menu-dropdown-menu");
          dom.setAttribute(el1, "role", "menu");
          dom.setAttribute(el1, "style", "right:-20px;left:auto;");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "role", "presentation");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "class", "divider");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "role", "presentation");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "role", "presentation");
          var el3 = dom.createComment("");
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
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [5]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [7]), 0, 0);
          return morphs;
        },
        statements: [["block", "link-to", ["about"], ["classNames", "gh-nav-menu-about dropdown-item js-nav-item", "role", "menuitem", "tabindex", "-1"], 0, null, ["loc", [null, [11, 32], [11, 188]]]], ["block", "link-to", ["team.user", ["get", "session.user.slug", ["loc", [null, [13, 55], [13, 72]]]]], ["classNames", "dropdown-item user-menu-profile js-nav-item", "role", "menuitem", "tabindex", "-1"], 1, null, ["loc", [null, [13, 32], [13, 211]]]], ["block", "link-to", ["signout"], ["classNames", "dropdown-item user-menu-signout", "role", "menuitem", "tabindex", "-1"], 2, null, ["loc", [null, [14, 32], [14, 178]]]]],
        locals: [],
        templates: [child0, child1, child2]
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
              "line": 23,
              "column": 12
            },
            "end": {
              "line": 23,
              "column": 101
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon-pen");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("New Post");
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
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 12
            },
            "end": {
              "line": 24,
              "column": 100
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon-content");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("Content");
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
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 12
            },
            "end": {
              "line": 26,
              "column": 91
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon-team");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("Team");
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
    var child5 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 30,
                  "column": 20
                },
                "end": {
                  "line": 30,
                  "column": 119
                }
              },
              "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("i");
              dom.setAttribute(el1, "class", "icon-mail");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("Subscribers");
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
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 29,
                "column": 12
              },
              "end": {
                "line": 31,
                "column": 12
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["block", "link-to", ["subscribers"], ["classNames", "gh-nav-main-subscribers"], 0, null, ["loc", [null, [30, 20], [30, 131]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 8
            },
            "end": {
              "line": 32,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
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
        statements: [["block", "if", [["subexpr", "gh-user-can-admin", [["get", "session.user", ["loc", [null, [29, 37], [29, 49]]]]], [], ["loc", [null, [29, 18], [29, 50]]]]], [], 0, null, ["loc", [null, [29, 12], [31, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child6 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 16
              },
              "end": {
                "line": 37,
                "column": 120
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon-settings");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("General");
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
                "line": 39,
                "column": 16
              },
              "end": {
                "line": 39,
                "column": 128
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon-compass");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("Navigation");
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
                "line": 40,
                "column": 16
              },
              "end": {
                "line": 40,
                "column": 106
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon-tag");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("Tags");
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
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 41,
                "column": 16
              },
              "end": {
                "line": 41,
                "column": 137
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon-code");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("Code Injection");
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
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 42,
                "column": 16
              },
              "end": {
                "line": 42,
                "column": 106
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon-box");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("Apps");
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
      var child5 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 43,
                "column": 16
              },
              "end": {
                "line": 43,
                "column": 107
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon-labs");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("Labs");
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
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 4
            },
            "end": {
              "line": 45,
              "column": 4
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "gh-nav-list gh-nav-settings");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "class", "gh-nav-list-h");
          var el3 = dom.createTextNode("Settings");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createComment("");
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
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [6]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [8]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element1, [10]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element1, [12]), 0, 0);
          morphs[5] = dom.createMorphAt(dom.childAt(element1, [14]), 0, 0);
          return morphs;
        },
        statements: [["block", "link-to", ["settings.general"], ["classNames", "gh-nav-settings-general"], 0, null, ["loc", [null, [37, 16], [37, 132]]]], ["block", "link-to", ["settings.navigation"], ["classNames", "gh-nav-settings-navigation"], 1, null, ["loc", [null, [39, 16], [39, 140]]]], ["block", "link-to", ["settings.tags"], ["classNames", "gh-nav-settings-tags"], 2, null, ["loc", [null, [40, 16], [40, 118]]]], ["block", "link-to", ["settings.code-injection"], ["classNames", "gh-nav-settings-code-injection"], 3, null, ["loc", [null, [41, 16], [41, 149]]]], ["block", "link-to", ["settings.apps"], ["classNames", "gh-nav-settings-apps"], 4, null, ["loc", [null, [42, 16], [42, 118]]]], ["block", "link-to", ["settings.labs"], ["classNames", "gh-nav-settings-labs"], 5, null, ["loc", [null, [43, 16], [43, 119]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5]
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 51,
              "column": 8
            },
            "end": {
              "line": 55,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "gh-help-button");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "icon-question");
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "hidden");
          var el4 = dom.createTextNode("Help");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
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
    var child8 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 56,
              "column": 8
            },
            "end": {
              "line": 66,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "dropdown-menu dropdown-triangle-bottom");
          dom.setAttribute(el1, "role", "menu");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "role", "presentation");
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "class", "dropdown-item help-menu-support");
          dom.setAttribute(el3, "role", "menuitem");
          dom.setAttribute(el3, "tabindex", "-1");
          dom.setAttribute(el3, "href", "http://support.ghost.org/");
          dom.setAttribute(el3, "target", "_blank");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "icon-ambulance");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" Support Center");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "role", "presentation");
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "class", "dropdown-item help-menu-tweet");
          dom.setAttribute(el3, "role", "menuitem");
          dom.setAttribute(el3, "tabindex", "-1");
          dom.setAttribute(el3, "href", "https://twitter.com/intent/tweet?text=%40TryGhost+Hi%21+Can+you+help+me+with+&related=TryGhost");
          dom.setAttribute(el3, "target", "_blank");
          dom.setAttribute(el3, "onclick", "window.open(this.href, 'twitter-share', 'width=550,height=235');return false;");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "icon-twitter");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" Tweet @TryGhost!");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "class", "divider");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "role", "presentation");
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "class", "dropdown-item help-menu-how-to");
          dom.setAttribute(el3, "role", "menuitem");
          dom.setAttribute(el3, "tabindex", "-1");
          dom.setAttribute(el3, "href", "http://support.ghost.org/how-to-use-ghost/");
          dom.setAttribute(el3, "target", "_blank");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "icon-book");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" How to Use Ghost");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "role", "presentation");
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "class", "dropdown-item help-menu-markdown");
          dom.setAttribute(el3, "role", "menuitem");
          dom.setAttribute(el3, "tabindex", "-1");
          dom.setAttribute(el3, "href", "");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "icon-markdown");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" Markdown Help");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "class", "divider");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2, "role", "presentation");
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "class", "dropdown-item help-menu-wishlist");
          dom.setAttribute(el3, "role", "menuitem");
          dom.setAttribute(el3, "tabindex", "-1");
          dom.setAttribute(el3, "href", "http://ideas.ghost.org/");
          dom.setAttribute(el3, "target", "_blank");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "icon-idea");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" Wishlist");
          dom.appendChild(el3, el4);
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
          var element0 = dom.childAt(fragment, [1, 9, 0]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["showMarkdownHelp"], [], ["loc", [null, [62, 122], [62, 151]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 70,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-nav-menu.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "gh-nav-body");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "gh-nav-search");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "gh-nav-list gh-nav-main");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1, "class", "gh-nav-footer");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "gh-nav-footer-sitelink");
        dom.setAttribute(el2, "target", "_blank");
        var el3 = dom.createTextNode("View blog");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "gh-help-menu");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "gh-autonav-toggle");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [2]);
        var element6 = dom.childAt(element5, [3]);
        var element7 = dom.childAt(fragment, [4]);
        var element8 = dom.childAt(element7, [3]);
        var element9 = dom.childAt(element7, [5]);
        var element10 = dom.childAt(fragment, [6]);
        var morphs = new Array(13);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(dom.childAt(element5, [1]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element6, [2]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(element6, [4]), 0, 0);
        morphs[5] = dom.createMorphAt(dom.childAt(element6, [7]), 0, 0);
        morphs[6] = dom.createMorphAt(element6, 9, 9);
        morphs[7] = dom.createMorphAt(element5, 5, 5);
        morphs[8] = dom.createMorphAt(element7, 1, 1);
        morphs[9] = dom.createAttrMorph(element8, 'href');
        morphs[10] = dom.createMorphAt(element9, 1, 1);
        morphs[11] = dom.createMorphAt(element9, 2, 2);
        morphs[12] = dom.createElementMorph(element10);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "gh-dropdown-button", [], ["tagName", "header", "class", "gh-nav-menu", "dropdownName", "user-menu"], 0, null, ["loc", [null, [1, 0], [8, 23]]]], ["block", "gh-dropdown", [], ["tagName", "div", "name", "user-menu", "closeOnClick", "true"], 1, null, ["loc", [null, [9, 0], [16, 16]]]], ["inline", "gh-search-input", [], ["class", "gh-nav-search-input"], ["loc", [null, [19, 8], [19, 55]]]], ["block", "link-to", ["editor.new"], ["classNames", "gh-nav-main-editor"], 2, null, ["loc", [null, [23, 12], [23, 113]]]], ["block", "link-to", ["posts"], ["classNames", "gh-nav-main-content"], 3, null, ["loc", [null, [24, 12], [24, 112]]]], ["block", "link-to", ["team"], ["classNames", "gh-nav-main-users"], 4, null, ["loc", [null, [26, 12], [26, 103]]]], ["block", "if", [["get", "feature.subscribers", ["loc", [null, [28, 14], [28, 33]]]]], [], 5, null, ["loc", [null, [28, 8], [32, 15]]]], ["block", "if", [["subexpr", "gh-user-can-admin", [["get", "session.user", ["loc", [null, [34, 29], [34, 41]]]]], [], ["loc", [null, [34, 10], [34, 42]]]]], [], 6, null, ["loc", [null, [34, 4], [45, 11]]]], ["inline", "gh-menu-toggle", [], ["desktopAction", "toggleAutoNav", "mobileAction", "closeMobileMenu"], ["loc", [null, [48, 4], [48, 83]]]], ["attribute", "href", ["concat", [["get", "config.blogUrl", ["loc", [null, [49, 46], [49, 60]]]], "/"]]], ["block", "gh-dropdown-button", [], ["dropdownName", "help-menu", "tagName", "div"], 7, null, ["loc", [null, [51, 8], [55, 31]]]], ["block", "gh-dropdown", [], ["tagName", "div", "name", "help-menu", "closeOnClick", "true"], 8, null, ["loc", [null, [56, 8], [66, 24]]]], ["element", "action", ["openAutoNav"], ["on", "mouseEnter"], ["loc", [null, [69, 31], [69, 71]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8]
    };
  })());
});
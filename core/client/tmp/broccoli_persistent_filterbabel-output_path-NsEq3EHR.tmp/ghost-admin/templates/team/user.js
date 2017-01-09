define("ghost-admin/templates/team/user", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 12
              },
              "end": {
                "line": 4,
                "column": 37
              }
            },
            "moduleName": "ghost-admin/templates/team/user.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
              "line": 6,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
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
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon-arrow-right");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [5]), 0, 0);
          return morphs;
        },
        statements: [["block", "link-to", ["team"], [], 0, null, ["loc", [null, [4, 12], [4, 37]]]], ["content", "user.name", ["loc", [null, [5, 51], [5, 64]]]]],
        locals: [],
        templates: [child0]
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
                "line": 10,
                "column": 20
              },
              "end": {
                "line": 13,
                "column": 20
              }
            },
            "moduleName": "ghost-admin/templates/team/user.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon-settings");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "hidden");
            var el2 = dom.createTextNode("User Settings");
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
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 20,
                    "column": 32
                  },
                  "end": {
                    "line": 25,
                    "column": 32
                  }
                },
                "moduleName": "ghost-admin/templates/team/user.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                                    ");
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
              statements: [["inline", "gh-fullscreen-modal", ["transfer-owner"], ["confirm", ["subexpr", "action", ["transferOwnership"], [], ["loc", [null, [22, 66], [22, 94]]]], "close", ["subexpr", "action", ["toggleTransferOwnerModal"], [], ["loc", [null, [23, 64], [23, 99]]]], "modifier", "action wide"], ["loc", [null, [21, 36], [24, 82]]]]],
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
                  "line": 15,
                  "column": 24
                },
                "end": {
                  "line": 27,
                  "column": 24
                }
              },
              "moduleName": "ghost-admin/templates/team/user.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createTextNode("\n                                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("button");
              var el3 = dom.createTextNode("\n                                    Make Owner\n                                ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("                            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element6 = dom.childAt(fragment, [1]);
              var element7 = dom.childAt(element6, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createElementMorph(element7);
              morphs[1] = dom.createMorphAt(element6, 3, 3);
              return morphs;
            },
            statements: [["element", "action", ["toggleTransferOwnerModal"], [], ["loc", [null, [17, 40], [17, 77]]]], ["block", "if", [["get", "showTransferOwnerModal", ["loc", [null, [20, 38], [20, 60]]]]], [], 0, null, ["loc", [null, [20, 32], [25, 39]]]]],
            locals: [],
            templates: [child0]
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
                    "line": 33,
                    "column": 32
                  },
                  "end": {
                    "line": 39,
                    "column": 32
                  }
                },
                "moduleName": "ghost-admin/templates/team/user.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                                    ");
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
              statements: [["inline", "gh-fullscreen-modal", ["delete-user"], ["model", ["subexpr", "@mut", [["get", "user", ["loc", [null, [35, 64], [35, 68]]]]], [], []], "confirm", ["subexpr", "action", ["deleteUser"], [], ["loc", [null, [36, 66], [36, 87]]]], "close", ["subexpr", "action", ["toggleDeleteUserModal"], [], ["loc", [null, [37, 64], [37, 96]]]], "modifier", "action wide"], ["loc", [null, [34, 36], [38, 82]]]]],
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
                  "line": 28,
                  "column": 24
                },
                "end": {
                  "line": 41,
                  "column": 24
                }
              },
              "moduleName": "ghost-admin/templates/team/user.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createTextNode("\n                                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("button");
              dom.setAttribute(el2, "class", "delete");
              var el3 = dom.createTextNode("\n                                    Delete User\n                                ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("                            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element4 = dom.childAt(fragment, [1]);
              var element5 = dom.childAt(element4, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createElementMorph(element5);
              morphs[1] = dom.createMorphAt(element4, 3, 3);
              return morphs;
            },
            statements: [["element", "action", ["toggleDeleteUserModal"], [], ["loc", [null, [30, 40], [30, 74]]]], ["block", "if", [["get", "showDeleteUserModal", ["loc", [null, [33, 38], [33, 57]]]]], [], 0, null, ["loc", [null, [33, 32], [39, 39]]]]],
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
                "line": 14,
                "column": 20
              },
              "end": {
                "line": 42,
                "column": 20
              }
            },
            "moduleName": "ghost-admin/templates/team/user.hbs"
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
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "canMakeOwner", ["loc", [null, [15, 30], [15, 42]]]]], [], 0, null, ["loc", [null, [15, 24], [27, 31]]]], ["block", "if", [["get", "deleteUserActionIsVisible", ["loc", [null, [28, 30], [28, 55]]]]], [], 1, null, ["loc", [null, [28, 24], [41, 31]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 12
            },
            "end": {
              "line": 44,
              "column": 12
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "dropdown");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element8 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element8, 1, 1);
          morphs[1] = dom.createMorphAt(element8, 2, 2);
          return morphs;
        },
        statements: [["block", "gh-dropdown-button", [], ["dropdownName", "user-actions-menu", "classNames", "btn btn-default only-has-icon user-actions-cog", "title", "User Actions"], 0, null, ["loc", [null, [10, 20], [13, 43]]]], ["block", "gh-dropdown", [], ["name", "user-actions-menu", "tagName", "ul", "classNames", "user-actions-menu dropdown-menu dropdown-triangle-top-right"], 1, null, ["loc", [null, [14, 20], [42, 36]]]]],
        locals: [],
        templates: [child0, child1]
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
              "line": 46,
              "column": 12
            },
            "end": {
              "line": 46,
              "column": 66
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
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
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 54,
              "column": 12
            },
            "end": {
              "line": 59,
              "column": 12
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
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
        statements: [["inline", "gh-fullscreen-modal", ["upload-image"], ["model", ["subexpr", "hash", [], ["model", ["get", "user", ["loc", [null, [56, 56], [56, 60]]]], "imageProperty", "cover"], ["loc", [null, [56, 44], [56, 83]]]], "close", ["subexpr", "action", ["toggleUploadCoverModal"], [], ["loc", [null, [57, 44], [57, 77]]]], "modifier", "action wide"], ["loc", [null, [55, 16], [58, 62]]]]],
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
              "line": 73,
              "column": 20
            },
            "end": {
              "line": 78,
              "column": 20
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
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
        statements: [["inline", "gh-fullscreen-modal", ["upload-image"], ["model", ["subexpr", "hash", [], ["model", ["get", "user", ["loc", [null, [75, 64], [75, 68]]]], "imageProperty", "image"], ["loc", [null, [75, 52], [75, 91]]]], "close", ["subexpr", "action", ["toggleUploadImageModal"], [], ["loc", [null, [76, 52], [76, 85]]]], "modifier", "action wide"], ["loc", [null, [74, 24], [77, 70]]]]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 84,
                "column": 20
              },
              "end": {
                "line": 86,
                "column": 20
              }
            },
            "moduleName": "ghost-admin/templates/team/user.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
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
          statements: [["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [85, 50], [85, 61]]]]], [], []], "property", "name"], ["loc", [null, [85, 24], [85, 79]]]]],
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
                "line": 86,
                "column": 20
              },
              "end": {
                "line": 88,
                "column": 20
              }
            },
            "moduleName": "ghost-admin/templates/team/user.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("Use your real name so people can recognise you");
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
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 81,
              "column": 16
            },
            "end": {
              "line": 89,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "user-name");
          var el2 = dom.createTextNode("Full Name");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
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
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "user.name", ["loc", [null, [83, 31], [83, 40]]]]], ["id", "user-name", "class", "user-name", "placeholder", "Full Name", "autocorrect", "off", "focusOut", ["subexpr", "action", ["validate", "name"], ["target", ["get", "user", ["loc", [null, [83, 158], [83, 162]]]]], ["loc", [null, [83, 125], [83, 163]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "user.name", ["loc", [null, [83, 184], [83, 193]]]]], [], ["loc", [null, [83, 179], [83, 194]]]]], [], ["loc", [null, [83, 171], [83, 195]]]]], ["loc", [null, [83, 20], [83, 197]]]], ["block", "if", [["get", "user.errors.name", ["loc", [null, [84, 26], [84, 42]]]]], [], 0, 1, ["loc", [null, [84, 20], [88, 27]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 95,
              "column": 16
            },
            "end": {
              "line": 100,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "user-slug");
          var el2 = dom.createTextNode("Slug");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("/author/");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [5]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(element3, 0, 0);
          morphs[2] = dom.createMorphAt(element3, 2, 2);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "slugValue", ["loc", [null, [97, 31], [97, 40]]]]], ["class", "user-name", "id", "user-slug", "name", "user", "focusOut", ["subexpr", "action", [["subexpr", "perform", [["get", "updateSlug", ["loc", [null, [97, 112], [97, 122]]]], ["get", "slugValue", ["loc", [null, [97, 123], [97, 132]]]]], [], ["loc", [null, [97, 103], [97, 133]]]]], [], ["loc", [null, [97, 95], [97, 134]]]], "placeholder", "Slug", "selectOnClick", "true", "autocorrect", "off", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "slugValue", ["loc", [null, [97, 213], [97, 222]]]]], [], ["loc", [null, [97, 208], [97, 223]]]]], [], ["loc", [null, [97, 200], [97, 224]]]]], ["loc", [null, [97, 20], [97, 226]]]], ["content", "gh-blog-url", ["loc", [null, [98, 23], [98, 38]]]], ["content", "slugValue", ["loc", [null, [98, 46], [98, 59]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [99, 46], [99, 57]]]]], [], []], "property", "slug"], ["loc", [null, [99, 20], [99, 75]]]]],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 105,
                "column": 20
              },
              "end": {
                "line": 108,
                "column": 20
              }
            },
            "moduleName": "ghost-admin/templates/team/user.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["inline", "gh-input", [["get", "user.email", ["loc", [null, [106, 35], [106, 45]]]]], ["type", "email", "id", "user-email", "name", "email", "placeholder", "Email Address", "autocapitalize", "off", "autocorrect", "off", "autocomplete", "off", "focusOut", ["subexpr", "action", ["validate", "email"], ["target", ["get", "user", ["loc", [null, [106, 217], [106, 221]]]]], ["loc", [null, [106, 183], [106, 222]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "user.email", ["loc", [null, [106, 243], [106, 253]]]]], [], ["loc", [null, [106, 238], [106, 254]]]]], [], ["loc", [null, [106, 230], [106, 255]]]]], ["loc", [null, [106, 24], [106, 257]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [107, 50], [107, 61]]]]], [], []], "property", "email"], ["loc", [null, [107, 24], [107, 80]]]]],
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
                "line": 108,
                "column": 20
              },
              "end": {
                "line": 110,
                "column": 20
              }
            },
            "moduleName": "ghost-admin/templates/team/user.hbs"
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
          statements: [["content", "user.email", ["loc", [null, [109, 30], [109, 44]]]]],
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
              "line": 102,
              "column": 16
            },
            "end": {
              "line": 112,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "user-email");
          var el2 = dom.createTextNode("Email");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Used for notifications");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["block", "unless", [["get", "isAdminUserOnOwnerProfile", ["loc", [null, [105, 30], [105, 55]]]]], [], 0, 1, ["loc", [null, [105, 20], [110, 31]]]]],
        locals: [],
        templates: [child0, child1]
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
              "line": 114,
              "column": 16
            },
            "end": {
              "line": 128,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "form-group");
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2, "for", "user-role");
          var el3 = dom.createTextNode("Role");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "gh-select");
          dom.setAttribute(el2, "tabindex", "0");
          var el3 = dom.createTextNode("\n                            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("What permissions should this user have?");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          return morphs;
        },
        statements: [["inline", "gh-select-native", [], ["id", "new-user-role", "content", ["subexpr", "@mut", [["get", "roles", ["loc", [null, [119, 40], [119, 45]]]]], [], []], "optionValuePath", "id", "optionLabelPath", "name", "selection", ["subexpr", "@mut", [["get", "model.role", ["loc", [null, [122, 42], [122, 52]]]]], [], []], "action", "changeRole"], ["loc", [null, [118, 28], [124, 30]]]]],
        locals: [],
        templates: []
      };
    })();
    var child9 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 130,
              "column": 16
            },
            "end": {
              "line": 135,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "user-location");
          var el2 = dom.createTextNode("Location");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Where in the world do you live?");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "user.location", ["loc", [null, [132, 31], [132, 44]]]]], ["type", "text", "id", "user-location", "focusOut", ["subexpr", "action", ["validate", "location"], ["target", ["get", "user", ["loc", [null, [132, 122], [132, 126]]]]], ["loc", [null, [132, 85], [132, 127]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "user.location", ["loc", [null, [132, 148], [132, 161]]]]], [], ["loc", [null, [132, 143], [132, 162]]]]], [], ["loc", [null, [132, 135], [132, 163]]]]], ["loc", [null, [132, 20], [132, 165]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [133, 46], [133, 57]]]]], [], []], "property", "location"], ["loc", [null, [133, 20], [133, 79]]]]],
        locals: [],
        templates: []
      };
    })();
    var child10 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 137,
              "column": 16
            },
            "end": {
              "line": 142,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "user-website");
          var el2 = dom.createTextNode("Website");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Have a website or blog other than this one? Link it!");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "user.website", ["loc", [null, [139, 31], [139, 43]]]]], ["type", "url", "id", "user-website", "autocapitalize", "off", "autocorrect", "off", "autocomplete", "off", "focusOut", ["subexpr", "action", ["validate", "website"], ["target", ["get", "user", ["loc", [null, [139, 176], [139, 180]]]]], ["loc", [null, [139, 140], [139, 181]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "user.website", ["loc", [null, [139, 202], [139, 214]]]]], [], ["loc", [null, [139, 197], [139, 215]]]]], [], ["loc", [null, [139, 189], [139, 216]]]]], ["loc", [null, [139, 20], [139, 218]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [140, 46], [140, 57]]]]], [], []], "property", "website"], ["loc", [null, [140, 20], [140, 78]]]]],
        locals: [],
        templates: []
      };
    })();
    var child11 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 144,
              "column": 16
            },
            "end": {
              "line": 149,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "user-facebook");
          var el2 = dom.createTextNode("Facebook Profile");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("input");
          dom.setAttribute(el1, "type", "url");
          dom.setAttribute(el1, "class", "gh-input");
          dom.setAttribute(el1, "id", "user-facebook");
          dom.setAttribute(el1, "name", "user[facebook]");
          dom.setAttribute(el1, "placeholder", "https://www.facebook.com/username");
          dom.setAttribute(el1, "autocorrect", "off");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("URL of your personal Facebook Profile");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element2, 'value');
          morphs[1] = dom.createAttrMorph(element2, 'oninput');
          morphs[2] = dom.createElementMorph(element2);
          morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "user.facebook", ["loc", [null, [146, 35], [146, 48]]]]], ["attribute", "oninput", ["subexpr", "action", [["subexpr", "mut", [["get", "_scratchFacebook", ["loc", [null, [146, 73], [146, 89]]]]], [], ["loc", [null, [146, 68], [146, 90]]]]], ["value", "target.value"], ["loc", [null, [146, 59], [146, 113]]]]], ["element", "action", ["validateFacebookUrl"], ["on", "focusOut"], ["loc", [null, [146, 114], [146, 160]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [147, 46], [147, 57]]]]], [], []], "property", "facebook"], ["loc", [null, [147, 20], [147, 79]]]]],
        locals: [],
        templates: []
      };
    })();
    var child12 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 151,
              "column": 16
            },
            "end": {
              "line": 156,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "user-twitter");
          var el2 = dom.createTextNode("Twitter Profile");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("input");
          dom.setAttribute(el1, "type", "url");
          dom.setAttribute(el1, "class", "gh-input");
          dom.setAttribute(el1, "id", "user-twitter");
          dom.setAttribute(el1, "name", "user[twitter]");
          dom.setAttribute(el1, "placeholder", "https://twitter.com/username");
          dom.setAttribute(el1, "autocorrect", "off");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("URL of your personal Twitter profile");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element1, 'value');
          morphs[1] = dom.createAttrMorph(element1, 'oninput');
          morphs[2] = dom.createElementMorph(element1);
          morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "user.twitter", ["loc", [null, [153, 35], [153, 47]]]]], ["attribute", "oninput", ["subexpr", "action", [["subexpr", "mut", [["get", "_scratchTwitter", ["loc", [null, [153, 72], [153, 87]]]]], [], ["loc", [null, [153, 67], [153, 88]]]]], ["value", "target.value"], ["loc", [null, [153, 58], [153, 111]]]]], ["element", "action", ["validateTwitterUrl"], ["on", "focusOut"], ["loc", [null, [153, 112], [153, 157]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [154, 46], [154, 57]]]]], [], []], "property", "twitter"], ["loc", [null, [154, 20], [154, 78]]]]],
        locals: [],
        templates: []
      };
    })();
    var child13 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 158,
              "column": 16
            },
            "end": {
              "line": 166,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "user-bio");
          var el2 = dom.createTextNode("Bio");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("\n                        Write about you, in 200 characters or less.\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [7]), 1, 1);
          return morphs;
        },
        statements: [["inline", "gh-textarea", [["get", "user.bio", ["loc", [null, [160, 34], [160, 42]]]]], ["id", "user-bio", "focusOut", ["subexpr", "action", ["validate", "bio"], ["target", ["get", "user", ["loc", [null, [160, 98], [160, 102]]]]], ["loc", [null, [160, 66], [160, 103]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "user.bio", ["loc", [null, [160, 124], [160, 132]]]]], [], ["loc", [null, [160, 119], [160, 133]]]]], [], ["loc", [null, [160, 111], [160, 134]]]]], ["loc", [null, [160, 20], [160, 136]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [161, 46], [161, 57]]]]], [], []], "property", "bio"], ["loc", [null, [161, 20], [161, 74]]]], ["inline", "gh-count-characters", [["get", "user.bio", ["loc", [null, [164, 46], [164, 54]]]]], [], ["loc", [null, [164, 24], [164, 56]]]]],
        locals: [],
        templates: []
      };
    })();
    var child14 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 178,
                  "column": 24
                },
                "end": {
                  "line": 182,
                  "column": 24
                }
              },
              "moduleName": "ghost-admin/templates/team/user.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("label");
              dom.setAttribute(el1, "for", "user-password-old");
              var el2 = dom.createTextNode("Old Password");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n                            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n                            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
              return morphs;
            },
            statements: [["inline", "gh-input", [], ["value", ["subexpr", "@mut", [["get", "user.password", ["loc", [null, [180, 45], [180, 58]]]]], [], []], "type", "password", "id", "user-password-old", "update", ["subexpr", "action", ["updatePassword"], [], ["loc", [null, [180, 105], [180, 130]]]], "onenter", ["subexpr", "action", [["subexpr", "perform", [["get", "user.saveNewPassword", ["loc", [null, [180, 156], [180, 176]]]]], [], ["loc", [null, [180, 147], [180, 177]]]]], [], ["loc", [null, [180, 139], [180, 178]]]]], ["loc", [null, [180, 28], [180, 180]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [181, 54], [181, 65]]]]], [], []], "property", "password"], ["loc", [null, [181, 28], [181, 87]]]]],
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
                "line": 177,
                "column": 20
              },
              "end": {
                "line": 183,
                "column": 20
              }
            },
            "moduleName": "ghost-admin/templates/team/user.hbs"
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
          statements: [["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [178, 48], [178, 59]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "user.hasValidated", ["loc", [null, [178, 73], [178, 90]]]]], [], []], "property", "password"], 0, null, ["loc", [null, [178, 24], [182, 42]]]]],
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
                "line": 185,
                "column": 20
              },
              "end": {
                "line": 189,
                "column": 20
              }
            },
            "moduleName": "ghost-admin/templates/team/user.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("label");
            dom.setAttribute(el1, "for", "user-password-new");
            var el2 = dom.createTextNode("New Password");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [["inline", "gh-input", [["get", "user.newPassword", ["loc", [null, [187, 35], [187, 51]]]]], ["type", "password", "id", "user-password-new", "update", ["subexpr", "action", ["updateNewPassword"], [], ["loc", [null, [187, 98], [187, 126]]]], "onenter", ["subexpr", "action", [["subexpr", "perform", [["get", "user.saveNewPassword", ["loc", [null, [187, 152], [187, 172]]]]], [], ["loc", [null, [187, 143], [187, 173]]]]], [], ["loc", [null, [187, 135], [187, 174]]]]], ["loc", [null, [187, 24], [187, 176]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [188, 50], [188, 61]]]]], [], []], "property", "newPassword"], ["loc", [null, [188, 24], [188, 86]]]]],
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
                "line": 191,
                "column": 20
              },
              "end": {
                "line": 195,
                "column": 20
              }
            },
            "moduleName": "ghost-admin/templates/team/user.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("label");
            dom.setAttribute(el1, "for", "user-new-password-verification");
            var el2 = dom.createTextNode("Verify Password");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [["inline", "gh-input", [["get", "user.ne2Password", ["loc", [null, [193, 35], [193, 51]]]]], ["type", "password", "id", "user-new-password-verification", "update", ["subexpr", "action", ["updateNe2Password"], [], ["loc", [null, [193, 111], [193, 139]]]], "onenter", ["subexpr", "action", [["subexpr", "perform", [["get", "user.saveNewPassword", ["loc", [null, [193, 165], [193, 185]]]]], [], ["loc", [null, [193, 156], [193, 186]]]]], [], ["loc", [null, [193, 148], [193, 187]]]]], ["loc", [null, [193, 24], [193, 189]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [194, 50], [194, 61]]]]], [], []], "property", "ne2Password"], ["loc", [null, [194, 24], [194, 86]]]]],
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
                "line": 198,
                "column": 24
              },
              "end": {
                "line": 198,
                "column": 127
              }
            },
            "moduleName": "ghost-admin/templates/team/user.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Change Password");
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
              "line": 175,
              "column": 12
            },
            "end": {
              "line": 201,
              "column": 12
            }
          },
          "moduleName": "ghost-admin/templates/team/user.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("fieldset");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "form-group");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          morphs[2] = dom.createMorphAt(element0, 5, 5);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
          return morphs;
        },
        statements: [["block", "unless", [["get", "isNotOwnProfile", ["loc", [null, [177, 30], [177, 45]]]]], [], 0, null, ["loc", [null, [177, 20], [183, 31]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [185, 44], [185, 55]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "user.hasValidated", ["loc", [null, [185, 69], [185, 86]]]]], [], []], "property", "newPassword"], 1, null, ["loc", [null, [185, 20], [189, 38]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [191, 44], [191, 55]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "user.hasValidated", ["loc", [null, [191, 69], [191, 86]]]]], [], []], "property", "ne2Password"], 2, null, ["loc", [null, [191, 20], [195, 38]]]], ["block", "gh-task-button", [], ["class", "btn btn-red button-change-password", "task", ["subexpr", "@mut", [["get", "user.saveNewPassword", ["loc", [null, [198, 90], [198, 110]]]]], [], []]], 3, null, ["loc", [null, [198, 24], [198, 146]]]]],
        locals: [],
        templates: [child0, child1, child2, child3]
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
            "line": 205,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/team/user.hbs"
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
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "class", "view-actions");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
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
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "view-container settings-user");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("figure");
        dom.setAttribute(el3, "class", "user-cover");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-default user-cover-edit");
        var el5 = dom.createTextNode("Change Cover");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3, "class", "user-profile");
        dom.setAttribute(el3, "novalidate", "novalidate");
        dom.setAttribute(el3, "autocomplete", "off");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "style", "display:none;");
        dom.setAttribute(el4, "type", "text");
        dom.setAttribute(el4, "name", "fakeusernameremembered");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "style", "display:none;");
        dom.setAttribute(el4, "type", "password");
        dom.setAttribute(el4, "name", "fakepasswordremembered");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("fieldset");
        dom.setAttribute(el4, "class", "user-details-top");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("figure");
        dom.setAttribute(el5, "class", "user-image");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "id", "user-image");
        dom.setAttribute(el6, "class", "img");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "hidden");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\"s Picture");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "type", "button");
        dom.setAttribute(el6, "class", "edit-user-image");
        var el7 = dom.createTextNode("Edit Picture");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("fieldset");
        dom.setAttribute(el4, "class", "user-details-bottom");
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("hr");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3, "class", "user-profile");
        dom.setAttribute(el3, "novalidate", "novalidate");
        dom.setAttribute(el3, "autocomplete", "off");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
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
        var element9 = dom.childAt(fragment, [0]);
        var element10 = dom.childAt(element9, [1]);
        var element11 = dom.childAt(element10, [3]);
        var element12 = dom.childAt(element9, [3]);
        var element13 = dom.childAt(element12, [1]);
        var element14 = dom.childAt(element13, [1]);
        var element15 = dom.childAt(element12, [3]);
        var element16 = dom.childAt(element15, [6]);
        var element17 = dom.childAt(element16, [1]);
        var element18 = dom.childAt(element17, [1]);
        var element19 = dom.childAt(element17, [3]);
        var element20 = dom.childAt(element15, [8]);
        var element21 = dom.childAt(element12, [6]);
        var morphs = new Array(22);
        morphs[0] = dom.createMorphAt(element10, 1, 1);
        morphs[1] = dom.createMorphAt(element11, 1, 1);
        morphs[2] = dom.createMorphAt(element11, 3, 3);
        morphs[3] = dom.createAttrMorph(element13, 'style');
        morphs[4] = dom.createElementMorph(element14);
        morphs[5] = dom.createMorphAt(element13, 3, 3);
        morphs[6] = dom.createElementMorph(element15);
        morphs[7] = dom.createAttrMorph(element18, 'style');
        morphs[8] = dom.createMorphAt(dom.childAt(element18, [0]), 0, 0);
        morphs[9] = dom.createElementMorph(element19);
        morphs[10] = dom.createMorphAt(element17, 5, 5);
        morphs[11] = dom.createMorphAt(element16, 3, 3);
        morphs[12] = dom.createMorphAt(element20, 1, 1);
        morphs[13] = dom.createMorphAt(element20, 3, 3);
        morphs[14] = dom.createMorphAt(element20, 5, 5);
        morphs[15] = dom.createMorphAt(element20, 7, 7);
        morphs[16] = dom.createMorphAt(element20, 9, 9);
        morphs[17] = dom.createMorphAt(element20, 11, 11);
        morphs[18] = dom.createMorphAt(element20, 13, 13);
        morphs[19] = dom.createMorphAt(element20, 15, 15);
        morphs[20] = dom.createElementMorph(element21);
        morphs[21] = dom.createMorphAt(element21, 1, 1);
        return morphs;
      },
      statements: [["block", "gh-view-title", [], ["openMobileMenu", "openMobileMenu"], 0, null, ["loc", [null, [3, 8], [6, 26]]]], ["block", "if", [["get", "userActionsAreVisible", ["loc", [null, [8, 18], [8, 39]]]]], [], 1, null, ["loc", [null, [8, 12], [44, 19]]]], ["block", "gh-task-button", [], ["class", "btn btn-blue", "task", ["subexpr", "@mut", [["get", "save", ["loc", [null, [46, 56], [46, 60]]]]], [], []]], 2, null, ["loc", [null, [46, 12], [46, 85]]]], ["attribute", "style", ["get", "coverImageBackground", ["loc", [null, [52, 43], [52, 63]]]]], ["element", "action", ["toggleUploadCoverModal"], [], ["loc", [null, [53, 60], [53, 95]]]], ["block", "if", [["get", "showUploadCoverModal", ["loc", [null, [54, 18], [54, 38]]]]], [], 3, null, ["loc", [null, [54, 12], [59, 19]]]], ["element", "action", [["subexpr", "perform", [["get", "save", ["loc", [null, [62, 96], [62, 100]]]]], [], ["loc", [null, [62, 87], [62, 101]]]]], ["on", "submit"], ["loc", [null, [62, 78], [62, 115]]]], ["attribute", "style", ["get", "userImageBackground", ["loc", [null, [71, 61], [71, 80]]]]], ["content", "user.name", ["loc", [null, [71, 104], [71, 117]]]], ["element", "action", ["toggleUploadImageModal"], [], ["loc", [null, [72, 42], [72, 77]]]], ["block", "if", [["get", "showUploadImageModal", ["loc", [null, [73, 26], [73, 46]]]]], [], 4, null, ["loc", [null, [73, 20], [78, 27]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [81, 40], [81, 51]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "user.hasValidated", ["loc", [null, [81, 65], [81, 82]]]]], [], []], "property", "name", "class", "first-form-group"], 5, null, ["loc", [null, [81, 16], [89, 34]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [95, 40], [95, 51]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "user.hasValidated", ["loc", [null, [95, 65], [95, 82]]]]], [], []], "property", "slug"], 6, null, ["loc", [null, [95, 16], [100, 34]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [102, 40], [102, 51]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "user.hasValidated", ["loc", [null, [102, 65], [102, 82]]]]], [], []], "property", "email"], 7, null, ["loc", [null, [102, 16], [112, 34]]]], ["block", "if", [["get", "rolesDropdownIsVisible", ["loc", [null, [114, 22], [114, 44]]]]], [], 8, null, ["loc", [null, [114, 16], [128, 23]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [130, 40], [130, 51]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "user.hasValidated", ["loc", [null, [130, 65], [130, 82]]]]], [], []], "property", "location"], 9, null, ["loc", [null, [130, 16], [135, 34]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [137, 40], [137, 51]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "user.hasValidated", ["loc", [null, [137, 65], [137, 82]]]]], [], []], "property", "website"], 10, null, ["loc", [null, [137, 16], [142, 34]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [144, 40], [144, 51]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "user.hasValidated", ["loc", [null, [144, 65], [144, 82]]]]], [], []], "property", "facebook"], 11, null, ["loc", [null, [144, 16], [149, 34]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [151, 40], [151, 51]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "user.hasValidated", ["loc", [null, [151, 65], [151, 82]]]]], [], []], "property", "twitter"], 12, null, ["loc", [null, [151, 16], [156, 34]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "user.errors", ["loc", [null, [158, 40], [158, 51]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "user.hasValidated", ["loc", [null, [158, 65], [158, 82]]]]], [], []], "property", "bio", "class", "bio-container"], 13, null, ["loc", [null, [158, 16], [166, 34]]]], ["element", "action", [["subexpr", "perform", [["get", "user.saveNewPassword", ["loc", [null, [173, 96], [173, 116]]]]], [], ["loc", [null, [173, 87], [173, 117]]]]], ["on", "submit"], ["loc", [null, [173, 78], [173, 131]]]], ["block", "unless", [["get", "isAdminUserOnOwnerProfile", ["loc", [null, [175, 22], [175, 47]]]]], [], 14, null, ["loc", [null, [175, 12], [201, 23]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10, child11, child12, child13, child14]
    };
  })());
});
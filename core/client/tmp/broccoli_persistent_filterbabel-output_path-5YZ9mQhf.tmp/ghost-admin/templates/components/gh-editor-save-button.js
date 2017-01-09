define("ghost-admin/templates/components/gh-editor-save-button", ["exports"], function (exports) {
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
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 4,
                "column": 4
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        Unschedule\n");
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
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
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
        statements: [["block", "gh-spin-button", [], ["type", "button", "action", "save", "submitting", ["subexpr", "@mut", [["get", "submitting", ["loc", [null, [2, 142], [2, 152]]]]], [], []], "class", ["subexpr", "concat", ["btn", " ", "btn-sm", " ", "js-publish-button", " ", ["subexpr", "if", [["get", "isDangerous", []], "btn-red", "btn-blue"], [], []], " "], [], []]], 0, null, ["loc", [null, [2, 4], [4, 23]]]]],
        locals: [],
        templates: [child0]
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
                  "line": 7,
                  "column": 4
                },
                "end": {
                  "line": 9,
                  "column": 4
                }
              },
              "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
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
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "saveScheduleText", ["loc", [null, [8, 8], [8, 28]]]]],
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
                  "line": 9,
                  "column": 4
                },
                "end": {
                  "line": 11,
                  "column": 4
                }
              },
              "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
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
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "savePostText", ["loc", [null, [10, 8], [10, 24]]]]],
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
                "line": 6,
                "column": 4
              },
              "end": {
                "line": 12,
                "column": 4
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
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
          statements: [["block", "if", [["get", "timeScheduled", ["loc", [null, [7, 10], [7, 23]]]]], [], 0, 1, ["loc", [null, [7, 4], [11, 11]]]]],
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
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
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
        statements: [["block", "gh-spin-button", [], ["type", "button", "action", "save", "submitting", ["subexpr", "@mut", [["get", "submitting", ["loc", [null, [6, 142], [6, 152]]]]], [], []], "class", ["subexpr", "concat", ["btn", " ", "btn-sm", " ", "js-publish-button", " ", ["subexpr", "if", [["get", "isDangerous", []], "btn-red", "btn-blue"], [], []], " "], [], []]], 0, null, ["loc", [null, [6, 4], [12, 23]]]]],
        locals: [],
        templates: [child0]
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
                "line": 16,
                "column": 4
              },
              "end": {
                "line": 19,
                "column": 4
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "options icon-arrow2");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createTextNode("Toggle Settings Menu");
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
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 22,
                  "column": 12
                },
                "end": {
                  "line": 29,
                  "column": 12
                }
              },
              "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
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
              var el2 = dom.createTextNode("\n                    ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("a");
              dom.setAttribute(el2, "href", "#");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createTextNode("\n                    ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("a");
              dom.setAttribute(el2, "href", "#");
              var el3 = dom.createComment("");
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
              var element9 = dom.childAt(fragment, [1]);
              var element10 = dom.childAt(element9, [1]);
              var element11 = dom.childAt(fragment, [3]);
              var element12 = dom.childAt(element11, [1]);
              var morphs = new Array(6);
              morphs[0] = dom.createAttrMorph(element9, 'class');
              morphs[1] = dom.createElementMorph(element10);
              morphs[2] = dom.createMorphAt(element10, 0, 0);
              morphs[3] = dom.createAttrMorph(element11, 'class');
              morphs[4] = dom.createElementMorph(element12);
              morphs[5] = dom.createMorphAt(element12, 0, 0);
              return morphs;
            },
            statements: [["attribute", "class", ["concat", ["post-save-schedule ", ["subexpr", "if", [["get", "activeClass", ["loc", [null, [23, 51], [23, 62]]]], "active"], [], ["loc", [null, [23, 46], [23, 73]]]]]]], ["element", "action", ["setSaveType", "schedule"], [], ["loc", [null, [24, 23], [24, 58]]]], ["content", "scheduleText", ["loc", [null, [24, 68], [24, 84]]]], ["attribute", "class", ["concat", ["post-save-draft ", ["subexpr", "unless", [["get", "activeClass", ["loc", [null, [26, 52], [26, 63]]]], "active"], [], ["loc", [null, [26, 43], [26, 74]]]]]]], ["element", "action", ["setSaveType", "draft"], [], ["loc", [null, [27, 23], [27, 55]]]], ["content", "unscheduleText", ["loc", [null, [27, 65], [27, 83]]]]],
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
                    "line": 30,
                    "column": 16
                  },
                  "end": {
                    "line": 37,
                    "column": 16
                  }
                },
                "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("li");
                var el2 = dom.createTextNode("\n                        ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("a");
                dom.setAttribute(el2, "href", "#");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                    ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n                    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("li");
                var el2 = dom.createTextNode("\n                        ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("a");
                dom.setAttribute(el2, "href", "#");
                var el3 = dom.createComment("");
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
                var element5 = dom.childAt(fragment, [1]);
                var element6 = dom.childAt(element5, [1]);
                var element7 = dom.childAt(fragment, [3]);
                var element8 = dom.childAt(element7, [1]);
                var morphs = new Array(6);
                morphs[0] = dom.createAttrMorph(element5, 'class');
                morphs[1] = dom.createElementMorph(element6);
                morphs[2] = dom.createMorphAt(element6, 0, 0);
                morphs[3] = dom.createAttrMorph(element7, 'class');
                morphs[4] = dom.createElementMorph(element8);
                morphs[5] = dom.createMorphAt(element8, 0, 0);
                return morphs;
              },
              statements: [["attribute", "class", ["concat", ["post-save-publish ", ["subexpr", "if", [["get", "activeClass", ["loc", [null, [31, 54], [31, 65]]]], "active"], [], ["loc", [null, [31, 49], [31, 76]]]]]]], ["element", "action", ["setSaveType", "publish"], [], ["loc", [null, [32, 27], [32, 61]]]], ["content", "publishText", ["loc", [null, [32, 71], [32, 86]]]], ["attribute", "class", ["concat", ["post-save-draft ", ["subexpr", "unless", [["get", "activeClass", ["loc", [null, [34, 56], [34, 67]]]], "active"], [], ["loc", [null, [34, 47], [34, 78]]]]]]], ["element", "action", ["setSaveType", "draft"], [], ["loc", [null, [35, 27], [35, 59]]]], ["content", "draftText", ["loc", [null, [35, 69], [35, 82]]]]],
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
                    "line": 37,
                    "column": 16
                  },
                  "end": {
                    "line": 44,
                    "column": 16
                  }
                },
                "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("li");
                var el2 = dom.createTextNode("\n                        ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("a");
                dom.setAttribute(el2, "href", "#");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                    ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n                    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("li");
                var el2 = dom.createTextNode("\n                        ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("a");
                dom.setAttribute(el2, "href", "#");
                var el3 = dom.createComment("");
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
                var element1 = dom.childAt(fragment, [1]);
                var element2 = dom.childAt(element1, [1]);
                var element3 = dom.childAt(fragment, [3]);
                var element4 = dom.childAt(element3, [1]);
                var morphs = new Array(6);
                morphs[0] = dom.createAttrMorph(element1, 'class');
                morphs[1] = dom.createElementMorph(element2);
                morphs[2] = dom.createMorphAt(element2, 0, 0);
                morphs[3] = dom.createAttrMorph(element3, 'class');
                morphs[4] = dom.createElementMorph(element4);
                morphs[5] = dom.createMorphAt(element4, 0, 0);
                return morphs;
              },
              statements: [["attribute", "class", ["concat", ["post-save-publish ", ["subexpr", "if", [["get", "activeClass", ["loc", [null, [38, 54], [38, 65]]]], "active"], [], ["loc", [null, [38, 49], [38, 76]]]]]]], ["element", "action", ["setSaveType", "publish"], [], ["loc", [null, [39, 27], [39, 61]]]], ["content", "publishText", ["loc", [null, [39, 71], [39, 86]]]], ["attribute", "class", ["concat", ["post-save-draft ", ["subexpr", "unless", [["get", "activeClass", ["loc", [null, [41, 56], [41, 67]]]], "active"], [], ["loc", [null, [41, 47], [41, 78]]]]]]], ["element", "action", ["setSaveType", "draft"], [], ["loc", [null, [42, 27], [42, 59]]]], ["content", "draftText", ["loc", [null, [42, 69], [42, 82]]]]],
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
                  "line": 45,
                  "column": 12
                }
              },
              "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
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
            statements: [["block", "if", [["get", "scheduledWillPublish", ["loc", [null, [30, 22], [30, 42]]]]], [], 0, 1, ["loc", [null, [30, 16], [44, 23]]]]],
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
                  "line": 47,
                  "column": 12
                },
                "end": {
                  "line": 52,
                  "column": 12
                }
              },
              "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
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
              dom.setAttribute(el1, "class", "divider delete");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1, "class", "delete");
              var el2 = dom.createTextNode("\n                    ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("a");
              dom.setAttribute(el2, "href", "#");
              var el3 = dom.createComment("");
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
              var element0 = dom.childAt(fragment, [3, 1]);
              var morphs = new Array(2);
              morphs[0] = dom.createElementMorph(element0);
              morphs[1] = dom.createMorphAt(element0, 0, 0);
              return morphs;
            },
            statements: [["element", "action", ["delete"], [], ["loc", [null, [50, 23], [50, 42]]]], ["content", "deleteText", ["loc", [null, [50, 52], [50, 66]]]]],
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
                "line": 20,
                "column": 4
              },
              "end": {
                "line": 54,
                "column": 4
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
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
            dom.setAttribute(el1, "class", "dropdown-menu dropdown-triangle-bottom-right");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element13 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element13, 1, 1);
            morphs[1] = dom.createMorphAt(element13, 3, 3);
            return morphs;
          },
          statements: [["block", "if", [["get", "timeScheduled", ["loc", [null, [22, 18], [22, 31]]]]], [], 0, 1, ["loc", [null, [22, 12], [45, 19]]]], ["block", "unless", [["get", "isNew", ["loc", [null, [47, 22], [47, 27]]]]], [], 2, null, ["loc", [null, [47, 12], [52, 23]]]]],
          locals: [],
          templates: [child0, child1, child2]
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
              "column": 0
            },
            "end": {
              "line": 55,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
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
        statements: [["block", "gh-dropdown-button", [], ["dropdownName", "post-save-menu", "class", ["subexpr", "concat", ["btn", " ", "btn-sm", " ", ["subexpr", "if", [["get", "isDangerous", []], "btn-red", "btn-blue"], [], []], " ", ["subexpr", "if", [["get", "btnopen", []], "active"], [], []], " ", "dropdown-toggle", " ", "up", " "], [], []]], 0, null, ["loc", [null, [16, 4], [19, 27]]]], ["block", "gh-dropdown", [], ["name", "post-save-menu", "closeOnClick", "true", "classNames", "editor-options"], 1, null, ["loc", [null, [20, 4], [54, 20]]]]],
        locals: [],
        templates: [child0, child1]
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
            "line": 56,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-editor-save-button.hbs"
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
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "statusFreeze", ["loc", [null, [1, 6], [1, 18]]]]], [], 0, 1, ["loc", [null, [1, 0], [13, 7]]]], ["block", "unless", [["get", "statusFreeze", ["loc", [null, [15, 10], [15, 22]]]]], [], 2, null, ["loc", [null, [15, 0], [55, 11]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
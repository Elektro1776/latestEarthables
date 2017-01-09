define("ghost-admin/templates/reset", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 16
            },
            "end": {
              "line": 7,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/reset.hbs"
        },
        isEmpty: false,
        arity: 0,
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
        statements: [["inline", "gh-input", [["get", "newPassword", ["loc", [null, [6, 31], [6, 42]]]]], ["type", "password", "name", "newpassword", "placeholder", "Password", "class", "password", "autocorrect", "off", "autofocus", "autofocus", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "newPassword", ["loc", [null, [6, 178], [6, 189]]]]], [], ["loc", [null, [6, 173], [6, 190]]]]], [], ["loc", [null, [6, 165], [6, 191]]]]], ["loc", [null, [6, 20], [6, 193]]]]],
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
              "line": 8,
              "column": 16
            },
            "end": {
              "line": 10,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/reset.hbs"
        },
        isEmpty: false,
        arity: 0,
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
        statements: [["inline", "gh-input", [["get", "ne2Password", ["loc", [null, [9, 31], [9, 42]]]]], ["type", "password", "name", "ne2password", "placeholder", "Confirm Password", "class", "password", "autocorrect", "off", "autofocus", "autofocus", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "ne2Password", ["loc", [null, [9, 186], [9, 197]]]]], [], ["loc", [null, [9, 181], [9, 198]]]]], [], ["loc", [null, [9, 173], [9, 199]]]]], ["loc", [null, [9, 20], [9, 201]]]]],
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
              "line": 12,
              "column": 16
            },
            "end": {
              "line": 12,
              "column": 134
            }
          },
          "moduleName": "ghost-admin/templates/reset.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Reset Password");
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
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/reset.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "gh-flow");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "gh-flow-content-wrap");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "class", "gh-flow-content fade-in");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        dom.setAttribute(el4, "id", "reset");
        dom.setAttribute(el4, "class", "gh-signin");
        dom.setAttribute(el4, "method", "post");
        dom.setAttribute(el4, "novalidate", "novalidate");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "main-error");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
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
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(5);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 2, 2);
        morphs[3] = dom.createMorphAt(element1, 4, 4);
        morphs[4] = dom.createUnsafeMorphAt(dom.childAt(element0, [3]), 0, 0);
        return morphs;
      },
      statements: [["element", "action", ["submit"], ["on", "submit"], ["loc", [null, [4, 85], [4, 116]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "errors", ["loc", [null, [5, 40], [5, 46]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "hasValidated", ["loc", [null, [5, 60], [5, 72]]]]], [], []], "property", "newPassword"], 0, null, ["loc", [null, [5, 16], [7, 34]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "errors", ["loc", [null, [8, 40], [8, 46]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "hasValidated", ["loc", [null, [8, 60], [8, 72]]]]], [], []], "property", "ne2Password"], 1, null, ["loc", [null, [8, 16], [10, 34]]]], ["block", "gh-spin-button", [], ["class", "btn btn-blue btn-block", "type", "submit", "submitting", ["subexpr", "@mut", [["get", "submitting", ["loc", [null, [12, 90], [12, 100]]]]], [], []], "autoWidth", "false"], 2, null, ["loc", [null, [12, 16], [12, 153]]]], ["content", "flowErrors", ["loc", [null, [15, 34], [15, 50]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
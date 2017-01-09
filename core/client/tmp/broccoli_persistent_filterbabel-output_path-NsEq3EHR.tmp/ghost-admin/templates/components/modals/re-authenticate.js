define("ghost-admin/templates/components/modals/re-authenticate", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/re-authenticate.hbs"
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
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "password", ["loc", [null, [9, 23], [9, 31]]]]], ["class", "password", "type", "password", "placeholder", "Password", "name", "password", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "password", ["loc", [null, [9, 124], [9, 132]]]]], [], ["loc", [null, [9, 119], [9, 133]]]]], [], ["loc", [null, [9, 111], [9, 134]]]]], ["loc", [null, [9, 12], [9, 136]]]]],
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
              "line": 11,
              "column": 8
            },
            "end": {
              "line": 11,
              "column": 90
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/re-authenticate.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Log in");
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
              "line": 13,
              "column": 3
            },
            "end": {
              "line": 15,
              "column": 3
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/re-authenticate.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("     ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "response");
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
        statements: [["content", "authenticationError", ["loc", [null, [14, 25], [14, 48]]]]],
        locals: [],
        templates: []
      };
    })();
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
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/re-authenticate.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "modal-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Please re-authenticate");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "close icon-x");
        dom.setAttribute(el1, "href", "");
        dom.setAttribute(el1, "title", "Close");
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "hidden");
        var el3 = dom.createTextNode("Close");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2, "id", "login");
        dom.setAttribute(el2, "class", "login-form");
        dom.setAttribute(el2, "method", "post");
        dom.setAttribute(el2, "novalidate", "novalidate");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n   ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(fragment, [4]);
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(6);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createAttrMorph(element1, 'class');
        morphs[2] = dom.createElementMorph(element2);
        morphs[3] = dom.createMorphAt(element2, 1, 1);
        morphs[4] = dom.createMorphAt(element2, 3, 3);
        morphs[5] = dom.createMorphAt(element1, 3, 3);
        return morphs;
      },
      statements: [["element", "action", ["closeModal"], [], ["loc", [null, [4, 46], [4, 69]]]], ["attribute", "class", ["concat", ["modal-body ", ["subexpr", "if", [["get", "authenticationError", ["loc", [null, [6, 28], [6, 47]]]], "error"], [], ["loc", [null, [6, 23], [6, 57]]]]]]], ["element", "action", ["confirm"], ["on", "submit"], ["loc", [null, [7, 78], [7, 110]]]], ["block", "gh-validation-status-container", [], ["class", "password-wrap", "errors", ["subexpr", "@mut", [["get", "errors", ["loc", [null, [8, 71], [8, 77]]]]], [], []], "property", "password", "hasValidated", ["subexpr", "@mut", [["get", "hasValidated", ["loc", [null, [8, 111], [8, 123]]]]], [], []]], 0, null, ["loc", [null, [8, 8], [10, 43]]]], ["block", "gh-spin-button", [], ["class", "btn btn-blue", "type", "submit", "submitting", ["subexpr", "@mut", [["get", "submitting", ["loc", [null, [11, 72], [11, 82]]]]], [], []]], 1, null, ["loc", [null, [11, 8], [11, 109]]]], ["block", "if", [["get", "authenticationError", ["loc", [null, [13, 9], [13, 28]]]]], [], 2, null, ["loc", [null, [13, 3], [15, 10]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
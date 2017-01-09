define("ghost-admin/templates/setup/two", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 4
            },
            "end": {
              "line": 17,
              "column": 4
            }
          },
          "moduleName": "ghost-admin/templates/setup/two.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "email-address");
          var el2 = dom.createTextNode("Email address");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "input-icon icon-mail");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
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
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-trim-focus-input", [["get", "email", ["loc", [null, [14, 34], [14, 39]]]]], ["tabindex", "1", "type", "email", "name", "email", "placeholder", "Eg. john@example.com", "autocorrect", "off", "focusOut", ["subexpr", "action", ["preValidate", "email"], [], ["loc", [null, [14, 141], [14, 171]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "email", ["loc", [null, [14, 192], [14, 197]]]]], [], ["loc", [null, [14, 187], [14, 198]]]]], [], ["loc", [null, [14, 179], [14, 199]]]]], ["loc", [null, [14, 12], [14, 201]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "errors", ["loc", [null, [16, 34], [16, 40]]]]], [], []], "property", "email"], ["loc", [null, [16, 8], [16, 59]]]]],
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
              "line": 18,
              "column": 4
            },
            "end": {
              "line": 24,
              "column": 4
            }
          },
          "moduleName": "ghost-admin/templates/setup/two.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "full-name");
          var el2 = dom.createTextNode("Full name");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "input-icon icon-user");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
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
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "name", ["loc", [null, [21, 23], [21, 27]]]]], ["tabindex", "2", "type", "text", "name", "name", "placeholder", "Eg. John H. Watson", "autocorrect", "off", "focusOut", ["subexpr", "action", ["preValidate", "name"], [], ["loc", [null, [21, 126], [21, 155]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "name", ["loc", [null, [21, 176], [21, 180]]]]], [], ["loc", [null, [21, 171], [21, 181]]]]], [], ["loc", [null, [21, 163], [21, 182]]]]], ["loc", [null, [21, 12], [21, 184]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "errors", ["loc", [null, [23, 34], [23, 40]]]]], [], []], "property", "name"], ["loc", [null, [23, 8], [23, 58]]]]],
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
              "line": 25,
              "column": 4
            },
            "end": {
              "line": 31,
              "column": 4
            }
          },
          "moduleName": "ghost-admin/templates/setup/two.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "password");
          var el2 = dom.createTextNode("Password");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "input-icon icon-lock");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
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
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "password", ["loc", [null, [28, 23], [28, 31]]]]], ["tabindex", "3", "type", "password", "name", "password", "placeholder", "At least 8 characters", "autocorrect", "off", "focusOut", ["subexpr", "action", ["preValidate", "password"], [], ["loc", [null, [28, 140], [28, 173]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "password", ["loc", [null, [28, 194], [28, 202]]]]], [], ["loc", [null, [28, 189], [28, 203]]]]], [], ["loc", [null, [28, 181], [28, 204]]]]], ["loc", [null, [28, 12], [28, 206]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "errors", ["loc", [null, [30, 34], [30, 40]]]]], [], []], "property", "password"], ["loc", [null, [30, 8], [30, 62]]]]],
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
              "line": 32,
              "column": 4
            },
            "end": {
              "line": 38,
              "column": 4
            }
          },
          "moduleName": "ghost-admin/templates/setup/two.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "blog-title");
          var el2 = dom.createTextNode("Blog title");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "input-icon icon-content");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
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
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "blogTitle", ["loc", [null, [35, 23], [35, 32]]]]], ["tabindex", "4", "type", "text", "name", "blog-title", "placeholder", "Eg. The Daily Awesome", "autocorrect", "off", "focusOut", ["subexpr", "action", ["preValidate", "blogTitle"], [], ["loc", [null, [35, 139], [35, 173]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "blogTitle", ["loc", [null, [35, 194], [35, 203]]]]], [], ["loc", [null, [35, 189], [35, 204]]]]], [], ["loc", [null, [35, 181], [35, 205]]]]], ["loc", [null, [35, 12], [35, 207]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "errors", ["loc", [null, [37, 34], [37, 40]]]]], [], []], "property", "blogTitle"], ["loc", [null, [37, 8], [37, 63]]]]],
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
              "line": 39,
              "column": 4
            },
            "end": {
              "line": 41,
              "column": 4
            }
          },
          "moduleName": "ghost-admin/templates/setup/two.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        Last step: Invite your team ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon-chevron");
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
            "line": 45,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/setup/two.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Create your account");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "id", "setup");
        dom.setAttribute(el1, "class", "gh-flow-create");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "style", "display:none;");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "name", "fakeusernameremembered");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "style", "display:none;");
        dom.setAttribute(el2, "type", "password");
        dom.setAttribute(el2, "name", "fakepasswordremembered");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "class", "main-error");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(element0, 6, 6);
        morphs[1] = dom.createMorphAt(element0, 8, 8);
        morphs[2] = dom.createMorphAt(element0, 9, 9);
        morphs[3] = dom.createMorphAt(element0, 10, 10);
        morphs[4] = dom.createMorphAt(element0, 11, 11);
        morphs[5] = dom.createMorphAt(element0, 12, 12);
        morphs[6] = dom.createUnsafeMorphAt(dom.childAt(fragment, [4]), 0, 0);
        return morphs;
      },
      statements: [["inline", "gh-profile-image", [], ["fileStorage", ["subexpr", "@mut", [["get", "config.fileStorage", ["loc", [null, [10, 35], [10, 53]]]]], [], []], "email", ["subexpr", "@mut", [["get", "email", ["loc", [null, [10, 60], [10, 65]]]]], [], []], "setImage", "setImage"], ["loc", [null, [10, 4], [10, 87]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "errors", ["loc", [null, [11, 28], [11, 34]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "hasValidated", ["loc", [null, [11, 48], [11, 60]]]]], [], []], "property", "email"], 0, null, ["loc", [null, [11, 4], [17, 22]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "errors", ["loc", [null, [18, 28], [18, 34]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "hasValidated", ["loc", [null, [18, 48], [18, 60]]]]], [], []], "property", "name"], 1, null, ["loc", [null, [18, 4], [24, 22]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "errors", ["loc", [null, [25, 28], [25, 34]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "hasValidated", ["loc", [null, [25, 48], [25, 60]]]]], [], []], "property", "password"], 2, null, ["loc", [null, [25, 4], [31, 22]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "errors", ["loc", [null, [32, 28], [32, 34]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "hasValidated", ["loc", [null, [32, 48], [32, 60]]]]], [], []], "property", "blogTitle"], 3, null, ["loc", [null, [32, 4], [38, 22]]]], ["block", "gh-spin-button", [], ["type", "submit", "tabindex", "5", "class", "btn btn-green btn-lg btn-block", "action", "setup", "submitting", ["subexpr", "@mut", [["get", "submitting", ["loc", [null, [39, 114], [39, 124]]]]], [], []], "autoWidth", "false"], 4, null, ["loc", [null, [39, 4], [41, 23]]]], ["content", "flowErrors", ["loc", [null, [44, 22], [44, 38]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
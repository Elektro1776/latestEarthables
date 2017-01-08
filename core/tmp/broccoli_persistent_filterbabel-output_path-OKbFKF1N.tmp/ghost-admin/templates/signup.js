define("ghost-admin/templates/signup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 16
            },
            "end": {
              "line": 21,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/signup.hbs"
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
          dom.setAttribute(el1, "for", "email-address");
          var el2 = dom.createTextNode("Email address");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "input-icon icon-mail");
          var el2 = dom.createTextNode("\n                        ");
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
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "model.email", ["loc", [null, [19, 35], [19, 46]]]]], ["type", "email", "name", "email", "placeholder", "Eg. john@example.com", "disabled", "disabled", "autocorrect", "off"], ["loc", [null, [19, 24], [19, 147]]]]],
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
              "line": 23,
              "column": 16
            },
            "end": {
              "line": 29,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/signup.hbs"
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
          dom.setAttribute(el1, "for", "full-name");
          var el2 = dom.createTextNode("Full name");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "input-icon icon-user");
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
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
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-trim-focus-input", [["get", "model.name", ["loc", [null, [26, 46], [26, 56]]]]], ["tabindex", "1", "type", "text", "name", "name", "placeholder", "Eg. John H. Watson", "onenter", ["subexpr", "action", ["signup"], [], ["loc", [null, [26, 135], [26, 152]]]], "autocorrect", "off", "focusOut", ["subexpr", "action", ["validate", "name"], [], ["loc", [null, [26, 180], [26, 206]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "model.name", ["loc", [null, [26, 227], [26, 237]]]]], [], ["loc", [null, [26, 222], [26, 238]]]]], [], ["loc", [null, [26, 214], [26, 239]]]]], ["loc", [null, [26, 24], [26, 241]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [28, 46], [28, 58]]]]], [], []], "property", "name"], ["loc", [null, [28, 20], [28, 76]]]]],
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
              "line": 31,
              "column": 16
            },
            "end": {
              "line": 37,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/signup.hbs"
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
          dom.setAttribute(el1, "for", "password");
          var el2 = dom.createTextNode("Password");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "input-icon icon-lock");
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
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
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "model.password", ["loc", [null, [34, 35], [34, 49]]]]], ["tabindex", "2", "type", "password", "name", "password", "placeholder", "At least 8 characters", "onenter", ["subexpr", "action", ["signup"], [], ["loc", [null, [34, 139], [34, 156]]]], "autocorrect", "off", "focusOut", ["subexpr", "action", ["validate", "password"], [], ["loc", [null, [34, 184], [34, 214]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "model.password", ["loc", [null, [34, 235], [34, 249]]]]], [], ["loc", [null, [34, 230], [34, 250]]]]], [], ["loc", [null, [34, 222], [34, 251]]]]], ["loc", [null, [34, 24], [34, 253]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [36, 46], [36, 58]]]]], [], []], "property", "password"], ["loc", [null, [36, 20], [36, 80]]]]],
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
              "line": 40,
              "column": 12
            },
            "end": {
              "line": 40,
              "column": 167
            }
          },
          "moduleName": "ghost-admin/templates/signup.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Create Account");
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
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/signup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "gh-flow");
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "gh-flow-content-wrap");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "class", "gh-flow-content");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("header");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        var el6 = dom.createTextNode("Create your account");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        dom.setAttribute(el4, "id", "signup");
        dom.setAttribute(el4, "class", "gh-flow-create");
        dom.setAttribute(el4, "method", "post");
        dom.setAttribute(el4, "novalidate", "novalidate");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "style", "display:none;");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "name", "fakeusernameremembered");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "style", "display:none;");
        dom.setAttribute(el5, "type", "password");
        dom.setAttribute(el5, "name", "fakepasswordremembered");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
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
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
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
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(element1, 6, 6);
        morphs[1] = dom.createMorphAt(element1, 8, 8);
        morphs[2] = dom.createMorphAt(element1, 10, 10);
        morphs[3] = dom.createMorphAt(element1, 12, 12);
        morphs[4] = dom.createMorphAt(element0, 5, 5);
        morphs[5] = dom.createUnsafeMorphAt(dom.childAt(element0, [7]), 0, 0);
        return morphs;
      },
      statements: [["inline", "gh-profile-image", [], ["fileStorage", ["subexpr", "@mut", [["get", "config.fileStorage", ["loc", [null, [14, 47], [14, 65]]]]], [], []], "email", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [14, 72], [14, 83]]]]], [], []], "setImage", "setImage"], ["loc", [null, [14, 16], [14, 105]]]], ["block", "gh-form-group", [], [], 0, null, ["loc", [null, [16, 16], [21, 34]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [23, 40], [23, 52]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "hasValidated", ["loc", [null, [23, 66], [23, 78]]]]], [], []], "property", "name"], 1, null, ["loc", [null, [23, 16], [29, 34]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [31, 40], [31, 52]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "hasValidated", ["loc", [null, [31, 66], [31, 78]]]]], [], []], "property", "password"], 2, null, ["loc", [null, [31, 16], [37, 34]]]], ["block", "gh-spin-button", [], ["tabindex", "3", "type", "submit", "class", "btn btn-green btn-lg btn-block", "action", "signup", "submitting", ["subexpr", "@mut", [["get", "submitting", ["loc", [null, [40, 123], [40, 133]]]]], [], []], "autoWidth", "false"], 3, null, ["loc", [null, [40, 12], [40, 186]]]], ["content", "flowErrors", ["loc", [null, [41, 34], [41, 50]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
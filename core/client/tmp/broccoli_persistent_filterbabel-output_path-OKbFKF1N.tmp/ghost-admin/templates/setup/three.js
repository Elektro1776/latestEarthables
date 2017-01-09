define("ghost-admin/templates/setup/three", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
              "line": 12,
              "column": 4
            }
          },
          "moduleName": "ghost-admin/templates/setup/three.hbs"
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
          dom.setAttribute(el1, "for", "users");
          var el2 = dom.createTextNode("Enter one email address per line, we’ll handle the rest! ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "icon-mail");
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
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-textarea", [["get", "users", ["loc", [null, [11, 22], [11, 27]]]]], ["name", "users", "required", "required", "focusOut", ["subexpr", "action", ["validate"], [], ["loc", [null, [11, 70], [11, 89]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "users", ["loc", [null, [11, 110], [11, 115]]]]], [], ["loc", [null, [11, 105], [11, 116]]]]], [], ["loc", [null, [11, 97], [11, 117]]]]], ["loc", [null, [11, 8], [11, 119]]]]],
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
              "line": 14,
              "column": 4
            },
            "end": {
              "line": 14,
              "column": 176
            }
          },
          "moduleName": "ghost-admin/templates/setup/three.hbs"
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
        statements: [["content", "buttonText", ["loc", [null, [14, 162], [14, 176]]]]],
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
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/setup/three.hbs"
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
        var el3 = dom.createTextNode("Invite your team");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Ghost works best when shared with others. Collaborate, get feedback on your posts & work together on ideas.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "class", "gh-flow-faces");
        dom.setAttribute(el2, "alt", "");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "gh-flow-invite");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "gh-flow-skip");
        var el2 = dom.createTextNode("\n    I'll do this later, take me to my blog!\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 0]);
        var element1 = dom.childAt(fragment, [4]);
        var element2 = dom.childAt(fragment, [6]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'src');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["attribute", "src", ["concat", [["subexpr", "gh-path", ["admin", "img/users.png"], [], ["loc", [null, [6, 37], [6, 72]]]]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "errors", ["loc", [null, [9, 28], [9, 34]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "hasValidated", ["loc", [null, [9, 48], [9, 60]]]]], [], []], "property", "users"], 0, null, ["loc", [null, [9, 4], [12, 22]]]], ["block", "gh-spin-button", [], ["type", "submit", "action", "invite", "submitting", ["subexpr", "@mut", [["get", "submitting", ["loc", [null, [14, 132], [14, 142]]]]], [], []], "autoWidth", "false", "class", ["subexpr", "concat", ["btn", " ", "btn-default", " ", "btn-lg", " ", "btn-block", " ", ["subexpr", "if", [["get", "buttonClass", []], ["subexpr", "-normalize-class", ["buttonClass", ["get", "buttonClass", []]], [], []]], [], []], " "], [], []]], 1, null, ["loc", [null, [14, 4], [14, 195]]]], ["element", "action", ["skipInvite"], [], ["loc", [null, [17, 29], [17, 52]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
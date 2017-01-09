define("ghost-admin/templates/components/modals/new-subscriber", ["exports"], function (exports) {
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
              "line": 21,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/new-subscriber.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "new-subscriber-email");
          var el2 = dom.createTextNode("Email Address");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("input");
          dom.setAttribute(el1, "type", "email");
          dom.setAttribute(el1, "id", "new-subscriber-email");
          dom.setAttribute(el1, "class", "gh-input email");
          dom.setAttribute(el1, "placeholder", "Email Address");
          dom.setAttribute(el1, "name", "email");
          dom.setAttribute(el1, "autofocus", "autofocus");
          dom.setAttribute(el1, "autocapitalize", "off");
          dom.setAttribute(el1, "autocorrect", "off");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'oninput');
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "model.email", ["loc", [null, [11, 24], [11, 35]]]]], ["attribute", "oninput", ["subexpr", "action", ["updateEmail"], ["value", "target.value"], ["loc", [null, [12, 24], [12, 69]]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [20, 38], [20, 50]]]]], [], []], "property", "email"], ["loc", [null, [20, 12], [20, 69]]]]],
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
              "line": 28,
              "column": 4
            },
            "end": {
              "line": 28,
              "column": 87
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/new-subscriber.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Add");
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
            "line": 30,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/new-subscriber.hbs"
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
        var el3 = dom.createTextNode("Add a Subscriber");
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
        dom.setAttribute(el1, "class", "modal-body");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "modal-footer");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-default btn-minor");
        var el3 = dom.createTextNode("Cancel");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(fragment, [6]);
        var element3 = dom.childAt(element2, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4, 1]), 1, 1);
        morphs[2] = dom.createElementMorph(element3);
        morphs[3] = dom.createMorphAt(element2, 3, 3);
        return morphs;
      },
      statements: [["element", "action", ["closeModal"], [], ["loc", [null, [4, 46], [4, 69]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [8, 32], [8, 44]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "model.hasValidated", ["loc", [null, [8, 58], [8, 76]]]]], [], []], "property", "email"], 0, null, ["loc", [null, [8, 8], [21, 26]]]], ["element", "action", ["closeModal"], [], ["loc", [null, [27, 12], [27, 35]]]], ["block", "gh-spin-button", [], ["action", "confirm", "class", "btn btn-green", "submitting", ["subexpr", "@mut", [["get", "submitting", ["loc", [null, [28, 72], [28, 82]]]]], [], []]], 1, null, ["loc", [null, [28, 4], [28, 106]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
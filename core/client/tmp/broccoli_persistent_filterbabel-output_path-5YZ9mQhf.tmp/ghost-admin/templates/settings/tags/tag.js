define("ghost-admin/templates/settings/tags/tag", ["exports"], function (exports) {
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
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/settings/tags/tag.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
        statements: [["inline", "gh-fullscreen-modal", ["delete-tag"], ["model", ["subexpr", "@mut", [["get", "tag", ["loc", [null, [7, 32], [7, 35]]]]], [], []], "confirm", ["subexpr", "action", ["deleteTag"], [], ["loc", [null, [8, 34], [8, 54]]]], "close", ["subexpr", "action", ["toggleDeleteTagModal"], [], ["loc", [null, [9, 32], [9, 63]]]], "modifier", "action wide"], ["loc", [null, [6, 4], [10, 50]]]]],
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
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/settings/tags/tag.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
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
      statements: [["inline", "gh-tag-settings-form", [], ["tag", ["subexpr", "@mut", [["get", "tag", ["loc", [null, [1, 27], [1, 30]]]]], [], []], "setProperty", ["subexpr", "action", ["setProperty"], [], ["loc", [null, [2, 35], [2, 57]]]], "showDeleteTagModal", ["subexpr", "action", ["toggleDeleteTagModal"], [], ["loc", [null, [3, 42], [3, 73]]]]], ["loc", [null, [1, 0], [3, 75]]]], ["block", "if", [["get", "showDeleteTagModal", ["loc", [null, [5, 6], [5, 24]]]]], [], 0, null, ["loc", [null, [5, 0], [11, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
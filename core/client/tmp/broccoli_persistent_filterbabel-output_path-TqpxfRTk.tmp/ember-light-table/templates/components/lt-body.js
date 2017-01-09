define("ember-light-table/templates/components/lt-body", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "modules/ember-light-table/templates/components/lt-body.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
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
        statements: [["inline", "lt-row", [], ["columns", ["subexpr", "@mut", [["get", "visibleColumns", ["loc", [null, [2, 19], [2, 33]]]]], [], []], "tableActions", ["subexpr", "@mut", [["get", "tableActions", ["loc", [null, [2, 47], [2, 59]]]]], [], []], "row", ["subexpr", "@mut", [["get", "row", ["loc", [null, [2, 64], [2, 67]]]]], [], []], "canExpand", ["subexpr", "@mut", [["get", "canExpand", ["loc", [null, [2, 78], [2, 87]]]]], [], []], "canSelect", ["subexpr", "@mut", [["get", "canSelect", ["loc", [null, [2, 98], [2, 107]]]]], [], []], "click", ["subexpr", "action", ["onRowClick", ["get", "row", ["loc", [null, [2, 135], [2, 138]]]]], [], ["loc", [null, [2, 114], [2, 139]]]], "doubleClick", ["subexpr", "action", ["onRowDoubleClick", ["get", "row", ["loc", [null, [2, 179], [2, 182]]]]], [], ["loc", [null, [2, 152], [2, 183]]]]], ["loc", [null, [2, 2], [2, 185]]]], ["inline", "yield", [["subexpr", "hash", [], ["expanded-row", ["subexpr", "component", ["lt-spanned-row"], ["classes", "lt-expanded-row", "colspan", ["subexpr", "@mut", [["get", "colspan", ["loc", [null, [5, 79], [5, 86]]]]], [], []], "yield", ["subexpr", "@mut", [["get", "row", ["loc", [null, [5, 93], [5, 96]]]]], [], []], "visible", ["subexpr", "@mut", [["get", "row.expanded", ["loc", [null, [5, 105], [5, 117]]]]], [], []]], ["loc", [null, [5, 17], [5, 118]]]], "loader", ["subexpr", "component", ["lt-spanned-row"], ["visible", false], ["loc", [null, [6, 11], [6, 53]]]], "no-data", ["subexpr", "component", ["lt-spanned-row"], ["visible", false], ["loc", [null, [7, 12], [7, 54]]]]], ["loc", [null, [4, 10], [8, 3]]]], ["get", "rows", ["loc", [null, [8, 4], [8, 8]]]]], [], ["loc", [null, [4, 2], [8, 10]]]]],
        locals: ["row"],
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
            "line": 15,
            "column": 8
          }
        },
        "moduleName": "modules/ember-light-table/templates/components/lt-body.hbs"
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
      statements: [["block", "each", [["get", "rows", ["loc", [null, [1, 8], [1, 12]]]]], [], 0, null, ["loc", [null, [1, 0], [9, 9]]]], ["inline", "yield", [["subexpr", "hash", [], ["loader", ["subexpr", "component", ["lt-spanned-row"], ["classes", "lt-is-loading", "colspan", ["subexpr", "@mut", [["get", "colspan", ["loc", [null, [12, 69], [12, 76]]]]], [], []]], ["loc", [null, [12, 9], [12, 77]]]], "no-data", ["subexpr", "component", ["lt-spanned-row"], ["classes", "lt-no-data", "colspan", ["subexpr", "@mut", [["get", "colspan", ["loc", [null, [13, 67], [13, 74]]]]], [], []]], ["loc", [null, [13, 10], [13, 75]]]], "expanded-row", ["subexpr", "component", ["lt-spanned-row"], ["visible", false], ["loc", [null, [14, 15], [14, 57]]]]], ["loc", [null, [11, 8], [15, 1]]]], ["get", "rows", ["loc", [null, [15, 2], [15, 6]]]]], [], ["loc", [null, [11, 0], [15, 8]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
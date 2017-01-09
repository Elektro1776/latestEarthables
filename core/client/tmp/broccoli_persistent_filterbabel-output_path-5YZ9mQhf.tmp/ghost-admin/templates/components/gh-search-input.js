define("ghost-admin/templates/components/gh-search-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-search-input.hbs"
        },
        isEmpty: false,
        arity: 2,
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
        statements: [["inline", "highlighted-text", [["get", "name.title", ["loc", [null, [12, 23], [12, 33]]]], ["get", "term", ["loc", [null, [12, 34], [12, 38]]]]], [], ["loc", [null, [12, 4], [12, 40]]]]],
        locals: ["name", "term"],
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
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-search-input.hbs"
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
      statements: [["block", "power-select", [], ["search", ["subexpr", "action", ["search"], [], ["loc", [null, [2, 11], [2, 28]]]], "onchange", ["subexpr", "action", ["openSelected"], [], ["loc", [null, [3, 13], [3, 36]]]], "placeholder", "Search", "onopen", ["subexpr", "action", ["onFocus"], [], ["loc", [null, [5, 11], [5, 29]]]], "onclose", ["subexpr", "action", ["onBlur"], [], ["loc", [null, [6, 12], [6, 29]]]], "searchEnabled", false, "triggerComponent", "gh-search-input/trigger", "renderInPlace", true, "loadingMessage", "Loading"], 0, null, ["loc", [null, [1, 0], [13, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
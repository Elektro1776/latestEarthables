define("ghost-admin/templates/components/gh-datetime-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-datetime-input.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "gh-input", [["get", "datetime", ["loc", [null, [1, 11], [1, 19]]]]], ["id", ["subexpr", "@mut", [["get", "inputId", ["loc", [null, [2, 7], [2, 14]]]]], [], []], "class", ["subexpr", "@mut", [["get", "inputClass", ["loc", [null, [3, 10], [3, 20]]]]], [], []], "name", ["subexpr", "@mut", [["get", "inputName", ["loc", [null, [4, 9], [4, 18]]]]], [], []], "stopEnterKeyDownPropagation", "true", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "datetime", ["loc", [null, [6, 24], [6, 32]]]]], [], ["loc", [null, [6, 19], [6, 33]]]]], [], ["loc", [null, [6, 11], [6, 34]]]]], ["loc", [null, [1, 0], [7, 2]]]]],
      locals: [],
      templates: []
    };
  })());
});
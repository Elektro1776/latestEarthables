define("ghost-admin/templates/subscribers/new", ["exports"], function (exports) {
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
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/subscribers/new.hbs"
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
      statements: [["inline", "gh-fullscreen-modal", ["new-subscriber"], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 10], [2, 15]]]]], [], []], "confirm", ["subexpr", "route-action", ["save"], [], ["loc", [null, [3, 12], [3, 33]]]], "close", ["subexpr", "route-action", ["cancel"], [], ["loc", [null, [4, 10], [4, 33]]]]], ["loc", [null, [1, 0], [4, 35]]]]],
      locals: [],
      templates: []
    };
  })());
});
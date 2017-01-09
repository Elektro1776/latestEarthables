define("ghost-admin/templates/components/gh-subscribers-table-delete-cell", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "modifiers",
          "modifiers": ["action"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-subscribers-table-delete-cell.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "btn btn-minor btn-sm");
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "icon-trash");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["element", "action", [["get", "tableActions.delete", ["loc", [null, [1, 46], [1, 65]]]], ["get", "row.content", ["loc", [null, [1, 66], [1, 77]]]]], [], ["loc", [null, [1, 37], [1, 79]]]]],
      locals: [],
      templates: []
    };
  })());
});
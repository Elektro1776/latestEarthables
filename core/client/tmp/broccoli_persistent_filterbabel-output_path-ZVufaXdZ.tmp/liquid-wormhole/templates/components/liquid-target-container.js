define("liquid-wormhole/templates/components/liquid-target-container", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
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
                  "line": 13,
                  "column": 4
                }
              },
              "moduleName": "modules/liquid-wormhole/templates/components/liquid-target-container.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
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
            statements: [["inline", "liquid-append", [], ["nodes", ["subexpr", "@mut", [["get", "currentItem.nodes", ["loc", [null, [12, 28], [12, 45]]]]], [], []]], ["loc", [null, [12, 6], [12, 47]]]]],
            locals: ["currentItem"],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 14,
                "column": 2
              }
            },
            "moduleName": "modules/liquid-wormhole/templates/components/liquid-target-container.hbs"
          },
          isEmpty: false,
          arity: 1,
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
          statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "target.currentItem", ["loc", [null, [11, 29], [11, 47]]]]], [], []], "notify", ["subexpr", "@mut", [["get", "target", ["loc", [null, [11, 55], [11, 61]]]]], [], []], "renderWhenFalse", true], 0, null, ["loc", [null, [11, 4], [13, 24]]]]],
          locals: ["target"],
          templates: [child0]
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
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "modules/liquid-wormhole/templates/components/liquid-target-container.hbs"
        },
        isEmpty: false,
        arity: 2,
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
        statements: [["block", "liquid-target", [], ["target", ["subexpr", "@mut", [["get", "target", ["loc", [null, [3, 11], [3, 17]]]]], [], []], "name", ["subexpr", "@mut", [["get", "target.name", ["loc", [null, [4, 9], [4, 20]]]]], [], []], "items", ["subexpr", "@mut", [["get", "target.items", ["loc", [null, [5, 10], [5, 22]]]]], [], []], "class", ["subexpr", "@mut", [["get", "target.class", ["loc", [null, [6, 10], [6, 22]]]]], [], []], "index", ["subexpr", "@mut", [["get", "index", ["loc", [null, [7, 10], [7, 15]]]]], [], []], "contextClass", ["subexpr", "@mut", [["get", "target.contextClass", ["loc", [null, [8, 17], [8, 36]]]]], [], []]], 0, null, ["loc", [null, [2, 2], [14, 20]]]]],
        locals: ["target", "index"],
        templates: [child0]
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
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "modules/liquid-wormhole/templates/components/liquid-target-container.hbs"
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
      statements: [["block", "each", [["get", "liquidTargetService.targets", ["loc", [null, [1, 8], [1, 35]]]]], [], 0, null, ["loc", [null, [1, 0], [15, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
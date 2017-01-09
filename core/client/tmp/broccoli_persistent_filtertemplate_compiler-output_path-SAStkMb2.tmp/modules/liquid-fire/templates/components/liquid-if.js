export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
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
                "line": 16,
                "column": 4
              }
            },
            "moduleName": "modules/liquid-fire/templates/components/liquid-if.hbs"
          },
          isEmpty: false,
          arity: 0,
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
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["content","yield",["loc",[null,[15,6],[15,15]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 4
              },
              "end": {
                "line": 18,
                "column": 4
              }
            },
            "moduleName": "modules/liquid-fire/templates/components/liquid-if.hbs"
          },
          isEmpty: false,
          arity: 0,
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
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","yield",[],["to","inverse"],["loc",[null,[17,6],[17,28]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 2
            },
            "end": {
              "line": 19,
              "column": 2
            }
          },
          "moduleName": "modules/liquid-fire/templates/components/liquid-if.hbs"
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
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","valueVersion",["loc",[null,[14,10],[14,22]]]]],[],0,1,["loc",[null,[14,4],[18,11]]]]
        ],
        locals: ["valueVersion"],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
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
        "moduleName": "modules/liquid-fire/templates/components/liquid-if.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","liquid-versions",[],["value",["subexpr","if",[["get","inverted",["loc",[null,[12,31],[12,39]]]],["subexpr","if",[["get","predicate",["loc",[null,[12,44],[12,53]]]],false,true],[],["loc",[null,[12,40],[12,65]]]],["subexpr","if",[["get","predicate",["loc",[null,[12,70],[12,79]]]],true,false],[],["loc",[null,[12,66],[12,91]]]]],[],["loc",[null,[12,27],[12,92]]]],"matchContext",["subexpr","hash",[],["helperName",["get","helperName",["loc",[null,[12,123],[12,133]]]]],["loc",[null,[12,106],[12,134]]]],"use",["subexpr","@mut",[["get","use",["loc",[null,[13,27],[13,30]]]]],[],[]],"rules",["subexpr","@mut",[["get","rules",["loc",[null,[13,37],[13,42]]]]],[],[]],"renderWhenFalse",["subexpr","hasBlock",["inverse"],[],["loc",[null,[13,59],[13,79]]]],"class",["subexpr","@mut",[["get","class",["loc",[null,[13,86],[13,91]]]]],[],[]]],0,null,["loc",[null,[12,2],[19,22]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 31,
                  "column": 6
                },
                "end": {
                  "line": 33,
                  "column": 6
                }
              },
              "moduleName": "modules/liquid-fire/templates/components/liquid-if.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["content","yield",["loc",[null,[32,8],[32,17]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 33,
                  "column": 6
                },
                "end": {
                  "line": 35,
                  "column": 6
                }
              },
              "moduleName": "modules/liquid-fire/templates/components/liquid-if.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","yield",[],["to","inverse"],["loc",[null,[34,8],[34,30]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 29,
                "column": 4
              },
              "end": {
                "line": 36,
                "column": 4
              }
            },
            "moduleName": "modules/liquid-fire/templates/components/liquid-if.hbs"
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
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","if",[["get","valueVersion",["loc",[null,[31,12],[31,24]]]]],[],0,1,["loc",[null,[31,6],[35,13]]]]
          ],
          locals: ["valueVersion"],
          templates: [child0, child1]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 2
            },
            "end": {
              "line": 37,
              "column": 2
            }
          },
          "moduleName": "modules/liquid-fire/templates/components/liquid-if.hbs"
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
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","liquid-versions",[],["value",["subexpr","if",[["get","inverted",["loc",[null,[29,33],[29,41]]]],["subexpr","if",[["get","predicate",["loc",[null,[29,46],[29,55]]]],false,true],[],["loc",[null,[29,42],[29,67]]]],["subexpr","if",[["get","predicate",["loc",[null,[29,72],[29,81]]]],true,false],[],["loc",[null,[29,68],[29,93]]]]],[],["loc",[null,[29,29],[29,94]]]],"notify",["subexpr","@mut",[["get","container",["loc",[null,[29,102],[29,111]]]]],[],[]],"matchContext",["subexpr","hash",[],["helperName",["get","helperName",["loc",[null,[29,142],[29,152]]]]],["loc",[null,[29,125],[29,153]]]],"use",["subexpr","@mut",[["get","use",["loc",[null,[30,8],[30,11]]]]],[],[]],"rules",["subexpr","@mut",[["get","rules",["loc",[null,[30,18],[30,23]]]]],[],[]],"renderWhenFalse",["subexpr","hasBlock",["inverse"],[],["loc",[null,[30,40],[30,60]]]]],0,null,["loc",[null,[29,4],[36,24]]]]
        ],
        locals: ["container"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 20,
            "column": 0
          },
          "end": {
            "line": 38,
            "column": 0
          }
        },
        "moduleName": "modules/liquid-fire/templates/components/liquid-if.hbs"
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
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","liquid-container",[],["id",["subexpr","@mut",[["get","containerId",["loc",[null,[22,9],[22,20]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[23,12],[23,17]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[24,19],[24,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[25,26],[25,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[26,17],[26,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[27,19],[27,31]]]]],[],[]]],0,null,["loc",[null,[21,2],[37,23]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type"
        ]
      },
      "revision": "Ember@2.6.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 39,
          "column": 0
        }
      },
      "moduleName": "modules/liquid-fire/templates/components/liquid-if.hbs"
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","containerless",["loc",[null,[1,6],[1,19]]]]],[],0,1,["loc",[null,[1,0],[38,7]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));
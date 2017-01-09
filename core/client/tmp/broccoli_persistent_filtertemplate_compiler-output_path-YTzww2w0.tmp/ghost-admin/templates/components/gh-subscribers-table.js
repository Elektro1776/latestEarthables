export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
                  "line": 6,
                  "column": 12
                },
                "end": {
                  "line": 8,
                  "column": 12
                }
              },
              "moduleName": "ghost-admin/templates/components/gh-subscribers-table.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                Loading...\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() { return []; },
            statements: [

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
                "line": 5,
                "column": 8
              },
              "end": {
                "line": 9,
                "column": 8
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-subscribers-table.hbs"
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
            ["block","body.loader",[],[],0,null,["loc",[null,[6,12],[8,28]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 11,
                    "column": 16
                  },
                  "end": {
                    "line": 13,
                    "column": 16
                  }
                },
                "moduleName": "ghost-admin/templates/components/gh-subscribers-table.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                    No subscribers found.\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() { return []; },
              statements: [

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
                  "line": 10,
                  "column": 12
                },
                "end": {
                  "line": 14,
                  "column": 12
                }
              },
              "moduleName": "ghost-admin/templates/components/gh-subscribers-table.hbs"
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
              ["block","body.no-data",[],[],0,null,["loc",[null,[11,16],[13,33]]]]
            ],
            locals: [],
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
                "line": 9,
                "column": 8
              },
              "end": {
                "line": 15,
                "column": 8
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-subscribers-table.hbs"
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
            ["block","if",[["get","table.isEmpty",["loc",[null,[10,18],[10,31]]]]],[],0,null,["loc",[null,[10,12],[14,19]]]]
          ],
          locals: [],
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
              "line": 4,
              "column": 4
            },
            "end": {
              "line": 16,
              "column": 4
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-subscribers-table.hbs"
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
          ["block","if",[["get","isLoading",["loc",[null,[5,14],[5,23]]]]],[],0,1,["loc",[null,[5,8],[15,15]]]]
        ],
        locals: ["body"],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type",
            "multiple-nodes"
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
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-subscribers-table.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
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
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","t.head",[],["onColumnClick",["subexpr","action",[["get","sortByColumn",["loc",[null,[2,35],[2,47]]]]],[],["loc",[null,[2,27],[2,48]]]],"iconAscending","icon-ascending","iconDescending","icon-descending"],["loc",[null,[2,4],[2,114]]]],
        ["block","t.body",[],["canSelect",false,"tableActions",["subexpr","hash",[],["delete",["subexpr","action",[["get","delete",["loc",[null,[4,64],[4,70]]]]],[],["loc",[null,[4,56],[4,71]]]]],["loc",[null,[4,43],[4,72]]]]],0,null,["loc",[null,[4,4],[16,15]]]]
      ],
      locals: ["t"],
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
          "line": 18,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/components/gh-subscribers-table.hbs"
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
      ["block","gh-light-table",[["get","table",["loc",[null,[1,18],[1,23]]]]],["scrollContainer",".subscribers-table","scrollBuffer",100,"onScrolledToBottom",["subexpr","action",["onScrolledToBottom"],[],["loc",[null,[1,97],[1,126]]]]],0,null,["loc",[null,[1,0],[17,19]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));
export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
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
              "line": 48,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","option",["loc",[null,[47,12],[47,18]]]],["get","term",["loc",[null,[47,19],[47,23]]]]],[],["loc",[null,[47,4],[47,25]]]]
        ],
        locals: ["option","term"],
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
              "line": 48,
              "column": 2
            },
            "end": {
              "line": 50,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[],["to","inverse"],["loc",[null,[49,4],[49,26]]]]
        ],
        locals: [],
        templates: []
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
            "line": 51,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
        ["block","power-select",[],["afterOptionsComponent",["subexpr","@mut",[["get","afterOptionsComponent",["loc",[null,[3,26],[3,47]]]]],[],[]],"allowClear",["subexpr","@mut",[["get","allowClear",["loc",[null,[4,15],[4,25]]]]],[],[]],"ariaDescribedBy",["subexpr","@mut",[["get","ariaDescribedBy",["loc",[null,[5,20],[5,35]]]]],[],[]],"ariaInvalid",["subexpr","@mut",[["get","ariaInvalid",["loc",[null,[6,16],[6,27]]]]],[],[]],"ariaLabel",["subexpr","@mut",[["get","ariaLabel",["loc",[null,[7,14],[7,23]]]]],[],[]],"ariaLabelledBy",["subexpr","@mut",[["get","ariaLabelledBy",["loc",[null,[8,19],[8,33]]]]],[],[]],"beforeOptionsComponent",["subexpr","@mut",[["get","beforeOptionsComponent",["loc",[null,[9,27],[9,49]]]]],[],[]],"buildSelection",["subexpr","action",["buildSelection"],[],["loc",[null,[10,19],[10,44]]]],"class",["subexpr","@mut",[["get","class",["loc",[null,[11,10],[11,15]]]]],[],[]],"closeOnSelect",["subexpr","@mut",[["get","closeOnSelect",["loc",[null,[12,18],[12,31]]]]],[],[]],"destination",["subexpr","@mut",[["get","destination",["loc",[null,[13,16],[13,27]]]]],[],[]],"dir",["subexpr","@mut",[["get","dir",["loc",[null,[14,8],[14,11]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[15,13],[15,21]]]]],[],[]],"dropdownClass",["subexpr","@mut",[["get","dropdownClass",["loc",[null,[16,18],[16,31]]]]],[],[]],"extra",["subexpr","@mut",[["get","extra",["loc",[null,[17,10],[17,15]]]]],[],[]],"horizontalPosition",["subexpr","@mut",[["get","horizontalPosition",["loc",[null,[18,23],[18,41]]]]],[],[]],"initiallyOpened",["subexpr","@mut",[["get","initiallyOpened",["loc",[null,[19,20],[19,35]]]]],[],[]],"loadingMessage",["subexpr","@mut",[["get","loadingMessage",["loc",[null,[20,19],[20,33]]]]],[],[]],"matcher",["subexpr","@mut",[["get","matcher",["loc",[null,[21,12],[21,19]]]]],[],[]],"matchTriggerWidth",["subexpr","@mut",[["get","matchTriggerWidth",["loc",[null,[22,22],[22,39]]]]],[],[]],"noMatchesMessage",["subexpr","@mut",[["get","noMatchesMessage",["loc",[null,[23,21],[23,37]]]]],[],[]],"onchange",["subexpr","@mut",[["get","onchange",["loc",[null,[24,13],[24,21]]]]],[],[]],"onclose",["subexpr","@mut",[["get","onclose",["loc",[null,[25,12],[25,19]]]]],[],[]],"onfocus",["subexpr","action",["handleFocus"],[],["loc",[null,[26,12],[26,34]]]],"oninput",["subexpr","@mut",[["get","oninput",["loc",[null,[27,12],[27,19]]]]],[],[]],"onkeydown",["subexpr","action",["handleKeydown"],[],["loc",[null,[28,14],[28,38]]]],"onopen",["subexpr","action",["handleOpen"],[],["loc",[null,[29,11],[29,32]]]],"options",["subexpr","@mut",[["get","options",["loc",[null,[30,12],[30,19]]]]],[],[]],"optionsComponent",["subexpr","@mut",[["get","optionsComponent",["loc",[null,[31,21],[31,37]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[32,16],[32,27]]]]],[],[]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[33,18],[33,31]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[34,13],[34,21]]]]],[],[]],"search",["subexpr","@mut",[["get","search",["loc",[null,[35,11],[35,17]]]]],[],[]],"searchEnabled",["subexpr","@mut",[["get","searchEnabled",["loc",[null,[36,18],[36,31]]]]],[],[]],"searchField",["subexpr","@mut",[["get","searchField",["loc",[null,[37,16],[37,27]]]]],[],[]],"searchMessage",["subexpr","@mut",[["get","searchMessage",["loc",[null,[38,18],[38,31]]]]],[],[]],"searchPlaceholder",["subexpr","@mut",[["get","searchPlaceholder",["loc",[null,[39,22],[39,39]]]]],[],[]],"selected",["subexpr","@mut",[["get","selected",["loc",[null,[40,13],[40,21]]]]],[],[]],"selectedItemComponent",["subexpr","@mut",[["get","selectedItemComponent",["loc",[null,[41,26],[41,47]]]]],[],[]],"tabindex",["subexpr","@mut",[["get","tabindex",["loc",[null,[42,13],[42,21]]]]],[],[]],"triggerClass",["subexpr","@mut",[["get","concatenatedTriggerClass",["loc",[null,[43,17],[43,41]]]]],[],[]],"triggerComponent",["subexpr","@mut",[["get","triggerComponent",["loc",[null,[44,21],[44,37]]]]],[],[]],"verticalPosition",["subexpr","@mut",[["get","verticalPosition",["loc",[null,[45,21],[45,37]]]]],[],[]]],0,1,["loc",[null,[2,2],[50,19]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 52,
              "column": 2
            },
            "end": {
              "line": 98,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","option",["loc",[null,[97,12],[97,18]]]],["get","term",["loc",[null,[97,19],[97,23]]]]],[],["loc",[null,[97,4],[97,25]]]]
        ],
        locals: ["option","term"],
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
            "line": 51,
            "column": 0
          },
          "end": {
            "line": 99,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
        ["block","power-select",[],["afterOptionsComponent",["subexpr","@mut",[["get","afterOptionsComponent",["loc",[null,[53,26],[53,47]]]]],[],[]],"allowClear",["subexpr","@mut",[["get","allowClear",["loc",[null,[54,15],[54,25]]]]],[],[]],"ariaDescribedBy",["subexpr","@mut",[["get","ariaDescribedBy",["loc",[null,[55,20],[55,35]]]]],[],[]],"ariaInvalid",["subexpr","@mut",[["get","ariaInvalid",["loc",[null,[56,16],[56,27]]]]],[],[]],"ariaLabel",["subexpr","@mut",[["get","ariaLabel",["loc",[null,[57,14],[57,23]]]]],[],[]],"ariaLabelledBy",["subexpr","@mut",[["get","ariaLabelledBy",["loc",[null,[58,19],[58,33]]]]],[],[]],"beforeOptionsComponent",["subexpr","@mut",[["get","beforeOptionsComponent",["loc",[null,[59,27],[59,49]]]]],[],[]],"buildSelection",["subexpr","action",["buildSelection"],[],["loc",[null,[60,19],[60,44]]]],"class",["subexpr","@mut",[["get","class",["loc",[null,[61,10],[61,15]]]]],[],[]],"closeOnSelect",["subexpr","@mut",[["get","closeOnSelect",["loc",[null,[62,18],[62,31]]]]],[],[]],"destination",["subexpr","@mut",[["get","destination",["loc",[null,[63,16],[63,27]]]]],[],[]],"dir",["subexpr","@mut",[["get","dir",["loc",[null,[64,8],[64,11]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[65,13],[65,21]]]]],[],[]],"dropdownClass",["subexpr","@mut",[["get","dropdownClass",["loc",[null,[66,18],[66,31]]]]],[],[]],"extra",["subexpr","@mut",[["get","extra",["loc",[null,[67,10],[67,15]]]]],[],[]],"horizontalPosition",["subexpr","@mut",[["get","horizontalPosition",["loc",[null,[68,23],[68,41]]]]],[],[]],"initiallyOpened",["subexpr","@mut",[["get","initiallyOpened",["loc",[null,[69,20],[69,35]]]]],[],[]],"loadingMessage",["subexpr","@mut",[["get","loadingMessage",["loc",[null,[70,19],[70,33]]]]],[],[]],"matcher",["subexpr","@mut",[["get","matcher",["loc",[null,[71,12],[71,19]]]]],[],[]],"matchTriggerWidth",["subexpr","@mut",[["get","matchTriggerWidth",["loc",[null,[72,22],[72,39]]]]],[],[]],"noMatchesMessage",["subexpr","@mut",[["get","noMatchesMessage",["loc",[null,[73,21],[73,37]]]]],[],[]],"onchange",["subexpr","@mut",[["get","onchange",["loc",[null,[74,13],[74,21]]]]],[],[]],"onclose",["subexpr","@mut",[["get","onclose",["loc",[null,[75,12],[75,19]]]]],[],[]],"onfocus",["subexpr","action",["handleFocus"],[],["loc",[null,[76,12],[76,34]]]],"oninput",["subexpr","@mut",[["get","oninput",["loc",[null,[77,12],[77,19]]]]],[],[]],"onkeydown",["subexpr","action",["handleKeydown"],[],["loc",[null,[78,14],[78,38]]]],"onopen",["subexpr","action",["handleOpen"],[],["loc",[null,[79,11],[79,32]]]],"options",["subexpr","@mut",[["get","options",["loc",[null,[80,12],[80,19]]]]],[],[]],"optionsComponent",["subexpr","@mut",[["get","optionsComponent",["loc",[null,[81,21],[81,37]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[82,16],[82,27]]]]],[],[]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[83,18],[83,31]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[84,13],[84,21]]]]],[],[]],"search",["subexpr","@mut",[["get","search",["loc",[null,[85,11],[85,17]]]]],[],[]],"searchEnabled",["subexpr","@mut",[["get","searchEnabled",["loc",[null,[86,18],[86,31]]]]],[],[]],"searchField",["subexpr","@mut",[["get","searchField",["loc",[null,[87,16],[87,27]]]]],[],[]],"searchMessage",["subexpr","@mut",[["get","searchMessage",["loc",[null,[88,18],[88,31]]]]],[],[]],"searchPlaceholder",["subexpr","@mut",[["get","searchPlaceholder",["loc",[null,[89,22],[89,39]]]]],[],[]],"selected",["subexpr","@mut",[["get","selected",["loc",[null,[90,13],[90,21]]]]],[],[]],"selectedItemComponent",["subexpr","@mut",[["get","selectedItemComponent",["loc",[null,[91,26],[91,47]]]]],[],[]],"tabindex",["subexpr","@mut",[["get","tabindex",["loc",[null,[92,13],[92,21]]]]],[],[]],"triggerClass",["subexpr","@mut",[["get","concatenatedTriggerClass",["loc",[null,[93,17],[93,41]]]]],[],[]],"triggerComponent",["subexpr","@mut",[["get","triggerComponent",["loc",[null,[94,21],[94,37]]]]],[],[]],"verticalPosition",["subexpr","@mut",[["get","verticalPosition",["loc",[null,[95,21],[95,37]]]]],[],[]]],0,null,["loc",[null,[52,2],[98,19]]]]
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
          "line": 100,
          "column": 0
        }
      },
      "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
      ["block","if",[["subexpr","hasBlock",["inverse"],[],["loc",[null,[1,6],[1,26]]]]],[],0,1,["loc",[null,[1,0],[99,7]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));
export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 13,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-timezone-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Your timezone has been automatically set to ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        return morphs;
      },
      statements: [
        ["content","activeTimezone",["loc",[null,[14,51],[14,69]]]]
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
          "multiple-nodes",
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
          "line": 17,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/components/gh-timezone-select.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("label");
      dom.setAttribute(el1,"for","activeTimezone");
      var el2 = dom.createTextNode("Timezone");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("span");
      dom.setAttribute(el1,"class","gh-select");
      dom.setAttribute(el1,"tabindex","0");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("The local time here is currently ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var morphs = new Array(4);
      morphs[0] = dom.createAttrMorph(element0, 'data-select-text');
      morphs[1] = dom.createMorphAt(element0,1,1);
      morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
      morphs[3] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
      return morphs;
    },
    statements: [
      ["attribute","data-select-text",["concat",[["get","selectedTimezone.label",["loc",[null,[2,44],[2,66]]]]]]],
      ["inline","gh-select-native",[],["id","activeTimezone","name","general[activeTimezone]","content",["subexpr","@mut",[["get","selectableTimezones",["loc",[null,[6,16],[6,35]]]]],[],[]],"optionValuePath","name","optionLabelPath","label","selection",["subexpr","@mut",[["get","selectedTimezone",["loc",[null,[9,18],[9,34]]]]],[],[]],"action","setTimezone"],["loc",[null,[3,4],[11,6]]]],
      ["block","if",[["get","hasTimezoneOverride",["loc",[null,[13,6],[13,25]]]]],[],0,null,["loc",[null,[13,0],[15,7]]]],
      ["content","localTime",["loc",[null,[16,36],[16,49]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));
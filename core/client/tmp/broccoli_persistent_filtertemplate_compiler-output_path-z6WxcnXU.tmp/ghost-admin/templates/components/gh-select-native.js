export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 2,
            "column": 4
          },
          "end": {
            "line": 6,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-select-native.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        dom.setAttribute(el1,"disabled","");
        var el2 = dom.createTextNode("\n          ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element1, 'selected');
        morphs[1] = dom.createMorphAt(element1,1,1);
        return morphs;
      },
      statements: [
        ["attribute","selected",["subexpr","is-not",[["get","selection",["loc",[null,[3,43],[3,52]]]]],[],["loc",[null,[3,34],[3,54]]]]],
        ["content","prompt",["loc",[null,[4,10],[4,20]]]]
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
            "line": 8,
            "column": 4
          },
          "end": {
            "line": 13,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-select-native.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'value');
        morphs[1] = dom.createAttrMorph(element0, 'selected');
        morphs[2] = dom.createMorphAt(element0,1,1);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["subexpr","get",[["get","item",["loc",[null,[9,29],[9,33]]]],["get","optionValuePath",["loc",[null,[9,34],[9,49]]]]],[],["loc",[null,[9,23],[9,51]]]]]]],
        ["attribute","selected",["subexpr","is-equal",[["get","item",["loc",[null,[10,36],[10,40]]]],["get","selection",["loc",[null,[10,41],[10,50]]]]],[],["loc",[null,[10,25],[10,52]]]]],
        ["inline","get",[["get","item",["loc",[null,[11,18],[11,22]]]],["get","optionLabelPath",["loc",[null,[11,23],[11,38]]]]],[],["loc",[null,[11,12],[11,40]]]]
      ],
      locals: ["item"],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "modifiers",
        "modifiers": [
          "action"
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
          "line": 15,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/components/gh-select-native.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("select");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [0]);
      var morphs = new Array(3);
      morphs[0] = dom.createElementMorph(element2);
      morphs[1] = dom.createMorphAt(element2,1,1);
      morphs[2] = dom.createMorphAt(element2,3,3);
      return morphs;
    },
    statements: [
      ["element","action",["change"],["on","change"],["loc",[null,[1,8],[1,39]]]],
      ["block","if",[["get","prompt",["loc",[null,[2,10],[2,16]]]]],[],0,null,["loc",[null,[2,4],[6,11]]]],
      ["block","each",[["get","content",["loc",[null,[8,12],[8,19]]]]],[],1,null,["loc",[null,[8,4],[13,13]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));
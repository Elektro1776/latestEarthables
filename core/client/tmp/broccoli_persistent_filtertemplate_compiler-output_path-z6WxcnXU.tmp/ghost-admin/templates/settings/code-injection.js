export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 3,
            "column": 8
          },
          "end": {
            "line": 3,
            "column": 85
          }
        },
        "moduleName": "ghost-admin/templates/settings/code-injection.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        var el2 = dom.createTextNode("Code Injection");
        dom.appendChild(el1, el2);
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
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 5,
            "column": 12
          },
          "end": {
            "line": 5,
            "column": 92
          }
        },
        "moduleName": "ghost-admin/templates/settings/code-injection.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Save");
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
      "fragmentReason": {
        "name": "triple-curlies"
      },
      "revision": "Ember@2.6.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 31,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/settings/code-injection.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","gh-view");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("header");
      dom.setAttribute(el2,"class","view-header");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      dom.setAttribute(el3,"class","view-actions");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("section");
      dom.setAttribute(el2,"class","view-content");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("form");
      dom.setAttribute(el3,"id","settings-code");
      dom.setAttribute(el3,"novalidate","novalidate");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("fieldset");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("\n                    Ghost allows you to inject code into the top and bottom of your theme files without editing them. This allows for quick modifications to insert useful things like tracking codes and meta tags.\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","form-group settings-code");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"for","ghost-head");
      var el7 = dom.createTextNode("Blog Header");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("p");
      var el7 = dom.createTextNode("Code here will be injected into the ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("code");
      var el8 = dom.createTextNode("{{ghost_head}}");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" tag on every page of your blog");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","form-group settings-code");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"for","ghost-foot");
      var el7 = dom.createTextNode("Blog Footer");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("p");
      var el7 = dom.createTextNode("Code here will be injected into the ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("code");
      var el8 = dom.createTextNode("{{ghost_foot}}");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" tag on every page of your blog");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1]);
      var element2 = dom.childAt(element0, [3, 1, 1]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(element1,1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]),5,5);
      morphs[3] = dom.createMorphAt(dom.childAt(element2, [5]),5,5);
      return morphs;
    },
    statements: [
      ["block","gh-view-title",[],["openMobileMenu","openMobileMenu"],0,null,["loc",[null,[3,8],[3,103]]]],
      ["block","gh-spin-button",[],["class","btn btn-blue","action","save","submitting",["subexpr","@mut",[["get","submitting",["loc",[null,[5,76],[5,86]]]]],[],[]]],1,null,["loc",[null,[5,12],[5,111]]]],
      ["inline","gh-cm-editor",[["get","model.ghost_head",["loc",[null,[19,35],[19,51]]]]],["id","ghost-head","class","gh-input settings-code-editor","name","codeInjection[ghost_head]","type","text","update",["subexpr","action",[["subexpr","mut",[["get","model.ghost_head",["loc",[null,[19,171],[19,187]]]]],[],["loc",[null,[19,166],[19,188]]]]],[],["loc",[null,[19,158],[19,189]]]]],["loc",[null,[19,20],[19,191]]]],
      ["inline","gh-cm-editor",[["get","model.ghost_foot",["loc",[null,[25,35],[25,51]]]]],["id","ghost-foot","class","gh-input settings-code-editor","name","codeInjection[ghost_foot]","type","text","update",["subexpr","action",[["subexpr","mut",[["get","model.ghost_foot",["loc",[null,[25,171],[25,187]]]]],[],["loc",[null,[25,166],[25,188]]]]],[],["loc",[null,[25,158],[25,189]]]]],["loc",[null,[25,20],[25,191]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));
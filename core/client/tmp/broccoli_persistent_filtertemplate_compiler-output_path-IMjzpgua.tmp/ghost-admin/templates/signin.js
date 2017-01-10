export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 5,
            "column": 16
          },
          "end": {
            "line": 9,
            "column": 16
          }
        },
        "moduleName": "ghost-admin/templates/signin.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","input-icon icon-mail");
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
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
        ["inline","gh-trim-focus-input",[["get","model.identification",["loc",[null,[7,46],[7,66]]]]],["class","email","type","email","placeholder","Email Address","name","identification","autocapitalize","off","autocorrect","off","tabindex","1","focusOut",["subexpr","action",["validate","identification"],[],["loc",[null,[7,205],[7,241]]]],"update",["subexpr","action",[["subexpr","mut",[["get","model.identification",["loc",[null,[7,262],[7,282]]]]],[],["loc",[null,[7,257],[7,283]]]]],[],["loc",[null,[7,249],[7,284]]]]],["loc",[null,[7,24],[7,286]]]]
      ],
      locals: [],
      templates: []
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
              "line": 13,
              "column": 24
            },
            "end": {
              "line": 13,
              "column": 171
            }
          },
          "moduleName": "ghost-admin/templates/signin.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Forgot?");
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
            "column": 16
          },
          "end": {
            "line": 15,
            "column": 16
          }
        },
        "moduleName": "ghost-admin/templates/signin.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","input-icon icon-lock forgotten-wrap");
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["inline","gh-input",[["get","model.password",["loc",[null,[12,35],[12,49]]]]],["class","password","type","password","placeholder","Password","name","password","tabindex","2","autocorrect","off","update",["subexpr","action",[["subexpr","mut",[["get","model.password",["loc",[null,[12,173],[12,187]]]]],[],["loc",[null,[12,168],[12,188]]]]],[],["loc",[null,[12,160],[12,189]]]]],["loc",[null,[12,24],[12,191]]]],
        ["block","gh-spin-button",[],["class","forgotten-link btn btn-link","type","button","action","forgotten","tabindex","4","submitting",["subexpr","@mut",[["get","submitting",["loc",[null,[13,135],[13,145]]]]],[],[]],"autoWidth","true"],0,null,["loc",[null,[13,24],[13,190]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 16,
            "column": 16
          },
          "end": {
            "line": 16,
            "column": 178
          }
        },
        "moduleName": "ghost-admin/templates/signin.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Sign in");
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
          "line": 23,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/signin.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","gh-flow");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","gh-flow-content-wrap");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      dom.setAttribute(el3,"class","gh-flow-content");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("form");
      dom.setAttribute(el4,"id","login");
      dom.setAttribute(el4,"class","gh-signin");
      dom.setAttribute(el4,"method","post");
      dom.setAttribute(el4,"novalidate","novalidate");
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      dom.setAttribute(el4,"class","main-error");
      var el5 = dom.createComment("");
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
      var element1 = dom.childAt(fragment, [0, 1, 1]);
      var element2 = dom.childAt(element1, [1]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(element2,1,1);
      morphs[1] = dom.createMorphAt(element2,2,2);
      morphs[2] = dom.createMorphAt(element2,4,4);
      morphs[3] = dom.createUnsafeMorphAt(dom.childAt(element1, [3]),0,0);
      return morphs;
    },
    statements: [
      ["block","gh-form-group",[],["errors",["subexpr","@mut",[["get","model.errors",["loc",[null,[5,40],[5,52]]]]],[],[]],"hasValidated",["subexpr","@mut",[["get","hasValidated",["loc",[null,[5,66],[5,78]]]]],[],[]],"property","identification"],0,null,["loc",[null,[5,16],[9,34]]]],
      ["block","gh-form-group",[],["errors",["subexpr","@mut",[["get","model.errors",["loc",[null,[10,40],[10,52]]]]],[],[]],"hasValidated",["subexpr","@mut",[["get","hasValidated",["loc",[null,[10,66],[10,78]]]]],[],[]],"property","password"],1,null,["loc",[null,[10,16],[15,34]]]],
      ["block","gh-spin-button",[],["class","login btn btn-blue btn-block","type","submit","action","validateAndAuthenticate","tabindex","3","submitting",["subexpr","@mut",[["get","loggingIn",["loc",[null,[16,142],[16,151]]]]],[],[]],"autoWidth","false"],2,null,["loc",[null,[16,16],[16,197]]]],
      ["content","flowErrors",["loc",[null,[19,34],[19,50]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));
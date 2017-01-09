export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 8,
            "column": 8
          },
          "end": {
            "line": 25,
            "column": 8
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/invite-new-user.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        dom.setAttribute(el1,"for","new-user-email");
        var el2 = dom.createTextNode("Email Address");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,5,5,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","gh-input",[["get","email",["loc",[null,[11,16],[11,21]]]]],["enter","sendInvite","class","email","id","new-user-email","type","email","placeholder","Email Address","name","email","autofocus","autofocus","autocapitalize","off","autocorrect","off","focusOut",["subexpr","action",["validate","email"],[],["loc",[null,[21,25],[21,52]]]],"update",["subexpr","action",[["subexpr","mut",[["get","email",["loc",[null,[22,36],[22,41]]]]],[],["loc",[null,[22,31],[22,42]]]]],[],["loc",[null,[22,23],[22,43]]]]],["loc",[null,[10,12],[23,14]]]],
        ["inline","gh-error-message",[],["errors",["subexpr","@mut",[["get","errors",["loc",[null,[24,38],[24,44]]]]],[],[]],"property","email"],["loc",[null,[24,12],[24,63]]]]
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
            "line": 43,
            "column": 4
          },
          "end": {
            "line": 43,
            "column": 103
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/invite-new-user.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Send invitation now");
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
        "name": "missing-wrapper",
        "problems": [
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
          "line": 45,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/components/modals/invite-new-user.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("header");
      dom.setAttribute(el1,"class","modal-header");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h1");
      var el3 = dom.createTextNode("Invite a New User");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("a");
      dom.setAttribute(el1,"class","close icon-x");
      dom.setAttribute(el1,"href","");
      dom.setAttribute(el1,"title","Close");
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"class","hidden");
      var el3 = dom.createTextNode("Close");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","modal-body");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("fieldset");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","form-group for-select");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","new-user-role");
      var el5 = dom.createTextNode("Role");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","gh-select");
      dom.setAttribute(el4,"tabindex","0");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
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
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","modal-footer");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var element1 = dom.childAt(fragment, [4, 1]);
      var morphs = new Array(4);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createMorphAt(element1,1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element1, [3, 3]),1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(fragment, [6]),1,1);
      return morphs;
    },
    statements: [
      ["element","action",["closeModal"],[],["loc",[null,[4,46],[4,69]]]],
      ["block","gh-form-group",[],["errors",["subexpr","@mut",[["get","errors",["loc",[null,[8,32],[8,38]]]]],[],[]],"hasValidated",["subexpr","@mut",[["get","hasValidated",["loc",[null,[8,52],[8,64]]]]],[],[]],"property","email"],0,null,["loc",[null,[8,8],[25,26]]]],
      ["inline","gh-select-native",[],["id","new-user-role","content",["subexpr","@mut",[["get","roles",["loc",[null,[31,28],[31,33]]]]],[],[]],"optionValuePath","id","optionLabelPath","name","selection",["subexpr","@mut",[["get","role",["loc",[null,[34,30],[34,34]]]]],[],[]],"action","setRole"],["loc",[null,[30,16],[36,18]]]],
      ["block","gh-spin-button",[],["action","confirm","class","btn btn-green","submitting",["subexpr","@mut",[["get","submitting",["loc",[null,[43,72],[43,82]]]]],[],[]]],1,null,["loc",[null,[43,4],[43,122]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));
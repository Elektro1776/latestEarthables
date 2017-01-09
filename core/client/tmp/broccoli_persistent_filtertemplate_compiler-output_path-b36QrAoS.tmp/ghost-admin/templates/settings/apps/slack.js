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
              "column": 85
            },
            "end": {
              "line": 2,
              "column": 123
            }
          },
          "moduleName": "ghost-admin/templates/settings/apps/slack.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Apps");
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
            "line": 2,
            "column": 4
          },
          "end": {
            "line": 2,
            "column": 204
          }
        },
        "moduleName": "ghost-admin/templates/settings/apps/slack.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"style","padding-left:1px");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","icon-arrow-right");
        dom.setAttribute(el2,"style","display:inline");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" Slack");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
        return morphs;
      },
      statements: [
        ["block","link-to",["settings.apps.index"],[],0,null,["loc",[null,[2,85],[2,135]]]]
      ],
      locals: [],
      templates: [child0]
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
            "line": 4,
            "column": 8
          },
          "end": {
            "line": 6,
            "column": 8
          }
        },
        "moduleName": "ghost-admin/templates/settings/apps/slack.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            Save\n");
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
  var child2 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 16
            },
            "end": {
              "line": 30,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/settings/apps/slack.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Set up a new incoming webhook ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"href","https://my.slack.com/apps/new/A0F7XDUAZ-incoming-webhooks");
          dom.setAttribute(el2,"target","_blank");
          var el3 = dom.createTextNode("here");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(", and grab the URL.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
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
              "line": 30,
              "column": 16
            },
            "end": {
              "line": 32,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/settings/apps/slack.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
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
          ["inline","gh-error-message",[],["errors",["subexpr","@mut",[["get","model.errors",["loc",[null,[31,46],[31,58]]]]],[],[]],"property","url"],["loc",[null,[31,20],[31,75]]]]
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
            "line": 25,
            "column": 12
          },
          "end": {
            "line": 33,
            "column": 12
          }
        },
        "moduleName": "ghost-admin/templates/settings/apps/slack.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        dom.setAttribute(el1,"for","url");
        var el2 = dom.createTextNode("Webhook URL");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,5,5,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","gh-input",[["get","model.url",["loc",[null,[27,27],[27,36]]]]],["name","slack[url]","update",["subexpr","action",["updateURL"],[],["loc",[null,[27,62],[27,82]]]],"onenter",["subexpr","action",["save"],[],["loc",[null,[27,91],[27,106]]]],"placeholder","https://hooks.slack.com/services/..."],["loc",[null,[27,16],[27,159]]]],
        ["block","unless",[["get","model.errors.url",["loc",[null,[28,26],[28,42]]]]],[],0,1,["loc",[null,[28,16],[32,27]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  var child3 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 37,
            "column": 12
          },
          "end": {
            "line": 39,
            "column": 12
          }
        },
        "moduleName": "ghost-admin/templates/settings/apps/slack.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                Send Test Notification\n");
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
          "line": 43,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/settings/apps/slack.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("header");
      dom.setAttribute(el1,"class","view-header");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("section");
      dom.setAttribute(el2,"class","view-actions");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","view-container");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("section");
      dom.setAttribute(el2,"class","view-content");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      dom.setAttribute(el3,"class","app-grid");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","app-cell");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("img");
      dom.setAttribute(el5,"class","app-icon");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","app-cell");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h3");
      var el6 = dom.createTextNode("Slack");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("A messaging app for teams");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      dom.setAttribute(el3,"class","app-subtitle");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Automatically send newly published posts to a channel in Slack.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("form");
      dom.setAttribute(el3,"class","app-config-form");
      dom.setAttribute(el3,"id","slack-settings");
      dom.setAttribute(el3,"novalidate","novalidate");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("form");
      dom.setAttribute(el3,"class","app-config-form");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("        ");
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
      var element1 = dom.childAt(fragment, [2, 1]);
      var element2 = dom.childAt(element1, [1, 1, 1]);
      var element3 = dom.childAt(element1, [5]);
      var morphs = new Array(6);
      morphs[0] = dom.createMorphAt(element0,1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
      morphs[2] = dom.createAttrMorph(element2, 'src');
      morphs[3] = dom.createElementMorph(element3);
      morphs[4] = dom.createMorphAt(element3,1,1);
      morphs[5] = dom.createMorphAt(dom.childAt(element1, [7]),1,1);
      return morphs;
    },
    statements: [
      ["block","gh-view-title",[],["openMobileMenu","openMobileMenu"],0,null,["loc",[null,[2,4],[2,222]]]],
      ["block","gh-spin-button",[],["id","saveSlackIntegration","class","btn btn-green","action",["subexpr","action",["save"],[],["loc",[null,[4,81],[4,96]]]],"submitting",["subexpr","@mut",[["get","isSaving",["loc",[null,[4,108],[4,116]]]]],[],[]]],1,null,["loc",[null,[4,8],[6,27]]]],
      ["attribute","src",["concat",[["subexpr","gh-path",["admin","/img/slackicon.png"],[],["loc",[null,[13,43],[13,83]]]]]]],
      ["element","action",["save"],["on","submit"],["loc",[null,[24,82],[24,111]]]],
      ["block","gh-form-group",[],["errors",["subexpr","@mut",[["get","model.errors",["loc",[null,[25,36],[25,48]]]]],[],[]],"hasValidated",["subexpr","@mut",[["get","model.hasValidated",["loc",[null,[25,62],[25,80]]]]],[],[]],"property","url"],2,null,["loc",[null,[25,12],[33,30]]]],
      ["block","gh-spin-button",[],["id","sendTestNotification","class","btn btn-grey","disabled",["subexpr","@mut",[["get","testNotificationDisabled",["loc",[null,[37,86],[37,110]]]]],[],[]],"action",["subexpr","action",["sendTestNotification"],[],["loc",[null,[37,118],[37,149]]]],"submitting",["subexpr","@mut",[["get","isSendingTest",["loc",[null,[37,161],[37,174]]]]],[],[]]],3,null,["loc",[null,[37,12],[39,31]]]]
    ],
    locals: [],
    templates: [child0, child1, child2, child3]
  };
}()));
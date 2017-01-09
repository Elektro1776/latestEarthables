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
            "column": 82
          }
        },
        "moduleName": "ghost-admin/templates/about.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        var el2 = dom.createTextNode("About Ghost");
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
            "line": 17,
            "column": 42
          },
          "end": {
            "line": 17,
            "column": 74
          }
        },
        "moduleName": "ghost-admin/templates/about.hbs"
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
        ["content","model.mail",["loc",[null,[17,60],[17,74]]]]
      ],
      locals: [],
      templates: []
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
            "line": 17,
            "column": 74
          },
          "end": {
            "line": 17,
            "column": 88
          }
        },
        "moduleName": "ghost-admin/templates/about.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Native");
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
          "line": 45,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/about.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","gh-view js-settings-content");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("header");
      dom.setAttribute(el2,"class","view-header");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("section");
      dom.setAttribute(el2,"class","view-content");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("header");
      dom.setAttribute(el3,"class","gh-about-header");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("img");
      dom.setAttribute(el4,"class","gh-logo");
      dom.setAttribute(el4,"alt","Ghost");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      dom.setAttribute(el3,"class","gh-env-details");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("ul");
      dom.setAttribute(el4,"class","gh-env-list");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      dom.setAttribute(el5,"class","gh-env-list-version");
      var el6 = dom.createElement("strong");
      var el7 = dom.createTextNode("Version");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      var el6 = dom.createElement("strong");
      var el7 = dom.createTextNode("Environment");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      dom.setAttribute(el5,"class","gh-env-list-database-type");
      var el6 = dom.createElement("strong");
      var el7 = dom.createTextNode("Database");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      var el6 = dom.createElement("strong");
      var el7 = dom.createTextNode("Mail");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","gh-env-help");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("a");
      dom.setAttribute(el5,"href","http://support.ghost.org");
      dom.setAttribute(el5,"class","btn btn-minor");
      dom.setAttribute(el5,"target","_blank");
      var el6 = dom.createTextNode("User Documentation");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("a");
      dom.setAttribute(el5,"href","https://ghost.org/slack/");
      dom.setAttribute(el5,"class","btn btn-minor");
      dom.setAttribute(el5,"target","_blank");
      var el6 = dom.createTextNode("Get Help With Ghost");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      dom.setAttribute(el3,"class","gh-credits");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h2");
      var el5 = dom.createTextNode("The People Who Made it Possible");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("section");
      dom.setAttribute(el4,"class","gh-contributors");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("Ghost is built by an incredible group of contributors from all over the world. Here are just a few of the people who helped create the version you’re using right now.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","https://ghost.org/about/contribute/");
      dom.setAttribute(el4,"class","btn btn-blue btn-lg");
      var el5 = dom.createTextNode("Find out how you can get involved");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("footer");
      dom.setAttribute(el3,"class","gh-copyright-info");
      var el4 = dom.createTextNode("\n            Copyright 2013 - ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" Ghost Foundation, released under the ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","https://github.com/TryGhost/Ghost/blob/master/LICENSE");
      var el5 = dom.createTextNode("MIT license");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(".\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("br");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","https://ghost.org/");
      var el5 = dom.createTextNode("Ghost");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" is a trademark of the ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","https://ghost.org/about/");
      var el5 = dom.createTextNode("Ghost Foundation");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(".\n        ");
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
      var element1 = dom.childAt(element0, [3]);
      var element2 = dom.childAt(element1, [1, 1]);
      var element3 = dom.childAt(element1, [5, 1]);
      var morphs = new Array(9);
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
      morphs[1] = dom.createAttrMorph(element2, 'src');
      morphs[2] = dom.createMorphAt(element1,3,3);
      morphs[3] = dom.createMorphAt(dom.childAt(element3, [1]),2,2);
      morphs[4] = dom.createMorphAt(dom.childAt(element3, [3]),2,2);
      morphs[5] = dom.createMorphAt(dom.childAt(element3, [5]),2,2);
      morphs[6] = dom.createMorphAt(dom.childAt(element3, [7]),2,2);
      morphs[7] = dom.createMorphAt(dom.childAt(element1, [7, 3]),1,1);
      morphs[8] = dom.createMorphAt(dom.childAt(element1, [9]),1,1);
      return morphs;
    },
    statements: [
      ["block","gh-view-title",[],["openMobileMenu","openMobileMenu"],0,null,["loc",[null,[3,8],[3,100]]]],
      ["attribute","src",["concat",[["subexpr","gh-path",["admin","/img/ghost-logo.png"],[],["loc",[null,[7,38],[7,79]]]]]]],
      ["content","gh-upgrade-notification",["loc",[null,[10,8],[10,35]]]],
      ["content","model.version",["loc",[null,[14,73],[14,90]]]],
      ["content","model.environment",["loc",[null,[15,49],[15,70]]]],
      ["content","model.database",["loc",[null,[16,80],[16,98]]]],
      ["block","if",[["get","model.mail",["loc",[null,[17,48],[17,58]]]]],[],1,2,["loc",[null,[17,42],[17,95]]]],
      ["inline","partial",["contributors"],[],["loc",[null,[29,16],[29,42]]]],
      ["content","copyrightYear",["loc",[null,[39,29],[39,46]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));
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
                "line": 20,
                "column": 24
              },
              "end": {
                "line": 20,
                "column": 100
              }
            },
            "moduleName": "ghost-admin/templates/error.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("em");
            dom.setAttribute(el1,"class","error-stack-function");
            var el2 = dom.createComment("");
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
            ["content","item.function",["loc",[null,[20,78],[20,95]]]]
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
              "line": 17,
              "column": 16
            },
            "end": {
              "line": 23,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/error.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n                        at\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","error-stack-file");
          var el3 = dom.createTextNode("(");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(")");
          dom.appendChild(el2, el3);
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
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
          return morphs;
        },
        statements: [
          ["block","if",[["get","item.function",["loc",[null,[20,30],[20,43]]]]],[],0,null,["loc",[null,[20,24],[20,107]]]],
          ["content","item.at",["loc",[null,[21,56],[21,67]]]]
        ],
        locals: ["item"],
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
            "line": 12,
            "column": 4
          },
          "end": {
            "line": 26,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/error.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","error-stack");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("Stack Trace");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createElement("strong");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2,"class","error-stack-list");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("            ");
        dom.appendChild(el2, el3);
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
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [3, 0]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [5]),1,1);
        return morphs;
      },
      statements: [
        ["content","message",["loc",[null,[15,23],[15,34]]]],
        ["block","each",[["get","stack",["loc",[null,[17,24],[17,29]]]]],[],0,null,["loc",[null,[17,16],[23,25]]]]
      ],
      locals: [],
      templates: [child0]
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
          "line": 28,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/error.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","gh-view");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("section");
      dom.setAttribute(el2,"class","error-content error-404 js-error-container");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      dom.setAttribute(el3,"class","error-details");
      var el4 = dom.createTextNode("\n             ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("img");
      dom.setAttribute(el4,"class","error-ghost");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n             ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("section");
      dom.setAttribute(el4,"class","error-message");
      var el5 = dom.createTextNode("\n                 ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h1");
      dom.setAttribute(el5,"class","error-code");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                 ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h2");
      dom.setAttribute(el5,"class","error-description");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n             ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
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
      var element3 = dom.childAt(element2, [1, 1]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element3, [3]);
      var morphs = new Array(5);
      morphs[0] = dom.createAttrMorph(element4, 'src');
      morphs[1] = dom.createAttrMorph(element4, 'srcset');
      morphs[2] = dom.createMorphAt(dom.childAt(element5, [1]),0,0);
      morphs[3] = dom.createMorphAt(dom.childAt(element5, [3]),0,0);
      morphs[4] = dom.createMorphAt(element2,3,3);
      return morphs;
    },
    statements: [
      ["attribute","src",["concat",[["subexpr","gh-path",["admin","/img/404-ghost@2x.png"],[],["loc",[null,[4,43],[4,86]]]]]]],
      ["attribute","srcset",["concat",[["subexpr","gh-path",["admin","/img/404-ghost.png"],[],["loc",[null,[4,96],[4,136]]]]," 1x, ",["subexpr","gh-path",["admin","/img/404-ghost@2x.png"],[],["loc",[null,[4,141],[4,184]]]]," 2x"]]],
      ["content","code",["loc",[null,[6,40],[6,48]]]],
      ["content","message",["loc",[null,[7,47],[7,58]]]],
      ["block","if",[["get","stack",["loc",[null,[12,10],[12,15]]]]],[],0,null,["loc",[null,[12,4],[26,11]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));
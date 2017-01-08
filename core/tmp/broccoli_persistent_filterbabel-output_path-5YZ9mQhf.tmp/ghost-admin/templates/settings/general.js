define("ghost-admin/templates/settings/general", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
              "column": 78
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("span");
          var el2 = dom.createTextNode("General");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
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
          "moduleName": "ghost-admin/templates/settings/general.hbs"
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
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 16
            },
            "end": {
              "line": 18,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "blog-title");
          var el2 = dom.createTextNode("Blog Title");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("The name of your blog");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "model.title", ["loc", [null, [15, 31], [15, 42]]]]], ["id", "blog-title", "name", "general[title]", "type", "text", "focusOut", ["subexpr", "action", ["validate", "title"], ["target", ["get", "model", ["loc", [null, [15, 136], [15, 141]]]]], ["loc", [null, [15, 102], [15, 142]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "model.title", ["loc", [null, [15, 163], [15, 174]]]]], [], ["loc", [null, [15, 158], [15, 175]]]]], [], ["loc", [null, [15, 150], [15, 176]]]]], ["loc", [null, [15, 20], [15, 178]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [16, 46], [16, 58]]]]], [], []], "property", "title"], ["loc", [null, [16, 20], [16, 77]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 16
            },
            "end": {
              "line": 28,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "blog-description");
          var el2 = dom.createTextNode("Blog Description");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("\n                        Describe what your blog is about\n                        ");
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
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [7]), 1, 1);
          return morphs;
        },
        statements: [["inline", "gh-textarea", [["get", "model.description", ["loc", [null, [22, 34], [22, 51]]]]], ["id", "blog-description", "name", "general[description]", "focusOut", ["subexpr", "action", ["validate", "description"], ["target", ["get", "model", ["loc", [null, [22, 151], [22, 156]]]]], ["loc", [null, [22, 111], [22, 157]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "model.description", ["loc", [null, [22, 178], [22, 195]]]]], [], ["loc", [null, [22, 173], [22, 196]]]]], [], ["loc", [null, [22, 165], [22, 197]]]]], ["loc", [null, [22, 20], [22, 199]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [23, 46], [23, 58]]]]], [], []], "property", "description"], ["loc", [null, [23, 20], [23, 83]]]], ["inline", "gh-count-characters", [["get", "model.description", ["loc", [null, [26, 46], [26, 63]]]]], [], ["loc", [null, [26, 24], [26, 65]]]]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 33,
              "column": 16
            },
            "end": {
              "line": 35,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "blog-logo");
          dom.setAttribute(el1, "alt", "logo");
          dom.setAttribute(el1, "role", "button");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element5, 'src');
          morphs[1] = dom.createElementMorph(element5);
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "model.logo", ["loc", [null, [34, 50], [34, 60]]]]]]], ["element", "action", ["toggleUploadLogoModal"], [], ["loc", [null, [34, 89], [34, 123]]]]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 35,
              "column": 16
            },
            "end": {
              "line": 37,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "class", "btn btn-green js-modal-logo");
          var el2 = dom.createTextNode("Upload Image");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element4);
          return morphs;
        },
        statements: [["element", "action", ["toggleUploadLogoModal"], [], ["loc", [null, [36, 78], [36, 112]]]]],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 40,
              "column": 16
            },
            "end": {
              "line": 45,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
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
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-fullscreen-modal", ["upload-image"], ["model", ["subexpr", "hash", [], ["model", ["get", "model", ["loc", [null, [42, 46], [42, 51]]]], "imageProperty", "logo"], ["loc", [null, [42, 34], [42, 73]]]], "close", ["subexpr", "action", ["toggleUploadLogoModal"], [], ["loc", [null, [43, 34], [43, 66]]]], "modifier", "action wide"], ["loc", [null, [41, 20], [44, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 50,
              "column": 16
            },
            "end": {
              "line": 52,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "blog-cover");
          dom.setAttribute(el1, "alt", "cover photo");
          dom.setAttribute(el1, "role", "button");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element3, 'src');
          morphs[1] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "model.cover", ["loc", [null, [51, 51], [51, 62]]]]]]], ["element", "action", ["toggleUploadCoverModal"], [], ["loc", [null, [51, 98], [51, 133]]]]],
        locals: [],
        templates: []
      };
    })();
    var child8 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 52,
              "column": 16
            },
            "end": {
              "line": 54,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "class", "btn btn-green js-modal-cover");
          var el2 = dom.createTextNode("Upload Image");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["element", "action", ["toggleUploadCoverModal"], [], ["loc", [null, [53, 79], [53, 114]]]]],
        locals: [],
        templates: []
      };
    })();
    var child9 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 57,
              "column": 16
            },
            "end": {
              "line": 62,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
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
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-fullscreen-modal", ["upload-image"], ["model", ["subexpr", "hash", [], ["model", ["get", "model", ["loc", [null, [59, 46], [59, 51]]]], "imageProperty", "cover"], ["loc", [null, [59, 34], [59, 74]]]], "close", ["subexpr", "action", ["toggleUploadCoverModal"], [], ["loc", [null, [60, 34], [60, 67]]]], "modifier", "action wide"], ["loc", [null, [58, 20], [61, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    var child10 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 84,
              "column": 20
            },
            "end": {
              "line": 89,
              "column": 20
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "facebook");
          var el2 = dom.createTextNode("Facebook Page");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("input");
          dom.setAttribute(el1, "type", "url");
          dom.setAttribute(el1, "class", "gh-input");
          dom.setAttribute(el1, "id", "facebook");
          dom.setAttribute(el1, "name", "general[facebook]");
          dom.setAttribute(el1, "placeholder", "https://www.facebook.com/ghost");
          dom.setAttribute(el1, "autocorrect", "off");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("URL of your blog's Facebook Page");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element1, 'value');
          morphs[1] = dom.createAttrMorph(element1, 'oninput');
          morphs[2] = dom.createElementMorph(element1);
          morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "model.facebook", ["loc", [null, [86, 39], [86, 53]]]]], ["attribute", "oninput", ["subexpr", "action", [["subexpr", "mut", [["get", "_scratchFacebook", ["loc", [null, [86, 78], [86, 94]]]]], [], ["loc", [null, [86, 73], [86, 95]]]]], ["value", "target.value"], ["loc", [null, [86, 64], [86, 118]]]]], ["element", "action", ["validateFacebookUrl"], ["on", "focusOut"], ["loc", [null, [86, 119], [86, 165]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [87, 50], [87, 62]]]]], [], []], "property", "facebook"], ["loc", [null, [87, 24], [87, 84]]]]],
        locals: [],
        templates: []
      };
    })();
    var child11 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 92,
              "column": 20
            },
            "end": {
              "line": 97,
              "column": 20
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "for", "twitter");
          var el2 = dom.createTextNode("Twitter Profile");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("input");
          dom.setAttribute(el1, "type", "url");
          dom.setAttribute(el1, "class", "gh-input");
          dom.setAttribute(el1, "id", "facebook");
          dom.setAttribute(el1, "name", "general[twitter]");
          dom.setAttribute(el1, "placeholder", "https://twitter.com/tryghost");
          dom.setAttribute(el1, "autocorrect", "off");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("URL of your blog's Twitter profile");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'oninput');
          morphs[2] = dom.createElementMorph(element0);
          morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "model.twitter", ["loc", [null, [94, 39], [94, 52]]]]], ["attribute", "oninput", ["subexpr", "action", [["subexpr", "mut", [["get", "_scratchTwitter", ["loc", [null, [94, 77], [94, 92]]]]], [], ["loc", [null, [94, 72], [94, 93]]]]], ["value", "target.value"], ["loc", [null, [94, 63], [94, 116]]]]], ["element", "action", ["validateTwitterUrl"], ["on", "focusOut"], ["loc", [null, [94, 117], [94, 162]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [95, 50], [95, 62]]]]], [], []], "property", "twitter"], ["loc", [null, [95, 24], [95, 83]]]]],
        locals: [],
        templates: []
      };
    })();
    var child12 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 115,
                "column": 20
              },
              "end": {
                "line": 119,
                "column": 20
              }
            },
            "moduleName": "ghost-admin/templates/settings/general.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("This password will be needed to access your blog. All search engine optimization and social features are now disabled. This password is stored in plaintext.");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["inline", "gh-input", [["get", "model.password", ["loc", [null, [116, 35], [116, 49]]]]], ["name", "general[password]", "type", "text", "focusOut", ["subexpr", "action", ["validate", "password"], ["target", ["get", "model", ["loc", [null, [116, 133], [116, 138]]]]], ["loc", [null, [116, 96], [116, 139]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "model.password", ["loc", [null, [116, 160], [116, 174]]]]], [], ["loc", [null, [116, 155], [116, 175]]]]], [], ["loc", [null, [116, 147], [116, 176]]]]], ["loc", [null, [116, 24], [116, 178]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [117, 50], [117, 62]]]]], [], []], "property", "password"], ["loc", [null, [117, 24], [117, 84]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 114,
              "column": 16
            },
            "end": {
              "line": 120,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
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
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [115, 44], [115, 56]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "model.hasValidated", ["loc", [null, [115, 70], [115, 88]]]]], [], []], "property", "password"], 0, null, ["loc", [null, [115, 20], [119, 38]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child13 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 133,
              "column": 20
            },
            "end": {
              "line": 135,
              "column": 20
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        Upload a theme\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child14 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 138,
              "column": 16
            },
            "end": {
              "line": 147,
              "column": 16
            }
          },
          "moduleName": "ghost-admin/templates/settings/general.hbs"
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
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-fullscreen-modal", ["delete-theme"], ["model", ["subexpr", "hash", [], ["theme", ["get", "themeToDelete", ["loc", [null, [141, 38], [141, 51]]]], "download", ["subexpr", "action", ["downloadTheme", ["get", "themeToDelete", ["loc", [null, [142, 65], [142, 78]]]]], [], ["loc", [null, [142, 41], [142, 79]]]]], ["loc", [null, [140, 34], [143, 29]]]], "close", ["subexpr", "action", ["hideDeleteThemeModal"], [], ["loc", [null, [144, 34], [144, 65]]]], "confirm", ["subexpr", "action", ["deleteTheme"], [], ["loc", [null, [145, 36], [145, 58]]]], "modifier", "action wide"], ["loc", [null, [139, 20], [146, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 154,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/settings/general.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "gh-view");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        dom.setAttribute(el2, "class", "view-header");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "class", "view-actions");
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
        dom.setAttribute(el2, "class", "view-content");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3, "id", "settings-general");
        dom.setAttribute(el3, "novalidate", "novalidate");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("fieldset");
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("Blog Logo");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("Display a logo for your publication");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("Blog Cover");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("Display a cover image on your site");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("fieldset");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "for", "postsPerPage");
        var el7 = dom.createTextNode("Posts per page");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("How many posts should be displayed on each page");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group for-checkbox");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "for", "permalinks");
        var el7 = dom.createTextNode("Dated Permalinks");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "class", "checkbox");
        dom.setAttribute(el6, "for", "permalinks");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "input-toggle-component");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createTextNode("Include the date in your post URLs");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group for-checkbox");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "for", "isPrivate");
        var el7 = dom.createTextNode("Make this blog private");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "class", "checkbox");
        dom.setAttribute(el6, "for", "isPrivate");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "input-toggle-component");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createTextNode("Enable password protection");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "settings-themes");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5, "id", "themes");
        var el6 = dom.createTextNode("Themes");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element6 = dom.childAt(fragment, [0]);
        var element7 = dom.childAt(element6, [1]);
        var element8 = dom.childAt(element6, [3, 1]);
        var element9 = dom.childAt(element8, [1]);
        var element10 = dom.childAt(element8, [3]);
        var element11 = dom.childAt(element8, [5]);
        var element12 = dom.childAt(element8, [7]);
        var element13 = dom.childAt(element8, [9]);
        var morphs = new Array(19);
        morphs[0] = dom.createMorphAt(element7, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element7, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(element9, 1, 1);
        morphs[3] = dom.createMorphAt(element9, 3, 3);
        morphs[4] = dom.createMorphAt(element10, 3, 3);
        morphs[5] = dom.createMorphAt(element10, 7, 7);
        morphs[6] = dom.createMorphAt(element11, 3, 3);
        morphs[7] = dom.createMorphAt(element11, 7, 7);
        morphs[8] = dom.createMorphAt(dom.childAt(element12, [1]), 4, 4);
        morphs[9] = dom.createMorphAt(dom.childAt(element12, [3, 3]), 1, 1);
        morphs[10] = dom.createMorphAt(dom.childAt(element12, [5]), 1, 1);
        morphs[11] = dom.createMorphAt(dom.childAt(element12, [7]), 1, 1);
        morphs[12] = dom.createMorphAt(element12, 9, 9);
        morphs[13] = dom.createMorphAt(dom.childAt(element12, [11, 3]), 1, 1);
        morphs[14] = dom.createMorphAt(element12, 13, 13);
        morphs[15] = dom.createMorphAt(element13, 3, 3);
        morphs[16] = dom.createMorphAt(dom.childAt(element13, [5]), 1, 1);
        morphs[17] = dom.createMorphAt(element13, 7, 7);
        morphs[18] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "gh-view-title", [], ["openMobileMenu", "openMobileMenu"], 0, null, ["loc", [null, [3, 8], [3, 96]]]], ["block", "gh-spin-button", [], ["class", "btn btn-blue", "action", "save", "submitting", ["subexpr", "@mut", [["get", "submitting", ["loc", [null, [5, 76], [5, 86]]]]], [], []]], 1, null, ["loc", [null, [5, 12], [5, 111]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [13, 40], [13, 52]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "model.hasValidated", ["loc", [null, [13, 66], [13, 84]]]]], [], []], "property", "title"], 2, null, ["loc", [null, [13, 16], [18, 34]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [20, 40], [20, 52]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "model.hasValidated", ["loc", [null, [20, 66], [20, 84]]]]], [], []], "property", "description", "class", "description-container"], 3, null, ["loc", [null, [20, 16], [28, 34]]]], ["block", "if", [["get", "model.logo", ["loc", [null, [33, 22], [33, 32]]]]], [], 4, 5, ["loc", [null, [33, 16], [37, 23]]]], ["block", "if", [["get", "showUploadLogoModal", ["loc", [null, [40, 22], [40, 41]]]]], [], 6, null, ["loc", [null, [40, 16], [45, 23]]]], ["block", "if", [["get", "model.cover", ["loc", [null, [50, 22], [50, 33]]]]], [], 7, 8, ["loc", [null, [50, 16], [54, 23]]]], ["block", "if", [["get", "showUploadCoverModal", ["loc", [null, [57, 22], [57, 42]]]]], [], 9, null, ["loc", [null, [57, 16], [62, 23]]]], ["inline", "gh-input", [["get", "model.postsPerPage", ["loc", [null, [70, 31], [70, 49]]]]], ["id", "postsPerPage", "name", "general[postsPerPage]", "focus-out", "checkPostsPerPage", "min", "1", "max", "1000", "type", "number", "pattern", "[0-9]*", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "model.postsPerPage", ["loc", [null, [70, 197], [70, 215]]]]], [], ["loc", [null, [70, 192], [70, 216]]]]], [], ["loc", [null, [70, 184], [70, 217]]]]], ["loc", [null, [70, 20], [70, 219]]]], ["inline", "one-way-checkbox", [["get", "isDatedPermalinks", ["loc", [null, [77, 43], [77, 60]]]]], ["id", "permalinks", "class", "gh-input", "name", "general[permalinks]", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "isDatedPermalinks", ["loc", [null, [77, 141], [77, 158]]]]], [], ["loc", [null, [77, 136], [77, 159]]]]], [], ["loc", [null, [77, 128], [77, 160]]]]], ["loc", [null, [77, 24], [77, 162]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [84, 44], [84, 56]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "model.hasValidated", ["loc", [null, [84, 70], [84, 88]]]]], [], []], "property", "facebook"], 10, null, ["loc", [null, [84, 20], [89, 38]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [92, 44], [92, 56]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "model.hasValidated", ["loc", [null, [92, 70], [92, 88]]]]], [], []], "property", "twitter"], 11, null, ["loc", [null, [92, 20], [97, 38]]]], ["inline", "gh-timezone-select", [], ["activeTimezone", ["subexpr", "@mut", [["get", "model.activeTimezone", ["loc", [null, [101, 39], [101, 59]]]]], [], []], "availableTimezones", ["subexpr", "@mut", [["get", "availableTimezones", ["loc", [null, [102, 43], [102, 61]]]]], [], []], "update", ["subexpr", "action", ["setTimezone"], [], ["loc", [null, [103, 31], [103, 53]]]]], ["loc", [null, [100, 16], [103, 55]]]], ["inline", "one-way-checkbox", [["get", "model.isPrivate", ["loc", [null, [108, 43], [108, 58]]]]], ["id", "isPrivate", "name", "general[isPrivate]", "type", "checkbox", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "model.isPrivate", ["loc", [null, [108, 136], [108, 151]]]]], [], ["loc", [null, [108, 131], [108, 152]]]]], [], ["loc", [null, [108, 123], [108, 153]]]]], ["loc", [null, [108, 24], [108, 155]]]], ["block", "if", [["get", "model.isPrivate", ["loc", [null, [114, 22], [114, 37]]]]], [], 12, null, ["loc", [null, [114, 16], [120, 23]]]], ["inline", "gh-theme-table", [], ["availableThemes", ["subexpr", "@mut", [["get", "model.availableThemes", ["loc", [null, [127, 40], [127, 61]]]]], [], []], "activateTheme", ["subexpr", "action", ["setTheme"], [], ["loc", [null, [128, 38], [128, 57]]]], "downloadTheme", ["subexpr", "action", ["downloadTheme"], [], ["loc", [null, [129, 38], [129, 62]]]], "deleteTheme", ["subexpr", "action", ["deleteTheme"], [], ["loc", [null, [130, 36], [130, 58]]]]], ["loc", [null, [126, 16], [130, 60]]]], ["block", "link-to", ["settings.general.uploadtheme"], ["class", "btn btn-green"], 13, null, ["loc", [null, [133, 20], [135, 32]]]], ["block", "if", [["get", "showDeleteThemeModal", ["loc", [null, [138, 22], [138, 42]]]]], [], 14, null, ["loc", [null, [138, 16], [147, 23]]]], ["content", "outlet", ["loc", [null, [153, 0], [153, 10]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10, child11, child12, child13, child14]
    };
  })());
});
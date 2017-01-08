define("ghost-admin/templates/components/gh-tag-settings-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 12
              },
              "end": {
                "line": 4,
                "column": 129
              }
            },
            "moduleName": "ghost-admin/templates/components/gh-tag-settings-form.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "hidden");
            var el2 = dom.createTextNode("Back");
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
              "line": 7,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-tag-settings-form.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "style", "width:23px;");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
          return morphs;
        },
        statements: [["block", "link-to", ["settings.tags"], ["class", "back icon-arrow-left settings-menu-header-action"], 0, null, ["loc", [null, [4, 12], [4, 141]]]], ["content", "title", ["loc", [null, [5, 16], [5, 25]]]]],
        locals: [],
        templates: [child0]
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
              "line": 7,
              "column": 8
            },
            "end": {
              "line": 9,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-tag-settings-form.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [8, 16], [8, 25]]]]],
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
              "line": 18,
              "column": 12
            },
            "end": {
              "line": 22,
              "column": 12
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-tag-settings-form.hbs"
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
          dom.setAttribute(el1, "for", "tag-name");
          var el2 = dom.createTextNode("Name");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
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
        statements: [["inline", "gh-input", [["get", "scratchName", ["loc", [null, [20, 27], [20, 38]]]]], ["id", "tag-name", "name", "name", "type", "text", "focusOut", ["subexpr", "action", ["setProperty", "name", ["get", "scratchName", ["loc", [null, [20, 115], [20, 126]]]]], [], ["loc", [null, [20, 86], [20, 127]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "scratchName", ["loc", [null, [20, 148], [20, 159]]]]], [], ["loc", [null, [20, 143], [20, 160]]]]], [], ["loc", [null, [20, 135], [20, 161]]]]], ["loc", [null, [20, 16], [20, 163]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "tag.errors", ["loc", [null, [21, 42], [21, 52]]]]], [], []], "property", "name"], ["loc", [null, [21, 16], [21, 70]]]]],
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
              "line": 24,
              "column": 12
            },
            "end": {
              "line": 29,
              "column": 12
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-tag-settings-form.hbs"
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
          dom.setAttribute(el1, "for", "tag-slug");
          var el2 = dom.createTextNode("URL");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "scratchSlug", ["loc", [null, [26, 27], [26, 38]]]]], ["id", "tag-slug", "name", "slug", "type", "text", "focusOut", ["subexpr", "action", ["setProperty", "slug", ["get", "scratchSlug", ["loc", [null, [26, 115], [26, 126]]]]], [], ["loc", [null, [26, 86], [26, 127]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "scratchSlug", ["loc", [null, [26, 148], [26, 159]]]]], [], ["loc", [null, [26, 143], [26, 160]]]]], [], ["loc", [null, [26, 135], [26, 161]]]]], ["loc", [null, [26, 16], [26, 163]]]], ["inline", "gh-url-preview", [], ["prefix", "tag", "slug", ["subexpr", "@mut", [["get", "scratchSlug", ["loc", [null, [27, 51], [27, 62]]]]], [], []], "tagName", "p", "classNames", "description"], ["loc", [null, [27, 16], [27, 101]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "activeTag.errors", ["loc", [null, [28, 42], [28, 58]]]]], [], []], "property", "slug"], ["loc", [null, [28, 16], [28, 76]]]]],
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
              "line": 31,
              "column": 12
            },
            "end": {
              "line": 36,
              "column": 12
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-tag-settings-form.hbs"
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
          dom.setAttribute(el1, "for", "tag-description");
          var el2 = dom.createTextNode("Description");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Maximum: ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("200");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" characters. You’ve used ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
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
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [7]), 3, 3);
          return morphs;
        },
        statements: [["inline", "gh-textarea", [["get", "scratchDescription", ["loc", [null, [33, 30], [33, 48]]]]], ["id", "tag-description", "name", "description", "focusOut", ["subexpr", "action", ["setProperty", "description", ["get", "scratchDescription", ["loc", [null, [33, 134], [33, 152]]]]], [], ["loc", [null, [33, 98], [33, 153]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "scratchDescription", ["loc", [null, [33, 174], [33, 192]]]]], [], ["loc", [null, [33, 169], [33, 193]]]]], [], ["loc", [null, [33, 161], [33, 194]]]]], ["loc", [null, [33, 16], [33, 196]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "tag.errors", ["loc", [null, [34, 42], [34, 52]]]]], [], []], "property", "description"], ["loc", [null, [34, 16], [34, 77]]]], ["inline", "gh-count-down-characters", [["get", "scratchDescription", ["loc", [null, [35, 90], [35, 108]]]], 200], [], ["loc", [null, [35, 63], [35, 114]]]]],
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
              "line": 48,
              "column": 12
            },
            "end": {
              "line": 50,
              "column": 12
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-tag-settings-form.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "class", "btn btn-link btn-sm tag-delete-button");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "icon-trash");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Delete Tag");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["deleteTag"], [], ["loc", [null, [49, 84], [49, 106]]]]],
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
              "line": 64,
              "column": 12
            },
            "end": {
              "line": 69,
              "column": 12
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-tag-settings-form.hbs"
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
          dom.setAttribute(el1, "for", "meta-title");
          var el2 = dom.createTextNode("Meta Title");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Recommended: ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("70");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" characters. You’ve used ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
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
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [7]), 3, 3);
          return morphs;
        },
        statements: [["inline", "gh-input", [["get", "scratchMetaTitle", ["loc", [null, [66, 27], [66, 43]]]]], ["id", "meta-title", "name", "metaTitle", "type", "text", "focusOut", ["subexpr", "action", ["setProperty", "metaTitle", ["get", "scratchMetaTitle", ["loc", [null, [66, 132], [66, 148]]]]], [], ["loc", [null, [66, 98], [66, 149]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "scratchMetaTitle", ["loc", [null, [66, 170], [66, 186]]]]], [], ["loc", [null, [66, 165], [66, 187]]]]], [], ["loc", [null, [66, 157], [66, 188]]]]], ["loc", [null, [66, 16], [66, 190]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "tag.errors", ["loc", [null, [67, 42], [67, 52]]]]], [], []], "property", "metaTitle"], ["loc", [null, [67, 16], [67, 75]]]], ["inline", "gh-count-down-characters", [["get", "scratchMetaTitle", ["loc", [null, [68, 93], [68, 109]]]], 70], [], ["loc", [null, [68, 66], [68, 114]]]]],
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
              "line": 71,
              "column": 12
            },
            "end": {
              "line": 76,
              "column": 12
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-tag-settings-form.hbs"
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
          dom.setAttribute(el1, "for", "meta-description");
          var el2 = dom.createTextNode("Meta Description");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Recommended: ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("156");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" characters. You’ve used ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
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
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [7]), 3, 3);
          return morphs;
        },
        statements: [["inline", "gh-textarea", [["get", "scratchMetaDescription", ["loc", [null, [73, 30], [73, 52]]]]], ["id", "meta-description", "name", "metaDescription", "focusOut", ["subexpr", "action", ["setProperty", "metaDescription", ["get", "scratchMetaDescription", ["loc", [null, [73, 147], [73, 169]]]]], [], ["loc", [null, [73, 107], [73, 170]]]], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "scratchMetaDescription", ["loc", [null, [73, 191], [73, 213]]]]], [], ["loc", [null, [73, 186], [73, 214]]]]], [], ["loc", [null, [73, 178], [73, 215]]]]], ["loc", [null, [73, 16], [73, 217]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "tag.errors", ["loc", [null, [74, 42], [74, 52]]]]], [], []], "property", "metaDescription"], ["loc", [null, [74, 16], [74, 81]]]], ["inline", "gh-count-down-characters", [["get", "scratchMetaDescription", ["loc", [null, [75, 94], [75, 116]]]], 156], [], ["loc", [null, [75, 67], [75, 122]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 89,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-tag-settings-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "settings-menu-content");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav-list nav-list-block");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "nav-list-item");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "type", "button");
        dom.setAttribute(el6, "class", "meta-data-button");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("b");
        var el8 = dom.createTextNode("Meta Data");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("Extra content for SEO and social media.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "icon-arrow-right");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n");
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
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "settings-menu-header subview");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "back icon-arrow-left settings-menu-header-action");
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "hidden");
        var el5 = dom.createTextNode("Back");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("Meta Data");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "style", "width:23px;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "settings-menu-content");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("Search Engine Result Preview");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "seo-preview");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "seo-preview-title");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "seo-preview-link");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "seo-preview-description");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
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
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element3, [3]);
        var element5 = dom.childAt(element4, [7, 1]);
        var element6 = dom.childAt(fragment, [2]);
        var element7 = dom.childAt(element6, [1, 1]);
        var element8 = dom.childAt(element6, [3, 1]);
        var element9 = dom.childAt(element8, [5, 3]);
        var morphs = new Array(16);
        morphs[0] = dom.createAttrMorph(element1, 'class');
        morphs[1] = dom.createAttrMorph(element2, 'class');
        morphs[2] = dom.createMorphAt(element2, 1, 1);
        morphs[3] = dom.createMorphAt(element3, 1, 1);
        morphs[4] = dom.createMorphAt(element4, 1, 1);
        morphs[5] = dom.createMorphAt(element4, 3, 3);
        morphs[6] = dom.createMorphAt(element4, 5, 5);
        morphs[7] = dom.createElementMorph(element5);
        morphs[8] = dom.createMorphAt(element4, 9, 9);
        morphs[9] = dom.createAttrMorph(element6, 'class');
        morphs[10] = dom.createElementMorph(element7);
        morphs[11] = dom.createMorphAt(element8, 1, 1);
        morphs[12] = dom.createMorphAt(element8, 3, 3);
        morphs[13] = dom.createMorphAt(dom.childAt(element9, [1]), 0, 0);
        morphs[14] = dom.createMorphAt(dom.childAt(element9, [3]), 0, 0);
        morphs[15] = dom.createMorphAt(dom.childAt(element9, [5]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "isViewingSubview", ["loc", [null, [1, 17], [1, 33]]]], "settings-menu-pane-out-left", "settings-menu-pane-in"], [], ["loc", [null, [1, 12], [1, 89]]]], " settings-menu settings-menu-pane tag-settings-pane"]]], ["attribute", "class", ["concat", ["settings-menu-header ", ["subexpr", "if", [["get", "isMobile", ["loc", [null, [2, 42], [2, 50]]]], "subview"], [], ["loc", [null, [2, 37], [2, 62]]]]]]], ["block", "if", [["get", "isMobile", ["loc", [null, [3, 14], [3, 22]]]]], [], 0, 1, ["loc", [null, [3, 8], [9, 15]]]], ["inline", "gh-image-uploader-with-preview", [], ["image", ["subexpr", "@mut", [["get", "tag.image", ["loc", [null, [13, 18], [13, 27]]]]], [], []], "text", "Add tag image", "update", ["subexpr", "action", ["setCoverImage"], [], ["loc", [null, [15, 19], [15, 43]]]], "remove", ["subexpr", "action", ["clearCoverImage"], [], ["loc", [null, [16, 19], [16, 45]]]]], ["loc", [null, [12, 8], [16, 47]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "tag.errors", ["loc", [null, [18, 36], [18, 46]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "tag.hasValidated", ["loc", [null, [18, 60], [18, 76]]]]], [], []], "property", "name"], 2, null, ["loc", [null, [18, 12], [22, 30]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "tag.errors", ["loc", [null, [24, 36], [24, 46]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "tag.hasValidated", ["loc", [null, [24, 60], [24, 76]]]]], [], []], "property", "slug"], 3, null, ["loc", [null, [24, 12], [29, 30]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "tag.errors", ["loc", [null, [31, 36], [31, 46]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "tag.hasValidated", ["loc", [null, [31, 60], [31, 76]]]]], [], []], "property", "description"], 4, null, ["loc", [null, [31, 12], [36, 30]]]], ["element", "action", ["openMeta"], [], ["loc", [null, [39, 42], [39, 63]]]], ["block", "unless", [["get", "tag.isNew", ["loc", [null, [48, 22], [48, 31]]]]], [], 5, null, ["loc", [null, [48, 12], [50, 23]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "isViewingSubview", ["loc", [null, [55, 17], [55, 33]]]], "settings-menu-pane-in", "settings-menu-pane-out-right"], [], ["loc", [null, [55, 12], [55, 90]]]], " settings-menu settings-menu-pane tag-meta-settings-pane"]]], ["element", "action", ["closeMeta"], [], ["loc", [null, [57, 16], [57, 38]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "tag.errors", ["loc", [null, [64, 36], [64, 46]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "tag.hasValidated", ["loc", [null, [64, 60], [64, 76]]]]], [], []], "property", "metaTitle"], 6, null, ["loc", [null, [64, 12], [69, 30]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "tag.errors", ["loc", [null, [71, 36], [71, 46]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "tag.hasValidated", ["loc", [null, [71, 60], [71, 76]]]]], [], []], "property", "metaDescription"], 7, null, ["loc", [null, [71, 12], [76, 30]]]], ["content", "seoTitle", ["loc", [null, [81, 51], [81, 63]]]], ["content", "seoURL", ["loc", [null, [82, 50], [82, 60]]]], ["content", "seoDescription", ["loc", [null, [83, 57], [83, 75]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7]
    };
  })());
});
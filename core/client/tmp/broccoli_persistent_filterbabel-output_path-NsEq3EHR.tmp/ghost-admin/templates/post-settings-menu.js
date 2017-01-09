define("ghost-admin/templates/post-settings-menu", ["exports"], function (exports) {
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
                "line": 18,
                "column": 16
              },
              "end": {
                "line": 22,
                "column": 16
              }
            },
            "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "class", "post-view-link");
            dom.setAttribute(el1, "target", "_blank");
            var el2 = dom.createTextNode("\n                    View post ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("i");
            dom.setAttribute(el2, "class", "icon-external");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element4, 'href');
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "model.absoluteUrl", ["loc", [null, [19, 66], [19, 83]]]]]]]],
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
                "line": 22,
                "column": 16
              },
              "end": {
                "line": 26,
                "column": 16
              }
            },
            "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "class", "post-view-link");
            dom.setAttribute(el1, "target", "_blank");
            var el2 = dom.createTextNode("\n                    Preview ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("i");
            dom.setAttribute(el2, "class", "icon-external");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element3, 'href');
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "model.previewUrl", ["loc", [null, [23, 66], [23, 82]]]]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
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
              "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
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
              dom.setAttribute(el1, "for", "post-setting-date");
              var el2 = dom.createTextNode("Scheduled Date");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
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
                  "line": 37,
                  "column": 16
                },
                "end": {
                  "line": 39,
                  "column": 16
                }
              },
              "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
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
              dom.setAttribute(el1, "for", "post-setting-date");
              var el2 = dom.createTextNode("Publish Date");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
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
                "line": 34,
                "column": 12
              },
              "end": {
                "line": 48,
                "column": 12
              }
            },
            "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("                ");
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
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [["block", "if", [["get", "model.timeScheduled", ["loc", [null, [35, 22], [35, 41]]]]], [], 0, 1, ["loc", [null, [35, 16], [39, 23]]]], ["inline", "gh-datetime-input", [], ["value", ["subexpr", "@mut", [["get", "model.publishedAtUTC", ["loc", [null, [41, 26], [41, 46]]]]], [], []], "update", ["subexpr", "action", ["setPublishedAtUTC"], [], ["loc", [null, [42, 27], [42, 55]]]], "inputClass", "post-setting-date", "inputId", "post-setting-date", "inputName", "post-setting-date"], ["loc", [null, [40, 16], [46, 18]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [47, 42], [47, 54]]]]], [], []], "property", "post-setting-date"], ["loc", [null, [47, 16], [47, 85]]]]],
          locals: [],
          templates: [child0, child1]
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
                "line": 65,
                "column": 12
              },
              "end": {
                "line": 82,
                "column": 12
              }
            },
            "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "form-group for-select");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("label");
            dom.setAttribute(el2, "for", "author-list");
            var el3 = dom.createTextNode("Author");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "class", "input-icon icon-user");
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3, "class", "gh-select");
            dom.setAttribute(el3, "tabindex", "0");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3, 1]), 1, 1);
            return morphs;
          },
          statements: [["inline", "gh-select-native", [], ["name", "post-setting-author", "id", "author-list", "content", ["subexpr", "@mut", [["get", "authors", ["loc", [null, [73, 32], [73, 39]]]]], [], []], "optionValuePath", "id", "optionLabelPath", "name", "selection", ["subexpr", "@mut", [["get", "selectedAuthor", ["loc", [null, [76, 34], [76, 48]]]]], [], []], "action", "changeAuthor"], ["loc", [null, [70, 20], [78, 22]]]]],
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
                "line": 85,
                "column": 16
              },
              "end": {
                "line": 91,
                "column": 16
              }
            },
            "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
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
            var el2 = dom.createTextNode("\n                        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("b");
            var el3 = dom.createTextNode("Meta Data");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            var el3 = dom.createTextNode("Extra content for SEO and social media.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "icon-arrow-right");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
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
      var child5 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 123,
                    "column": 12
                  },
                  "end": {
                    "line": 128,
                    "column": 12
                  }
                },
                "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
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
                morphs[1] = dom.createMorphAt(dom.childAt(fragment, [5]), 3, 3);
                morphs[2] = dom.createMorphAt(fragment, 7, 7, contextualElement);
                return morphs;
              },
              statements: [["inline", "gh-input", [["get", "metaTitleScratch", ["loc", [null, [125, 27], [125, 43]]]]], ["class", "post-setting-meta-title", "id", "meta-title", "name", "post-setting-meta-title", "focusOut", ["subexpr", "action", ["setMetaTitle", ["get", "metaTitleScratch", ["loc", [null, [125, 155], [125, 171]]]]], [], ["loc", [null, [125, 132], [125, 172]]]], "stopEnterKeyDownPropagation", "true", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "metaTitleScratch", ["loc", [null, [125, 228], [125, 244]]]]], [], ["loc", [null, [125, 223], [125, 245]]]]], [], ["loc", [null, [125, 215], [125, 246]]]]], ["loc", [null, [125, 16], [125, 248]]]], ["inline", "gh-count-down-characters", [["get", "metaTitleScratch", ["loc", [null, [126, 93], [126, 109]]]], 70], [], ["loc", [null, [126, 66], [126, 114]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [127, 42], [127, 54]]]]], [], []], "property", "metaTitle"], ["loc", [null, [127, 16], [127, 77]]]]],
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
                    "line": 130,
                    "column": 12
                  },
                  "end": {
                    "line": 135,
                    "column": 12
                  }
                },
                "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
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
                morphs[1] = dom.createMorphAt(dom.childAt(fragment, [5]), 3, 3);
                morphs[2] = dom.createMorphAt(fragment, 7, 7, contextualElement);
                return morphs;
              },
              statements: [["inline", "gh-textarea", [["get", "metaDescriptionScratch", ["loc", [null, [132, 30], [132, 52]]]]], ["class", "post-setting-meta-description", "id", "meta-description", "name", "post-setting-meta-description", "focusOut", ["subexpr", "action", ["setMetaDescription", ["get", "metaDescriptionScratch", ["loc", [null, [132, 188], [132, 210]]]]], [], ["loc", [null, [132, 159], [132, 211]]]], "stopEnterKeyDownPropagation", "true", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "metaDescriptionScratch", ["loc", [null, [132, 267], [132, 289]]]]], [], ["loc", [null, [132, 262], [132, 290]]]]], [], ["loc", [null, [132, 254], [132, 291]]]]], ["loc", [null, [132, 16], [132, 293]]]], ["inline", "gh-count-down-characters", [["get", "metaDescriptionScratch", ["loc", [null, [133, 94], [133, 116]]]], 156], [], ["loc", [null, [133, 67], [133, 122]]]], ["inline", "gh-error-message", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [134, 42], [134, 54]]]]], [], []], "property", "metaDescription"], ["loc", [null, [134, 16], [134, 83]]]]],
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
                  "column": 8
                },
                "end": {
                  "line": 147,
                  "column": 8
                }
              },
              "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "settings-menu-header subview");
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("button");
              dom.setAttribute(el2, "class", "back icon-arrow-left settings-menu-header-action");
              var el3 = dom.createElement("span");
              dom.setAttribute(el3, "class", "hidden");
              var el4 = dom.createTextNode("Back");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h4");
              var el3 = dom.createTextNode("Meta Data");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "style", "width:23px;");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "settings-menu-content");
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("form");
              var el3 = dom.createTextNode("\n");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "form-group");
              var el4 = dom.createTextNode("\n                ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("label");
              var el5 = dom.createTextNode("Search Engine Result Preview");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4, "class", "seo-preview");
              var el5 = dom.createTextNode("\n                    ");
              dom.appendChild(el4, el5);
              var el5 = dom.createElement("div");
              dom.setAttribute(el5, "class", "seo-preview-title");
              var el6 = dom.createComment("");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode("\n                    ");
              dom.appendChild(el4, el5);
              var el5 = dom.createElement("div");
              dom.setAttribute(el5, "class", "seo-preview-link");
              var el6 = dom.createComment("");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode("\n                    ");
              dom.appendChild(el4, el5);
              var el5 = dom.createElement("div");
              dom.setAttribute(el5, "class", "seo-preview-description");
              var el6 = dom.createComment("");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode("\n                ");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n            ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n            ");
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
              var element0 = dom.childAt(fragment, [1, 1]);
              var element1 = dom.childAt(fragment, [3, 1]);
              var element2 = dom.childAt(element1, [5, 3]);
              var morphs = new Array(7);
              morphs[0] = dom.createElementMorph(element0);
              morphs[1] = dom.createElementMorph(element1);
              morphs[2] = dom.createMorphAt(element1, 1, 1);
              morphs[3] = dom.createMorphAt(element1, 3, 3);
              morphs[4] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
              morphs[5] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
              morphs[6] = dom.createMorphAt(dom.childAt(element2, [5]), 0, 0);
              return morphs;
            },
            statements: [["element", "action", ["closeSubview"], [], ["loc", [null, [116, 20], [116, 45]]]], ["element", "action", ["discardEnter"], ["on", "submit"], ["loc", [null, [122, 18], [122, 55]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [123, 36], [123, 48]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "model.hasValidated", ["loc", [null, [123, 62], [123, 80]]]]], [], []], "property", "metaTitle"], 0, null, ["loc", [null, [123, 12], [128, 30]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [130, 36], [130, 48]]]]], [], []], "hasValidated", ["subexpr", "@mut", [["get", "model.hasValidated", ["loc", [null, [130, 62], [130, 80]]]]], [], []], "property", "metaDescription"], 1, null, ["loc", [null, [130, 12], [135, 30]]]], ["content", "seoTitle", ["loc", [null, [140, 51], [140, 63]]]], ["content", "seoURL", ["loc", [null, [141, 50], [141, 60]]]], ["content", "seoDescription", ["loc", [null, [142, 57], [142, 75]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 113,
                "column": 4
              },
              "end": {
                "line": 148,
                "column": 4
              }
            },
            "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
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
          statements: [["block", "if", [["get", "isViewingSubview", ["loc", [null, [114, 14], [114, 30]]]]], [], 0, null, ["loc", [null, [114, 8], [147, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
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
              "line": 151,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "id", "entry-controls");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "settings-menu-header");
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h4");
          var el5 = dom.createTextNode("Post Settings");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("button");
          dom.setAttribute(el4, "class", "close icon-x settings-menu-header-action");
          var el5 = dom.createElement("span");
          dom.setAttribute(el5, "class", "hidden");
          var el6 = dom.createTextNode("Close");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "settings-menu-content");
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("form");
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "form-group");
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          dom.setAttribute(el6, "for", "url");
          var el7 = dom.createTextNode("Post URL");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("span");
          dom.setAttribute(el6, "class", "input-icon icon-link");
          var el7 = dom.createTextNode("\n                    ");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "form-group");
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          dom.setAttribute(el6, "for", "tag-input");
          var el7 = dom.createTextNode("Tags");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("ul");
          dom.setAttribute(el5, "class", "nav-list nav-list-block");
          var el6 = dom.createTextNode("\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("            ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n\n            ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "form-group for-checkbox");
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          dom.setAttribute(el6, "class", "checkbox");
          dom.setAttribute(el6, "for", "static-page");
          var el7 = dom.createTextNode("\n                    ");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                    ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("span");
          dom.setAttribute(el7, "class", "input-toggle-component");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                    ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("p");
          var el8 = dom.createTextNode("Turn this post into a static page");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          dom.setAttribute(el6, "class", "checkbox");
          dom.setAttribute(el6, "for", "featured");
          var el7 = dom.createTextNode("\n                    ");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                    ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("span");
          dom.setAttribute(el7, "class", "input-toggle-component");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                    ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("p");
          var el8 = dom.createTextNode("Feature this post");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n\n            ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
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
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [0]);
          var element6 = dom.childAt(element5, [1]);
          var element7 = dom.childAt(element6, [1, 3]);
          var element8 = dom.childAt(element6, [3]);
          var element9 = dom.childAt(element8, [3]);
          var element10 = dom.childAt(element9, [1]);
          var element11 = dom.childAt(element9, [11]);
          var element12 = dom.childAt(element11, [1]);
          var element13 = dom.childAt(element11, [3]);
          var element14 = dom.childAt(element5, [3]);
          var morphs = new Array(16);
          morphs[0] = dom.createAttrMorph(element6, 'class');
          morphs[1] = dom.createElementMorph(element7);
          morphs[2] = dom.createMorphAt(element8, 1, 1);
          morphs[3] = dom.createMorphAt(element10, 3, 3);
          morphs[4] = dom.createMorphAt(dom.childAt(element10, [5]), 1, 1);
          morphs[5] = dom.createMorphAt(element10, 7, 7);
          morphs[6] = dom.createMorphAt(element9, 3, 3);
          morphs[7] = dom.createMorphAt(dom.childAt(element9, [5]), 3, 3);
          morphs[8] = dom.createMorphAt(element9, 7, 7);
          morphs[9] = dom.createMorphAt(dom.childAt(element9, [9]), 1, 1);
          morphs[10] = dom.createElementMorph(element12);
          morphs[11] = dom.createMorphAt(element12, 1, 1);
          morphs[12] = dom.createElementMorph(element13);
          morphs[13] = dom.createMorphAt(element13, 1, 1);
          morphs[14] = dom.createAttrMorph(element14, 'class');
          morphs[15] = dom.createMorphAt(element14, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "isViewingSubview", ["loc", [null, [3, 21], [3, 37]]]], "settings-menu-pane-out-left", "settings-menu-pane-in"], [], ["loc", [null, [3, 16], [3, 93]]]], " settings-menu settings-menu-pane"]]], ["element", "action", ["closeMenus"], [], ["loc", [null, [6, 69], [6, 92]]]], ["inline", "gh-image-uploader-with-preview", [], ["image", ["subexpr", "@mut", [["get", "model.image", ["loc", [null, [10, 22], [10, 33]]]]], [], []], "text", "Add post image", "update", ["subexpr", "action", ["setCoverImage"], [], ["loc", [null, [12, 23], [12, 47]]]], "remove", ["subexpr", "action", ["clearCoverImage"], [], ["loc", [null, [13, 23], [13, 49]]]]], ["loc", [null, [9, 12], [14, 14]]]], ["block", "if", [["get", "model.isPublished", ["loc", [null, [18, 22], [18, 39]]]]], [], 0, 1, ["loc", [null, [18, 16], [26, 23]]]], ["inline", "gh-input", [["get", "slugValue", ["loc", [null, [29, 31], [29, 40]]]]], ["class", "post-setting-slug", "id", "url", "name", "post-setting-slug", "focusOut", ["subexpr", "action", ["updateSlug", ["get", "slugValue", ["loc", [null, [29, 131], [29, 140]]]]], [], ["loc", [null, [29, 110], [29, 141]]]], "stopEnterKeyDownPropagation", "true", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "slugValue", ["loc", [null, [29, 197], [29, 206]]]]], [], ["loc", [null, [29, 192], [29, 207]]]]], [], ["loc", [null, [29, 184], [29, 208]]]]], ["loc", [null, [29, 20], [29, 210]]]], ["inline", "gh-url-preview", [], ["slug", ["subexpr", "@mut", [["get", "slugValue", ["loc", [null, [31, 38], [31, 47]]]]], [], []], "tagName", "p", "classNames", "description"], ["loc", [null, [31, 16], [31, 86]]]], ["block", "gh-form-group", [], ["errors", ["subexpr", "@mut", [["get", "model.errors", ["loc", [null, [34, 36], [34, 48]]]]], [], []], "property", "post-setting-date"], 2, null, ["loc", [null, [34, 12], [48, 30]]]], ["inline", "gh-selectize", [], ["id", "tag-input", "multiple", true, "selection", ["subexpr", "@mut", [["get", "model.tags", ["loc", [null, [55, 30], [55, 40]]]]], [], []], "content", ["subexpr", "@mut", [["get", "availableTags", ["loc", [null, [56, 28], [56, 41]]]]], [], []], "optionValuePath", "content.uuid", "optionLabelPath", "content.name", "openOnFocus", false, "create-item", "addTag", "remove-item", "removeTag", "plugins", "remove_button, drag_drop"], ["loc", [null, [52, 16], [62, 56]]]], ["block", "unless", [["get", "session.user.isAuthor", ["loc", [null, [65, 22], [65, 43]]]]], [], 3, null, ["loc", [null, [65, 12], [82, 23]]]], ["block", "gh-tab", [], ["tagName", "li", "classNames", "nav-list-item"], 4, null, ["loc", [null, [85, 16], [91, 27]]]], ["element", "action", ["togglePage"], ["bubbles", "false"], ["loc", [null, [95, 58], [95, 97]]]], ["inline", "one-way-checkbox", [["get", "model.page", ["loc", [null, [96, 39], [96, 49]]]]], ["type", "checkbox", "name", "static-page", "id", "static-page", "class", "gh-input post-setting-static-page", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "model.page", ["loc", [null, [96, 164], [96, 174]]]]], [], ["loc", [null, [96, 159], [96, 175]]]]], [], ["loc", [null, [96, 151], [96, 176]]]]], ["loc", [null, [96, 20], [96, 178]]]], ["element", "action", ["toggleFeatured"], ["bubbles", "false"], ["loc", [null, [101, 55], [101, 98]]]], ["inline", "one-way-checkbox", [["get", "model.featured", ["loc", [null, [102, 39], [102, 53]]]]], ["type", "checkbox", "name", "featured", "id", "featured", "class", "gh-input post-setting-featured", "update", ["subexpr", "action", [["subexpr", "mut", [["get", "model.featured", ["loc", [null, [102, 159], [102, 173]]]]], [], ["loc", [null, [102, 154], [102, 174]]]]], [], ["loc", [null, [102, 146], [102, 175]]]]], ["loc", [null, [102, 20], [102, 177]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "isViewingSubview", ["loc", [null, [112, 21], [112, 37]]]], "settings-menu-pane-in", "settings-menu-pane-out-right"], [], ["loc", [null, [112, 16], [112, 94]]]], " settings-menu settings-menu-pane"]]], ["block", "gh-tab-pane", [], [], 5, null, ["loc", [null, [113, 4], [148, 20]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 152,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/post-settings-menu.hbs"
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
      statements: [["block", "gh-tabs-manager", [], ["selected", "showSubview", "id", "entry-controls", "class", "settings-menu-container"], 0, null, ["loc", [null, [1, 0], [151, 20]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
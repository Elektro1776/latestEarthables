define("ghost-admin/templates/posts", ["exports"], function (exports) {
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
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 3,
                "column": 74
              }
            },
            "moduleName": "ghost-admin/templates/posts.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Content");
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
                "column": 8
              },
              "end": {
                "line": 5,
                "column": 80
              }
            },
            "moduleName": "ghost-admin/templates/posts.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("New Post");
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
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              var child0 = (function () {
                var child0 = (function () {
                  return {
                    meta: {
                      "fragmentReason": false,
                      "revision": "Ember@2.6.1",
                      "loc": {
                        "source": null,
                        "start": {
                          "line": 24,
                          "column": 40
                        },
                        "end": {
                          "line": 26,
                          "column": 40
                        }
                      },
                      "moduleName": "ghost-admin/templates/posts.hbs"
                    },
                    isEmpty: false,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                      var el0 = dom.createDocumentFragment();
                      var el1 = dom.createTextNode("                                            ");
                      dom.appendChild(el0, el1);
                      var el1 = dom.createElement("span");
                      dom.setAttribute(el1, "class", "page");
                      var el2 = dom.createTextNode("Page");
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
                          "line": 26,
                          "column": 40
                        },
                        "end": {
                          "line": 30,
                          "column": 40
                        }
                      },
                      "moduleName": "ghost-admin/templates/posts.hbs"
                    },
                    isEmpty: false,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                      var el0 = dom.createDocumentFragment();
                      var el1 = dom.createTextNode("                                            ");
                      dom.appendChild(el0, el1);
                      var el1 = dom.createElement("time");
                      dom.setAttribute(el1, "class", "date published");
                      var el2 = dom.createTextNode("\n                                                Published ");
                      dom.appendChild(el1, el2);
                      var el2 = dom.createComment("");
                      dom.appendChild(el1, el2);
                      var el2 = dom.createTextNode("\n                                            ");
                      dom.appendChild(el1, el2);
                      dom.appendChild(el0, el1);
                      var el1 = dom.createTextNode("\n");
                      dom.appendChild(el0, el1);
                      return el0;
                    },
                    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                      var element1 = dom.childAt(fragment, [1]);
                      var morphs = new Array(2);
                      morphs[0] = dom.createAttrMorph(element1, 'datetime');
                      morphs[1] = dom.createMorphAt(element1, 1, 1);
                      return morphs;
                    },
                    statements: [["attribute", "datetime", ["concat", [["get", "post.publishedAtUTC", ["loc", [null, [27, 62], [27, 81]]]]]]], ["inline", "gh-format-timeago", [["get", "post.publishedAtUTC", ["loc", [null, [28, 78], [28, 97]]]]], [], ["loc", [null, [28, 58], [28, 99]]]]],
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
                        "line": 23,
                        "column": 36
                      },
                      "end": {
                        "line": 31,
                        "column": 36
                      }
                    },
                    "moduleName": "ghost-admin/templates/posts.hbs"
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
                  statements: [["block", "if", [["get", "post.page", ["loc", [null, [24, 46], [24, 55]]]]], [], 0, 1, ["loc", [null, [24, 40], [30, 47]]]]],
                  locals: [],
                  templates: [child0, child1]
                };
              })();
              var child1 = (function () {
                var child0 = (function () {
                  return {
                    meta: {
                      "fragmentReason": false,
                      "revision": "Ember@2.6.1",
                      "loc": {
                        "source": null,
                        "start": {
                          "line": 32,
                          "column": 25
                        },
                        "end": {
                          "line": 39,
                          "column": 25
                        }
                      },
                      "moduleName": "ghost-admin/templates/posts.hbs"
                    },
                    isEmpty: false,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                      var el0 = dom.createDocumentFragment();
                      var el1 = dom.createTextNode("                    						");
                      dom.appendChild(el0, el1);
                      var el1 = dom.createElement("span");
                      dom.setAttribute(el1, "class", "scheduled");
                      var el2 = dom.createTextNode("Scheduled");
                      dom.appendChild(el1, el2);
                      dom.appendChild(el0, el1);
                      var el1 = dom.createTextNode("\n                                            ");
                      dom.appendChild(el0, el1);
                      var el1 = dom.createElement("span");
                      var el2 = dom.createTextNode("–\n                                                ");
                      dom.appendChild(el1, el2);
                      var el2 = dom.createElement("time");
                      dom.setAttribute(el2, "class-", "date scheduled");
                      var el3 = dom.createTextNode("\n                                                    ");
                      dom.appendChild(el2, el3);
                      var el3 = dom.createComment("");
                      dom.appendChild(el2, el3);
                      var el3 = dom.createTextNode("\n                                                ");
                      dom.appendChild(el2, el3);
                      dom.appendChild(el1, el2);
                      var el2 = dom.createTextNode("\n                                            ");
                      dom.appendChild(el1, el2);
                      dom.appendChild(el0, el1);
                      var el1 = dom.createTextNode("\n");
                      dom.appendChild(el0, el1);
                      return el0;
                    },
                    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                      var element0 = dom.childAt(fragment, [3, 1]);
                      var morphs = new Array(2);
                      morphs[0] = dom.createAttrMorph(element0, 'datetime');
                      morphs[1] = dom.createMorphAt(element0, 1, 1);
                      return morphs;
                    },
                    statements: [["attribute", "datetime", ["concat", [["get", "post.publishedAtUTC", ["loc", [null, [35, 66], [35, 85]]]]]]], ["inline", "gh-format-time-scheduled", [["get", "post.publishedAtUTC", ["loc", [null, [36, 79], [36, 98]]]], ["get", "component.blogTimezone", ["loc", [null, [36, 99], [36, 121]]]]], [], ["loc", [null, [36, 52], [36, 123]]]]],
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
                          "line": 39,
                          "column": 25
                        },
                        "end": {
                          "line": 41,
                          "column": 25
                        }
                      },
                      "moduleName": "ghost-admin/templates/posts.hbs"
                    },
                    isEmpty: false,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                      var el0 = dom.createDocumentFragment();
                      var el1 = dom.createTextNode("                                            ");
                      dom.appendChild(el0, el1);
                      var el1 = dom.createElement("span");
                      dom.setAttribute(el1, "class", "draft");
                      var el2 = dom.createTextNode("Draft");
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
                        "line": 31,
                        "column": 36
                      },
                      "end": {
                        "line": 42,
                        "column": 36
                      }
                    },
                    "moduleName": "ghost-admin/templates/posts.hbs"
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
                  statements: [["block", "if", [["get", "component.isScheduled", ["loc", [null, [32, 31], [32, 52]]]]], [], 0, 1, ["loc", [null, [32, 25], [41, 32]]]]],
                  locals: [],
                  templates: [child0, child1]
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
                          "line": 46,
                          "column": 40
                        },
                        "end": {
                          "line": 48,
                          "column": 40
                        }
                      },
                      "moduleName": "ghost-admin/templates/posts.hbs"
                    },
                    isEmpty: false,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                      var el0 = dom.createDocumentFragment();
                      var el1 = dom.createTextNode("                                            ");
                      dom.appendChild(el0, el1);
                      var el1 = dom.createElement("span");
                      dom.setAttribute(el1, "class", "label label-default");
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
                    statements: [["content", "tag.name", ["loc", [null, [47, 78], [47, 90]]]]],
                    locals: ["tag"],
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
                        "line": 44,
                        "column": 32
                      },
                      "end": {
                        "line": 50,
                        "column": 32
                      }
                    },
                    "moduleName": "ghost-admin/templates/posts.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                                    ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("div");
                    dom.setAttribute(el1, "class", "internal-tags-list");
                    var el2 = dom.createTextNode("\n");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("                                    ");
                    dom.appendChild(el1, el2);
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n");
                    dom.appendChild(el0, el1);
                    return el0;
                  },
                  buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
                    return morphs;
                  },
                  statements: [["block", "each", [["get", "post.internalTags", ["loc", [null, [46, 48], [46, 65]]]]], [], 0, null, ["loc", [null, [46, 40], [48, 49]]]]],
                  locals: [],
                  templates: [child0]
                };
              })();
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.6.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 15,
                      "column": 24
                    },
                    "end": {
                      "line": 52,
                      "column": 24
                    }
                  },
                  "moduleName": "ghost-admin/templates/posts.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                            ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("h3");
                  dom.setAttribute(el1, "class", "entry-title");
                  var el2 = dom.createComment("");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n                            ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("section");
                  dom.setAttribute(el1, "class", "entry-meta");
                  var el2 = dom.createTextNode("\n                                ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("span");
                  dom.setAttribute(el2, "class", "avatar");
                  var el3 = dom.createTextNode("\n                                    ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createElement("img");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("\n                                ");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                                ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("span");
                  dom.setAttribute(el2, "class", "author");
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                                ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("span");
                  dom.setAttribute(el2, "class", "status");
                  var el3 = dom.createTextNode("\n");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("                                ");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createComment("");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("                            ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element2 = dom.childAt(fragment, [3]);
                  var element3 = dom.childAt(element2, [1]);
                  var element4 = dom.childAt(element3, [1]);
                  var morphs = new Array(7);
                  morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
                  morphs[1] = dom.createAttrMorph(element3, 'style');
                  morphs[2] = dom.createAttrMorph(element4, 'src');
                  morphs[3] = dom.createAttrMorph(element4, 'title');
                  morphs[4] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
                  morphs[5] = dom.createMorphAt(dom.childAt(element2, [5]), 1, 1);
                  morphs[6] = dom.createMorphAt(element2, 7, 7);
                  return morphs;
                },
                statements: [["content", "post.title", ["loc", [null, [16, 52], [16, 66]]]], ["attribute", "style", ["get", "component.authorAvatarBackground", ["loc", [null, [18, 61], [18, 93]]]]], ["attribute", "src", ["concat", [["get", "component.authorAvatar", ["loc", [null, [19, 48], [19, 70]]]]]]], ["attribute", "title", ["concat", [["get", "component.authorName", ["loc", [null, [19, 83], [19, 103]]]]]]], ["content", "component.authorName", ["loc", [null, [21, 53], [21, 77]]]], ["block", "if", [["get", "component.isPublished", ["loc", [null, [23, 42], [23, 63]]]]], [], 0, 1, ["loc", [null, [23, 36], [42, 43]]]], ["block", "if", [["get", "feature.internalTags", ["loc", [null, [44, 38], [44, 58]]]]], [], 2, null, ["loc", [null, [44, 32], [50, 39]]]]],
                locals: [],
                templates: [child0, child1, child2]
              };
            })();
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 14,
                    "column": 20
                  },
                  "end": {
                    "line": 53,
                    "column": 20
                  }
                },
                "moduleName": "ghost-admin/templates/posts.hbs"
              },
              isEmpty: false,
              arity: 1,
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
              statements: [["block", "link-to", [["subexpr", "if", [["get", "previewIsHidden", ["loc", [null, [15, 39], [15, 54]]]], "editor.edit", "posts.post"], [], ["loc", [null, [15, 35], [15, 82]]]], ["get", "post.id", ["loc", [null, [15, 83], [15, 90]]]]], ["class", "permalink", "title", "Edit this post"], 0, null, ["loc", [null, [15, 24], [52, 36]]]]],
              locals: ["component"],
              templates: [child0]
            };
          })();
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
                  "line": 54,
                  "column": 16
                }
              },
              "moduleName": "ghost-admin/templates/posts.hbs"
            },
            isEmpty: false,
            arity: 1,
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
            statements: [["block", "gh-posts-list-item", [], ["post", ["subexpr", "@mut", [["get", "post", ["loc", [null, [14, 47], [14, 51]]]]], [], []], "onDoubleClick", "openEditor", "onDelete", ["subexpr", "action", [["get", "checkScroll", ["loc", [null, [14, 96], [14, 107]]]]], [], ["loc", [null, [14, 88], [14, 108]]]]], 0, null, ["loc", [null, [14, 20], [53, 43]]]]],
            locals: ["post"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 8
              },
              "end": {
                "line": 56,
                "column": 8
              }
            },
            "moduleName": "ghost-admin/templates/posts.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ol");
            dom.setAttribute(el1, "class", "posts-list");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "sortedPosts", ["loc", [null, [13, 24], [13, 35]]]]], ["key", "id"], 0, null, ["loc", [null, [13, 16], [54, 25]]]]],
          locals: ["checkScroll"],
          templates: [child0]
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
              "line": 62,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/posts.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("header");
          dom.setAttribute(el1, "class", "view-header");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("section");
          dom.setAttribute(el2, "class", "view-actions");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
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
          dom.setAttribute(el1, "class", "view-container");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("section");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("section");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
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
          var element5 = dom.childAt(fragment, [0]);
          var element6 = dom.childAt(fragment, [2]);
          var element7 = dom.childAt(element6, [1]);
          var element8 = dom.childAt(element6, [3]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(element5, 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element5, [3]), 1, 1);
          morphs[2] = dom.createAttrMorph(element7, 'class');
          morphs[3] = dom.createMorphAt(element7, 1, 1);
          morphs[4] = dom.createAttrMorph(element8, 'class');
          morphs[5] = dom.createMorphAt(element8, 1, 1);
          return morphs;
        },
        statements: [["block", "gh-view-title", [], ["openMobileMenu", "openMobileMenu"], 0, null, ["loc", [null, [3, 4], [3, 92]]]], ["block", "link-to", ["editor.new"], ["class", "btn btn-green", "title", "New Post"], 1, null, ["loc", [null, [5, 8], [5, 92]]]], ["attribute", "class", ["concat", ["content-list js-content-list ", ["subexpr", "if", [["get", "postListFocused", ["loc", [null, [10, 54], [10, 69]]]], "keyboard-focused"], [], ["loc", [null, [10, 49], [10, 90]]]]]]], ["block", "gh-infinite-scroll", [], ["tagName", "section", "classNames", "content-list-content js-content-scrollbox", "fetch", "loadNextPage"], 2, null, ["loc", [null, [11, 8], [56, 31]]]], ["attribute", "class", ["concat", ["content-preview js-content-preview ", ["subexpr", "if", [["get", "postContentFocused", ["loc", [null, [58, 60], [58, 78]]]], "keyboard-focused"], [], ["loc", [null, [58, 55], [58, 99]]]]]]], ["content", "outlet", ["loc", [null, [59, 8], [59, 18]]]]],
        locals: ["previewIsHidden"],
        templates: [child0, child1, child2]
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
              "line": 64,
              "column": 0
            },
            "end": {
              "line": 69,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/posts.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
        statements: [["inline", "gh-fullscreen-modal", ["delete-post"], ["model", ["subexpr", "@mut", [["get", "currentPost", ["loc", [null, [66, 32], [66, 43]]]]], [], []], "close", ["subexpr", "action", ["toggleDeletePostModal"], [], ["loc", [null, [67, 32], [67, 64]]]], "modifier", "action wide"], ["loc", [null, [65, 4], [68, 50]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 70,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/posts.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
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
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "gh-content-view-container", [], [], 0, null, ["loc", [null, [1, 0], [62, 30]]]], ["block", "if", [["get", "showDeletePostModal", ["loc", [null, [64, 6], [64, 25]]]]], [], 1, null, ["loc", [null, [64, 0], [69, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
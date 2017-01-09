define("ghost-admin/templates/team/index", ["exports"], function (exports) {
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
              "column": 75
            }
          },
          "moduleName": "ghost-admin/templates/team/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("span");
          var el2 = dom.createTextNode("Team");
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
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 12
              },
              "end": {
                "line": 14,
                "column": 12
              }
            },
            "moduleName": "ghost-admin/templates/team/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
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
          statements: [["inline", "gh-fullscreen-modal", ["invite-new-user"], ["close", ["subexpr", "action", ["toggleInviteUserModal"], [], ["loc", [null, [12, 44], [12, 76]]]], "modifier", "action"], ["loc", [null, [11, 16], [13, 57]]]]],
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
              "line": 5,
              "column": 8
            },
            "end": {
              "line": 15,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/team/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("section");
          dom.setAttribute(el1, "class", "view-actions");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn btn-green");
          var el3 = dom.createTextNode("Invite People");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element5);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["element", "action", ["toggleInviteUserModal"], [], ["loc", [null, [7, 46], [7, 80]]]], ["block", "if", [["get", "showInviteUserModal", ["loc", [null, [10, 18], [10, 37]]]]], [], 0, null, ["loc", [null, [10, 12], [14, 19]]]]],
        locals: [],
        templates: [child0]
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
                        "line": 35,
                        "column": 36
                      },
                      "end": {
                        "line": 39,
                        "column": 36
                      }
                    },
                    "moduleName": "ghost-admin/templates/team/index.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                                        ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("span");
                    dom.setAttribute(el1, "class", "description-error");
                    var el2 = dom.createTextNode("\n                                            Invitation not sent - please try again\n                                        ");
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
                        "line": 39,
                        "column": 36
                      },
                      "end": {
                        "line": 43,
                        "column": 36
                      }
                    },
                    "moduleName": "ghost-admin/templates/team/index.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                                        ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("span");
                    dom.setAttribute(el1, "class", "description");
                    var el2 = dom.createTextNode("\n                                            Invitation sent: ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n                                        ");
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
                  statements: [["content", "component.createdAtUTC", ["loc", [null, [41, 61], [41, 87]]]]],
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
                        "line": 46,
                        "column": 36
                      },
                      "end": {
                        "line": 48,
                        "column": 36
                      }
                    },
                    "moduleName": "ghost-admin/templates/team/index.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                                        ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("span");
                    var el2 = dom.createTextNode("Sending Invite...");
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
              var child3 = (function () {
                var child0 = (function () {
                  return {
                    meta: {
                      "fragmentReason": false,
                      "revision": "Ember@2.6.1",
                      "loc": {
                        "source": null,
                        "start": {
                          "line": 55,
                          "column": 40
                        },
                        "end": {
                          "line": 57,
                          "column": 40
                        }
                      },
                      "moduleName": "ghost-admin/templates/team/index.hbs"
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
                      var el2 = dom.createComment("");
                      dom.appendChild(el1, el2);
                      dom.appendChild(el0, el1);
                      var el1 = dom.createTextNode("\n");
                      dom.appendChild(el0, el1);
                      return el0;
                    },
                    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                      var element0 = dom.childAt(fragment, [1]);
                      var morphs = new Array(2);
                      morphs[0] = dom.createAttrMorph(element0, 'class');
                      morphs[1] = dom.createMorphAt(element0, 0, 0);
                      return morphs;
                    },
                    statements: [["attribute", "class", ["concat", ["role-label ", ["get", "role.lowerCaseName", ["loc", [null, [56, 70], [56, 88]]]]]]], ["content", "role.name", ["loc", [null, [56, 92], [56, 105]]]]],
                    locals: ["role"],
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
                        "line": 48,
                        "column": 36
                      },
                      "end": {
                        "line": 58,
                        "column": 36
                      }
                    },
                    "moduleName": "ghost-admin/templates/team/index.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                                        ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("a");
                    dom.setAttribute(el1, "class", "user-list-action");
                    dom.setAttribute(el1, "href", "#");
                    var el2 = dom.createTextNode("\n                                            Revoke\n                                        ");
                    dom.appendChild(el1, el2);
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n                                        ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("a");
                    dom.setAttribute(el1, "class", "user-list-action");
                    dom.setAttribute(el1, "href", "#");
                    var el2 = dom.createTextNode("\n                                            Resend\n                                        ");
                    dom.appendChild(el1, el2);
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment("");
                    dom.appendChild(el0, el1);
                    return el0;
                  },
                  buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var element1 = dom.childAt(fragment, [1]);
                    var element2 = dom.childAt(fragment, [3]);
                    var morphs = new Array(3);
                    morphs[0] = dom.createElementMorph(element1);
                    morphs[1] = dom.createElementMorph(element2);
                    morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
                    dom.insertBoundary(fragment, null);
                    return morphs;
                  },
                  statements: [["element", "action", ["revoke"], ["target", ["get", "component", ["loc", [null, [49, 102], [49, 111]]]]], ["loc", [null, [49, 77], [49, 113]]]], ["element", "action", ["resend"], ["target", ["get", "component", ["loc", [null, [52, 102], [52, 111]]]]], ["loc", [null, [52, 77], [52, 113]]]], ["block", "each", [["get", "user.roles", ["loc", [null, [55, 48], [55, 58]]]]], [], 0, null, ["loc", [null, [55, 40], [57, 49]]]]],
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
                      "line": 30,
                      "column": 24
                    },
                    "end": {
                      "line": 61,
                      "column": 24
                    }
                  },
                  "moduleName": "ghost-admin/templates/team/index.hbs"
                },
                isEmpty: false,
                arity: 1,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                            ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("div");
                  dom.setAttribute(el1, "class", "user-list-item");
                  var el2 = dom.createTextNode("\n                                ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("span");
                  dom.setAttribute(el2, "class", "user-list-item-icon icon-mail");
                  var el3 = dom.createTextNode("ic");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                                ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("div");
                  dom.setAttribute(el2, "class", "user-list-item-body");
                  var el3 = dom.createTextNode("\n                                    ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createElement("span");
                  dom.setAttribute(el3, "class", "name");
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  dom.appendChild(el2, el3);
                  var el3 = dom.createElement("br");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("\n");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("                                ");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                                ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("aside");
                  dom.setAttribute(el2, "class", "user-list-item-aside");
                  var el3 = dom.createTextNode("\n");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("                                ");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                            ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element3 = dom.childAt(fragment, [1]);
                  var element4 = dom.childAt(element3, [3]);
                  var morphs = new Array(3);
                  morphs[0] = dom.createMorphAt(dom.childAt(element4, [1]), 0, 0);
                  morphs[1] = dom.createMorphAt(element4, 4, 4);
                  morphs[2] = dom.createMorphAt(dom.childAt(element3, [5]), 1, 1);
                  return morphs;
                },
                statements: [["content", "user.email", ["loc", [null, [34, 55], [34, 69]]]], ["block", "if", [["get", "user.pending", ["loc", [null, [35, 42], [35, 54]]]]], [], 0, 1, ["loc", [null, [35, 36], [43, 43]]]], ["block", "if", [["get", "component.isSending", ["loc", [null, [46, 42], [46, 61]]]]], [], 2, 3, ["loc", [null, [46, 36], [58, 43]]]]],
                locals: ["component"],
                templates: [child0, child1, child2, child3]
              };
            })();
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 29,
                    "column": 20
                  },
                  "end": {
                    "line": 62,
                    "column": 20
                  }
                },
                "moduleName": "ghost-admin/templates/team/index.hbs"
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
              statements: [["block", "gh-user-invited", [], ["user", ["subexpr", "@mut", [["get", "user", ["loc", [null, [30, 48], [30, 52]]]]], [], []], "reload", "reload"], 0, null, ["loc", [null, [30, 24], [61, 44]]]]],
              locals: ["user"],
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
                  "line": 26,
                  "column": 12
                },
                "end": {
                  "line": 64,
                  "column": 12
                }
              },
              "moduleName": "ghost-admin/templates/team/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("section");
              dom.setAttribute(el1, "class", "user-list invited-users");
              var el2 = dom.createTextNode("\n                    ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h4");
              dom.setAttribute(el2, "class", "user-list-title");
              var el3 = dom.createTextNode("Invited users");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("                ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
              return morphs;
            },
            statements: [["block", "each", [["get", "invitedUsers", ["loc", [null, [29, 28], [29, 40]]]]], [], 0, null, ["loc", [null, [29, 20], [62, 29]]]]],
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
                "line": 25,
                "column": 8
              },
              "end": {
                "line": 65,
                "column": 8
              }
            },
            "moduleName": "ghost-admin/templates/team/index.hbs"
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
          statements: [["block", "if", [["get", "invitedUsers", ["loc", [null, [26, 18], [26, 30]]]]], [], 0, null, ["loc", [null, [26, 12], [64, 19]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
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
                      "line": 73,
                      "column": 24
                    },
                    "end": {
                      "line": 75,
                      "column": 24
                    }
                  },
                  "moduleName": "ghost-admin/templates/team/index.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                            ");
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
                statements: [["inline", "partial", ["user-list-item"], [], ["loc", [null, [74, 28], [74, 56]]]]],
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
                    "line": 72,
                    "column": 20
                  },
                  "end": {
                    "line": 76,
                    "column": 20
                  }
                },
                "moduleName": "ghost-admin/templates/team/index.hbs"
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
              statements: [["block", "link-to", ["team.user", ["get", "user.slug", ["loc", [null, [73, 47], [73, 56]]]]], ["class", "user-list-item"], 0, null, ["loc", [null, [73, 24], [75, 36]]]]],
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
                  "line": 71,
                  "column": 16
                },
                "end": {
                  "line": 77,
                  "column": 16
                }
              },
              "moduleName": "ghost-admin/templates/team/index.hbs"
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
            statements: [["block", "gh-user-active", [], ["user", ["subexpr", "@mut", [["get", "user", ["loc", [null, [72, 43], [72, 47]]]]], [], []]], 0, null, ["loc", [null, [72, 20], [76, 39]]]]],
            locals: [],
            templates: [child0]
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
                    "line": 78,
                    "column": 20
                  },
                  "end": {
                    "line": 80,
                    "column": 20
                  }
                },
                "moduleName": "ghost-admin/templates/team/index.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("li");
                dom.setAttribute(el1, "class", "ember-view active user-list-item");
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
              statements: [["inline", "partial", ["user-list-item"], [], ["loc", [null, [79, 69], [79, 97]]]]],
              locals: ["component"],
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
                  "line": 77,
                  "column": 16
                },
                "end": {
                  "line": 81,
                  "column": 16
                }
              },
              "moduleName": "ghost-admin/templates/team/index.hbs"
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
            statements: [["block", "gh-user-active", [], ["user", ["subexpr", "@mut", [["get", "user", ["loc", [null, [78, 43], [78, 47]]]]], [], []]], 0, null, ["loc", [null, [78, 20], [80, 39]]]]],
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
                "line": 69,
                "column": 12
              },
              "end": {
                "line": 82,
                "column": 12
              }
            },
            "moduleName": "ghost-admin/templates/team/index.hbs"
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
          statements: [["block", "unless", [["get", "session.user.isAuthor", ["loc", [null, [71, 26], [71, 47]]]]], [], 0, 1, ["loc", [null, [71, 16], [81, 27]]]]],
          locals: ["user"],
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
              "line": 18,
              "column": 4
            },
            "end": {
              "line": 84,
              "column": 4
            }
          },
          "moduleName": "ghost-admin/templates/team/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("section");
          dom.setAttribute(el1, "class", "user-list active-users");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          dom.setAttribute(el2, "class", "user-list-title");
          var el3 = dom.createTextNode("Active users");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 3, 3);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "unless", [["get", "session.user.isAuthor", ["loc", [null, [25, 18], [25, 39]]]]], [], 0, null, ["loc", [null, [25, 8], [65, 19]]]], ["block", "each", [["get", "activeUsers", ["loc", [null, [69, 20], [69, 31]]]]], ["key", "id"], 1, null, ["loc", [null, [69, 12], [82, 21]]]]],
        locals: [],
        templates: [child0, child1]
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
            "line": 86,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/team/index.hbs"
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
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
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
        var element6 = dom.childAt(fragment, [0]);
        var element7 = dom.childAt(element6, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element7, 1, 1);
        morphs[1] = dom.createMorphAt(element7, 3, 3);
        morphs[2] = dom.createMorphAt(element6, 3, 3);
        return morphs;
      },
      statements: [["block", "gh-view-title", [], ["openMobileMenu", "openMobileMenu"], 0, null, ["loc", [null, [3, 8], [3, 93]]]], ["block", "unless", [["get", "session.user.isAuthor", ["loc", [null, [5, 18], [5, 39]]]]], [], 1, null, ["loc", [null, [5, 8], [15, 19]]]], ["block", "gh-infinite-scroll", [], ["fetch", "loadNextPage", "isLoading", ["subexpr", "@mut", [["get", "isLoading", ["loc", [null, [20, 18], [20, 27]]]]], [], []], "tagName", "section", "classNames", "view-content team"], 2, null, ["loc", [null, [18, 4], [84, 27]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
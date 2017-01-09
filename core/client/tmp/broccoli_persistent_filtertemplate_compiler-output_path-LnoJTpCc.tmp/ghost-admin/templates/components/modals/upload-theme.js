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
              "line": 4,
              "column": 12
            },
            "end": {
              "line": 6,
              "column": 12
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                Uploaded with warnings\n");
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
              "line": 6,
              "column": 12
            },
            "end": {
              "line": 8,
              "column": 12
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                Upload successful!\n");
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
            "line": 3,
            "column": 8
          },
          "end": {
            "line": 9,
            "column": 8
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
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
        ["block","if",[["get","validationWarnings",["loc",[null,[4,18],[4,36]]]]],[],0,1,["loc",[null,[4,12],[8,19]]]]
      ],
      locals: [],
      templates: [child0, child1]
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
              "line": 9,
              "column": 8
            },
            "end": {
              "line": 11,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            Invalid theme\n");
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
              "line": 11,
              "column": 8
            },
            "end": {
              "line": 13,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            Upload a theme\n        ");
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
            "line": 9,
            "column": 8
          },
          "end": {
            "line": 13,
            "column": 8
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
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
        ["block","if",[["get","validationErrors",["loc",[null,[9,18],[9,34]]]]],[],0,1,["loc",[null,[9,8],[13,8]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  var child2 = (function() {
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
                  "line": 29,
                  "column": 24
                },
                "end": {
                  "line": 31,
                  "column": 24
                }
              },
              "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
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
              morphs[0] = dom.createUnsafeMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["content","error.details",["loc",[null,[30,28],[30,47]]]]
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
                  "line": 31,
                  "column": 24
                },
                "end": {
                  "line": 33,
                  "column": 24
                }
              },
              "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
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
              morphs[0] = dom.createUnsafeMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["content","error.rule",["loc",[null,[32,28],[32,44]]]]
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
                    "line": 37,
                    "column": 64
                  },
                  "end": {
                    "line": 37,
                    "column": 108
                  }
                },
                "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode(": ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [
                ["content","failure.message",["loc",[null,[37,89],[37,108]]]]
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
                  "line": 36,
                  "column": 28
                },
                "end": {
                  "line": 38,
                  "column": 28
                }
              },
              "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createElement("code");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element6 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(dom.childAt(element6, [0]),0,0);
              morphs[1] = dom.createMorphAt(element6,1,1);
              return morphs;
            },
            statements: [
              ["content","failure.ref",["loc",[null,[37,42],[37,57]]]],
              ["block","if",[["get","failure.message",["loc",[null,[37,70],[37,85]]]]],[],0,null,["loc",[null,[37,64],[37,115]]]]
            ],
            locals: ["failure"],
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
                "line": 27,
                "column": 16
              },
              "end": {
                "line": 41,
                "column": 16
              }
            },
            "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
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
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("ul");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("                        ");
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
            var element7 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element7,1,1);
            morphs[1] = dom.createMorphAt(dom.childAt(element7, [3]),1,1);
            return morphs;
          },
          statements: [
            ["block","if",[["get","error.details",["loc",[null,[29,30],[29,43]]]]],[],0,1,["loc",[null,[29,24],[33,31]]]],
            ["block","each",[["get","error.failures",["loc",[null,[36,36],[36,50]]]]],[],2,null,["loc",[null,[36,28],[38,37]]]]
          ],
          locals: ["error"],
          templates: [child0, child1, child2]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 8
            },
            "end": {
              "line": 43,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1,"class","theme-validation-errors");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("\n                        \"");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\" uploaded successfully but some warnings were generated...\n                    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
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
          var element8 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element8, [1, 1]),1,1);
          morphs[1] = dom.createMorphAt(element8,3,3);
          return morphs;
        },
        statements: [
          ["content","themeName",["loc",[null,[24,25],[24,38]]]],
          ["block","each",[["get","validationWarnings",["loc",[null,[27,24],[27,42]]]]],[],0,null,["loc",[null,[27,16],[41,25]]]]
        ],
        locals: [],
        templates: [child0]
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
                "line": 46,
                "column": 16
              },
              "end": {
                "line": 46,
                "column": 71
              }
            },
            "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Do you want to activate it now?");
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
              "line": 43,
              "column": 8
            },
            "end": {
              "line": 48,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("\n                \"");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\" uploaded successfully.\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element5,1,1);
          morphs[1] = dom.createMorphAt(element5,3,3);
          return morphs;
        },
        statements: [
          ["content","themeName",["loc",[null,[45,17],[45,30]]]],
          ["block","if",[["get","canActivateTheme",["loc",[null,[46,22],[46,38]]]]],[],0,null,["loc",[null,[46,16],[46,78]]]]
        ],
        locals: [],
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
            "line": 19,
            "column": 4
          },
          "end": {
            "line": 49,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
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
        ["block","if",[["get","validationWarnings",["loc",[null,[20,14],[20,32]]]]],[],0,1,["loc",[null,[20,8],[48,15]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  var child3 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 49,
              "column": 4
            },
            "end": {
              "line": 53,
              "column": 4
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("\n            \"");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\" will overwrite an existing theme of the same name. Are you sure?\n        ");
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
          ["content","fileThemeName",["loc",[null,[51,13],[51,30]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
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
                    "line": 57,
                    "column": 20
                  },
                  "end": {
                    "line": 59,
                    "column": 20
                  }
                },
                "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
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
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createUnsafeMorphAt(fragment,1,1,contextualElement);
                return morphs;
              },
              statements: [
                ["content","error.details",["loc",[null,[58,24],[58,43]]]]
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
                    "line": 59,
                    "column": 20
                  },
                  "end": {
                    "line": 61,
                    "column": 20
                  }
                },
                "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
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
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createUnsafeMorphAt(fragment,1,1,contextualElement);
                return morphs;
              },
              statements: [
                ["content","error.rule",["loc",[null,[60,24],[60,40]]]]
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
                      "line": 65,
                      "column": 60
                    },
                    "end": {
                      "line": 65,
                      "column": 104
                    }
                  },
                  "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode(": ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                  dom.insertBoundary(fragment, null);
                  return morphs;
                },
                statements: [
                  ["content","failure.message",["loc",[null,[65,85],[65,104]]]]
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
                    "line": 64,
                    "column": 24
                  },
                  "end": {
                    "line": 66,
                    "column": 24
                  }
                },
                "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("li");
                var el2 = dom.createElement("code");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element3 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createMorphAt(dom.childAt(element3, [0]),0,0);
                morphs[1] = dom.createMorphAt(element3,1,1);
                return morphs;
              },
              statements: [
                ["content","failure.ref",["loc",[null,[65,38],[65,53]]]],
                ["block","if",[["get","failure.message",["loc",[null,[65,66],[65,81]]]]],[],0,null,["loc",[null,[65,60],[65,111]]]]
              ],
              locals: ["failure"],
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
                  "line": 55,
                  "column": 12
                },
                "end": {
                  "line": 69,
                  "column": 12
                }
              },
              "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                    ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("ul");
              var el3 = dom.createTextNode("\n");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("                    ");
              dom.appendChild(el2, el3);
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
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(element4,1,1);
              morphs[1] = dom.createMorphAt(dom.childAt(element4, [3]),1,1);
              return morphs;
            },
            statements: [
              ["block","if",[["get","error.details",["loc",[null,[57,26],[57,39]]]]],[],0,1,["loc",[null,[57,20],[61,27]]]],
              ["block","each",[["get","error.failures",["loc",[null,[64,32],[64,46]]]]],[],2,null,["loc",[null,[64,24],[66,33]]]]
            ],
            locals: ["error"],
            templates: [child0, child1, child2]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 53,
                "column": 4
              },
              "end": {
                "line": 71,
                "column": 4
              }
            },
            "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            dom.setAttribute(el1,"class","theme-validation-errors");
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
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            return morphs;
          },
          statements: [
            ["block","each",[["get","validationErrors",["loc",[null,[55,20],[55,36]]]]],[],0,null,["loc",[null,[55,12],[69,21]]]]
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
                "line": 71,
                "column": 4
              },
              "end": {
                "line": 83,
                "column": 4
              }
            },
            "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","gh-file-uploader",[],["url",["subexpr","@mut",[["get","uploadUrl",["loc",[null,[73,16],[73,25]]]]],[],[]],"paramName","theme","accept",["subexpr","@mut",[["get","accept",["loc",[null,[75,19],[75,25]]]]],[],[]],"labelText","Click to select or drag-and-drop your theme zip file here.","validate",["subexpr","action",["validateTheme"],[],["loc",[null,[77,21],[77,45]]]],"uploadStarted",["subexpr","action",["uploadStarted"],[],["loc",[null,[78,26],[78,50]]]],"uploadFinished",["subexpr","action",["uploadFinished"],[],["loc",[null,[79,27],[79,52]]]],"uploadSuccess",["subexpr","action",["uploadSuccess"],[],["loc",[null,[80,26],[80,50]]]],"uploadFailed",["subexpr","action",["uploadFailed"],[],["loc",[null,[81,25],[81,48]]]],"listenTo","themeUploader"],["loc",[null,[72,8],[82,38]]]]
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
              "line": 53,
              "column": 4
            },
            "end": {
              "line": 83,
              "column": 4
            }
          },
          "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
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
          ["block","if",[["get","validationErrors",["loc",[null,[53,14],[53,30]]]]],[],0,1,["loc",[null,[53,4],[83,4]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 49,
            "column": 4
          },
          "end": {
            "line": 83,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
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
        ["block","if",[["get","displayOverwriteWarning",["loc",[null,[49,14],[49,37]]]]],[],0,1,["loc",[null,[49,4],[83,4]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  var child4 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 88,
            "column": 8
          },
          "end": {
            "line": 88,
            "column": 26
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Close");
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
  var child5 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 88,
            "column": 26
          },
          "end": {
            "line": 88,
            "column": 40
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Cancel");
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
  var child6 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 90,
            "column": 4
          },
          "end": {
            "line": 94,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-red");
        var el2 = dom.createTextNode("\n            Overwrite\n        ");
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
      statements: [
        ["element","action",["confirmOverwrite"],[],["loc",[null,[91,16],[91,45]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child7 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 95,
            "column": 4
          },
          "end": {
            "line": 99,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-green");
        var el2 = dom.createTextNode("\n            Try Again\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [
        ["element","action",["reset"],[],["loc",[null,[96,16],[96,34]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child8 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 100,
            "column": 4
          },
          "end": {
            "line": 104,
            "column": 4
          }
        },
        "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-green");
        var el2 = dom.createTextNode("\n            Activate Now\n        ");
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
      statements: [
        ["element","action",["activate"],[],["loc",[null,[101,16],[101,37]]]]
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
          "line": 106,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/components/modals/upload-theme.hbs"
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
      var el1 = dom.createElement("a");
      dom.setAttribute(el1,"class","close icon-x");
      dom.setAttribute(el1,"href","#");
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
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","modal-footer");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","btn btn-default btn-minor");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element9 = dom.childAt(fragment, [2]);
      var element10 = dom.childAt(fragment, [6]);
      var element11 = dom.childAt(element10, [1]);
      var morphs = new Array(9);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]),1,1);
      morphs[1] = dom.createElementMorph(element9);
      morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
      morphs[3] = dom.createAttrMorph(element11, 'disabled');
      morphs[4] = dom.createElementMorph(element11);
      morphs[5] = dom.createMorphAt(element11,1,1);
      morphs[6] = dom.createMorphAt(element10,3,3);
      morphs[7] = dom.createMorphAt(element10,4,4);
      morphs[8] = dom.createMorphAt(element10,5,5);
      return morphs;
    },
    statements: [
      ["block","if",[["get","theme",["loc",[null,[3,14],[3,19]]]]],[],0,1,["loc",[null,[3,8],[13,15]]]],
      ["element","action",["closeModal"],[],["loc",[null,[16,47],[16,70]]]],
      ["block","if",[["get","theme",["loc",[null,[19,10],[19,15]]]]],[],2,3,["loc",[null,[19,4],[83,11]]]],
      ["attribute","disabled",["get","closeDisabled",["loc",[null,[87,47],[87,60]]]]],
      ["element","action",["closeModal"],[],["loc",[null,[87,12],[87,35]]]],
      ["block","if",[["get","theme",["loc",[null,[88,14],[88,19]]]]],[],4,5,["loc",[null,[88,8],[88,47]]]],
      ["block","if",[["get","displayOverwriteWarning",["loc",[null,[90,10],[90,33]]]]],[],6,null,["loc",[null,[90,4],[94,11]]]],
      ["block","if",[["get","validationErrors",["loc",[null,[95,10],[95,26]]]]],[],7,null,["loc",[null,[95,4],[99,11]]]],
      ["block","if",[["get","canActivateTheme",["loc",[null,[100,10],[100,26]]]]],[],8,null,["loc",[null,[100,4],[104,11]]]]
    ],
    locals: [],
    templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8]
  };
}()));
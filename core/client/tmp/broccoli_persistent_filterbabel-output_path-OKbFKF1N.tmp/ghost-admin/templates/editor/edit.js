define("ghost-admin/templates/editor/edit", ["exports"], function (exports) {
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
              "line": 5,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/editor/edit.hbs"
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
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-trim-focus-input", [["get", "model.titleScratch", ["loc", [null, [4, 34], [4, 52]]]]], ["type", "text", "id", "entry-title", "placeholder", "Your Post Title", "tabindex", "1", "shouldFocus", ["subexpr", "@mut", [["get", "shouldFocusTitle", ["loc", [null, [4, 137], [4, 153]]]]], [], []], "focus-out", "updateTitle", "update", ["subexpr", "action", [["subexpr", "perform", [["get", "updateTitle", ["loc", [null, [4, 202], [4, 213]]]]], [], ["loc", [null, [4, 193], [4, 214]]]]], [], ["loc", [null, [4, 185], [4, 215]]]]], ["loc", [null, [4, 12], [4, 217]]]]],
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
              "line": 6,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "ghost-admin/templates/editor/edit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("time");
          dom.setAttribute(el1, "class", "gh-notification gh-notification-schedule");
          var el2 = dom.createTextNode("\n                Post will be published ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(".\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'datetime');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "datetime", ["concat", [["get", "post.publishedAtUTC", ["loc", [null, [7, 30], [7, 49]]]]]]], ["content", "scheduleCountdown", ["loc", [null, [8, 39], [8, 60]]]]],
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
              "line": 40,
              "column": 0
            },
            "end": {
              "line": 45,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/editor/edit.hbs"
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
        statements: [["inline", "gh-fullscreen-modal", ["delete-post"], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [42, 32], [42, 37]]]]], [], []], "close", ["subexpr", "action", ["toggleDeletePostModal"], [], ["loc", [null, [43, 32], [43, 64]]]], "modifier", "action wide"], ["loc", [null, [41, 4], [44, 50]]]]],
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
              "line": 47,
              "column": 0
            },
            "end": {
              "line": 52,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/editor/edit.hbs"
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
        statements: [["inline", "gh-fullscreen-modal", ["leave-editor"], ["confirm", ["subexpr", "action", ["leaveEditor"], [], ["loc", [null, [49, 34], [49, 56]]]], "close", ["subexpr", "action", ["toggleLeaveEditorModal"], [], ["loc", [null, [50, 32], [50, 65]]]], "modifier", "action wide"], ["loc", [null, [48, 4], [51, 50]]]]],
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
              "line": 54,
              "column": 0
            },
            "end": {
              "line": 58,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/editor/edit.hbs"
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
        statements: [["inline", "gh-fullscreen-modal", ["re-authenticate"], ["close", ["subexpr", "action", ["toggleReAuthenticateModal"], [], ["loc", [null, [56, 32], [56, 68]]]], "modifier", "action wide"], ["loc", [null, [55, 4], [57, 50]]]]],
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
            "line": 59,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/editor/edit.hbs"
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
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3, "class", "view-actions");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "post-settings");
        dom.setAttribute(el4, "title", "Post Settings");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "icon-settings");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
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
        var el2 = dom.createComment("");
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [4]);
        var element4 = dom.childAt(element3, [1]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(element2, 1, 1);
        morphs[1] = dom.createMorphAt(element2, 2, 2);
        morphs[2] = dom.createElementMorph(element4);
        morphs[3] = dom.createMorphAt(element3, 3, 3);
        morphs[4] = dom.createMorphAt(element1, 3, 3);
        morphs[5] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[6] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[7] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "gh-view-title", [], ["classNames", "gh-editor-title", "openMobileMenu", "openMobileMenu"], 0, null, ["loc", [null, [3, 8], [5, 26]]]], ["block", "if", [["get", "scheduleCountdown", ["loc", [null, [6, 14], [6, 31]]]]], [], 1, null, ["loc", [null, [6, 8], [10, 15]]]], ["element", "action", ["openSettingsMenu"], [], ["loc", [null, [12, 78], [12, 107]]]], ["inline", "gh-editor-save-button", [], ["isPublished", ["subexpr", "@mut", [["get", "model.isPublished", ["loc", [null, [16, 28], [16, 45]]]]], [], []], "isScheduled", ["subexpr", "@mut", [["get", "model.isScheduled", ["loc", [null, [17, 28], [17, 45]]]]], [], []], "willPublish", ["subexpr", "@mut", [["get", "willPublish", ["loc", [null, [18, 28], [18, 39]]]]], [], []], "willSchedule", ["subexpr", "@mut", [["get", "willSchedule", ["loc", [null, [19, 29], [19, 41]]]]], [], []], "statusFreeze", ["subexpr", "@mut", [["get", "statusFreeze", ["loc", [null, [20, 29], [20, 41]]]]], [], []], "scheduledWillPublish", ["subexpr", "@mut", [["get", "scheduledWillPublish", ["loc", [null, [21, 37], [21, 57]]]]], [], []], "timeScheduled", ["subexpr", "@mut", [["get", "model.timeScheduled", ["loc", [null, [22, 30], [22, 49]]]]], [], []], "postOrPage", ["subexpr", "@mut", [["get", "postOrPage", ["loc", [null, [23, 27], [23, 37]]]]], [], []], "isNew", ["subexpr", "@mut", [["get", "model.isNew", ["loc", [null, [24, 22], [24, 33]]]]], [], []], "save", "save", "setSaveType", "setSaveType", "delete", "toggleDeletePostModal", "submitting", ["subexpr", "@mut", [["get", "submitting", ["loc", [null, [28, 27], [28, 37]]]]], [], []]], ["loc", [null, [15, 12], [29, 14]]]], ["inline", "gh-editor", [], ["value", ["subexpr", "@mut", [["get", "model.scratch", ["loc", [null, [33, 22], [33, 35]]]]], [], []], "shouldFocusEditor", ["subexpr", "@mut", [["get", "shouldFocusEditor", ["loc", [null, [34, 34], [34, 51]]]]], [], []], "previewUrl", ["subexpr", "@mut", [["get", "model.previewUrl", ["loc", [null, [35, 27], [35, 43]]]]], [], []], "editorFocused", ["subexpr", "action", ["autoSaveNew"], [], ["loc", [null, [36, 30], [36, 52]]]], "onTeardown", ["subexpr", "action", ["cancelTimers"], [], ["loc", [null, [37, 27], [37, 50]]]]], ["loc", [null, [33, 4], [37, 52]]]], ["block", "if", [["get", "showDeletePostModal", ["loc", [null, [40, 6], [40, 25]]]]], [], 2, null, ["loc", [null, [40, 0], [45, 7]]]], ["block", "if", [["get", "showLeaveEditorModal", ["loc", [null, [47, 6], [47, 26]]]]], [], 3, null, ["loc", [null, [47, 0], [52, 7]]]], ["block", "if", [["get", "showReAuthenticateModal", ["loc", [null, [54, 6], [54, 29]]]]], [], 4, null, ["loc", [null, [54, 0], [58, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
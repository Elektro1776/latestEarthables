define("ghost-admin/templates/components/gh-editor", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 48,
              "column": 0
            },
            "end": {
              "line": 53,
              "column": 0
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-editor.hbs"
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
        statements: [["inline", "gh-fullscreen-modal", ["copy-html"], ["model", ["subexpr", "@mut", [["get", "copyHTMLModalContent", ["loc", [null, [50, 32], [50, 52]]]]], [], []], "close", ["subexpr", "action", ["toggleCopyHTMLModal"], [], ["loc", [null, [51, 32], [51, 62]]]], "modifier", "action"], ["loc", [null, [49, 4], [52, 45]]]]],
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
            "line": 54,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-editor.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        dom.setAttribute(el2, "class", "floatingheader");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "desktop-tabs");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "markdown-help-label");
        dom.setAttribute(el4, "href", "");
        dom.setAttribute(el4, "title", "Markdown Help");
        var el5 = dom.createTextNode("Markdown");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "mobile-tabs");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("Markdown");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("Preview");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "markdown-help-icon");
        dom.setAttribute(el3, "href", "");
        dom.setAttribute(el3, "title", "Markdown Help");
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "icon-markdown");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "id", "entry-markdown-content");
        dom.setAttribute(el2, "class", "entry-markdown-content");
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
        var el1 = dom.createElement("section");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        dom.setAttribute(el2, "class", "floatingheader");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "desktop-tabs");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "target", "_blank");
        var el5 = dom.createTextNode("Preview");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "mobile-tabs");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("Markdown");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("Preview");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "entry-word-count");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "entry-preview-content js-entry-preview-content");
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1, 0]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var element6 = dom.childAt(element1, [5]);
        var element7 = dom.childAt(fragment, [2]);
        var element8 = dom.childAt(element7, [1]);
        var element9 = dom.childAt(element8, [1, 0]);
        var element10 = dom.childAt(element8, [3]);
        var element11 = dom.childAt(element10, [1]);
        var element12 = dom.childAt(element10, [3]);
        var morphs = new Array(17);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createAttrMorph(element4, 'class');
        morphs[3] = dom.createElementMorph(element4);
        morphs[4] = dom.createAttrMorph(element5, 'class');
        morphs[5] = dom.createElementMorph(element5);
        morphs[6] = dom.createElementMorph(element6);
        morphs[7] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[8] = dom.createAttrMorph(element7, 'class');
        morphs[9] = dom.createAttrMorph(element9, 'href');
        morphs[10] = dom.createAttrMorph(element11, 'class');
        morphs[11] = dom.createElementMorph(element11);
        morphs[12] = dom.createAttrMorph(element12, 'class');
        morphs[13] = dom.createElementMorph(element12);
        morphs[14] = dom.createMorphAt(dom.childAt(element8, [5]), 0, 0);
        morphs[15] = dom.createMorphAt(dom.childAt(element7, [3]), 1, 1);
        morphs[16] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["entry-markdown js-entry-markdown ", ["subexpr", "if", [["get", "markdownActive", ["loc", [null, [1, 54], [1, 68]]]], "active"], [], ["loc", [null, [1, 49], [1, 79]]]]]]], ["element", "action", [["subexpr", "route-action", ["toggleMarkdownHelpModal"], [], ["loc", [null, [3, 105], [3, 145]]]]], [], ["loc", [null, [3, 96], [3, 147]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "markdownActive", ["loc", [null, [5, 70], [5, 84]]]], "active"], [], ["loc", [null, [5, 65], [5, 95]]]]]]], ["element", "action", ["selectTab", "markdown"], [], ["loc", [null, [5, 24], [5, 57]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "previewActive", ["loc", [null, [6, 69], [6, 82]]]], "active"], [], ["loc", [null, [6, 64], [6, 93]]]]]]], ["element", "action", ["selectTab", "preview"], [], ["loc", [null, [6, 24], [6, 56]]]], ["element", "action", [["subexpr", "route-action", ["toggleMarkdownHelpModal"], [], ["loc", [null, [8, 77], [8, 117]]]]], [], ["loc", [null, [8, 68], [8, 119]]]], ["inline", "gh-ed-editor", [["get", "value", ["loc", [null, [11, 23], [11, 28]]]]], ["classNames", "markdown-editor js-markdown-editor", "tabindex", "1", "spellcheck", "true", "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [15, 18], [15, 23]]]]], [], []], "setEditor", ["subexpr", "action", ["setEditor"], [], ["loc", [null, [16, 22], [16, 42]]]], "updateScrollInfo", ["subexpr", "action", ["updateScrollInfo"], [], ["loc", [null, [17, 29], [17, 56]]]], "toggleCopyHTMLModal", ["subexpr", "action", ["toggleCopyHTMLModal"], [], ["loc", [null, [18, 32], [18, 62]]]], "onFocusIn", ["subexpr", "@mut", [["get", "editorFocused", ["loc", [null, [19, 22], [19, 35]]]]], [], []], "height", ["subexpr", "@mut", [["get", "height", ["loc", [null, [20, 19], [20, 25]]]]], [], []], "focus", ["subexpr", "@mut", [["get", "shouldFocusEditor", ["loc", [null, [21, 18], [21, 35]]]]], [], []], "readonly", ["subexpr", "@mut", [["get", "editorDisabled", ["loc", [null, [22, 21], [22, 35]]]]], [], []], "update", ["subexpr", "action", [["subexpr", "mut", [["get", "value", ["loc", [null, [23, 32], [23, 37]]]]], [], ["loc", [null, [23, 27], [23, 38]]]]], [], ["loc", [null, [23, 19], [23, 39]]]]], ["loc", [null, [11, 8], [24, 10]]]], ["attribute", "class", ["concat", ["entry-preview js-entry-preview ", ["subexpr", "if", [["get", "previewActive", ["loc", [null, [28, 52], [28, 65]]]], "active"], [], ["loc", [null, [28, 47], [28, 76]]]]]]], ["attribute", "href", ["concat", [["get", "previewUrl", ["loc", [null, [30, 62], [30, 72]]]]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "markdownActive", ["loc", [null, [32, 70], [32, 84]]]], "active"], [], ["loc", [null, [32, 65], [32, 95]]]]]]], ["element", "action", ["selectTab", "markdown"], [], ["loc", [null, [32, 24], [32, 57]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "previewActive", ["loc", [null, [33, 69], [33, 82]]]], "active"], [], ["loc", [null, [33, 64], [33, 93]]]]]]], ["element", "action", ["selectTab", "preview"], [], ["loc", [null, [33, 24], [33, 56]]]], ["inline", "gh-count-words", [["get", "value", ["loc", [null, [35, 56], [35, 61]]]]], [], ["loc", [null, [35, 39], [35, 63]]]], ["inline", "gh-ed-preview", [], ["classNames", "rendered-markdown js-rendered-markdown", "markdown", ["subexpr", "@mut", [["get", "value", ["loc", [null, [39, 33], [39, 38]]]]], [], []], "scrollPosition", ["subexpr", "@mut", [["get", "scrollPosition", ["loc", [null, [40, 39], [40, 53]]]]], [], []], "updateHeight", ["subexpr", "action", ["updateHeight"], [], ["loc", [null, [41, 37], [41, 60]]]], "uploadStarted", ["subexpr", "action", ["disableEditor"], [], ["loc", [null, [42, 38], [42, 62]]]], "uploadFinished", ["subexpr", "action", ["enableEditor"], [], ["loc", [null, [43, 39], [43, 62]]]], "updateImageSrc", ["subexpr", "action", ["handleImgUpload"], [], ["loc", [null, [44, 39], [44, 65]]]]], ["loc", [null, [38, 8], [44, 67]]]], ["block", "if", [["get", "showCopyHTMLModal", ["loc", [null, [48, 6], [48, 23]]]]], [], 0, null, ["loc", [null, [48, 0], [53, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
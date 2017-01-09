define("ghost-admin/templates/components/gh-search-input/trigger", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-search-input/trigger.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ember-power-select-search");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "search");
        dom.setAttribute(el2, "autocomplete", "off");
        dom.setAttribute(el2, "autocorrect", "off");
        dom.setAttribute(el2, "autocapitalize", "off");
        dom.setAttribute(el2, "spellcheck", "false");
        dom.setAttribute(el2, "role", "combobox");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "gh-nav-search-button");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "icon-search");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "sr-only");
        var el4 = dom.createTextNode("Search");
        dom.appendChild(el3, el4);
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
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(8);
        morphs[0] = dom.createAttrMorph(element0, 'onmousedown');
        morphs[1] = dom.createAttrMorph(element1, 'value');
        morphs[2] = dom.createAttrMorph(element1, 'placeholder');
        morphs[3] = dom.createAttrMorph(element1, 'oninput');
        morphs[4] = dom.createAttrMorph(element1, 'onmousedown');
        morphs[5] = dom.createAttrMorph(element1, 'onkeydown');
        morphs[6] = dom.createAttrMorph(element1, 'onblur');
        morphs[7] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["attribute", "onmousedown", ["subexpr", "action", ["captureMouseDown"], [], ["loc", [null, [1, 51], [1, 80]]]]], ["attribute", "value", ["subexpr", "if", [["get", "extra.labelPath", ["loc", [null, [4, 19], [4, 34]]]], ["subexpr", "get", [["get", "selected", ["loc", [null, [4, 40], [4, 48]]]], ["get", "extra.labelPath", ["loc", [null, [4, 49], [4, 64]]]]], [], ["loc", [null, [4, 35], [4, 65]]]], ["get", "selected", ["loc", [null, [4, 66], [4, 74]]]]], [], ["loc", [null, [4, 14], [4, 76]]]]], ["attribute", "placeholder", ["get", "placeholder", ["loc", [null, [6, 22], [6, 33]]]]], ["attribute", "oninput", ["subexpr", "action", ["search"], ["value", "target.value"], ["loc", [null, [7, 16], [7, 56]]]]], ["attribute", "onmousedown", ["subexpr", "action", ["captureMouseDown"], [], ["loc", [null, [8, 20], [8, 49]]]]], ["attribute", "onkeydown", ["subexpr", "action", ["handleKeydown"], [], ["loc", [null, [9, 18], [9, 44]]]]], ["attribute", "onblur", ["subexpr", "action", ["resetInput"], [], ["loc", [null, [10, 15], [10, 38]]]]], ["element", "action", ["focusInput"], [], ["loc", [null, [11, 41], [11, 64]]]]],
      locals: [],
      templates: []
    };
  })());
});
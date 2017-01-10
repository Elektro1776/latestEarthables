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
              "column": 4
            },
            "end": {
              "line": 13,
              "column": 4
            }
          },
          "moduleName": "ghost-admin/templates/components/gh-ed-preview.hbs"
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
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","gh-image-uploader-with-preview",[],["image",["subexpr","@mut",[["get","uploader.src",["loc",[null,[6,18],[6,30]]]]],[],[]],"altText",["subexpr","@mut",[["get","uploader.altText",["loc",[null,[7,20],[7,36]]]]],[],[]],"update",["subexpr","action",["updateImageSrc",["get","uploader.index",["loc",[null,[8,44],[8,58]]]]],[],["loc",[null,[8,19],[8,59]]]],"remove",["subexpr","action",["updateImageSrc",["get","uploader.index",["loc",[null,[9,44],[9,58]]]],""],[],["loc",[null,[9,19],[9,62]]]],"uploadStarted",["subexpr","@mut",[["get","uploadStarted",["loc",[null,[10,26],[10,39]]]]],[],[]],"uploadFinished",["subexpr","@mut",[["get","uploadFinished",["loc",[null,[11,27],[11,41]]]]],[],[]],"formChanged",["subexpr","action",["updateHeight"],[],["loc",[null,[12,24],[12,47]]]]],["loc",[null,[5,8],[12,49]]]]
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
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "ghost-admin/templates/components/gh-ed-preview.hbs"
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
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","ember-wormhole",[],["to",["subexpr","@mut",[["get","uploader.destinationElementId",["loc",[null,[4,25],[4,54]]]]],[],[]]],0,null,["loc",[null,[4,4],[13,23]]]]
      ],
      locals: ["uploader"],
      templates: [child0]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
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
          "line": 15,
          "column": 0
        }
      },
      "moduleName": "ghost-admin/templates/components/gh-ed-preview.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["content","previewHTML",["loc",[null,[1,0],[1,15]]]],
      ["block","each",[["get","imageUploadComponents",["loc",[null,[3,8],[3,29]]]]],[],0,null,["loc",[null,[3,0],[14,9]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));
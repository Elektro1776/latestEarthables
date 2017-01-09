define('liquid-fire/ember-internals/version-specific/index', ['exports', 'ember', 'liquid-fire/templates/version-specific/get-outlet-state'], function (exports, _ember, _liquidFireTemplatesVersionSpecificGetOutletState) {
  'use strict';

  exports.containingElement = containingElement;
  exports.initialize = initialize;

  var emberRequire = _ember['default'].__loader.require;
  var internal = emberRequire('htmlbars-runtime').internal;
  var registerKeyword = emberRequire('ember-htmlbars/keywords').registerKeyword;
  var _Stream = _ember['default'].__loader.registry['ember-metal/streams/stream'] ? emberRequire('ember-metal/streams/stream') : emberRequire('ember-htmlbars/streams/stream');
  var BasicStream = _Stream['default'];
  var Stream = _Stream.Stream;

  var routeIsStable;
  try {
    routeIsStable = emberRequire('ember-htmlbars/keywords/real_outlet')['default'].isStable;
  } catch (err) {
    routeIsStable = emberRequire('ember-htmlbars/keywords/outlet')['default'].isStable;
  }

  // Given an Ember Component, return the containing element

  function containingElement(view) {
    return view._renderNode.contextualElement;
  }

  function initialize() {
    registerKeyword('-get-outlet-state', {
      willRender: function willRender(renderNode, env) {
        env.view.ownerView._outlets.push(renderNode);
      },

      setupState: function setupState(lastState, env, scope, params, hash) {
        var watchModels = env.hooks.getValue(hash.watchModels);
        var stream = lastState.stream;
        var source = lastState.source;
        if (!stream) {
          source = { env: env };
          if (!!Stream) {
            stream = new Stream(function () {
              return { outlets: source.env.outletState };
            });
          } else {
            stream = new BasicStream(function () {
              return { outlets: source.env.outletState };
            });
          }
        }
        return { stream: stream, source: source, watchModels: watchModels };
      },

      render: function render(renderNode, env, scope, params, hash, template, inverse, visitor) {
        internal.hostBlock(renderNode, env, scope, template, null, null, visitor, function (options) {
          var stream = renderNode.getState ? renderNode.getState().stream : renderNode.state.stream;
          options.templates.template['yield']([stream]);
        });
      },
      rerender: function rerender(morph, env) {
        var state = morph._state ? morph._state : morph.state;
        state.source.env = env;
        state.stream.notify();
      },
      isStable: function isStable() {
        return true;
      }
    });

    registerKeyword('-with-dynamic-vars', {
      setupState: function setupState(state, env, scope, params, hash) {
        var keys = Object.keys(hash);
        if (keys.length > 1 || keys[0] !== 'outletState') {
          throw new Error("the -with-dynamic-vars polyfill in liquid-fire only handles outletState");
        }
        var outletState = env.hooks.getValue(hash.outletState);
        return { outletState: outletState };
      },

      childEnv: function childEnv(state, env) {
        return env.childWithOutletState(state.outletState ? state.outletState.outlets : {});
      },

      render: function render(renderNode, env, scope, params, hash, template, inverse, visitor) {
        internal.hostBlock(renderNode, env, scope, template, null, null, visitor, function (options) {
          options.templates.template['yield']();
        });
      },

      isStable: function isStable() {
        return true;
      }
    });
  }

  Object.defineProperty(exports, 'getOutletStateTemplate', {
    enumerable: true,
    get: function get() {
      return _liquidFireTemplatesVersionSpecificGetOutletState['default'];
    }
  });
});
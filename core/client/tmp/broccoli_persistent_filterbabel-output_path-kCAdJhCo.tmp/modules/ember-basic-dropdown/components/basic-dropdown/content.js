import WormholeComponent from 'ember-wormhole/components/ember-wormhole';
import Ember from 'ember';
import layout from '../../templates/components/basic-dropdown/content';

var run = Ember.run;

var MutObserver = self.window.MutationObserver || self.window.WebKitMutationObserver;
function waitForAnimations(element, callback) {
  var computedStyle = self.window.getComputedStyle(element);
  if (computedStyle.transitionDuration && computedStyle.transitionDuration !== '0s') {
    (function () {
      var eventCallback = function eventCallback() {
        element.removeEventListener('transitionend', eventCallback);
        callback();
      };
      element.addEventListener('transitionend', eventCallback);
    })();
  } else if (computedStyle.animationName !== 'none' && computedStyle.animationPlayState === 'running') {
    (function () {
      var eventCallback = function eventCallback() {
        element.removeEventListener('animationend', eventCallback);
        callback();
      };
      element.addEventListener('animationend', eventCallback);
    })();
  } else {
    callback();
  }
}

export default WormholeComponent.extend({
  layout: layout,
  hasMoved: false,
  mutationObserver: null,
  isTouchDevice: !!self.window && 'ontouchstart' in self.window,

  // Lifecycle hooks
  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    var dropdown = self.window.document.getElementById(this.get('dropdownId'));
    var appRoot = this.get('appRoot');

    this.handleRootMouseDown = this.handleRootMouseDown.bind(this, dropdown);
    this.touchStartHandler = this.touchStartHandler.bind(this);
    this.touchMoveHandler = this.touchMoveHandler.bind(this);

    appRoot.addEventListener('mousedown', this.handleRootMouseDown, true);

    if (this.get('isTouchDevice')) {
      appRoot.addEventListener('touchstart', this.touchStartHandler, true);
      appRoot.addEventListener('touchend', this.handleRootMouseDown, true);
    }

    if (!this.get('renderInPlace')) {
      dropdown.addEventListener('focusin', this.get('onFocusIn'));
      dropdown.addEventListener('focusout', this.get('onFocusOut'));
      this.addGlobalEvents(dropdown);
    }
    run.scheduleOnce('actions', this.get('reposition'));
    if (this.get('animationEnabled')) {
      run.scheduleOnce('actions', this, this.animateIn, dropdown);
    }
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    var dropdown = self.window.document.getElementById(this.get('dropdownId'));
    var appRoot = this.get('appRoot');

    appRoot.removeEventListener('mousedown', this.handleRootMouseDown, true);

    if (this.get('isTouchDevice')) {
      appRoot.removeEventListener('touchstart', this.touchStartHandler, true);
      appRoot.removeEventListener('touchend', this.handleRootMouseDown, true);
    }

    this.removeGlobalEvents(dropdown);
    if (this.get('animationEnabled')) {
      this.animateOut(dropdown);
    }
  },

  // Methods
  animateIn: function animateIn(dropdown) {
    var _this = this;

    this.set('transitionClass', 'ember-basic-dropdown--transitioning-in');
    waitForAnimations(dropdown, function () {
      return _this.set('ember-basic-dropdown--transitioned-in');
    });
  },

  animateOut: function animateOut(dropdown) {
    var parentElement = this.get('renderInPlace') ? dropdown.parentElement.parentElement : dropdown.parentElement;
    var clone = dropdown.cloneNode(true);
    clone.id = clone.id + '--clone';
    var $clone = Ember.$(clone);
    $clone.removeClass('ember-basic-dropdown--transitioned-in');
    $clone.removeClass('ember-basic-dropdown--transitioning-in');
    $clone.addClass('ember-basic-dropdown--transitioning-out');
    parentElement.appendChild(clone);
    waitForAnimations(clone, function () {
      parentElement.removeChild(clone);
    });
  },

  handleRootMouseDown: function handleRootMouseDown(dropdownContent, e) {
    if (this.hasMoved) {
      this.hasMoved = false;
      return;
    }
    var comesFromInside = (this.element ? this.element.parentElement.contains(e.target) : false) || dropdownContent.contains(e.target);
    if (comesFromInside) {
      return;
    }
    var closestDDcontent = Ember.$(e.target).closest('.ember-basic-dropdown-content')[0];
    if (closestDDcontent) {
      var closestDropdownId = closestDDcontent.id.match(/ember\d+$/)[0];
      var clickedOnNestedDropdown = !!dropdownContent.querySelector('#' + closestDropdownId);
      if (clickedOnNestedDropdown) {
        return;
      }
    }
    this.get('close')(e, true);
  },

  addGlobalEvents: function addGlobalEvents(dropdown) {
    var reposition = this.get('reposition');
    self.window.addEventListener('scroll', reposition);
    self.window.addEventListener('resize', reposition);
    self.window.addEventListener('orientationchange', reposition);
    if (MutObserver) {
      this.mutationObserver = new MutObserver(function (mutations) {
        if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
          reposition();
        }
      });
      this.mutationObserver.observe(dropdown, { childList: true, subtree: true });
    } else {
      dropdown.addEventListener('DOMNodeInserted', reposition, false);
      dropdown.addEventListener('DOMNodeRemoved', reposition, false);
    }
  },

  removeGlobalEvents: function removeGlobalEvents(dropdown) {
    var reposition = this.get('reposition');
    self.window.removeEventListener('scroll', reposition);
    self.window.removeEventListener('resize', reposition);
    self.window.removeEventListener('orientationchange', reposition);
    if (MutObserver) {
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
        this.mutationObserver = null;
      }
    } else {
      dropdown.removeEventListener('DOMNodeInserted', reposition);
      dropdown.removeEventListener('DOMNodeRemoved', reposition);
    }
  },

  touchMoveHandler: function touchMoveHandler() {
    this.hasMoved = true;
    this.get('appRoot').removeEventListener('touchmove', this.touchMoveHandler, true);
  },

  touchStartHandler: function touchStartHandler() {
    this.get('appRoot').addEventListener('touchmove', this.touchMoveHandler, true);
  }
});
import Ember from 'ember';

var computed = Ember.computed;

export default Ember.Service.extend({
  targets: computed(function () {
    return Ember.A();
  }),
  queue: computed(function () {
    return Ember.A();
  }),

  appendItem: function appendItem(targetName, item) {
    var targets = this.get('targets');
    var target = undefined;

    if (!(target = targets.findBy('name', targetName))) {
      Ember.run(function () {
        target = {
          name: targetName,
          items: Ember.A(),
          'class': targetName + '-liquid-target',
          contextClass: item.get('targetClass'),
          firstTime: true
        };

        targets.pushObject(target);
      });
    }

    this.appendToQueue(target, 'pushObject', item);
  },

  removeItem: function removeItem(targetName, item) {
    var targets = this.get('targets');
    var target = targets.findBy('name', targetName);

    this.appendToQueue(target, 'removeObject', item);
  },

  appendToQueue: function appendToQueue(target, method, item) {
    this.get('queue').pushObject({ target: target, method: method, item: item });

    if (!this.get('targets').isAny('isAnimating')) {
      this.flushQueue();
    }
  },

  flushQueue: function flushQueue() {
    var queue = this.get('queue');

    queue.forEach(function (_ref) {
      var target = _ref.target;
      var method = _ref.method;
      var item = _ref.item;

      target.items[method](item);
    });

    queue.clear();
  },

  didAnimate: function didAnimate() {
    if (this.get('queue.length')) {
      this.flushQueue();
    } else {
      this.cleanTargets();
    }
  },

  cleanTargets: function cleanTargets() {
    var targets = this.get('targets');

    if (targets) {
      var targetsToRemove = targets.filter(function (target) {
        var firstTime = target.firstTime;
        target.firstTime = false;

        return !firstTime && !target.isAnimating && target.items.get('length') === 0;
      });

      targets.removeObjects(targetsToRemove);
    }
  }
});
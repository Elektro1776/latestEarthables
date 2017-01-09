import Ember from 'ember';
import layout from '../templates/components/liquid-target-container';

var inject = Ember.inject;
var computed = Ember.computed;
var service = inject.service;

export default Ember.Component.extend({
  layout: layout,
  classNames: ['liquid-target-container'],
  classNameBindings: ['hasTargets'],

  hasTargets: computed.bool('liquidTargetService.targets.length'),
  liquidTargetService: service('liquid-target')
});
define('ghost-admin/initializers/ember-cli-fastclick', ['exports', 'ember'], function (exports, _ember) {
  var schedule = _ember['default'].run.schedule;

  var EmberCliFastclickInitializer = {
    name: 'fastclick',

    initialize: function initialize() {
      schedule('afterRender', function () {
        FastClick.attach(document.body);
      });
    }
  };

  exports['default'] = EmberCliFastclickInitializer;
});
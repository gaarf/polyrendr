var BaseApp = require('rendr/shared/app'),
    $scriptjs = function() {};

if(typeof document !== "undefined") {
  $scriptjs = require('scriptjs');
}

module.exports = BaseApp.extend({
  // @client
  start: function() {
    // Show a loading indicator when the app is fetching.
    this.router.on('action:start', function() { this.set({loading: true});  }, this);
    this.router.on('action:end',   function() { this.set({loading: false}); }, this);

    // Call 'super'.
    BaseApp.prototype.start.call(this);
  },

  // add our client-side script loading library
  $script: $scriptjs
});

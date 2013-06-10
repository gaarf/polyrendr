var BaseAppView = require('rendr/shared/base/app_view');

var $body = $('body');

module.exports = BaseAppView.extend({
  postInitialize: function() {
    this.app.on('change:loading', function(app, loading) {
      $body.toggleClass('loading', loading);
    }, this);

    var router = this.app.router
      , scrollPositions = {};

    $(window).on('scroll', function() {
      scrollPositions[router.currentFragment] = window.scrollY;
    });
    router.on('action:end', function() {
      window.scrollTo(0, scrollPositions[router.currentFragment] || 0);
    });
  }


});

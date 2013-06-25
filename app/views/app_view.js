var BaseAppView = require('rendr/shared/base/app_view');

var $body = $('body');

module.exports = BaseAppView.extend({
  postInitialize: function() {
    this.app.on('change:loading', function(app, loading) {
      $body.toggleClass('loading', loading);
    }, this);

    var router = this.app.router
      , scrollPositions = {}
      , $win = $(window)
      , $navlinks = $('.navbar ul.nav li');

    $win.on('scroll', function() {
      scrollPositions[router.currentFragment] = $win.scrollTop();
      router.currentView.trigger('window:scroll', $win);
    });

    router.on('action:end', function() {
      var f = router.currentFragment;

      $win.scrollTop(scrollPositions[f] || 0);

      $navlinks
        .removeClass('active')
        .find('a[href$="'+f+'"]')
          .closest('.nav > li')
            .addClass('active');

    });
  }


});

var BaseView = require('../base_view');

module.exports = BaseView.extend({
  className: 'home_stripe_view'

, postRender: function() {
    this.$el.append(
      '<p>' + Date.now() + ' <small>this view was hydrated</small></p>'
    );
  }

});
module.exports.id = 'home/stripe';


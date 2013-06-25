var BaseView = require('../base_view');

module.exports = BaseView.extend({
  className: 'home_stripe_view'

, postRender: function() {
    this.app.$script('https://checkout.stripe.com/v2/checkout.js', 'StripeCheckout');
  }

, onToken: function(token) {
    console.log('token!', this, arguments);
  }

, events: {

    'click button': function() {
      var onToken = this.onToken.bind(this);

      this.app.$script.ready('StripeCheckout', function() {

        StripeCheckout.open({
          key:         'pk_test_rFXHL6pZdWlRUnALxTmkdqDX',
          amount:      5000,
          currency:    'usd',
          name:        'PolyRendr',
          description: 'A serving of AWESOME',
          token:       onToken
        });

      });
    }

  }

});
module.exports.id = 'home/stripe';


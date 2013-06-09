var _ = require('underscore');

module.exports = {

  index: function(params, callback) {
    var spec = {
      collection: {
      	collection: params.topic ? 'SplashTopic' : 'PopularFashion',
      	params: params
      }
    };
    this.app.fetch(spec, callback);
  }

};

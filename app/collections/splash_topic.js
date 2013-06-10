var Collage = require('../models/collage')
  , Base = require('./base');

module.exports = Base.extend({
    model: Collage
  , api: 'polyvore'
  , url: '/cgi/splash.topic?topic=:topic'

  , initialize: function(models, options) {
      Base.prototype.initialize.call(this, models, options);

      if(!this.options.topic) { // missing when hydrated
        var topic = this.options.params.topic;
        this.options.topic = topic; // used by getUrl
      }
    }

  , parse: function(res, modify) {
      return Base.prototype.parse.call(this, res.articles, modify);
    }

});
module.exports.id = 'SplashTopic';

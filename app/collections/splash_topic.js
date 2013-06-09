var Collage = require('../models/collage')
  , Base = require('./base');

module.exports = Base.extend({
    model: Collage
  , api: 'polyvore'
  , url: '/cgi/splash.topic?topic=:topic'


  , parse: function(res, modify) {
      return Base.prototype.parse.call(this, res.articles, modify);
    }

});
module.exports.id = 'SplashTopic';

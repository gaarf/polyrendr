var Collage = require('../models/collage')
  , Base = require('./base');

module.exports = Base.extend({
    model: Collage
  , api: 'polyvore'
  , url: '/cgi/popular.fashion'


  , parse: function(res, modify) {
      return Base.prototype.parse.call(this, res.result.items, modify);
    }

});
module.exports.id = 'PopularFashion';

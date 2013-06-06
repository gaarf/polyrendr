var Base = require('./base');

module.exports = Base.extend({
  api: 'polyvore'
, url: '/cgi/set?.out=json&id=:id'
, idAttribute: 'id'

, parse: function(res) {
    return res.collection || res;
  }
});
module.exports.id = 'Collage';

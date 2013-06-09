var Base = require('./base');

module.exports = Base.extend({
  api: 'polyvore'
, url: '/cgi/set?.out=json&id=:id'
, idAttribute: 'id'

, jsonKey: 'collection'

});
module.exports.id = 'Collage';

var Collage = require('../models/collage')
  , Base = require('./base')
  , _ = require('underscore');

module.exports = Base.extend({
    model: Collage

  , api: 'polyvore'

  , url: function() {
      var url;
      if(!this.options.topic) {
        url = '/cgi/popular.fashion?';
      }
      else {
        url = '/cgi/splash.topic?topic=:topic';
      }
      url += '&.out=json';
      return url;
    }

  , parse: function(res) {
      return _(res.articles || res.result.items)
        .chain()
        .filter(function(o){
            return _.isObject(o) && o.object_class === 'set';
        })
        .map(function(o){
            o.id = o.object_id;
            o.clickurl = o.clickurl
              .replace(/^\.\./, '')
              .replace(/set\?id=/, 'set/');
            return o;
        })
        .value();
    }

});
module.exports.id = 'Collages';

var _ = require('underscore');

module.exports = {

  index: function(params, callback) {
    var spec = {
      collection: {
      	collection: 'Collages',
      	params: _.defaults(params, { topic:false })
      }
    };
    this.app.fetch(spec, callback);
  }

};

var _ = require('underscore');

module.exports = {

  index: function(params, callback) {
    var spec = {
      collection: {
      	collection: params.topic ? 'SplashTopic' : 'PopularFashion',
      	params: params
      }
    };
    this.app.fetch(spec, function(err, res){
    	if(params.topic) {
	    	res.collection.params.topic = params.topic; // topic is missing sometimes, why?
    	}
    	callback(err, res);
    });
  }

};

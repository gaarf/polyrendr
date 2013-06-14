var BaseView = require('../base_view');

module.exports = BaseView.extend({
  className: 'dry_collage_view'

, getTemplateData: function() {
  	var m = this.options.model || {};
  	if(m.toJSON) {
  		m = m.toJSON();
  	}
  	if(m.imgurls) {
  		m.imgurl = m.imgurls[0];
  	}
  	return m;
  }

, events: {

    'click .js-like': function(e) {
      e.stopPropagation(); // in case a parent view also listens for click .js-like
      this.model.set('liked', !this.model.get("liked"));
      this.render();
    }

  }
});
module.exports.id = 'dry/collage';

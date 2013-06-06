var BaseView = require('../base_view');

module.exports = BaseView.extend({
  className: 'topic_index_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    var topic = this.collection.options.topic || 'Popular+Fashion';
    data.title = topic.replace(/\+/g, ' ');
    return data;
  }

});
module.exports.id = 'topic/index';

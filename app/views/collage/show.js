var BaseView = require('../base_view');

module.exports = BaseView.extend({
  className: 'collage_show_view'

, getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.collage = this.model;
    return data;
  }

});
module.exports.id = 'collage/show';

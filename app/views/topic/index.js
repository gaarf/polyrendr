var BaseView = require('../base_view');

module.exports = BaseView.extend({
  className: 'topic_index_view'

, getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    var topic = this.collection.options.topic || 'Popular+Fashion';
    data.title = topic.replace(/\+/g, ' ');
    return data;
  }

, postRender: function() {
    var $ul = this.$('ul.collages');

    this.collection.on('add', function(set) {
      var View = BaseView.getView('dry/collage')
        , $li = $('<li>');
      (new View({ model: set }))
        .render()
        .$el
          .appendTo($li);
      $li.appendTo($ul);
    }, this);

    this.collection.on('lastpage', function() {
      alert('there are no more pages!');
      this.$('.js-more').hide();
    }, this);

  }

, events: {
    'click .js-more': function(e) {
      e.stopPropagation();
      this.collection.fetchMore();
    }

  }

});
module.exports.id = 'topic/index';

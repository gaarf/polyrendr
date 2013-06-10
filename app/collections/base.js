var _ = require('underscore')
  , RendrBase = require('rendr/shared/base/collection');

module.exports = RendrBase.extend({

  initialize: function(models, options) {
    RendrBase.prototype.initialize.call(this, models, options);
    _.defaults(this.meta, { nextpage: 2 });
  }

, defaultParams: {
    '.out': 'json'
  }

, parse: function(res, modify) {
    var out = _(res)
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
    return RendrBase.prototype.parse.call(this, out, modify);
  }

, fetchMore: function(e){

    var lenBefore = this.length
      , app = this.app;

    app.set({loading: true});

    this.fetch({
        update: true
      , remove: false
      , data: {
          page: this.meta.nextpage++
        , topic: this.params.topic
        }
      , success: _.bind(function() {
          if(this.length <= lenBefore) {
            this.trigger('lastpage', this.meta.nextpage-1);
            this.meta.nextpage = 0;
          }

          // ensure hydrated models have a ref to app
          this.each(function(model) { model.app = app; });

          // forget the page param before storing, so that we when we navigate
          // back, fetcher will give us the collection with updated contents
          delete this.params.page;
          this.store();

        }, this)

      , complete: function() {
          app.set({loading: false});
        }

    });

  }
});

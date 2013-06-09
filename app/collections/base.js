var _ = require('underscore')
  , RendrBase = require('rendr/shared/base/collection');

module.exports = RendrBase.extend({

  _page: 1

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

    this._page++;

    var lenBefore = this.length
      , paramsBefore = this.options.params;

      console.log(paramsBefore);

    this.fetch({
        update: true
      , remove: false
      , data: {
          page: this._page
        }
      , success: _.bind(function() {
          if(this.length <= lenBefore) {
            this.trigger('lastpage', this._page);
          }

          this.store();
          this.app.fetcher.collectionStore.set(this, paramsBefore);

        }, this)
    });

  }
});

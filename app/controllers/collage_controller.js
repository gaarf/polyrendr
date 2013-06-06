module.exports = {

  show: function(params, callback) {
    var spec = {
      model: {model: 'Collage', params: params}
    };
    this.app.fetch(spec, callback);
  }

};

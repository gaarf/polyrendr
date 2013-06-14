var should = require("should");
var Collage = require('../../../app/models/collage');

describe('Collage', function() {

  it('has a good looking url', function() {

    var that = new Collage();
	that.getUrl().should.match(/^\/cgi\/set.+\.out=json/);

  });

});

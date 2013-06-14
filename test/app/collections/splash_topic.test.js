var should = require("should");
var SplashTopic = require('../../../app/collections/splash_topic');

describe('SplashTopic', function() {

  it('receives topic for url from options', function() {

    var collection = new SplashTopic([], {topic:'yabadabadoo'});
    collection.getUrl().should.include('topic=yabadabadoo');

  });

  it('receives topic for url from options.params', function() {

    var collection = new SplashTopic([], {params: {topic:'yabadabadoo'} });
    collection.getUrl().should.include('topic=yabadabadoo');

  });


});

var should = require("should");
var TopicIndexView = require('../../../app/views/topic/index');
var SplashTopic = require('../../../app/collections/splash_topic');
var PopularFashion = require('../../../app/collections/popular_fashion');

describe('TopicIndexView', function() {

  it('should have decoded title from collection options in getTemplateData', function() {

    var collection = new SplashTopic([], {topic:'Hello+World'});

    var view = new TopicIndexView({collection:collection});

    view.getTemplateData().title.should.equal('Hello World');
  });



  it('should have default title if topic is missing', function() {

    var collection = new PopularFashion();

    var view = new TopicIndexView({collection:collection});

    view.getTemplateData().title.should.equal('Popular Fashion');
  });



});

module.exports = function(match) {
  match('',                   'home#index');

  match(':seo/set/:id',       'collage#show');

  match('topic',              'topic#index');
  match('topic/:topic',       'topic#index');

};

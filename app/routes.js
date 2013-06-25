module.exports = function(match) {
  match('',                   'home#index');

  match('stripe',             'home#stripe');

  match(':seo/set/:id',       'collage#show');

  match('topic',              'topic#index');
  match('topic/:topic',       'topic#index');

};



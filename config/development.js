// Config settings for NODE_ENV=development

exports.config = {
  assets: {
    minify: false,
    cdn: {
      protocol: 'http',
      cnames: ['localhost'],
      pathPrefix: ''
    }
  },

  api: {
    'default': {
      host: 'api.github.com',
      protocol: 'https'
    },
    'polyvore': {
      host: 'www.polyvore.com',
      protocol: 'http'
    }
  },

  sessionSecret: 'foobar',

  rendrApp: {
    someProperty: 'someValue'
  }
};

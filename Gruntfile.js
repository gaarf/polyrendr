var path = require('path');

var stylesheetsDir = 'assets/stylesheets';
var rendrDir = 'node_modules/rendr';
var rendrModulesDir = rendrDir + '/node_modules';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bgShell: {
      runNode: {
        cmd: 'node ./node_modules/nodemon/nodemon.js index.js',
        bg: true
      },
      runTests: {
        cmd: 'npm test',
        bg: false
      },
      runRedis: {
        cmd: 'redis-server /usr/local/etc/redis.conf',
        bg: false
      },
    },

    less: {
      compile: {
        options: {
          paths: [stylesheetsDir],
          yuicompress: false
        },
        files: {
          'public/styles.css': stylesheetsDir + '/index.less'
        }
      }
    },

    handlebars: {
      compile: {
        options: {
          namespace: false,
          commonjs: true,
          processName: function(filename) {
            return filename.replace('app/templates/', '').replace('.hbs', '');
          }
        },
        src: "app/templates/**/*.hbs",
        dest: "app/templates/compiledTemplates.js",
        filter: function(filepath) {
          var filename = path.basename(filepath);
          // Exclude files that begin with '__' from being sent to the client,
          // i.e. __layout.hbs.
          return filename.slice(0, 2) !== '__';
        }
      }
    },

    watch: {
      scripts: {
        files: 'app/**/*.js',
        tasks: ['rendr_stitch'],
        options: {
          interrupt: true
        }
      },
      templates: {
        files: 'app/**/*.hbs',
        tasks: ['handlebars'],
        options: {
          interrupt: true
        }
      },
      stylesheets: {
        files: stylesheetsDir + '/**/*.less',
        tasks: ['less'],
        options: {
          interrupt: true
        }
      }
    },

    rendr_stitch: {
      compile: {
        options: {
          dependencies: [
            'assets/vendor/**/*.js'
          ],
          npmDependencies: {
            underscore: '../rendr/node_modules/underscore/underscore.js',
            backbone: '../rendr/node_modules/backbone/backbone.js',
            handlebars: '../rendr/node_modules/handlebars/dist/handlebars.runtime.js',
            async: '../rendr/node_modules/async/lib/async.js',
            scriptjs: '../scriptjs/dist/script.js'
          },
          aliases: [
            {from: rendrDir + '/client', to: 'rendr/client'},
            {from: rendrDir + '/shared', to: 'rendr/shared'}
          ]
        },
        files: [{
          dest: 'public/mergedAssets.js',
          src: [
            'app/**/*.js',
            rendrDir + '/client/**/*.js',
            rendrDir + '/shared/**/*.js'
          ]
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-bg-shell');
  grunt.loadNpmTasks('grunt-rendr-stitch');

  grunt.registerTask('compile', ['handlebars', 'rendr_stitch', 'less']);

  // Run the server and watch for file changes
  grunt.registerTask('server', ['bgShell:runNode', 'compile', 'watch']);

  // Run REDIS
  grunt.registerTask('redis', ['bgShell:runRedis']);

  // Run the test suite
  grunt.registerTask('test', ['bgShell:runTests']);

  // Default task(s).
  grunt.registerTask('default', ['compile']);
};

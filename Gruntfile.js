module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);
  const sass = require('node-sass');

  var config = {};

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: {
          "_ui/css/main.css": ["_ui-src/sass/main.scss"],
        },
      },
    },
    concat: {
      options: {
        separator: ";",
        sourceMap: true,
      },
      js: {
        files: {
          "_ui/js/main.js": ["_ui-src/js/js1.js", "_ui-src/js/js2.js"],
        },
      },
    },
    watch: {
      js: {
        files: ["_ui-src/js/*.js"],
        tasks: ["concat"],
        options: {
          interrupt: true,
        },
      },
      sass: {
        files: ["_ui-src/sass/*.scss"],
        tasks: ["sass"],
        options: {
          interrupt: true,
        },
      },
    },
  });

  
  grunt.registerTask("build-dist", ["sass", "concat"]);
  grunt.registerTask("default", ["sass", "concat"]);
};

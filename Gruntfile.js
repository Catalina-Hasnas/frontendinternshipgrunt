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
          "css/main.css": "sass/main.scss",
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
          "dist/main.js": ["js/js1.js", "js/js2.js"],
        },
      }
    },
    watch: {
      js: {
        files: ["js/*.js"],
        tasks: ["concat"],
        options: {
          interrupt: true,
        },
      },
      sass: {
        files: ["sass/*.scss"],
        tasks: ["sass"],
        options: {
          interrupt: true,
        },
      },
    },
  });

  grunt.registerTask("default", ["sass", "concat"]);
  grunt.registerTask("build-dist", ["sass", "concat"]);
};

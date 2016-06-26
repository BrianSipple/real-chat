'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const environment = process.env.EMBER_ENV;
const isProductionLikeBuild = ['production', 'staging'].indexOf(environment) > -1;
const isTesting = environment === 'test';

const postCSSPluginOpts = require('./build/_postcss-plugin-options');

const cssImport = require('postcss-import');
const cssCustomProperties = require('postcss-custom-properties');
const cssCSSVariables = require('postcss-css-variables');
const cssCustomMedia = require('postcss-custom-media');
const cssMediaVariables = require('postcss-media-variables');
const cssCalc = require('postcss-calc');
const cssWring = require('csswring');
const cssMQPacker = require('css-mqpacker');
const cssNext = require('postcss-cssnext');
const cssReporter = require('postcss-reporter');
const cssNested = require('postcss-nested');


module.exports = function(defaults) {
  const app = new EmberApp(defaults, {

    babel: {
      includePolyfill: true
    },

    /* Use PostCSS to create our CSS Processor! */
    postcssOptions: {
      plugins: [
        { module: cssImport },

        /* ----------- Ordering for Custom media query processing with calc'd variables ----------- */
        /* NOTE: abide by order defined here: https://github.com/WolfgangKluge/postcss-media-variables#usage) */
        { module: cssMediaVariables },
        { module: cssCSSVariables },
        { module: cssCustomMedia },
        {
          module: cssCustomProperties,
          options: postCSSPluginOpts.customProperties
        },
        { module: cssCalc },
        { module: cssMediaVariables },
        /* ----------- /end ordering for Custom media query processing ----------- */

        { module: cssNested },

        { module: cssNext },

        { module: cssMQPacker },

        // minify all the things!
        { module: cssWring },

        // report all the things!
        { module: cssReporter }
      ]
    },

    sourcemaps: {
      enabled: isProductionLikeBuild,
      extensions: ['js', 'css']
    },

    minifyCSS: { enabled: isProductionLikeBuild },
    minifyJS: { enabled: isProductionLikeBuild },

    svgstore: {
      // exclude all processed source files to prevent duplication
      // when Ember-CLI-broccoli sends stuff in public to /dist (https://github.com/salsify/ember-cli-svgstore#usage)
      excludeSourceFiles: true,
      files: {
        sourceDirs: [ 'public/assets/icons' ],
        outputFile: '/assets/icons.svg'
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('vendor/savvy-css/savvy.min.css');

  return app.toTree();
};

// filters
const searchFilter = require("./assets/filters/searchFilter");
const incrementFilter = require("./assets/filters/incrementFilter");
const asPostDateFilter = require("./assets/filters/asPostDateFilter");
const splitFilter = require('./assets/filters/splitFilter');
const first60Chars = require('./assets/filters/first60chars');
const typeOfFilter = require('./assets/filters/typeOfFilter');
const lowerCase = require('./assets/filters/lowercase');
const getRootDir = require('./assets/filters/getRootDir');
const highlightWords = require('./assets/filters/highlightWords');
const toAltText = require('./assets/filters/toAltText');

// shortcodes
const shortcodesConfig = require('./assets/shortcodes/shortcodes');

// collections
const collectionsConfig = require('./assets/collections/collections');

// my_plugins
const iconsConfig = require('./assets/plugins/icons');
const pathConfig = require('./assets/plugins/pathCheck');



// plugins
const codeblocks = require('@code-blocks/eleventy-plugin');
const graphviz = require('@code-blocks/graphviz');
const pluginIcons = require('eleventy-plugin-icons');
const charts = require('@code-blocks/charts');
const tables = require('@code-blocks/tables');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// other
const fs = require("node:fs");

module.exports = function (eleventyConfig) {
  // include the shortcodes
  shortcodesConfig(eleventyConfig);
  // include the collections
  collectionsConfig(eleventyConfig);
  // inclde the plugins
  iconsConfig(eleventyConfig);

  let markdownLib = require('markdown-it')({
    html: true,
    breaks: true,
    linkify: true
  })
    .use(require('markdown-it-bracketed-spans'))
    .use(require('markdown-it-attrs'));

  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addFilter("pathExists", function(filePath) {
         return pathConfig.pathExists(filePath, eleventyConfig);
     });
  eleventyConfig.addFilter("search", searchFilter);
  eleventyConfig.addFilter("asPostDate", asPostDateFilter);
  eleventyConfig.addFilter("increment", incrementFilter);
  eleventyConfig.addFilter("split", splitFilter);
  eleventyConfig.addFilter("typeOf", typeOfFilter);
  eleventyConfig.addFilter("first60", first60Chars);
  eleventyConfig.addFilter("lowercase", lowerCase);
  eleventyConfig.addFilter("highlightWords", highlightWords);
  eleventyConfig.addFilter("getRootDir", getRootDir);
  eleventyConfig.addFilter("toAltText", toAltText);



  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(codeblocks([
    charts,
    tables,
    graphviz
  ]));
  eleventyConfig.addWatchTarget("./assets/audio");
  eleventyConfig.addWatchTarget("./assets/h5p");
  // copy files
  eleventyConfig.addPassthroughCopy({
    './assets/images/hero_images': '/hero_images',
    "./assets/h5p": "/h5p",
    "./assets/charts": "/charts",
    "./assets/audio": "/audio",
    "./assets/css": "/css",
    "./assets/fonts": "/fonts",
    "./assets/js": "/js",
    "./assets/data": "/data",
    "./assets/php/contact": "/pages/contact",
    "./assets/images/**/*": "/images",
    "./assets/json": "/json",
    './content/robots.txt': '/robots.txt',
    './assets/google/google335b67ae6573da23.html': 'google335b67ae6573da23.html'
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid",
      "11ty.js",
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // These are all optional:
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    },

    // Optional items:
    // If your site deploys to a subdirectory, change `pathPrefix`.
    pathPrefix: "/",
  };
};

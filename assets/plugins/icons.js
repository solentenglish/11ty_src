const pluginIcons = require('eleventy-plugin-icons');

module.exports = function (eleventyConfig) {
  // console.log('called');
  eleventyConfig.addPlugin(pluginIcons, {
    sources: [{ name: 'lucide', path: 'node_modules/lucide-static/icons' }],
  });
};
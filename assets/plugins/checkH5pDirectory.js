const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode('h5pExists', function(index) {
    const h5pPath = path.join(__dirname, 'h5p', index);
    try {
      fs.accessSync(h5pPath, fs.constants.F_OK);
      return true; // Directory exists
    } catch (err) {
      return false; // Directory does not exist
    }
  });
};

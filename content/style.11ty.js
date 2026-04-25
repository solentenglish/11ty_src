const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');

const root = path.join(__dirname, '..');

module.exports = class {
  data() {
    return {
      permalink: '/style.css',
      eleventyExcludeFromCollections: true
    };
  }

  render() {
    const files = [
      path.join(root, 'assets/style.css'),
      path.join(root, 'assets/css/easy-responsive-shortcodes.css')
    ];
    const combined = files.map(f => fs.readFileSync(f, 'utf8')).join('\n');
    return new CleanCSS({}).minify(combined).styles;
  }
};

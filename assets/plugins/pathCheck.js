const fs = require('fs');
const path = require('path');

function pathExists(filePath, eleventyConfig) {
    // Determine the base directory based on the NODE_ENV environment variable
        let baseDir = process.env.NODE_ENV === 'production' ? '' : '/assets';
        let fullPath = path.join('./', baseDir, filePath);
        return fs.existsSync(fullPath);
}

module.exports = {
    pathExists
};
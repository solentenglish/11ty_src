// shared-eleventy-config.js
const path = require('path');
const fs = require('fs');

function findFileWithExtension(directory, extension) {
    const files = fs.readdirSync(directory);
    return files.find(file => path.extname(file) === extension);
}

function getFileBaseName(file) {
    return path.basename(file, path.extname(file));
}

module.exports = {
    eleventyComputed: {
        index: (data, dir) => {
            const files = fs.readdirSync(dir);
            const file = files.find(file => file === data.page.fileSlug + '.md');
            return file ? path.basename(file, '.md').replace(/-/g, ' ') : '';
        },
        jpg_name: (data, dir) => {
            const index = data.index;
            if (!index) return '';
            
            const heroImagesDir = path.join(dir, '../../../../assets/images/hero_images/', index);
            if (!fs.existsSync(heroImagesDir)) return '';
            
            return findFileWithExtension(heroImagesDir, '.jpg');
        }
    }
};

// 11tydata.js
const sharedConfig = require('../../../../assets/modules/blog_post_config');
const path = require('path');

module.exports = {
    eleventyComputed: {
        index: data => sharedConfig.eleventyComputed.index(data, __dirname),
        jpg_name: data => sharedConfig.eleventyComputed.jpg_name(data, __dirname)
    }
};
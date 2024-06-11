const elasticlunr = require("elasticlunr");

module.exports = function (collection) {
  // what fields we'd like our index to consist of
  var index = elasticlunr(function () {
    this.addField("description");
    this.addField("tags");
    this.setRef("id");
  });

  // loop through each page and add it to the index
  collection.forEach((page) => {
    index.addDoc({
      id: page.url,
      description: page.template.frontMatter.data.description,
      tags: page.template.frontMatter.data.tags,
    });
  });

  return index.toJSON();
};
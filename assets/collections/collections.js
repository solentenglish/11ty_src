module.exports = function(eleventyConfig) {

eleventyConfig.addCollection("sortedPostsAcOne", function(collection) {
    // Clone the original "posts" collection to avoid modifying it directly
    const clonedCollection = [...collection.getFilteredByTag("academic_one")];

    // Sort the cloned collection based on the 'title' front matter
    return clonedCollection.sort((a, b) => {
      const titleA = a.data.index || '';  // Default value if 'title' is not defined
      const titleB = b.data.index || '';

      return titleA.localeCompare(titleB);
    });
  });

  eleventyConfig.addCollection("sortedPostsAcTwo", function(collection) {
    // Clone the original "posts" collection to avoid modifying it directly
    const clonedCollection = [...collection.getFilteredByTag("academic_two")];

    // Sort the cloned collection based on the 'title' front matter
    return clonedCollection.sort((a, b) => {
      const titleA = a.data.index || '';  // Default value if 'title' is not defined
      const titleB = b.data.index || '';

      return titleA.localeCompare(titleB);
    });
  });

  eleventyConfig.addCollection("sortedPostsGeOne", function(collection) {
    // Clone the original "posts" collection to avoid modifying it directly
    const clonedCollection = [...collection.getFilteredByTag("general_one")];

    // Sort the cloned collection based on the 'title' front matter
    return clonedCollection.sort((a, b) => {
      const titleA = a.data.index || '';  // Default value if 'title' is not defined
      const titleB = b.data.index || '';

      return titleA.localeCompare(titleB);
    });
  });

  eleventyConfig.addCollection("sortedPostsGeTwo", function(collection) {
    // Clone the original "posts" collection to avoid modifying it directly
    const clonedCollection = [...collection.getFilteredByTag("general_two")];

    // Sort the cloned collection based on the 'title' front matter
    return clonedCollection.sort((a, b) => {
      const titleA = a.data.index || '';  // Default value if 'title' is not defined
      const titleB = b.data.index || '';

      return titleA.localeCompare(titleB);
    });
  });

  eleventyConfig.addCollection("sortedPosts", function(collection) {
    // Clone the original "posts" collection to avoid modifying it directly
    const clonedCollection = [...collection.getFilteredByTag("post")];

    // Sort the cloned collection based on the 'title' front matter
    return clonedCollection.sort((a, b) => {
      const titleA = a.data.index || '';  // Default value if 'title' is not defined
      const titleB = b.data.index || '';

      return titleB.localeCompare(titleA);
    });
  });

  eleventyConfig.addCollection('tagList', collection => {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  

  const tagsSet = {};
  const allTags = [];
  const noOfTags = [];
  collection.getAll().forEach(item => {
    if (!item.data.tags) return;
      item.data.tags.filter(
        tag => !['post', 'page', 'all', 'main_menu', 'index', 'academic_two', 'academic_one', 'general_one', 'general_two'].includes(tag)
      ).forEach(
        tag => {
          if (tag !== '' || null) {
            allTags.push(tag);
          } else {
            allTags.push('oossops');
          }
        }
      );
    });
    var unique = allTags.filter(onlyUnique);
    unique.forEach(
      tag => {
        let count = 0;
        allTags.forEach(key => {
          if (key == tag) {
            count = count + 1;
          }
        })
        noOfTags.push(count);
      }
    );
    tagsSet.tag_value = unique.filter((str) => str !== '');
    tagsSet.tag_quantity = noOfTags.filter((str) => str !== '');
    var x = 0;
    var index = 0;
    var myobject = [];
    tagsSet.tag_value.forEach(function (value, i) {
        temp = {};
        temp.tag = tagsSet.tag_value[i];
        temp.no = tagsSet.tag_quantity[i];
        myobject.push(temp);
        x = x +1;
        index = i
    })
    myobject.sort(function(a, b) {
      return parseFloat(b.no) - parseFloat(a.no);
    });
    myobject = myobject.slice(0, 30);
    myobject = myobject.sort((a, b) => 0.5 - Math.random());
    return myobject;
  });

}
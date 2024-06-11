module.exports = function(url) {
  if (url) {
    return url.split("/")[1];
  }
  return [];
};
module.exports = function(str, separator) {
  if (str) {
    return str.split(separator);
  }
  return [];
};
module.exports = function (dateObj) {
  const { DateTime }        = require("luxon");
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
};
module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("currentTime", async function() {
    // Get the current date and time
    const currentDate = new Date();

    // Set the time zone to London
    const londonTimeZone = 'Europe/London';
    const options = {
      timeZone: londonTimeZone,
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      second: '2-digit'
    };

    // Format the time according to the London time zone
    const londonTime = new Intl.DateTimeFormat('en-GB', options).format(currentDate);
    const [hour, minute, second] = londonTime.split(':').map(Number);

    let period;

    // Determine if it's morning, afternoon, evening, or night
    if (hour >= 5 && hour < 12) {
      period = 'in the morning';
    } else if (hour >= 12 && hour < 17) {
      period = 'in the afternoon';
    } else if (hour >= 17 && hour < 20) {
      period = 'in the evening';
    } else if (hour >= 20 && hour < 24) {
      period = 'at night';
    } else {
      period = 'in the morning';
    }

    let displayHour = hour;
    if (displayHour === 0) {
      displayHour = 12; // Midnight should be represented as 12 in 12-hour clock
    } else if (displayHour > 12) {
      displayHour = displayHour - 12; // Convert to 12-hour clock
    }

    // Display the result
    return `${displayHour} ${period}`;
  });
}


module.exports = function(content) {
    // Check if content is a string
    if (typeof content === 'string' || content instanceof String) {
        // Return the first 69 characters
        return content.slice(0, 60);
    } else {
        // If content is not a string, return an empty string
        return '';
    }
};
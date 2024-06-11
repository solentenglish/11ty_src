module.exports = function(fileName) {
    // Remove file extension
    let altText = fileName.replace(/\.[^/.]+$/, '');

    // Replace underscores with spaces
    altText = altText.replace(/_/g, ' ');

    // Capitalize the first letter of each word
    altText = altText.replace(/\b\w/g, function(match) {
        return match.toUpperCase();
    });
    console.log(altText);
    return altText;
}
module.exports = function(answer, glossary) {
    const replacedWords = new Set(glossary.map(entry => entry.glossed_word));
    
    // Create a regular expression to match any glossary word in the text
    const regex = new RegExp(`\\b(${Array.from(replacedWords).join('|')})\\b`, 'gi');

    // Replace matching words with a span element
    const result = answer.replace(regex, '<span class="vocab">$&</span>');

    return result;
}
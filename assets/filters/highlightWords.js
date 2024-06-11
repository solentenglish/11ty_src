module.exports = function(answer, glossary) {
    const replacedWords = {};
    glossary.forEach(entry => {
        const word = entry.glossed_word;
        if (!replacedWords[word]) {
            const regex = new RegExp(`\\b${word}\\b`, "i");
            answer = answer.replace(regex, `<span class="vocab">${word}</span>`);
            replacedWords[word] = true;
        }
    });
    return answer;
}

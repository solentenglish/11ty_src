module.exports = {
    version: '0.2',
    language: 'en-GB',
    ignoreRegExpList: [
            'nunjucksExpression',
            'markdownCodeBlock',
            'markdownInlineCode',
            'properNouns',
            'eleventyVariable'
        ],
        patterns: [
            {
                name: 'nunjucksExpression',
                pattern: /{%.*?%}/gis,
            },
            {
                name: 'eleventyVariable',
                pattern: /{{.*?}}/gis,
            },
            {
                name: 'markdownCodeBlock',
                pattern: /`{3}[\s\S]*?`{3}(?=\n|$)/gi,
            },
            {
                name: 'markdownInlineCode',
                pattern: /`[^`]*`/gi,
            },
            {
                name: 'properNouns',
                pattern: /(?<=\s|^|[^\w\s])[A-Z][a-z]+(?=\s|$|[^\w\s])/g,
            },
        ],
        words: [
        // Misc
        'carbs',
        'childfree',
        'discommensurate',
        'vocab',
        'conj',
        'wordcount',
        'oftentimes',
        'hometown'
    ],
};

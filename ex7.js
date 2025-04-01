// Bilingual lexicon (English to Swedish)
const lexicon = {
    "merry": "god",
    "christmas": "jul",
    "and": "och",
    "happy": "gott",
    "new": "nytt",
    "year": "år"
};

// Function to translate an English phrase into Swedish
function translateToSwedish(phrase) {
    return phrase
        .toLowerCase()
        .split(" ")
        .map(word => lexicon[word] || word) // Translate if found, else keep original
        .join(" ");
}

console.log(translateToSwedish("Merry Christmas and Happy New Year"));
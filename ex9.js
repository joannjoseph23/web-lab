function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

// Example usage
console.log(filterLongWords(["apple", "banana", "strawberry", "kiwi"], 5)); 
// Output: ["banana", "strawberry"]

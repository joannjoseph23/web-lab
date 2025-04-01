function findLongestWord(words) {
    return Math.max(...words.map(word => word.length));
}

// Example usage
console.log(findLongestWord(["apple", "banana", "strawberry", "kiwi"])); // Output: 10

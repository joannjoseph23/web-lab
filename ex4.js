function translate(text) {
    let vowels = "aeiouAEIOU ";
    let result = "";

    for (let char of text) {
        if (vowels.includes(char)) {
            result += char; // Keep vowels and spaces as they are
        } else {
            result += char + "o" + char; // Double consonants with 'o' in between
        }
    }

    return result;
}

// Example usage
console.log(translate("this is fun")); // Output: "tothohisos isos fofunon"

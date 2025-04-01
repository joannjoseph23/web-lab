// Function to return the maximum of two numbers using if-else
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Function to return the maximum of three numbers
function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Function to check if a character is a vowel
function isVowel(char) {
    let vowels = "aeiouAEIOU";
    return vowels.includes(char);
}

// Example usage
console.log(max(10, 25));
console.log(maxOfThree(10, 25, 15));
console.log(isVowel('a'));
console.log(isVowel('b'));

function charFreq(str) {
    let freq = {};
    
    for (let char of str) {
        freq[char] = freq[char] ? freq[char] + 1 : 1;
    }

    return freq;
}

// Example usage
console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));

function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let operator = prompt("Enter the operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter the second number:"));

    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            result = "Error: Division by zero!";
        } else {
            result = num1 / num2;
        }
    } else {
        result = "Invalid operator!";
    }

    alert(`Result: ${result}`);
}

// Example usage
calculator();


function collectAndSortNames() {
    let names = [];
    let name;

    while ((name = prompt("Enter a name (or hit Cancel to finish):")) !== null) {
        names.push(name);
    }

    names.sort(); // Sort names alphabetically

    if (names.length > 0) {
        let list = "<ol>";
        names.forEach(name => {
            list += `<li>${name}</li>`;
        });
        list += "</ol>";

        document.body.innerHTML = list; // Display the ordered list on the page
    } else {
        alert("No names were entered.");
    }
}

// Example usage
collectAndSortNames();



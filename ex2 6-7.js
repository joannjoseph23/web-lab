function pluralize(noun, number) {
    if (noun === 'sheep' || noun === 'geese') {
        return `${number} ${noun}`;
    }

    if (number === 1) {
        return `${number} ${noun}`;
    } else {
        return `${number} ${noun}s`;
    }
}
console.log(pluralize('cat', 5));
console.log(pluralize('dog', 1)); 
console.log(pluralize('sheep', 3));
console.log(pluralize('goose', 2)); 
console.log(pluralize('geese', 2));

let choices = ['blue', 'green', 'red', 'yellow', 'purple'];
for (let i = 0; i < choices.length; i++) {
    let suffix;
    if (i === 0) {
        suffix = 'st';
    } else if (i === 1) {
        suffix = 'nd';
    } else if (i === 2) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }
    console.log(`My ${i + 1}${suffix} choice is ${choices[i]}.`);
}


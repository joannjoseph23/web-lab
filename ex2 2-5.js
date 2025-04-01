function mixUp(str1, str2) {
    let swappedStr1 = str2.slice(0, 2) + str1.slice(2);
    let swappedStr2 = str1.slice(0, 2) + str2.slice(2);
    return swappedStr1 + ' ' + swappedStr2;
}

console.log(mixUp('mix', 'pod'));

function fixStart(str) {
    let firstChar = str[0];
    let newStr = firstChar + str.slice(1).replace(new RegExp(firstChar, 'g'), '*');
    return newStr;
}
console.log(fixStart('babble')); 

function verbing(s) {
    if (s.length >= 3) {
        if (s.endsWith('ing')) {
            return s + 'ly';
        } else {
            return s + 'ing';
        }
    }
    return s;
}
console.log(verbing('swim'));
console.log(verbing('swimming')); 
console.log(verbing('go'));

function notBad(s) {
    const notIndex = s.indexOf('not');
    const badIndex = s.indexOf('bad');
    
    if (notIndex !== -1 && badIndex !== -1 && badIndex > notIndex) {
        return s.slice(0, notIndex) + 'good' + s.slice(badIndex + 3);
    }
    
    return s;
}
console.log(notBad('I am not that bad'));
console.log(notBad('I am not so bad')); 
console.log(notBad('I am not bad'));


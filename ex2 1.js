function squareNumber(num) {
    let result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}

function halfNumber(num) {
    let result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}

function percentOf(num1, num2) {
    let result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}

function areaOfCircle(radius) {
    let area = Math.PI * radius * radius;
    let roundedArea = area.toFixed(2); 
    console.log(`The area for a circle with radius ${radius} is ${roundedArea}.`);
    return parseFloat(roundedArea);
}


function performOperations(num) {
    let half = halfNumber(num);
    let squared = squareNumber(half);
    let area = areaOfCircle(squared);
    let percent = percentOf(area, squared);
    return percent; 
}

performOperations(5);

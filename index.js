


function printEvenOrOdd() {
    const choice = prompt("What do you want to print? Even or Odd?");
    if (choice !== null) {
        const count = parseInt(prompt(`How many ${choice} numbers do you want to print?`));
        if (!isNaN(count)) {
            let numbers = [];
            for (let i = 1; numbers.length < count; i++) {
                if ((choice.toLowerCase() === 'even' && i % 2 === 0) || 
                    (choice.toLowerCase() === 'odd' && i % 2 !== 0)) {
                    numbers.push(i);
                }
            }
            alert(`Here are the ${choice} numbers: ${numbers.join(', ')}`);
        } else {
            alert("Invalid input for count. Please enter a valid number.");
        }
    }
}

function checkFiniteOrInfinite() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 / num2;
        if (isFinite(result)) {
            alert(`The result of division is: ${result}`);
        } else {
            alert("Division is not possible due to infinite value.");
        }
    } else {
        alert("Invalid input. Please enter valid numbers.");
    }
}


















   

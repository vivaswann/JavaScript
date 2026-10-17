
function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;

        default:
            return "Invalid operator";
    }
}

console.log(calculator(10, 5, "+")); // 15
console.log(calculator(20, 4, "/")); // 5
console.log(calculator(8, 3, "*"));  // 24

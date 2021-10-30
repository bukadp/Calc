function Calc(operator, num1, num2) {
	let result;

	if (typeof num1 === "number" && typeof num2 === "number") {
		if (operator === "sum") {
			result = num1 + num2;
		} else if (operator === "subtr") {
			result = num1 - num2;
		} else if (operator === "multi") {
			result = num1 * num2;
		} else if (operator === "div") {
			if (num2 === 0) {
				return "Division by zero";
			} else {
				result = num1 / num2;
			}
		} else if (operator === "exponent") {
			result = num1 ** num2;
		} else {
			return "unknown operation";
		}
	}

	if (isNaN(result)) {
		return "Error";
	}

	return result;
}

let arithmetic = Calc("div", 8, 2);
console.log(arithmetic);
const max = 100;

function sumOfSquares (value) {
	"use strict";
	if (value <= 1) {
		return 1;
	} else {
		return (value*value) + sumOfSquares(value-1);
	}
}

function squareOfSum (value) {
	"use strict";
	const sum = (value+1)*value/2;
	return sum*sum;
}


const sum = sumOfSquares(max);
const square = squareOfSum(max);

console.log(sum, square, square-sum);
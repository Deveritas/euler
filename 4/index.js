const max = 1000;

function paliodrome (max) {
	"use strict";
	var currentMax = 0;
	for (let a = 0; a < max; a++) {
		for (let b = 0; b < max; b++) {
			let mul = a*b;
			if (mul.toString().split('').reverse().join('') == mul.toString()) {
				if (currentMax <=  mul) {
					currentMax = mul;
				}
			}
		}
	}
	return currentMax;
}

console.log(paliodrome(max));
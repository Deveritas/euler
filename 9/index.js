const total = 1000;

function search(sum) {
	"use strict";
	for (let a = 0; a < sum; a++) {
		for (let b = a+1; b < sum; b++) {
			for (let c = b+1; c < sum; c++) {
				if (a*a + b*b === c*c && a+b+c === sum) {
					return {a, b, c};
				}
			}
		}
	}
}

const {a, b, c} = search(total);

console.log(a,  b,  c,  a*b*c);
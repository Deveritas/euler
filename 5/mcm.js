import {zeroArray} from './../util/array'

export function minimumCommonMultiple (max) {
	"use strict";
	const dividends = zeroArray(max);

	function mergeDivisors(main, newData) {
		for (var i = 0; i < main.length; i++) {
			if (newData[i] > main[i]) {
				main[i] = newData[i];
			}
		}
	}

	for (let i = 2; i <= max; i++) {
		let test = i;
		const divisors = zeroArray(max);
		for (let divisor = 2; divisor < test; divisor++) {
			if (test % divisor === 0) {
				divisors[divisor - 1]++;
				test = test/divisor;
				divisor = 1;
			}
		}
		divisors[test - 1]++;
		mergeDivisors(dividends, divisors);
	}

	let total = 1;
	for (let i = 0; i < max; i++) {
		if (dividends[i] !== 0){
			total *= Math.pow(i+1, dividends[i]);
		}
	}

	return total;
}
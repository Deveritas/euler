import {SundaramSieve} from '../util/sieveOfSundaram'

const max = 1000000;
const sieve = new SundaramSieve(max);
const primes = sieve.go();

var count = 0;
primes.forEach((prime, i) => {
	"use strict";
	if (prime) {
		count++;
		if (count === 10000) {
			console.log(2*i+1);
		}
	}
});
console.log('Count: ' + count);
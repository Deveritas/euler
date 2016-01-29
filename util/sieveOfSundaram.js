import {defaultArray} from './array'

export class SundaramSieve {

	constructor (max) {
		this.sieve = defaultArray(Math.round(max/2), true);
		this.sieve[0] = void 0;
	}

	go () {
		const length = this.sieve.length;

		for (let i = 1; i < length && 2*i*(i+1) < length; i++) {
			let j = i;
			let unprime = i + j + 2*i*j;
			while (unprime < length) {
				this.sieve[unprime] = false;
				j++; unprime = i + j + 2*i*j;
			}
		}

		return this.sieve;
	}
}
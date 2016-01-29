import {SundaramSieve} from '../util/sieveOfSundaram'

const max = 2000000;
const sieve = new SundaramSieve(max);
const primes = sieve.go().convert();

console.log(primes.reduce((a, b) => a+b));
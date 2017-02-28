/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var globalScope = "helemaal zichtbaar";

function foo() {
	var localScope = "supergeheim";
	console.log(localScope); // supergeheim
}

console.log(globalScope); //helemaal zichtbaar
console.log(localScope); //ReferenceError: localScope is not defined(…)
foo(); // supergeheim



var transactie = function (inner) {
	return function (blah) {
		return inner(blah);
	};
}
var internetBankieren = transactie( function pasSaldoAan (v) {
	console.log(v) 
}))



internetBankieren(-99) // console: test

console.log(internetBankieren)
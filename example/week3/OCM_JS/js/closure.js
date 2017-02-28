/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var closure = function(a) {
    
    return function(b){
        return a+b;
    };
};

var closure1 = closure('hello');

var closure2 =(closure1('you'));

console.log(closure2);


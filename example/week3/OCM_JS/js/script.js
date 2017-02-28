/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var nav	    = document.getElementById('menuKnop');

nav.style.display = "flex";

nav.addEventListener("click", function() {
    var streepjes   = [document.getElementById('streepje1'), document.getElementById('streepje2')],
        inv         = document.getElementById('menubar');
        console.log("Er is geklikt op het menu");

    if (inv.classList.contains("invisible")) {
        console.log('nav was onzichtbaar, nu niet meer');
        inv.classList.remove("invisible");

        streepjes[0].classList.remove("ani1"); 
        streepjes[1].classList.remove("ani2");       
        streepjes[0].classList.add("ani3");
        streepjes[1].classList.add("ani4");

    } else {
        inv.classList.add("invisible");
        console.log('nav was zichtbaar, nu niet meer');

        streepjes[0].classList.remove("ani3"); 
        streepjes[1].classList.remove("ani4");
        streepjes[0].classList.add("ani1");
        streepjes[1].classList.add("ani2");
    }
});
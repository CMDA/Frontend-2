# Docentenhandleiding Javascript Bootcamp

**Benodigdheden:**
- presentatiebestand op google drive
- deze handleiding
- een laptop met aansluitverloopjes
- 4 kleuren stiften
- genoeg chocoladereepjes voor de klas (max 30)

## Introductie
​In Frontend 2 ga je dieper in op abstracte programmeerprincipes in JavaScript aan de hand van voorbeelden over progressive enhancement. Je leert pure javascript inzetten zonder een website hier geheel afhankelijk van te maken. Met andere woorden, het moet ook werken zonder javascript. Er wordt bewust gekozen geen gebruik te maken van libraries en/of API’s, wij gebruiken Vanilla JS omdat dit toekomstbestendiger is.

Om het vak op een goede manier te beginnen is het verstandig de basis, die na 1,5 jaar wellicht is weggezakt, even op te frissen. Dat doen we door middel van deze bootcamp.

Ik neem aan dat je ondertussen weet wat expressies, statements, variabelen en waarden zijn. Voor de slackers onder jullie toch nog even een korte herhaling met de kanttekening dat je je **moet schamen** als je dit nog niet helder hebt.

---

1. *Teken het volgende statement op het bord.*
```
a = b * 2;
```

2. In computerland heten een groep woorden, getallen en operatoren die een specifieke taak uitvoeren *statements*.

3. De letters a en b heten ...  
Variabelen zijn een referentie naar een value of waarde welke door een programma gebruikt kan worden.

4. De 2 in het voorbeeld is een ...  
Sterker nog het is een literal value of letterlijke waarde omdat deze niet opgeslagen wordt in een variabele maar letterlijk in de berekening gebruikt wordt.

5. De = en  * in het voorbeeld zijn ...  
Operatoren voeren acties uit met de waarden en variabelen zoals *toekenning* en *vermenigvuldiging*.

6. Statements bestaan uit een of meer *expressies*. Een expressie is iedere referentie naar een variabele of waarde, of een set van variabelen en waarden gecombineerd met operatoren. Ons statement heeft vier *expressies*.
	- 2 is een *literal value expression*
	- b is een *variable expression*
	- b * 2 is een *arithmetic expression*
	- a = b * 2 is een *assignment expression*

## Drill instruction 1
Begin met het noemen en toelichten van de drie principes. Daarna open je de console in Chrome (stel de achtergrond in op wit dat leest beter op de beamer), vergroot zodat het ook achterin goed leesbaar is en vraag je studenten om mee te typen.

### You need operators to perform actions on values.
Zojuist hebben we twee operatoren in actie gezien, de * en de =, maar er zijn natuurlijk veel meer operatoren. Probeer bij te blijven want we gaan hard.

```
// Assignment / toekenning
naam = "jouwnaam"
leeftijd = 38
schoenmaat = 45
naam_en_leeftijd = name + " is " + age + " jaar oud"
naamEnLeeftijd = age + " is de leeftijd van " + name
inDienstBijDeHvA = true
houdVanFotosVanKatten = false
omtrek = 2 * Math.PI
```

*You need operators to perform actions on values.*

```
// Compound assignment/ Gecombineerde toekenning
leeftijd += 10
omtrek *= 3
schoenmaat -= 1
leeftijd /= 1.88 // voor je leeftijd op mars
```

*You need operators to perform actions on values.*

```
// Wiskundig
2 + 2
leeftijd + 10
leeftijd
leeftijd += 10
leeftijd
50 - 41
41 * 33
21 / 3
22 % 4
22 % 3
```

*You need operators to perform actions on values.*

```
// (Pre/Post)In/decrement
leeftijd++
++leeftijd
leeftijd--
--leeftijd
```

*You need operators to perform actions on values.*

```
// Object property operator
console.log()
```

*You need operators to perform actions on values.*

```
42 == "42"
42 === "42"
61 != 12
61 !== "61"
12 > 66
12 < 66
14 >= 15
14 <= 15
```

*You need operators to perform actions on values.*

```
// Logische operatoren
x = 42
x > 12 && x < 50
x > 12 && x < 42
x > 12 || x < 50
x > 12 || x < 42
```

### You need values and types to perform different kinds of actions like math on numbers or output with strings.
Javascript kent een aantal primitieve datatypen en samengestelde datatypen. De samengestelde komen later deze les aan bod, we beginnen met de primitieve datatypen.

```
// Booleans
bezigMetBootcamp = true;
heeftGenoegKoffie = false;
typeof bezigMetBootcamp
typeof heeftGenoegKoffie
```

*You need values and types to perform different kinds of actions like math on numbers or output with strings.*

```
// Null
foo = null;
typeof foo
```

*You need values and types to perform different kinds of actions like math on numbers or output with strings.*

```
// Undefined
dracula
typeof dracula
```

*You need values and types to perform different kinds of actions like math on numbers or output with strings.*

```
// Number
var verwachtAantalEerstejaars = 806;
var belastingHoog = 0,21;
var hoog = 9007199254740992;
var laag = -hoog;
hoog == hoog + 1
laag == laag - 1

// Rariteitenkabinet?
+0 === -0
typeof NaN
typeof +Infinity
typeof -Infinity
```

*You need values and types to perform different kinds of actions like math on numbers or output with strings.*

```
// String
var ditIsEenString = "All your base are..."
var enDitOok = '...belong to us';
```

### You need variables to store data (aka state) during your program's execution.

```
// Variables
var name = "Justus";
var age = 38;
var phone = "06-21157954"
```

*You need variables to store data (aka state) during your program's execution*

```
// Variables can contain functions
var flip = function (x) {
	return -x;
}
var positive = flip(-25);
```

*You need variables to store data (aka state) during your program's execution*

```
// Multiple variables
var teacher1 = "Joost",
	teacher2 = "Titus",
	teacher3 = "Justus";
```

*You need variables to store data (aka state) during your program's execution*

```
// Function Hoisting

```

Als het goed is ben je nu ~20 minuten verder, zet de volgende presentatieslide op de beamer, vraag de studenten of er vragen zijn over het voorgaande. Na de pauze komt de squad assignment.
+++

## Drill instruction 2
Begin met het noemen en toelichten van de drie principes. Daarna open je de console in Chrome en vraag je studenten om weer mee te typen.

### You need conditionals like if statements to make decisions.

```
// Basic if statement
var condition = true;
if (condition) {
	// do something
}
```

*You need conditionals like if statements to make decisions.*

```
// If statement with multiple conditionals (and/or)
var condition = true;
var another = false;
if (condition && another) {
	// do something
}
if (condition || another) {
	// do something
}
```

Dit is een lastig ding, om goed te zien hoe && en || werken maken we een waarheidstafel op het bord, teken de volgende tabel:

| A | B | A && B |
|:--|:--|:--|
| true | true | true |
| true | 0 | 0 |
| 0 | true | 0 |
| 0 | 0 | 0 |

| A | B | A \|\| B |
|:--|:--|:--|
| true | true | true |
| true | 0 | true |
| 0 | true | true |
| 0 | 0 | 0 |

*You need conditionals like if statements to make decisions.*

```
// If/else statement
var condition = true;
if(condition) {
	// do something
} else {
	// do something else
}
```

*You need conditionals like if statements to make decisions.*

```
// If/elseif/else
var condition = true;
var another = false;
if(condition {
	// do something
} else if (another) {
	// do something else
} else {
	// do something else else
}
```

*You need conditionals like if statements to make decisions.*

```
// Switch
var condition = true;
switch (condition) {
	case true:
		// do something
		break;
	case false:
		// do something else
		break;
	case default:
		console.log('var condition has to be either true or false');
}
```

### You need loops to repeat tasks until a condition stops being true.

```
// Incrementing for-loop
for (var i=0; i<9; i++) {
	console.log(i);
}
```

*You need loops to repeat tasks until a condition stops being true.*

```
// Decrementing for-loop
for (var i=9; i>0; i--) {
	console.log(i);
}
```

*You need loops to repeat tasks until a condition stops being true.*

```
// While loop voor SLC gesprekken
var aantalStudenten = 15;
while (aantalStudenten > 0) {
	console.log('Hoe gaat het er mee?');
	// Voer een serieus gesprek
	aantalStudenten--;
}
```

*You need loops to repeat tasks until a condition stops being true.*

```
// Do while loop (altijd 1 keer)
var aantalStudenten = 15;
do {
	console.log('Hoe gaat het er mee?');
	// Voer een serieus gesprek
	aantalStudenten--;
} while (aantalStudenten > 0)

```

*You need loops to repeat tasks until a condition stops being true.*

```
// While true loop (draait ad infinitum?)
var i = 0;
while (true) {
	if (i <= 9) {
		break; 	// doorbreek de loop
	}
	console.log( i );
	i++;
}
```


### You need functions to organize your code into logical and reusable chunks.

```
```

*You need functions to organize your code into logical and reusable chunks.*

```
```

*You need functions to organize your code into logical and reusable chunks.*

```
```

*You need functions to organize your code into logical and reusable chunks.*

```
```

## Drill instruction 3
Begin met het noemen en toelichten van de drie principes. Daarna open je de console in Chrome en vraag je studenten om weer mee te typen.

### You need arrays to store lists of numerically positioned values.

### You need objects to store composite values using their original construct in natural language.

### You need JSON to store, retrieve and manage lists of composite values.

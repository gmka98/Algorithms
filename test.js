/*I- calculate
Write an algorithm which calculates:*/

/*the sum of two chosen number*/
var one = 78
var two = 56
console.log(one+two);

/*the division of two chosen number*/

var div = 81
var ision = 9
console.log(div/ision)

/*the modulo of two inputed numbers*/

var mod = 75
var ulo = 13
console.log(mod%ulo)

/*II - concatenate sentence
Write an algorithm which concatenates two phrases together.*/
var slt = "Bienvenue"
var cv = "Dans mon espace personel"
console.log(slt+cv)

/*III - VAT
Write an algorithm which receives a price without VAT and returns the price with VAT with a rate of 21%.*/
var price = 100
var vat = 21/100
console.log(price+vat)

/*IV - surface of a circle
Write an algorithm which receives the radius of a circle and calculate its surface.*/
var diameter = Math.floor(Math.random()*100);
const radius = diameter/2
const surface = Math.PI * (Math.pow(radius, 2));

console.log(surface)


/*V - conversion of time to seconds
Write an algorithm which receives the time of day in three different numbers, the hour, the minutes 
and the seconds and returns the number of seconds since midnight.*/
var seconds = Math.floor(Math.random()*1000) 
var minutes = seconds/60 
var hour = minutes/60 

console.log(hour);

//Conditions

/*I - cinema tariffs
In a cinema the full tariff is 10 €, the reduced one is 8 €. 
Write an algorithm which given a boolean indicating 
if the person can have a reduced tariff prints the price to pay.*/
var person = Math.floor(Math.random()*99);

if(person > 18){
    console.log("8$")
}
else{
    console.log("10$")
}
/*II - maximum
Write an algorithm which given 3 numbers finds the maximum.*/
function max_of_three(x, y, z) {
    max_val=10;
    if(x>y){
        max_val=x;
        console.log(x)
    }
}
/*III - identical dice
Write an algorithm which throws 3 dices and finds out 
the number of identical value, three, two or none.*/

/*IV - day’s number
Write an algorithm which given the number of a day returns its name.*/
var dt = new Date("October 22, 2022 23:52:00");
console.log("getDay() : " +dt.getDay() );

/*V - print shop
A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there.
 Write an algorithm which given a number of copies and calculates the price.*/

var first_copy = "0.12$"
var second_copy = "0.11$"
var second_copy += first_copy
var more_copy = "0.10$"
var more_copy += second_copy



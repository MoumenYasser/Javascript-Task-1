// var urloggedin = false;

// do {
//     var userInput = window.prompt("enter password");
//     if(userInput == "mo2a") {
//         var urloggedin = true;
//     }

// } while(urloggedin == false)

// window.alert('hello from the other side');


/*
// question 1
var x;
x = window.prompt('insert a number');

console.log(x);
*/

/*
// question 2
var x;
x = window.prompt('insert a number');

if (x % 3 == 0) {
    console.log("yes this number is divisible by 3")
} else {
    console.log("this number isn't divisble by 3")
};

console.log(x);

*/
/*
// question 3
var x;
var y;
x = window.prompt('insert first number');
y = window.prompt('insert second number');

if ( x > y ) {
    console.log(x);
}else {
    console.log(y);
}

*/

/*
// question 4
var x;

x = window.prompt('insert fisrt number');

if (x > 0) {
    console.log("positive");
} else if (x < 0) {
    console.log("negative");
} else {
    console.log("neither positive nor negative");
}

*/

// question 5
/*
var x;
var y;
var z;


x = window.prompt('insert fisrt number');
y = window.prompt('insert second number');
z = window.prompt('insert third number');

if (x > y && x > z) {
    console.log("max number is" + x)
} else if (y > x && y > z) {
    console.log("max number is" + y)
} else {
    console.log("max number is " + z)
}

if (x < y && x < z) {
    console.log("min number is " + x)
} else if (y < x && y < z) {
    console.log("min number is " + y)
} else {
    console.log("min number is " + z)
}

*/

/*
// question 6

var x;

x = window.prompt('insert fisrt number');

if (x % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}

*/

/*

// question 8

var x;

x = window.prompt('insert letter');

if (x === 'a') {
    console.log("vowel");
} else if (x === 'o') {
    console.log("vowel");
} else if (x === 'u') {
    console.log("vowel");
} else if (x === 'e') {
    console.log("vowel");
} else if (x === 'y') {
    console.log("vowel");
} else {
    console.log("normal");
}

*/

/*
// question 9

var x;
x = window.prompt('insert number');


for(i = 1; i <= x; i++) {
    console.log(i);
}

*/


// question 10
/*
var x;
x = window.prompt('insert number');
var sum

for(i = 1; i <= 12; i++) {
    sum = i * x ;
    console.log(sum);
}

*/

// question 11

/*
var x;
x = window.prompt('insert number');


for(i = 1; i <= 10; i++) {

    if (i % 2 == 0) {
        console.log(i); 
    }
}

*/

// question 12
/*
var x;
var power;
x = window.prompt('insert number');
power = window.prompt('insert power number');

var num = 1;
for(i = 1; i <= power; i++) {

    num = num * x;
}

console.log(num)
*/

// question 12 again

/*
var x;
x = window.prompt('insert number of material');

var sum=0;
var avg=0;
var per =0;
for(i = 1; i <= x; i++) {


    sum+= Number( window.prompt("ente study mark " + (i+1)));
    avg = sum / x;
    per = sum / 500*100

}

console.log(sum);
console.log(avg);
console.log(per);


*/

// question 13
/*
var x;

x = window.prompt('enter month number')

if (x % 2 == 0) {
    console.log('days in month = 30')
} else if (x % 2 == 1) {
    console.log('days in month = 31')
} else {
    console.log('days in month = 28')
}

*/

// question 14
/*

var physicsMark = Number( window.prompt("enter physics mark"))
var ChemistryMark =  Number( window.prompt("enter chem mark"))
var biologyMark =  Number( window.prompt("enter bio mark"))
var mathMark =  Number( window.prompt("enter math mark"))
var computerMark =  Number( window.prompt("enter comp mark"))

var per = (physicsMark + ChemistryMark + biologyMark + mathMark + computerMark) / 500 *100;

console.log(per);

if (per > 90 ) {
    console.log('Grade A')
}
else if (per > 80){
    console.log('Grade B')
}
else if (per > 70){
    console.log('Grade C')
}
else if (per > 60){
    console.log('Grade D')
} else {
    console.log('Grade F')
}

*/

// q 15

/*
var monthNumber = window.prompt("Enter Month Number");

switch (monthNumber) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
    console.log("31");
    break;
    case '2': 
    console.log("feb 28");
    break;
    case '4':
    case '6':
        case '9':
        case '11':
            console.log(" 30");

}

*/

// Q 16

/*
var char = window.prompt("Enter letter");

switch (char) {
    case "a":
    case "o":
    case "e":
    case "i":
    case "y":
        console.log("vowel letter")
        break;
        default:
        console.log("normal letter")
        break;
}
*/


// q 17

/*
var number1 = window.prompt("Enter letter");
var number2 = window.prompt("Enter letter twpo");


switch (number1 > number2) {
    case true:
        console.log(numbe1);
        break;
    case false:
        console.log(number2)
        break;
}

*/

// q18

/*
var number2 = window.prompt("Enter letter twpo");


switch (number2 % 2 == 0) {
    case true:
        console.log("even");
        break;
    case false:
        console.log("false")
        break;
}
*/

// q19

/*
var number2 = window.prompt("Enter letter twpo");


switch (number2 > 0) {
    case true:
        console.log("positive");
        break;
    case false:
        switch (number2 == 0) {
            case true:
                console.log("zero");
                break;
            case false:
                console.log("negative");
                break;
        }

}

*/

// q20

/*
var number1 = Number(window.prompt("Enter first number"));
var number2 = Number(window.prompt("Enter second number"));
var sign = window.prompt("Enter sign");

switch (sign) {
    case '+':
        console.log(number1 + number2);
        break;
    case '-':
        console.log(number1 - number2);
        break;
    case '*':
        console.log(number1 * number2);
        break;
    case '/':
        console.log(number1 / number2);
        break;
}
*/

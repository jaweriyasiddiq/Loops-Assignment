//..................................Loops Assignments................................... //
//.........................ASSIGNMENT NO 1. Creating a Lesson Plan(Using for loop ) ............//
var mywork = [];
for (var i = 1; i <= 10; i++) {
    var Lesson = {
        name: "lesson ".concat(i),
        status: i % 2 === 0 ? true : false,
    };
    mywork.push(Lesson);
}
console.log(mywork);
//.....................ASSIGNMENT NO 2. Guessing Game (Using while loop )...........................
var maxValue = 14;
var randomNumber = Math.floor(Math.random() * maxValue + 1);
console.log(randomNumber);
var guessNumber = [6, 10, 5, 2, randomNumber];
var index = 0;
while (index < guessNumber.length) {
    var currentguess = guessNumber[index];
    if (currentguess === randomNumber) {
        console.log("congratulation your guessed a correct number ");
    }
    else if (currentguess < randomNumber) {
        console.log("ohh you guessed is too low");
    }
    else {
        console.log("ohh you guessed is too high");
    }
    index++;
}
//...........................ASSIGNMENT NO 3. Counter Incrementer (Using do while loop )..................//
var counter = 0;
var step = 1;
do {
    console.log(counter);
    counter += step;
} while (counter < 100);
//...........................ASSIGNMENT NO 4.Exploring Objects with for...in Loop.................//
var myObject = {
    item1: "watch",
    item2: "shoes",
    item3: "phone",
};
for (var X in myObject) {
    console.log("".concat(X, ":").concat(myObject[X]));
}
//...........................ASSIGNMENT 5.Exploring Arrays with Loops(Using loop ) .................//
var myArray = [];
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log(myArray);
for (var i = 0; i < myArray.length; i++) {
    console.log("index".concat(i, " value").concat(myArray[i]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var Z = myArray_1[_i];
    console.log("value: ".concat(Z));
}

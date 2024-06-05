//..................................Loops Assignments................................... //
//.........................ASSIGNMENT NO 1. Creating a Lesson Plan(Using for loop ) ............//
let mywork: { name: string; status: boolean }[] = [];
for (let i = 1; i <= 10; i++) {
  let Lesson = {
    name: `lesson ${i}`,
    status: i % 2 === 0 ? true : false,
  };
  mywork.push(Lesson);
}
console.log(mywork);
//.....................ASSIGNMENT NO 2. Guessing Game (Using while loop )...........................
let maxValue: number = 14;
let randomNumber: Number = Math.floor(Math.random() * maxValue + 1);
console.log(randomNumber);
let guessNumber = [6, 10, 5, 2, randomNumber];
let index: number = 0;
while (index < guessNumber.length) {
  let currentguess = guessNumber[index];
  if (currentguess === randomNumber) {
    console.log("congratulation your guessed a correct number ");
  } else if (currentguess < randomNumber) {
    console.log("ohh you guessed is too low");
  } else {
    console.log("ohh you guessed is too high");
  }
  index++;
}
//...........................ASSIGNMENT NO 3. Counter Incrementer (Using do while loop )..................//
let counter: number = 0;
let step: number = 1;
do {
  console.log(counter);
  counter += step;
} while (counter < 100);
//...........................ASSIGNMENT NO 4.Exploring Objects with for...in Loop.................//
let myObject = {
  item1: "watch",
  item2: "shoes",
  item3: "phone",
};
for (let X in myObject) {
  console.log(`${X}:${myObject[X]}`);
}
//...........................ASSIGNMENT 5.Exploring Arrays with Loops(Using loop ) .................//
let myArray: number[] = [];
for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}
console.log(myArray);
for (let i = 0; i < myArray.length; i++) {
  console.log(`index${i} value${myArray[i]}`);
}
for (let Z of myArray) {
  console.log(`value: ${Z}`);
}

console.log("Hello World!\n==========\n");

//Exercise 1 Section == Ignore Even
// console.log("EXERCISE 1:\n==========\n");
// for (let i = 0; i <= 100; i++) {
//   if (i % 3) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }
// // Exercise 2 Section = FizzBuzz
// console.log("EXERCISE 2:\n==========\n");
// for (let i = 0; i <= 100; i++) {
//   if (i % 3 || i % 5) {
//     console.log("FIZZBUZZ");
//   }
//   if (i % 3) {
//     console.log("Fizz");
//   } else if (i % 5) {
//     console.log("Buzz");
//   }
// }
//exercise 3 = While
// let x = 1;
// while (x < 100) {
//   if (x % 3) {
//     console.log(x);
//   }
//   x++;
// }

// // Exercise 3 = Do While
// let i = 3;
// do {
//   if (i % 3 || i % 5) {
//     console.log("FIZZBUZZ");
//   }
//   if (i % 3) {
//     console.log("FIZZ");
//   } else if (i % 5) {
//     console.log("Buzz");
//   } else {
//     console.log(" Looks like we need to fiz this up");
//   }
//   i++;
// } while (i <= 100);

// Exercise 4

// let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
// let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

// for (let i=1;i <= n; i++) {
//     if( i == value){
//  console.log("found VALUE",i)
//   break;
//     }
//   if(i != n){
//     console.log( " did not find value",i)
//   }
  
// }

// Exercise 5 

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for ( let start = 1 ; start <= n ; start ++){
    if ( start % 3 ){
        console.log (fizzDivisor)
    }
    if( start % 5){
        console.log(buzzDivisor)
    }
}
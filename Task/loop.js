// (no.1)
for (let i = 1; i <= 10; i++) {
  console.log(i * 7);
}

// (no.2)
let sum = 0;
let i = 1;
while (i <= 100) {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
}
console.log(sum);

// let correctNumber = 5;
// let guess;
// do {
// guess = prompt("Guess a number between 1 and 10:");
// if (guess < correctNumber) {
// console.log("Too low!");
// } else if (guess > correctNumber) {
// console.log("Too high!");
// }
// } while (guess != correctNumber);
// console.log("Congratulations! You guessed the correct number.");

{
  /* <No.4> */
}
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(7)); // Change the number as needed

{
  /* <No.5> */
}
let a = 0;
let b = 1;
let temp;
for (let i = 1; i <= 10; i++) {
  console.log(a);
  temp = a;
  a = b;
  b = temp + b;
}

// let password;
// do {
// password = prompt("Enter a password (at least 8 characters long):");
// if (password.length < 8) {
// console.log("Password must be at least 8 characters long.");
// }
// } while (password.length < 8);
// console.log("Password valid!");

{
  /* <No.7> */
}
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("-----------------------");
}

// (no.10)
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let asterisks = "";
  let spaces = "";

  // print leading spaces
  while (spaces.length < rows - i) {
    spaces += "";
  }
  // print asterisks
  while (asterisks.length < 2 * i - 1) {
    asterisks += "*";
  }
  console.log(spaces + asterisks);
}

summary: Intro to Programming
id: wv-m12-intro-programming
categories: web-development
tags: ftw-virgil
status: Published
authors: Minh Do
Feedback Link: https://www.coderschool.vn

# Intro to Programming

## Introduction

There are a few basic concepts you need to remember. They act like building blocks. To build a tall tower, you start first by putting block on top of block. Here are some of the essential programming building blocks:

- **Variables** to store data (aka state) during your program’s execution.
- **Operators** to perform actions on.
- **Conditionals** like if statements to make decisions.
- **Loops** to repeat tasks until a condition stops being true.
- **Functions** to organize your code into logical and reusable chunks.

Let's write your first "Hello world!" JavaScript programm.

- Open VSCode, create a new file called `hello.js`
- Type in `console.log("Hello world!");`
- Save the file
- Open the Terminal on the same folder, run `node hello.js`
- The text "Hello world!" will be printed out on the screen

## Variables

A variable is a place to store values. When we write scripts (a set of instructions for a computer to follow), we need to temporarily store small pieces of data. We store that data in variables. “Variable” is a good name for this concept because it indicates the stored data can change (or vary) each time a script is run.

```javascript
let amount = 9;
amount = amount * 2;
console.log(amount); // 18

// Convert `amount` to a string
amount = "$" + amount;
console.log(amount); // "$18"
```

## Operators

**Variable Assignment**

```
a = b * 2;
```

- `a` and `b` are called **variables**. Variables hold values to be used by the program.
- `=` and `*` are assignment and mathematic **operators**.
- The statement `a = b * 2;` tells the computer to get the value stored in variable `b`, multiply that value by 2, then store the result back to the variable `a`.

**Math**: `+` (Addition), `-` (Subtraction), `*` (Multiplication), `/` (Division), `**` (Exponentiation), `%` (Modulus or Remainder), `++` (Increment), `--` (Decrement)

**Compound assignment**: `+=`, `-=`, `*=`, `/=`. For example `a += 2` is the same as `a = a + 2`

**Equality**: `==` (loose-equals), `===` (strict-equals), `!=` (loose not-equals), `!==` (strict not-equals)

**Comparison**: `<` (less than), `>` (greater than), `<=` (less than or loose-equals), `>=` (greater than or loose-equals)

**Logical**: `&&` (and), `||` (or)

## Statements & Expressions

- **Statement**: A script is a series of instructions that a computer can follow one-by-one. Each _individual instruction_ is known as a statement. Each statement in JavaScript is followed by a semicolon.

```javascript
let a = 1;
let b = a + 2;
b = b + 3;
console.log(b);
```

- **Expressions**: An expression is a statement that results in a single value. Expressions can use operators to create this single value. Here are some example expressions:

This expression results in "apple": `"ap" + "ple"`

This expression results in 5: `2 + 3`

## Conditionals

Sometimes we want to perform an action based on some kind of condition. In English, we can say “If this thing is true, then do that.” In JavaScript, conditionals are written very similarly and allow us to take a certain path in our program.

Let’s now look at the basic structure of a conditional:

```javascript
if (expression) {
  statements;
} else if (expression) {
  statements;
} else {
  statements;
}
```

```javascript
let today = new Date().getDay();

if (today === 6) {
  console.log("Today is Saturday");
} else if (today === 0) {
  console.log("Today is Sunday");
} else {
  console.log("Looking forward to the Weekend");
}
```

## Loops

Repeating a set of actions until a certain conditions fails is the job of programming loops.

**`for` loop**

Sometimes you are looping for the intended purpose of counting a certain set of numbers, like from 0 to 9 (10 numbers). You can do that by setting a loop iteration variable like `i` at value 0 and incrementing it by 1 each iteration.

```javascript
for (let i = 0; i <= 9; i = i + 1) {
  console.log(i);
}
// 0 1 2 3 4 5 6 7 8 9
```

**`while` loop**

```javascript
while (numOfCustomers > 0) {
  console.log("How may I help you?");

  // help the customer...

  numOfCustomers = numOfCustomers - 1;
}
```

## Functions

A function is generally a named section of code that can be “called” by name, and the code inside it will be run each time.

```javascript
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
```

Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations. For example, instead of using a variable to store the return value of a function:

```javascript
let x = toCelsius(77);
// String concatenation
let text = "The temperature is " + x + " Celsius";
// Template literal
// let text = `The temperature is ${x} Celsius`;
```

You can use the function directly, as a variable value:

```javascript
let text = "The temperature is " + toCelsius(77) + " Celsius";
// Template literal
// let text = `The temperature is ${toCelsius(77)} Celsius`;
```

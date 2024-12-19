// IF ELSE , Else IF Conditions.

// 1. Write a program to check whether the given input number is divisible by 3 or else show a message "Number is not divisible by 3".
// var takenNum = +prompt("Enter a number here");
// if (takenNum % 3 === 0) {
//   console.log("Number is divisble by 3");
// } else {
//   console.log("Number is not divisble by 3");
// }

// 2. Write a program that checks whether the given input is an even number or an odd number.
// var checkOrder = +prompt("Enter a number here");
// if (checkOrder % 2 === 0) {
//   console.log("Its an even number ");
// } else {
//   console.log("Its an odd number ");
// }

// 3. Write an if/else statement with the following condition: If the variable age is greater than 18, output "Old enough", otherwise output "Too young".
// var checkAge = +prompt("Enter your age");
// if (checkAge > 18) {
//   console.log("Old enough");
// } else {
//   console.log("Too young");
// }

// 4. Write a program that prompts the user for their name, and then displays a special greeting to that person if their name is the same as yours. If the name entered by the user is anything other than your name, your code should not produce any output.
// var userName = prompt("Enter your Full Name");
// if (userName === "Zubair") {
//   console.log("OH! We are namesake");
// }

// 5. Write a program to check whether the given input number is divisible by 3 or not by using If else, else if statements. Show a message "Number is not divisible by 3" or "Number is divisible by 3".
// var takenNum = +prompt("Enter a number here");
// if (takenNum % 3 === 0) {
//   console.log("Number is divisble by 3");
// } else {
//   console.log("Number is not divisble by 3");
// }

// 7. Write a program to create a calculator for +, -, *, /, % using  If else, else if statements. (number1, number2 and operator will be input)
// var num1 = +prompt("Enter First Number");
// var operator = prompt("Enter Operator here");
// var num2 = +prompt("Enter Second Number");
// if (operator === "+") {
//   console.log(num1 + num2);
// } else if (operator === "-") {
//   console.log(num1 - num2);
// } else if (operator === "*") {
//   console.log(num1 * num2);
// } else if (operator === "/") {
//   console.log(num1 / num2);
// } else if (operator === "%") {
//   console.log(num1 % num2);
// }

// 10. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message " Please enter your password"
// ii. Check if both passwords are same. If they are same, show message "Correct! The password you entered matches the original password". Show "Incorrect password" otherwise.

// var key = "#key123";
// var password = prompt("Signin ");
// if (password === key) {
//   console.log(
//     "Correct! The password you entered matches the orginal password."
//   );
// } else if (password !== key) {
//   console.log("Incorrect password");
// } else {
//   console.log("Please enter your password");
// }

// 11. Write a program that adds an else statement to the following script to display "You are not Fahad" var firstName = "Ali"; if (firstName === "Fahad") { document.write("Hello Fahad!"); }

// var firstName = "Ali";
// if (firstName === "Fahad") {
//   console.log("Hello Fahad");
// } else {
//   console.log("You are not Fahad ");
// }

// 12. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {greeting = "Good day"; else greeting = "Good evening";}

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// 13. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// var intNum1 = +prompt("Enter interger number1");
// var intNum2 = +prompt("Enter interger number2");
// if (intNum1 > intNum2) {
//   console.log(intNum1 + " is greater");
// } else if (intNum2 > intNum1) {
//   console.log(intNum2 + " is greater");
// } else {
//   console.log(intNum1 + " and " + intNum2 + " are equal");
// }

// 14. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var number = +prompt("Enter number");
// if (number === 0) {
//   console.log("its zero");
// } else if (number > 0) {
//   console.log("its positive");
// } else if (number < 0) {
//   console.log("its negative");
// } else {
//   console.log("Enter correct number here");
// }

// 17. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.

// var storeVowel = prompt("Enter Vowel only 1");
// if (storeVowel === "a" || storeVowel === "A") {
//   console.log("True");
// } else if (storeVowel === "e" || storeVowel === "E") {
//   console.log( "True");
// } else if (storeVowel === "i" || storeVowel === "I") {
//   console.log("True");
// } else if (storeVowel === "o" || storeVowel === "O") {
//   console.log("True");
// } else if (storeVowel === "u" || storeVowel === "U") {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 18. Choose the correct comparison operator to display "true", when: 10 is NOT equal to 8.

// var compare = 10;
// if (compare !== 8) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 19. Usea If else, else if statement to rewrite the following JavaScript code. Prompt the user for the number of a month rather than setting it to 8:

// var month = +prompt("Enter month in number");
// if (month == 1) {
//   alert("January");
// } else if (month == 2) {
//   alert("February");
// } else if (month == 3) {
//   alert("March");
// } else if (month == 4) {
//   alert("April");
// } else if (month == 5) {
//   alert("May");
// } else if (month == 6) {
//   alert("June");
// } else if (month == 7) {
//   alert("July");
// } else if (month == 8) {
//   alert("August");
// } else if (month == 9) {
//   alert("September");
// } else if (month == 10) {
//   alert("October");
// } else if (month == 11) {
//   alert("November");
// } else if (month == 12) {
//   alert("December");
// } else {
//   alert("Invalid month");
// }

// 20. Use a conditional (ternary) operator for this exercise: If the variable age is a value below 18, the value of the variable voteable should be "Too young", otherwise the value of voteable should be "Old enough".

// var age = +prompt("Enter your age:");
// var voteable = age < 18 ? "Too young" : "Old enough ";
// console.log(voteable);

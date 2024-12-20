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

// 6. Write a program that takes a character(number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)
// var char = prompt("Enter your character / number");
// if (char >= "A" && char <= "Z") {
//   console.log("uppercase letter");
// } else if (char >= "a" && char <= "z") {
//   console.log("lowercase letter");
// } else if (char >= "0") {
//   console.log("number");
// } else {
//   console.log("Invalid Input");
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

// 8. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements.
// var time = +prompt("Enter time in 24-hour i.e: 1900 = 7pm. / 0200 = 2am");
// if (time >= 0 && time < 1200) {
//   console.log("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//   console.log("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//   console.log("Good evening");
// } else if (time >= 2100 && time <= 2359) {
//   console.log("Good Night");
// } else {
//   console.log("incorrect Number");
// }

// 9. Write a program that takes a calendar year in YYYY format in a variable. Check & notify the user whether it is a leap year or not.
// var year = prompt("Enter Year: YYYY");
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log(year + " is a leap year.");
//     } else {
//       console.log(year + " is NOT a leap year.");
//     }
//   } else {
//     console.log(year + " is a leap year.");
//   }
// } else {
//   console.log(year + " is NOT a leap year.");
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

// 15. Ask the user what the current hour is. If the hour is between 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If the hour is between 5 and 8 p.m., tell the user, "It's dinner time." For any other hours, tell the user, "Sorry, you'll have to wait, or go get a snack." (Hint: Store the hour in 24 hours clock format i.e. 14 for 2pm, 15 for 3pm)

// var hour = +prompt("Enter current hour in 24 hours i.e. 14 for 2pm, 15 for 3pm ");
// if (hour >= 6 && hour <= 9) {
//   console.log("Brakfast is served");
// } else if (hour >= 11 && hour <= 13) {
//   console.log("Time for lunch");
// } else if (hour >= 17 && hour <= 20) {
//   console.log("Its dinner time");
// }   else {
//   console.log("Sorry, you'll have to wait, or go get some snack ");
// }

//16. Write a program that stores value in a variable & tell whether the type of that variable is a "number", "string", "boolean" or "undefined".

// var input = prompt("Enter a value:");
// if (input === "true" || input === "false") {
//   console.log("The type is boolean");
// } else if (Number(input) == input) {
//   console.log("The type is number");
// } else if (input === null) {
//   console.log("The type is undefined");
// } else if (input !== Number(input)) {
//   console.log("The type is string");
// } else {
//   console.log("Invalid value");
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

// Javascript Assignments.

// chapter-01 started:
// 1. Write a script to greet your website visitor using JS alert box.
// alert("Hello Welcome To Javascript World!");

// 2. Write a script to display following message on your web page.
// alert("Error! Please enter a valid password!");

// 3. Write a script to display following message on your web page: (Hint: Use line break).
// alert(" Welcome to JS Land... \n Happy Coding! ");

// 4. Write a script to display following message in sequence.
// alert("Welcome to JS Land...");
// alert("Happy Coding");

// 5. Generate the following message through browser's developer console.

// Instructions:
// 1. Open your browser's developer tools.
//    - Press Ctrl + Shift + J (Windows).
// 2. Copy the following code.
// 3. Paste it into the developer console and press Enter to see the output.
// console.log("Hello... I can run JS through my web browser's console.");

// 6. Make use of alerts in your new/existing HTML & CSS project.

// 7. Practice placement of <script></script> element in following sections of your project in exercise
// 6: a. Head b. Body (before your page's HTML) c. Body (Inside your page's HTML)  d. Body (After your page's HTML).
// Chapter-01 ended.

// chapter-02 started:
// 1. Declare a variable called username.
// var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName = "Muhammad Zubair";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign "Hello World" to variable message.
// c) Display the message in alert box.
// var message = "Hello World";
// alert(message);

// 4. Write a script to save student's bio data in JS variables and show the data in alert.

// var studentName = "Johne Doe";
// var age = 15;
// var course = "Certified Mobile Application development";
// alert(studentName);
// alert(age + " " + "years old");
// alert(course);

// 5. Write a script to display the following alert using one JS variable.

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box. (Hint: string concatenation).

// var email = "mzubair@gmail.com";
// alert("My email address is " + email);

// 7. Declare a variable called book & give it the value "A smarter way to learn JavaScript". Display the following message in an alert box.

// var book = "I am trying to learn from the Book A smarter\nway to learn JavaScript";
// alert(book);

// 8. Write a script to display this in browser through JS
// var onBrowser = "Yah! I can write HTML content thorught JavaScript";
// document.write(onBrowser);

// 9. Store following string in a variable and show in alert and browser through JS
// var specialDesign = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(specialDesign);
// Chapter-02 ended

// Chapter-03 started:
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
// var age = 20;
// alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: "You have visited this site N times".
// var visitCount = 14;
// document.write("You have visited this site " + visitCount + " times");

// 3. Declare a variable called birth Year & assign to it your birth year. Show the following message in your browser:
// var birthYear = 2005;
// document.write("My birth year is " + birthYear +"<br>Data Type of my declared variable is " + typeof(birthYear));

// 4. A visitor visits an online clothing store www.xyzClothing.com. Write a script to store in variables the following information:
// a. Visitor's name 
// b. Product title 
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: "John Doe ordered 5 T-shirt(s) on XYZ Clothing store".
// var visitorName = "Johne Doe";
// var productTitle = "T-shirt";
// var size = "(s)";
// var quantity = 5;
// document.write("<b>" + visitorName + "</b>" + " ordered " + "<b>" + quantity + " " + productTitle + "</b>" + size + " on XYZ Clothing Store ");
// Chapter-03 ended

// Chapter-04 started:
// 1. Declare 3 variables in one statement.
// var num1,num2,num3;

// 2. Declare 5 legal & 5 illegal variable names.
// // legal:
// var $variable;
// var _variable;
// var variabel123;
// var variableName;
// var VariableName;

// // illegal:
// var 123variable;
// var #variable;
// var variable name;
// var break;
// var variable-name1;

// 3. Display this in your browser 
// // a) A heading stating "Rules for naming JS variables"
// // b) Variable names can only contain _________,_________and_________. For example $my_1stVariable
// document.write("Variable names can only contain numbers, $ and _. For example: $my_1stVariable <br>");
// // c) Variables must begin with a_________,_________or_________. For example $name, _name or name 
// document.write("Variables must begin with a letter, $ and _ . For example $name, _name or name <br>");
// // d) Variable names are case _________.
// document.write("Variable names are case sensitive <br>");
// // e) Variable names should not be JS _________.
// document.write("Variable names should not be JS keywords");
// Chapter-04 ended

// Chapter-05 started:
// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
//// addition
// var num1 = 3;
// var num2 = 5;
// var addition = num1 + num2 ;
// document.write("Sum of " + num1 + " and " + num2 + " is " + addition + "<br>");

// // 2. Repeat task1 for subtraction, multiplication, division & modulus.
// //// subtraction
// var subtraction = num1 - num2 ;
// document.write(" Subtraction of " + num1 + " and " + num2 + " is " + subtraction + "<br>");
// //// multiplication
// var multiplication = num1 * num2 ;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication + "<br>");
// //// division
// var division = num1 / num2 ;
// document.write("Division of " + num1 + " and " + num2 + " is " + division + "<br>");
// //// modulus
// var modulus = num1 % num2 ;
// document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus);


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable. 
// b. Show the value of variable in your browser like "Value after variable declaration is: ??". 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like "Initial value: 5".
// e. Increment the variable.
// f. Show the value of variable in your browser like "Value after increment is: 6".
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like "Value after addition is: 13".
// i. Decrement the variable.
// j. Show the value of variable in your browser like "Value after decrement is: 12".
// k. Show the remainder after dividing the variable's value by 3.
// l. Output: "The remainder is: 0".
// var undefined;
// document.write("Value after variable declaration is " + undefined + "<br>");
// var num = 5;
// document.write("Initial Value " + num + "<br>");
// num += 1;
// document.write("Value after increment is: " + num + "<br>");
// num += 7;
// document.write("Value after adition is: " + num + "<br>");
// num -= 1;
// document.write("Value after decrement is: " + num + "<br>");
// num %= 3;
// document.write("The remainder is: " + num + "<br>");

// 4. Cost of one movie ticket is 600 PKR.
// Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
// Example output.
// var cost = 600;
// var totalCost = cost * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");

// 5. Write a script to display multiplication table of any number in your browser. E.g.
// var tableNumber = 4;
// var num = 1;
// document.write("Table of " + tableNumber + " <br />");
// var result = tableNumber * num;
// document.write( tableNumber + " x " + num + " = " + result , "<br />");
// ++num;
// result = tableNumber * num;
// document.write( tableNumber + " x " + num + " = " + result , "<br />");
// ++num;
// result = tableNumber * num;
// document.write( tableNumber + " x " + num + " = " + result , "<br />");
// ++num;
// result = tableNumber * num;
// document.write( tableNumber + " x " + num + " = " + result , "<br />");
// ++num;
// result = tableNumber * num;
// document.write( tableNumber + " x " + num + " = " + result , "<br />");
// ++num;
// result = tableNumber * num;
// document.write( tableNumber + " x " + num + " = " + result , "<br />");
// ++num;
// result = tableNumber * num;
// document.write( tableNumber + " x " + num + " = " + result , "<br />");
// ++num;
// result = tableNumber * num;
// document.write( tableNumber + " x " + num + " = " + result , "<br />");
// ++num;
// result = tableNumber * num;
// document.write( tableNumber + " x " + num + " = " + result , "<br />");
// ++num;
// result = tableNumber * num;
// document.write( tableNumber + " x " + num + " = " + result , "<br />");

// 6. The Temperature Converter: It's hot out! Let's make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output "NNOC is NNoF".
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output "NNoF is NNOC".
// var celsiusTemperature = 25;
// var conversion1 = (celsiusTemperature * 9/5)+32;
// document.write(celsiusTemperature + "°C is " + conversion1 + "°F <br>");
// var fahrenheitTemp = 70;
// var conversion2 = (fahrenheitTemp - 32)*5/9;
// document.write(fahrenheitTemp + "°F is " + conversion2 + "°C");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables.
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// var $Item1 = 650;
// var $Item2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shipcharges = 100;
// var totalCost = ($Item1 * 3) + ($Item2 * 7) + shipcharges;
// document.write("Price of item 1 is " + $Item1 , "<br>");
// document.write("Quantity of item 1 is " + quantityItem1 , "<br>");
// document.write("Price of item 2 is " + $Item2 , "<br>");
// document.write("Quantity of item 2 is " + quantityItem2 , "<br>");
// document.write("Shipping Charges " + shipcharges , "<br>");
// document.write("Total cost  of your order is " + totalCost , "<br>");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = marksObtained / totalMarks * 100;
// document.write("Total marks " + totalMarks + "<br>");
// document.write("Marks obtained " + marksObtained + "<br>");
// document.write("Percentage " + percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals.
// Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates: 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee).
// var exchangeRate =  ((104.80 * 10) + (28*25));
// document.write(" Total Currency in PKR: " + exchangeRate);

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2
// Perform all calculations in a single expression
// var num = 10;
// var calc = ((num+5)*10)/2;
// document.write(calc);

// 11. The Age Calculator: Forgot how old Calculate it! someone is? 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values.
// var currentYear = 2024;
// var dob = 2005;
// var age = currentYear-dob;
// var age2 = age - 1;
// document.write("Your age could be either " + age + " or " + age2);

// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output "The circumference is NN".
// (Hint: Circumference of a circle = 2 πr, π = 3.142)
// Calculate the area based on the radius, and output "The area is NN".
// (Hint: Area of a circle= πr2, π = 3.142)
// var radius = 20;
// var circumference = ((2 * 3.142) * radius);
// var area = (3.142 *(radius * radius));
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);

// 13. The Lifetime Supply Calculator: Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: "You will need NNNN to last you until the ripe old age of NN".
// var favSnack = "chocolate chip";
// var currentAge = 15;
// var maxAge = 65;
// var amountPerDay = 3;
// var totalEat = ((maxAge - currentAge) * 365) * amountPerDay;
// document.write("Favourite Snack: " + favSnack + "<br>");
// document.write("Current age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age " + maxAge + "<br>");
// document.write("Amount of snaks per day " + amountPerDay + "<br>");
// document.write("You will need " + totalEat + " chocolate chip to last you until the ripe old age of " + maxAge);
// Chapter-05 ended
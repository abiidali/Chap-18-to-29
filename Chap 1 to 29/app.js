// Chap 1 

// Question #1

// alert("STOP!!")

// Question #2

// alert("Error! Please enter a valid password!")

// Question #3 

// alert("Welcome to JS Land... \n Happy Coding...")

// Question #4

// alert("Welcome to JS Land...")

// alert("Happy Coding! \n prevent this page from creating additional pages!")

// Question #5

// completed.

// Question #6

// completed.

// Question #7

// Completed.


// Chap 2 

// Question #1

// var username;

// Question #2

// var myName = "Abid Ali";

// Question #3

// var message = "Hello World";

// alert(message);

// Question #4

// var myName = "Abid Ali";
// var age = 20;
// var message = "Certified Mobile Application Development";

// alert(myName);
// alert(age);
// alert(message);

// Question #5

// alert("PIZZA \n PIZZ \n PIZ \n PI \n P") 

// Question #6

// var email = "abidalid00@gmail.com";

// alert("My email address is " + email);

// Question #7

// var book = "A smarter way to learn JavaScript";

// alert("I am trying to learn from the Book " + book);

// Question #8

// document.write("Yah! I can wrrite HTML content through Javscript");

// Question #9

// var symbol = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

// alert(symbol);
// document.write(symbol);

// Chap 3 

// Question #1

// var age = 20;

// alert("I am " + age + " years old");

// Question #2

// var visitCount = 1;

// if (localStorage.getItem('visitCount') === null) {
//   } else {
//     var visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
//   }
  
//   localStorage.setItem('visitCount', visitCount);
  
//   alert("You have visited this site " + visitCount + " times");
  

// Question #3


// var birthYear = 2005;

// document.write("My birth year is " + birthYear + "<br>Data Type of my declared variable is number");


// Question #4

// var visitorName = "Abid Ali";
// var productTitle = "Jerseys";
// var quantity = 5;

// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on Fashion Clothing store.");

// Chap #4

//Question #1

// var variable1 = "Value1", variable2 = "Value2", variable3 = "Value3";

//Question #2

// Legal Variable Names:

// myVariable
// _price
// firstName
// user123
// $amount

//Illegal Variable Names:

// 123abc 
// my-variable
// my variable
// break
// alert

//Question #3

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p>Variable names can only contain letters, numbers, $, and _. For example: $my_1stVariable</p>");
// document.write("<p>Variables must begin with a letter, $, or _. For example $name, _name, or name</p>");
// document.write("<p>Variable names are case sensitive</p>");
// document.write("<p>Variable names should not be JS keywords</p>");


// Chap #5

// Question #1

// var sum1 = 3;
// var sum2 = 5;

// var result = sum1 + sum2;

// document.write("Sum of 3 and 5 is ", sum1 + sum2);

// Question #2

// var number1 = 3;
// var number2 = 5;

// var result = number1 - number2;

// document.write("Substract of 3 and 5 is ", number1 - number2);

// var number1 = 3;
// var number2 = 5;

// var result = number1 * number2;

// document.write("Multiplication of 3 and 5 is ", number1 * number2);

// var number1 = 3;
// var number2 = 5;

// var result = number1 / number2;

// document.write("Multiplication of 3 and 5 is ", number1 / number2);

// Question #3


// Declare a variable
// var myVariable;

// document.write("<p>Value after variable declaration is: " + myVariable + "</p>");

// myVariable = 5;

// document.write("<p>Initial value: " + myVariable + "</p>");

// myVariable++;

// document.write("<p>Value after increment is: " + myVariable + "</p>");

// myVariable += 7;

// document.write("<p>Value after adding 7 is: " + myVariable + "</p>");

// myVariable--;

// document.write("<p>Value after decrement is: " + myVariable + "</p>");

// var remainder = myVariable % 3;

// document.write("<p>The remainder is: " + remainder + "</p>");

// Question #4

// var ticketPrice = 600;

// var numberOfTickets = 5;

// var totalCost = ticketPrice * numberOfTickets;

// document.write("<p>Total cost to buy 5 tickets to a movie is " + ticketPrice * numberOfTickets + " PKR</p>");

// Question #5

// var n = 4;
//     for (var i = 1; i <= 10; ++i) {
//         document.write(n + " * " + i +
//             " = " + n * i + "<br>")};

// Question #6

// var celsiusTemperature = 25;

//     var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
//     document.write("<p>" + celsiusTemperature + "°C is " + fahrenheitTemperature + "°F</p>");

//     var fahrenheitTemperature2 = 77;

//     var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
//     document.write("<p>" + fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + ".111111111°C</p>");

// Question #7

// var priceItem1 = 650;
//     var priceItem2 = 100;

//     var quantityItem1 = 2;
//     var quantityItem2 = 7;

//     var shippingCharges = 100;

//     var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

//     document.write("<h2>Shoping Carts:</h2>");
//     document.write("<p>Price of Item 1 " + priceItem1.toFixed() + "</p>");
//     document.write("<p>Ordered Quantity of Item 1 is " + quantityItem1 + "</p>");
//     document.write("<p>Price of Item 2 is " + priceItem2.toFixed() + "</p>");
//     document.write("<p>Ordered Quantity of Item 2 is " + quantityItem2 + "</p>");
//     document.write("<p>Shipping Charges " + shippingCharges.toFixed() + "</p>");
//     document.write("<h3>Total Cost of your order is " + totalCost.toFixed() + "</h3>");

// Question #8

// var totalMarks = 980;
// var marksObtained = 804;

// var percentage = (marksObtained / totalMarks) * 100;

//     document.write("<h2>Marks Sheet</h2>");
//     document.write("<p>Total Marks: " + totalMarks + "</p>");
//     document.write("<p>Marks Obtained: " + marksObtained + "</p>");
//     document.write("<h3>Percentage: " + percentage.toFixed(2) + "08163265306%</h3>");

// Question #9

// var usDollars = 10;
//     var saudiRiyals = 25;

//     var usDollarToRupeeRate = 104.80;
//     var saudiRiyalToRupeeRate = 28;

//     var totalRupees = (usDollars * usDollarToRupeeRate) + (saudiRiyals * saudiRiyalToRupeeRate);

//     document.write("<h2>Currency in PKR</h2>");
//     document.write("<p>Amount in US Dollars: $" + usDollars + "</p>");
//     document.write("<p>Amount in Saudi Riyals: " + saudiRiyals + " SAR</p>");
//     document.write("<h3>Total Currency in PKR " + totalRupees.toFixed());

// Question #10

// let initialNumber = 7; // You can replace this with any desired initial value

// let result = (((initialNumber + 5) * 10) / 2);

// console.log("Result:", result);

// Question #11

// var currentYear = new Date().getFullYear();

// var birthYear = 1990; // Replace this with the person's birth year

// var age1 = currentYear - birthYear;
// var age2 = age1 - 1; // Assuming their birthday hasn't occurred yet this year


// document.write("<h1>Age Calculator</h1>")
// document.write(`They are either ${age1} or ${age2} years old.`);

// Question #12

// var radius = 10; // Replace this with the desired radius

// var circumference = 2 * Math.PI * radius;

// var area = Math.PI * Math.pow(radius, 2);


// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of a circle is: 20");
// document.write(`The circumference is ${circumference.toFixed(2)}`);
// document.write(`The area is ${area.toFixed(2)}`);

// Question #13

// var favoriteSnack = "chocolate"; // Replace this with your favorite snack

// var currentAge = 25; // Replace this with your current age

// var maxAge = 80; // Replace this with your estimated maximum age

// var amountPerDay = 2; // Replace this with your estimated amount per day

// var totalAmount = (maxAge - currentAge) * 365 * amountPerDay;

// document.write(`You will need ${totalAmount} ${favoriteSnack}s to last you until the ripe old age of ${maxAge}`);

// Question #14

// const inputNumber = prompt("Enter a number:");

// const result = inputNumber * 2 + 5;

// document.write(`The result of the arithmetic operations is: ${result}`);

// Chap #6 and 9

// Question #1

// const inputNumber = prompt("Enter a number:");

// const result = inputNumber * 2 + 5;

// document.write(`The result of the arithmetic operations is: ${result}`);

// Question #2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is 2");
// document.write("b is 1");
// document.write("result is 2");

// Question #3

// var userName = prompt("Enter your name:");

// if (userName !== null && userName !== "") {
//   alert("Hello, " + userName + "! Welcome!");
// } else {
//   alert("Hello! Welcome!");
// }

// Question #4

// Empty

//Question #5

// var userNumber = prompt("Enter a number for the multiplication table:");

// var number = parseInt(userNumber) || 5;

// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//   document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// Question #6

// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// var totalMarks = 100;

// var obtainedMarksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// // Take obtained marks for the remaining 2 subjects from the user and store them in variables
// var obtainedMarksSubject2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarksSubject3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// // Calculate total marks and percentage
// var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
// var totalMarksForAllSubjects = totalMarks * 3;
// var percentage = (totalObtainedMarks / totalMarksForAllSubjects) * 100;

// document.write("Subjects:");
// document.write("1. " + subject1);
// document.write("2. " + subject2);
// document.write("3. " + subject3);
// document.write("Total marks for each subject: " + totalMarks);
// document.write("Obtained marks for " + subject1 + ": " + obtainedMarksSubject1);
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
// document.write("<tr><td colspan='2'>Total</td><td>" + totalObtainedMarks + "</td></tr>");
// document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");


// Question #7

// Empty

// Chap #9 and 11

// Question #1

// var cityName = prompt("Enter the name of your city:");

// if (cityName.toLowerCase() === "karachi") {
//   alert("Welcome to the city of lights!");
// } else {
//   alert("Welcome to " + cityName + "!");
// }

// Question #2

// var gender = prompt("Enter your gender (male or female):");

// if (gender.toLowerCase() === "male") {
//   alert("Good Morning Sir!");
// } else if (gender.toLowerCase() === "female") {
//   alert("Good Morning Ma'am!");
// } else {
//   alert("Good Morning!");
// }

// Question #3

// var signalColor = prompt("Enter the color of the road traffic signal (red, yellow, or green):");

// switch (signalColor.toLowerCase()) {
//   case "red":
//     alert("Stop! It's a red signal.");
//     break;
//   case "yellow":
//     alert("Proceed with caution. It's a yellow signal.");
//     break;
//   case "green":
//     alert("Go ahead! It's a green signal.");
//     break;
//   default:
//     alert("Invalid color entered. Please enter red, yellow, or green.");
// }

// Question #4

// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

// if (remainingFuel < 0.25) {
//   alert("Please refill the fuel in your car!");
// } else {
//   alert("You have enough fuel. Drive safely!");
// }

// Question #5

// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// if (true) {
//     alert("True");
//   }
//   if (false) {
//     alert("False");
//   }
//   if ("car" < "cat") {
//     alert("car is smaller than cat");
//   }

// Question #6

// var subject1Marks = parseInt(prompt("Enter marks obtained in Subject 1:"));
// var subject2Marks = parseInt(prompt("Enter marks obtained in Subject 2:"));
// var subject3Marks = parseInt(prompt("Enter marks obtained in Subject 3:"));

// var totalMarks = parseInt(prompt("Enter total marks for the subjects:"));

// // Calculate percentage
// var obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// var percentage = (obtainedMarks / (3 * totalMarks)) * 100;

// var grade;
// if (percentage >= 80) {
//   grade = "A+";
// } else if (percentage >= 70) {
//   grade = "A";
// } else if (percentage >= 60) {
//   grade = "B";
// } else if (percentage >= 50) {
//   grade = "C";
// } else if (percentage >= 40) {
//   grade = "D";
// } else {
//   grade = "Fail";
// }

// document.write("<h2>Results</h2>");
// document.write("<p>Marks Obtained: " + obtainedMarks + "</p>");
// document.write("<p>Total Marks: " + (3 * totalMarks) + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");

// Question #7

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if (userGuess === secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Sorry, incorrect guess. The correct answer was " + secretNumber);
// }

// Question #8

// var userNumber = parseInt(prompt("Enter a number:"));

// if (userNumber % 3 === 0) {
//   alert(userNumber + " is divisible by 3. Well done!");
// } else {
//   alert(userNumber + " is not divisible by 3. Try another number!");
// }

// Question #9

// var userNumber = parseInt(prompt("Enter a number:"));

// if (userNumber % 2 === 0) {
//   alert(userNumber + " is an even number.");
// } else {
//   alert(userNumber + " is an odd number.");
// }

// Question #10

// var temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } else {
//   alert("It is very cold outside.");
// }

// Question #11

// var firstNumber = parseFloat(prompt("Enter the first number:"));

// var secondNumber = parseFloat(prompt("Enter the second number:"));

// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//   alert("Invalid input. Please enter valid numbers.");
// } else {
//   switch (operation) {
//     case '+':
//       result = firstNumber + secondNumber;
//       break;
//     case '-':
//       result = firstNumber - secondNumber;
//       break;
//     case '*':
//       result = firstNumber * secondNumber;
//       break;
//     case '/':
//       if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;
//       } else {
//         alert("Cannot divide by zero. Please enter a non-zero second number.");
//       }
//       break;
//     case '%':
//       if (secondNumber !== 0) {
//         result = firstNumber % secondNumber;
//       } else {
//         alert("Cannot calculate remainder when the divisor is zero. Please enter a non-zero second number.");
//       }
//       break;
//     default:
//       alert("Invalid operation. Please enter a valid operation (+, -, *, /, %).");
//   }

//   if (result !== undefined) {
//     alert("Result: " + result);
//   }
// }

//Question #12

// var num = 35.36;

// var newNum = num.toString().replace(".", "")

// console.log("string1: " + num)
// console.log("string2 " + newNum)

// Question #13

// var username = prompt("Enter your username:");
// var specialSymbols = ['@', '.', ',', '!'];

// function isValidUsername(username) {
//     for (var i = 0; i < specialSymbols.length; i++) {
//         if (username.includes(specialSymbols[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// function real() {
//     while (!isValidUsername(username)) {
//         alert("Please enter a valid username.");
//         username = prompt("Enter your username:");
//     }

//     alert(username + " is valid username");
// }

// real();

// Question #14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchItemInArray(array, item) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].toLowerCase() === item.toLowerCase()) {
//             return i;
//         }
//     }
//     return -1;
// }

// function real() {
//     var userInput = prompt("Welcome to Yousuf Bakery. What do you want to order sir:");
//     var foundIndex = searchItemInArray(A, userInput);
//     if (foundIndex !== -1) {
//         alert(userInput + " is available at index " + foundIndex + " in our bakery");
//     } else {
//         alert("We are sorry. " + userInput + " is not available in our bakery.");
//     }
// }

// real();

// Question #15

// var password = prompt("Enter your password:");

// function isValidPassword(password) {
//     return /[a-zA-Z]/.test(password) && /\d/.test(password) && !/^\d/.test(password) && password.length >= 6;
// }

// function real() {
//     while (!isValidPassword(password)) {
//         console.log("Password must contain letters and numbers, not start with a number, and be at least 6 characters long. Please enter a valid password.");
//         password = prompt("Enter your password:");
//     }

//     console.log("Valid password entered!");
// }

// real();

//Question #16

// var university = "University of Karachi";
// var newUni = university.split(university.length>=0)
// console.log(newUni)

// var university = "University of Karachi";
// var universityArr = university.split(" ");

// console.log(universityArr);

//Question #17

// var userInput = prompt("Write anything...");
// var lastCharacter = userInput.charAt(userInput.length - 1);

// console.log("Last character of input: " + lastCharacter);

// Question #18

// var line = "The quick brown fox jumps over the lazy dog";
// var word = "the";
// var count = 0;

// var words = line.split(" ");

// for (var i = 0; i < words.length; i++) {

//     if (words[i].toLowerCase() === word) {
//         count++;
//     }
// }

// console.log("There are " + count + " occurrence(s) of word " + " " + word);


// Chap #12

// Question #1

// var input = prompt("Enter a positive integer:");

// var num = parseInt(input);

// if (isNaN(num) || num <= 0) {
//     console.log("Please enter a positive integer.");
// } else {

//     var roundOff = Math.round(num);
//     var floorValue = Math.floor(num);
//     var ceil = Math.ceil(num);


//     console.log("a. Number: " + num);
//     console.log("b. Round off value: " + roundOff);
//     console.log("c. Floor value: " + floorValue);
//     console.log("d. Ceil value: " + ceil);
// }

// Question #2

// var input = prompt("Enter a negative floating-point number:");

// var num = parseFloat(input);

// if (isNaN(num) || num >= 0) {
//     alert("Please enter a negative floating-point number.");
// } else {

//     var roundOff = Math.round(num);
//     var floorValue = Math.floor(num);
//     var ceil = Math.ceil(num);


//     var result = "a. Number: " + num + "\n" +
//            "b. Round off value: " + roundOff + "\n" +
//            "c. Floor value: " + floorValue + "\n" +
//            "d. Ceil value: " + ceil;


//     alert(result);
// }

// Question #3

// var num1 = -4;

// function absoluteValue(number) {
//     return Math.abs(number);
// }


// console.log("The absolute value of " + num1 + " is " + absoluteValue(num1));

// var num2 = 5;

// function absoluteValue(number) {
//     return Math.abs(number);
// }

// console.log("The absolute value of " + num2 + " is " + absoluteValue(num2));

// Question #4

// function newDice() {

//     var diceValue = Math.floor(Math.random() * 6) + 1;

//     alert("random dice value: " + diceValue);
// }

// newDice();

// Question #5

// function htToss() {

//     var randomNumber = Math.random();


//     var result = (randomNumber < 0.5) ? "Heads" : "Tails";


//     console.log("random coin value: " + result);
// }

// htToss();

// Question #6

// var randomNumber = Math.floor(Math.random() * 100) + 1;

// console. log("Random Number " + randomNumber);

// Question #7

// var weightInp = prompt("Enter your weight in kilograms");

// var weightMatch = weightInp.match(/^(\d+(\.\d+)?)\s*(kgs?|kilograms?)?$/i);

// if (weightMatch) {
//     var weight = parseFloat(weightMatch[1]);
//     var unit = weightMatch[3] || "kgs";


//     console.log("Your weight is: " + weight + " " + unit);
// } else {

//     console.log("Invalid input. Please enter your weight in a valid format.");
// }


// Question #8


// var secretNum = Math.floor(Math.random() * 10) + 1;


// var userInput = prompt("Enter a number between 1 and 10");

// var userGuess = parseInt(userInput);

// if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 10) {
//     if (userGuess === secretNum) {
        
//         alert("Congratulations! You win " + secretNum);
//     } else {
        
//         alert("Sorry, the secret number was: " + secretNum + ". Try again!");
//     }
// } else {
    
//     alert("Please enter a valid number between 1 and 10.");
// }

// Chap #13

// Question #1

// function DateTime() {
//     var now = new Date();
//     var date = now.toLocaleDateString();
//     var time = now.toLocaleTimeString();
//     return "Date: " + date + "\nTime: " + time;
// }

// console.log(DateTime());

// Question #2

// function currentMon() {

//     var now = new Date();
//     var monthNames = ["January", "February", "March", "April", "May", "June",
//                      "July", "August", "September", "October", "November", "December"];
//     var monthIndex = now.getMonth();
//     var monthName = monthNames[monthIndex];

//     console.log("Current Month: " + monthName);
// }

// currentMon();

// Question #3

// function currentDay() {
//     var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//     var now = new Date();
//     var dayIndex = now.getDay();
//     var day = days[dayIndex];

//     console.log("Today is: " + day);
// }
// currentDay();

// Question #4

// function FunDay() {

//     var now = new Date();

//     var currentDay = now.getDay();
    
//     if (currentDay === 6 || currentDay === 0) {
//         alert("It's Fun day!");
//     } else {
//         alert("It's not Fun day!");
//     }
// }

// FunDay();

// Question #5

// function DayMonth() {

//     var now = new Date();

//     var DayMonth = now.getDate();
    
//     if (DayMonth < 16) {
//         console.log("First fifteen days of the month");
//     } else {
//         console.log("Last fifteen days of the month");
//     }
// }

// DayMonth();

// Question #6

// var minutes = Math.floor((new Date()).getTime() / 60000);
// console.log("Elapsed millisec since Jan 1, 1970" + minutes);

// Question #7

// var now = new Date();
// var hour = now.getHours();

// if (hour < 12) {
//     console.log("It's AM");
// } else {
//     console.log("It's PM");
// }

// Question #8

// var latDate = new Date(2020, 11, 31);
// console.log(latDate);

// Question #9

// var ramadanStart = new Date(2015, 5, 18);
// var today = new Date();
// var daysPast = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24));
// alert("Number of days past since 1st Ramadan: " + daysPast);

// Question #10

// var referenceDate = new Date();
// var beginningOf2015 = new Date(2015, 0, 1);
// var secondsElapsed = Math.floor((referenceDate - beginningOf2015) / 1000);
// console.log("On referrence date: " + secondsElapsed + " second had passed since beginning of 2015");

// Question #11

// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// currentDate.setHours(currentHour + 1);
// console.log(currentDate);

// Question #12

// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert(currentDate);

// Question #13

// var age = prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// console.log("Your birth year is: " + birthYear);

// Question #14

// var Name = prompt("Enter your name:");
// var Month = prompt("Enter the current month (e.g., January):");
// var Units = parseFloat(prompt("Enter the number of units consumed:"));
// var chargesPerUnit = parseFloat(prompt("Enter the charges per unit:"));
// var netAmountPayable = Units * chargesPerUnit;
// var Payment = netAmountPayable * 0.1;
// var Payable = netAmountPayable + Payment;

// netAmountPayable = netAmountPayable.toFixed(2);
// Payment = Payment.toFixed(2);
// Payable = Payable.toFixed(2);

// console.log("Customer Name: " + Name);
// console.log("Current Month: " + Month);
// console.log("Number of Units: " + Units);
// console.log("Charges per Unit: $" + chargesPerUnit.toFixed(2));
// console.log("Net Amount Payable (within Due Date): $" + netAmountPayable);
// console.log("Late Payment Surcharge: $" + Payment);
// console.log("Gross Amount Payable (after Due Date): $" + Payable);

// Chap #14

// Question #1

// function DateTime() {
//     var monthNames = ["January", "February", "March", "April", "May", "June",
//                      "July", "August", "September", "October", "November", "December"];
//     var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//     var now = new Date();
//     var dateTimeStr = now.toLocaleString();
//     var dayIndex = now.getDay();
//     var day = days[dayIndex];
//     var monthIndex = now.getMonth();
//     var monthName = monthNames[monthIndex];
//     console.log(day, monthName, dateTimeStr);
// }

// DateTime();


// Question #2

// function userFullName(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     console.log("Hello, " + fullName + "!");
// }

// userFullName("Abid", "Ali");

// Question #3

// function addNumbers() {
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));
//     var sum = num1 + num2;
//     return sum;
// }

// var result = addNumbers();
// console.log("Result is: " + result);

// Question #4

// function Operation(num1, num2, operator) {
//     var result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             result = "Invalid operator";
//     }

//     console.log("The result of " + num1 + " " + operator + " " + num2 + " is: " + result);
// }

// Operation(5, 3, '+');

// Question #5

// function square(x) {
//     return x * x;
// }

// Question #6

// function foo(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * foo(n - 1);
//     }
// }

// Question #7

// function yoCounting(start, end) {
//     var counting = "";
//     for (var i = start; i <= end; i++) {
//         counting += i;
//         break
//     }
//     console.log(counting);
// }

// yoCounting(1, 10);

// Question #8

// function calculateHypo(base, perpendicular) {
//     function calculateSquare(side) {
//         return side * side;
//     }

//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);

//     var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
//     return hypotenuse;
// }

// var base = 3; // Example base
// var perpendicular = 4; // Example perpendicular
// var result = calculateHypo(base, perpendicular);
// console.log("The hypotenuse is: " + result);

// Question #9

        // Arguments as value
// function calculateArea(width, height) {
//     return width * height;
// }

// console.log("Using arguments as value: " + calculateArea(5, 6));

    //    Arguments as variable

// function calculateArea(width, height) {
//     return width * height;
// }

// var width = 5;
// var height = 6;
// console.log("Using arguments as variables: " + calculateArea(width, height));

// Question #10

// function exa(str) {
//     var reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(exa("racecar"));
// console.log(exa("hello"));

// Question #11

// function capFirstLetter(str) {
//     return str.replace(/\b\w/g, function(char) {
//         return char.toUpperCase();
//     });
// }

// console.log(capFirstLetter("the quick brown fox"));

// Question #12

// function findWord(str) {
//     var words = str.split(' ');
//     var longestWord = "";

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// console.log(findWord("Hello Javascript how are you?"));

// Question #13

// function countOccu(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countOccu("JSResourceS.com", 'o'));

// Question #14

// function calCircum(radius) {
//     var circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference.toFixed(2));
// }

// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     console.log("The area is " + area.toFixed(2));
// }

// calCircum(5);
// calcArea(5);

// Chap 15

// Question #1

// function power(a, b) {
//     return Math.pow(a, b);
// }

// console.log(power(2, 3));
// console.log(power(5, 2));

// Question #2

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isLeapYear(2024));
// console.log(isLeapYear(2023));

// Question #3

// function calculateArea(a, b, c) {
//     var s = calculateSemiPerimeter(a, b, c);
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }

// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// var a = 3;
// var b = 4;
// var c = 5;
// console.log("Area of the Pizza is: " + calculateArea(a, b, c));

// Question #4

// function calculateAverage(marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
// }

// function calculatePercentage(totalMarks, maxMarks) {
//     return (totalMarks / maxMarks) * 100;
// }

// function mainFunction(marks1, marks2, marks3) {
//     var average = calculateAverage(marks1, marks2, marks3);
//     var totalMarks = marks1 + marks2 + marks3;
//     var percentage = calculatePercentage(totalMarks, 300);

//     console.log("Average marks: " + average);
//     console.log("Percentage: " + percentage + "%");
// }

// mainFunction(80, 75, 90);

// Question #5

// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(customIndexOf("hello", "e"));
// console.log(customIndexOf("hello", "x"));

// Question #6

// function deleteVowels(sentence) {
//     var vowels = "aeiouAEIOU";
//     var result = "";
//     for (var i = 0; i < sentence.length; i++) {
//         if (vowels.indexOf(sentence[i]) === -1) {
//             result += sentence[i];
//         }
//     }
//     return result;
// }

// console.log(deleteVowels("This is a test sentence"));

// Question #7

// function countSuccessiveVowels(text) {
//     var count = 0;
//     for (var i = 0; i < text.length - 1; i++) {
//         var char = text[i];
//         var nextChar = text[i + 1];
//         switch (char) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 switch (nextChar) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                         count++;
//                         break;
//                 }
//                 break;
//         }
//     }
//     return count;
// }

// console.log(countSuccessiveVowels("This is a test sentence"));

// Question #8

// function convertToMeters(km) {
//     return km * 1000;
// }

// function convertToFeet(km) {
//     return km * 3280.84;
// }

// function convertToInches(km) {
//     return km * 39370.1;
// }

// function convertToCentimeters(km) {
//     return km * 100000;
// }

// var distanceInKm = 100;
// console.log("Distance in meters: " + convertToMeters(distanceInKm));
// console.log("Distance in feet: " + convertToFeet(distanceInKm));
// console.log("Distance in inches: " + convertToInches(distanceInKm));
// console.log("Distance in centimeters: " + convertToCentimeters(distanceInKm));

// Question #9

// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40;
//     var hourlyRate = 12;
//     var overtimeRate = 1.5 * hourlyRate;
//     var overtimeHours = Math.max(hoursWorked - regularHours, 0);
//     var overtimePay = overtimeHours * overtimeRate;
//     return overtimePay;
// }

// var hoursWorked = 45;
// console.log("Overtime Company pay: Rs." + calculateOvertimePay(hoursWorked).toFixed(2));

// Question #10

// function calculateCurrencyNotes(amount) {
//     var notesOf100 = Math.floor(amount);
//     var remainingAmount = amount - notesOf100;
//     var notesOf50 = Math.floor(remainingAmount / 0.5);
//     remainingAmount = remainingAmount % 0.5;
//     var notesOf10 = Math.floor(remainingAmount / 0.1);

//     console.log("Number of 100 notes: " + notesOf100);
//     console.log("Number of 50 notes: " + notesOf50);
//     console.log("Number of 10 notes: " + notesOf10);
// }

// var amount = 3.7;
// calculateCurrencyNotes(amount);

// Chap #16

// Question #1

// document.addEventListener("DOMContentLoaded", function() {
//     var link = document.getElementById("myLink");
//     link.addEventListener("click", function() {
//         alert("You clicked the link!");
//     });
// });

// Question #2

// document.addEventListener("DOMContentLoaded", function() {
//     var mobileImages = document.querySelectorAll(".mobile-image");

//     mobileImages.forEach(function(image) {
//         image.addEventListener("click", function() {
//             alert("You clicked on mobile a image!");
//         });
//     });
// });

// Question #3

// document.addEventListener("DOMContentLoaded", function() {
//     var table = document.createElement("table");

//     for (var i = 0; i < 10; i++) {
//         var row = table.insertRow();
//         var cell1 = row.insertCell(0);
//         var cell2 = row.insertCell(1);
//         var cell3 = row.insertCell(2);
//         cell1.textContent = "Student " + (i + 1);
//         cell2.textContent = "Grade " + (i + 1);
//         var deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.addEventListener("click", function() {
//             var rowIndex = this.parentNode.parentNode.rowIndex;
//             table.deleteRow(rowIndex);
//         });
//         cell3.appendChild(deleteButton);
//     }

//     document.body.appendChild(table);
// });

// Question #4

// document.addEventListener("DOMContentLoaded", function() {
//     var image = document.createElement("img");
//     image.src = "mobile11.jpg";
    
//     image.addEventListener("mouseover", function() {
//         this.src = "mobile12.jpg";
//     });

//     image.addEventListener("mouseout", function() {
//         this.src = "mobile14.jpg";
//     });

//     document.body.appendChild(image);
// });

// Question #5

// document.addEventListener("DOMContentLoaded", function() {
//     var counterValue = 0;

//     var counter = document.createElement("p");
//     counter.textContent = counterValue;
//     document.body.appendChild(counter);

//     var increaseButton = document.createElement("button");
//     increaseButton.textContent = "Increase";
//     increaseButton.addEventListener("click", function() {
//         counterValue++;
//         counter.textContent = counterValue;
//     });
//     document.body.appendChild(increaseButton);

//     var decreaseButton = document.createElement("button");
//     decreaseButton.textContent = "Decrease";
//     decreaseButton.addEventListener("click", function() {
//         counterValue--;
//         counter.textContent = counterValue;
//     });
//     document.body.appendChild(decreaseButton);
// });

// Chap #17

// Question #1

// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.createElement("form");

//     var nameLabel = document.createElement("label");
//     nameLabel.textContent = "Name: ";
//     var nameInput = document.createElement("input");
//     nameInput.setAttribute("type", "text");
//     nameInput.setAttribute("name", "name");
//     form.appendChild(nameLabel);
//     form.appendChild(nameInput);
//     form.appendChild(document.createElement("br"));

//     var emailLabel = document.createElement("label");
//     emailLabel.textContent = "Email: ";
//     var emailInput = document.createElement("input");
//     emailInput.setAttribute("type", "email");
//     emailInput.setAttribute("name", "email");
//     form.appendChild(emailLabel);
//     form.appendChild(emailInput);
//     form.appendChild(document.createElement("br"));

//     var submitButton = document.createElement("button");
//     submitButton.setAttribute("type", "submit");
//     submitButton.textContent = "Submit";
//     form.appendChild(submitButton);

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         var formData = new FormData(form);
//         var formDataObject = {};
//         for (var pair of formData.entries()) {
//             formDataObject[pair[0]] = pair[1];
//         }
//         var result = document.createElement("p");
//         result.textContent = JSON.stringify(formDataObject);
//         console.log(result);
//     });

//     document.body.appendChild(form);
// });

// Question #2

// document.addEventListener("DOMContentLoaded", function() {
//     var contentArea = document.createElement("div");
//     var itemDetails = "This is a brief overview of the item. ";
//     itemDetails += "Click 'Read more' to see full details.";

//     var itemDetailsPara = document.createElement("p");
//     itemDetailsPara.textContent = itemDetails;
//     contentArea.appendChild(itemDetailsPara);

//     var readMoreButton = document.createElement("button");
//     readMoreButton.textContent = "Read more";
//     readMoreButton.addEventListener("click", function() {
//         itemDetails += " Full details: This item is amazing!";
//         itemDetailsPara.textContent = itemDetails;
//         contentArea.removeChild(readMoreButton);
//     });
//     contentArea.appendChild(readMoreButton);

//     document.body.appendChild(contentArea);
// });

// Question #3

// document.addEventListener("DOMContentLoaded", function() {
//     var students = [];

//     var form = document.createElement("form");

//     var nameLabel = document.createElement("label");
//     nameLabel.textContent = "Name: ";
//     var nameInput = document.createElement("input");
//     nameInput.setAttribute("type", "text");
//     nameLabel.appendChild(nameInput);
//     form.appendChild(nameLabel);

//     var ageLabel = document.createElement("label");
//     ageLabel.textContent = "Age: ";
//     var ageInput = document.createElement("input");
//     ageInput.setAttribute("type", "number");
//     ageLabel.appendChild(ageInput);
//     form.appendChild(ageLabel);

//     var addButton = document.createElement("button");
//     addButton.textContent = "Add Student";
//     addButton.addEventListener("click", function(event) {
//         event.preventDefault();
//         var student = {
//             name: nameInput.value,
//             age: ageInput.value
//         };
//         students.push(student);
//         renderTable();
//         form.reset();
//     });
//     form.appendChild(addButton);

//     document.body.appendChild(form);

//     var table = document.createElement("table");
//     document.body.appendChild(table);

//     function renderTable() {
//         table.innerHTML = "";
//         students.forEach(function(student, index) {
//             var row = table.insertRow();
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             cell1.textContent = student.name;
//             cell2.textContent = student.age;
//             var deleteButton = document.createElement("button");
//             deleteButton.textContent = "Delete";
//             deleteButton.addEventListener("click", function() {
//                 students.splice(index, 1);
//                 renderTable();
//             });
//             cell3.appendChild(deleteButton);
//             var editButton = document.createElement("button");
//             editButton.textContent = "Edit";
//             editButton.addEventListener("click", function() {
//                 nameInput.value = student.name;
//                 ageInput.value = student.age;
//             });
//             cell3.appendChild(editButton);
//         });
//     }
// });

// Chap #18 to 20

// Question #1

// var emptyArray = [[]];
// console.log(emptyArray)

// Question #2

// var mat = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(mat)

// Question #3

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Question #4

// var tabNumber = parseInt(prompt("Enter the number for multiplication table:"));
// var tabLength = parseInt(prompt("Enter the length of the multiplication table:"));

// for (var i = 1; i <= tabLength; i++) {
//     console.log(`${tabNumber} * ${i} = ${tabNumber * i}`);
// }

// Question #5

// var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

// for(var i = 0; i<fruits.length; i++)
//     console.log(fruits[i])

// Question #6

// document.write("Counting: </br>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<br>Reverse counting: </br>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<br>Even: </br>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<br>Odd: </br>");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<br>Series: </br>");
// for (var i = 1; i <= 10; i++) {
//     document.write((i * 2) + "k, ");
// }

// Question #7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the item to search:");

// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (userInput === A[i]) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert("Yes, the item is found in the list.");
// } else {
//     alert("No, the item is not found in the list.");
// }

// Question #8

// var A = [24, 53, 79, 91, 15];
// var largest = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// console.log("The largest number in the array is: " + largest);

// Question #9

// var A = [24, 53, 79, 91, 15];
// var smallest = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// console.log("The smallest number in the array is: " + smallest);


// Question #10

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// Chap #21 to 29
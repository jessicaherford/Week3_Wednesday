// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
    console.log('Question 1');
    function minimum(num1, num2){
      if (num1 > num2){
        console.log(num2);
      }
      else {
        console.log(num1);
      }
    }

    console.log(minimum(33, 22));
    console.log(minimum(25, 68));
// 2. Create a new function called minimum3() to find the smallest of three numbers
console.log('Question 2');
  function minimum3 (num1, num2, num3){
    if (num1 < num2 && num1 < num3){
      console.log(num1);
    }
    else if ( num2 < num1 && num2 < num3){
      console.log(num2);
    }
    else {
      console.log(num3);
    }
  }

minimum(23, 45, 46);
minimum(55, 66, 21);


// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
console.log('Question 3');
var total = 0;
function sum(array){
    for(i=0;i<array.length;i++){
    total += array[i];
    }
    return total;
}
var array1 = [1, 2, 3, 4, 5];
sum(array1);
// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
console.log('Question 4');
var total = 0;
function multiply(array){
  for(i=0;i<array.length; i++){
    console.log[i];
  total *= array[i];
  //console.log(total);
}
  return total;
  }


var array2 = [1, 2, 3, 4];
multiply(array2);

// 5. Write a function called filterSixPlus() that takes the following array and returns words
//    that are six characters or longer.
      var words = ["window", "table", "barstool", "glass", "charger", "outlet"];
console.log('Question 5');

filterSixPlus(words);

function filterSixPlus(array){
  for(i=0; i<array.length; i++){
      if(array[i].length >= 6){
          console.log(array[i]);
      }
      else{}
  }
}

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
console.log('Question 6');
function temperatureConversion(userAnswer){
  userAnswer = prompt('Plese enter a temperature.');
  var answerFahrenheit = userAnswer * 9/5 + 32
  return answerFahrenheit;
}
temperatureConversion();


// 7. Adding to the code in #2, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.
console.log('Question 7');
function temperatureConversion(userAnswer){
  userAnswer = prompt('Please enter a temperature.');
  var answerFahrenheit = userAnswer * 9/5 + 32
  return answerFahrenheit;
  userAnswer2 = prompt('Would you like to convert fahrenheit to celsius, type "F to C", if you want to covert celsius to fahrenheit, type "C to F".')
  if(userAnswer2 = "F to C"){

  }
}

temperatureConversion();
// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
console.log('Question 8');
function countBs(string){
    

}
// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.
console.log('Question 9');

function countChars(){}
// 10. Declare a function called ohZero() that replaces all of the o's in a string with 0's.
      var string = "Soon you will master functions!";

// 11. Write function that translates a sentence into pig latin.
//     https://en.wikipedia.org/wiki/Pig_Latin
//     i.e. "look at my cool function" --> "ooklay atyay ymay oolcay unctionfay"

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.


// 14. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!

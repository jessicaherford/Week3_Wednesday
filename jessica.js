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
var total = 1;
function multiply(array){
  for(i=0;i<array.length; i++){
  total *= array[i];
}
  return total;
  }


var array2 = [1, 2, 3, 4];
multiply(array2);

var array3 = [2,3,4,5];

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
  userAnswer2 = prompt('Would you like to convert fahrenheit to celsius, type "F to C", if you want to covert celsius to fahrenheit, type "C to F".');

(°F - 32) x 5/9 = °C
  if(userAnswer2 = "F to C"){
    var answerCelsius = (userAnswer - 32) * 5/9;
    return answerCelsius;

  }
  else{
    var answerFahrenheit = userAnswer * 9/5 + 32;
    return answerFahrenheit;

  }
}

temperatureConversion();
// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
console.log('Question 8');

function countBs(string){
  var count = [];
      for(i=0; i < string.length; i++){
         if(string.charAt(i) === 'B'){
           count.push(string.charAt(i));
         }
      }
      console.log(count.length);
}

var string1 = 'Blueberries are Bright and Blue!';

countBs(string1);

var string2 = 'Bonnie always Bought her Bunnies Biannually from Bob\'s Bunnies'

countBs(string2);
// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.
console.log('Question 9');
function countChars(string, countedVar){
  var count = [];
      for(i=0; i < string.length; i++){
         if(string.charAt(i) === countedVar){
           count.push(string.charAt(i));
         }
      }
      console.log(count.length);

}

var string1 = 'The Clever Counting Continues!';

countChars(string1, 'C');
countChars(string1, 'e');

// 10. Declare a function called ohZero() that replaces all of the o's in a string with 0's.
var string = "Soon you will master functions!";

function ohZero(string0){
for(i = 0; i < string0.length; i++ ){
var oString = string0.replace(/o/g, '0');
}
console.log(oString);
}

ohZero(string);
// 11. Write function that translates a sentence into pig latin.
//     https://en.wikipedia.org/wiki/Pig_Latin
//     i.e. "look at my cool function" --> "ooklay atyay ymay oolcay unctionfay"
console.log('Question 11');
// find the shortest way to code this one
function pigLatin(string){
  for( i= 0; i<string.length; i++){
    console.log[i];
    if(string[0] === 'a' || 'e' || 'i' || 'o' || 'u'){
      var vowelString = string[i] + 'yay';
      console.log(vowelString);
    }
    else {
      return string.substring(i, word.length) + (word.substring(0,word.length)) + 'ay';
    }
  }
}

var pigString = 'Look at my cool function.';


pigLatin(pigString);
function pigLatinWord(word){
  if(word.match(/^[aeiouAEIOU]/)){
    return word + "yay";
  } else if(word.match(/^[yY]/)){
    return word.substring(1, word.length) + "yay";
  } else {
    return word.substring(1, word.length) + word.substring(0, 1) + "ay";
  }
}

function pigLatinSentence(sentence){
  var phrase = "";
  var words = sentence.split(" ");
  for(i=0;i<words.length;i++){
    phrase += pigLatinWord(words[i]) + " ";
  }
  return phrase;
}
console.log(pigLatinSentence("look at my cool function"));


// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.
console.log('Question 12');
var currentBottles = 99;

function bottlesOfBeerSong(string){
    while(currentBottles > 0 ){
      var songString = currentBottles + ' bottles of beer on the wall ' + currentBottles + ' bottles of beer.  Take one down, pass it around ' + (currentBottles - 1) + ' bottles of beer on the wall!';
      console.log(songString);

    currentBottles--;
  }
    if (currentBottles === 0){
        console.log('No more bottles of beer on the wall, no more bottles of beer, everyones drunk, and blowing chunks, thanks to the bottles of the beer on the wall! ')
    }
}
bottlesOfBeerSong(songString);
// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.
console.log('Question 13');

var userGuess = prompt('Guess what the number is between 1 and 10.');

var number = Math.floor((Math.random()* 10 + 1));
number = number.toString();

function guessingGame(userGuess){
    if (userGuess === number){
    alert('You guessed it, nice work!');
  }
  else if(userGuess > number){
    userGuess = prompt('Too high, guess again!');
    guessingGame(userGuess);
  }
  else{ userGuess =  prompt('Too low, guess again!');
        guessingGame(userGuess);
}

}

guessingGame();

//14. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!

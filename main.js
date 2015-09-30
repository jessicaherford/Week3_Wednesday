// More Function Exercises!

// 1. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

// 2. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.

// 3. Adding to the code in #3, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

// 4. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.


//  . http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!

// Without using Math.min(), write a function called minimum() that takes two numbers
// and outputs the smallest one to the console.
function minimum(a, b) {
  if (a < b)
    return a;
  else
    return b;
}
console.log(minimum(3, 7));
// Create a new function called minimum3() to find the smallest of three numbers
function minimum3(a, b, c) {
  var nums = [a, b, c];
  var min = a;
  for(i=0;i<3;i++){
    if(nums[i] < min){
      min = nums[i];
    }
  }
  return min;
}
console.log(minimum3(21, 14, 15));

// Write a function countBs() that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters are in the string.
// HINT: Google charAt()
function countBs(string) {
  var count = 0;
  for(i=0;i<string.length;i++){
    if(string.charAt(i) == "B")
      count += 1;
  }
  return count;
}

// Write a function called countChars() that behaves like countBs(), except it takes a
//second argument that indicates what character is to be counted.
function countChar(string, char) {
  var count = 0;
  for(i=0;i<string.length;i++){
    if(string.charAt(i) == char)
      count += 1;
  }
  return count;
}

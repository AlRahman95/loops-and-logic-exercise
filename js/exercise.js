//Log every number from 0 to 100, including 0 and 100, but if the number is evenly divisible by 3, log 'fizz' instead, if the number is evenly divisible by 5 log 'buzz' instead, if the number is evenly divisible by 3 and 5 log 'fizzbuzz', if it is not evenly divisible by either 3 or 5 log the number itself

//1st way
// for (var x = 0; x <= 100; x++) {
//   if (x === 0) {
//     console.log(0);
//   } else if(x % 3 === 0 && x % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (x % 3 === 0) {
//     console.log("fizz");
//   } else if (x % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(x)
//   }
// }

//2nd way
// for (var x = 0; x <= 100; x++) {
//   if (x === 0) {
//     console.log(0);
//   } else if (x % 3 === 0 && !(x % 5 === 0)) {
//     console.log("fizz");
//   } else if (x % 5 === 0 && !(x % 3 ===0)) {
//     console.log("buzz");
//   } else if (x % 3 === 0 && x % 5 === 0) {
//     console.log("fizzbuzz");
//   } else {
//     console.log(x);
//   }
// }


//.split, .reverse are methods for strings and .join is a method for an array

var myArr = [1,2,3,4,5,6,7,8];
//Returns how many elements are within the array
myArr.length;

//Returns the last element within the array
myArr[myArr.length - 1];

//Create an array and reverse the array


//Create a function that tests if a string is a palindrome

//1st way
// function checkForPalindrome(str) {
//   var tester = str;
//   tester = tester.split("");
//   tester = tester.reverse();
//   tester = tester.join("");
//   if (tester === str) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// checkForPalindrome("lila");


//2nd way
function checkForPalindrome(str) {
  var test = str;
  test = test.split("");
  console.log(test);
  for (var x = 0; x < test.length; x++) {
    var y = test.length;
    if (test[x] === test[y]) {
      return true;
      y--;
    } else {
      return false;
    }
  }
}

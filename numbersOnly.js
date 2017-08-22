/*Make a function that copies an array, ONLY accepting the items that are numbers.

IT SHOULD RETURN A NEW ARRAY

ex:

var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]
Copy
HINT

Use typeof to determine type (ex: typeof 24 === "number" would be true)

Bonus (Only If You Have Time):

Make a second function that removes them from the given array. (instead of copying to a new array)
Do you need to return the array?
*/


var originalArray = [1, "apple", -3, "orange", 0.5];


function numbersOnly(_newArray) {

  var numArray = [];


  for (var i = 0; i < _newArray.length; i++) {
    if (typeof _newArray[i] === 'number') {
      numArray.push(_newArray[i]);
      //  console.log(numArray);
    }
  }
  return numArray;
}


/******BONUS**************/
function removeNonNumbers(_newArray) {
  for (var i = 0; i < _newArray.length; i++) {
    if (typeof _newArray[i] != 'number') {
      _newArray.splice(i, 1);
    }
  }
  //  console.log(_newArray);
  // no need to return array since - this array has been manipulated
}
var newArray = numbersOnly(originalArray);

console.log("numbersOnly: ", newArray, '\n');

console.log("second", originalArray);
removeNonNumbers(originalArray);
console.log("removeNonNumbers after:", originalArray);

console.log("secondarray:", originalArray);


var secondArray = [2, 3, "not funny", 987];


Array.prototype.removeNonNumbers = function() {
  for (var i = 0; i < this.length; i++) {
    if (typeof this[i] != 'number') {
      this.splice(i, 1);
    }
  }
};

secondArray.removeNonNumbers();
console.log('secondArray:', secondArray);

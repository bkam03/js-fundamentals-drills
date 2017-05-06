/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
};

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
function sumArrays(arr1,arr2) {
  var sum = 0;
  sum += arr1.reduce(function(prev,curr){return prev + curr;});
  sum += arr2.reduce(function(prev,curr){return prev + curr;});
  return sum;
}

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(str) {
  var count = 0;
  for(var i = 0; i< str.length;i++) {
    count++;
  }
  return count;
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */
function arrayLength(str) {
  return str.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr) {
  var sum = 0;
  /*for(var i = 0; i < arr.length;i++) {
    sum += arr[i];
  }*/
  sum = arr.reduce(function(prev,curr){return prev + curr;});
  return sum;
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(arr) {
  var stringLengths = [];
/*  for(var i = 0; i < arr.length; i++) {
    stringLengths.push(arr[i].length);
  }*/
  arr.forEach(function(value){stringLengths.push(value.length)});

  return stringLengths;
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
function countAllStrings(arr){
  var lengthSum = 0;
  arr.forEach(function(value){lengthSum+=value.length;});
  return lengthSum;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj) {
  var arrayOfValues =[];
  for(var key in obj) {
    arrayOfValues.push(obj[key]);
  }
  return arrayOfValues;
};

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(obj){
  var objCount = 0;
  for(var key in obj) {
    objCount++;
  }
  return objCount;
};

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
function createZeroFilledArray(num){
  var array = [];
  for(var i = 0; i < num;i++) {
    array.push(0);
  }
  return array;
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(array){
  array.pop();
  return array;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
function splitString(str){
  var array = [];
  array = str.split("");
  return array;
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(arr){
  return arr.pop().length;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
function sumBelowTen(arr){
  var filtered = arr.filter(function(value){if(value<10){return true;}return false;})
  return filtered.reduce(function(p,c){return p + c;});
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(strArr){
  var count = 0;
  for(var i = 0; i < strArr.length;i++) {
    if(strArr[i].length > 10) {
      count++;
    }
  }
    return count;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(arrNum){
  var product = 1;
  arrNum.forEach(function(value){product *= value; });
  return product;
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj){
  var keyRing = [];
  for(var key in obj) {
    keyRing.push(key);
  }
  return keyRing;
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function(arrNum){
  var sum = 0;
  for(var i = 0; i < arrNum.length;i++){
    if(arrNum[i] >= 0) {
      sum += arrNum[i];
    }
  }
  return sum;
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arrStr){
  var strCount = 0;
  for(var i = 0; i < arrStr.length;i++) {
    if(arrStr[i].length < 4) {
      strCount++;
    }
  }
  return strCount;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(arrObj){
  var objNum = 0;
  arrObj.forEach(function(value){
    if(typeof value === "object"){
      objNum++;
    }
  });
  return objNum;
};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
function getObjectKeys(obj){
  var keysArr = [];
  for(var key in obj) {
    keysArr.push(key);
  }
  return keysArr;
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(obj){
  var keyValues = [];
  for(var key in obj) {
    keyValues.push(obj[key]);
  }
  return keyValues;
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key, value) {
  var object = {};
  object[key]=value;
  return object;
};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
function makeObjectReverse(value, key){
  var object ={};
  object[key] = value;
  return object;
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(tuple){
  console.log(tuple);
  var object = {};
  object[tuple[0]] = tuple[1];
  return object;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
function tupleToObjectReverse(tuple){
  var object = {};
  object[tuple[1]] = tuple[0];
  return object;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(strArr){
  var obj = {};
  /*for(var i = 0; i < strArr.length;i++) {
    obj[strArr[i]] = 0;
  }*/
  strArr.forEach(function(value){obj[value] = 0;});
  return obj;
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
function getValues(obj){
  var arr = [];
  for(key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}



/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj){
  var arr = [];
  for(var key in obj) {
    arr.push([key,obj[key]]);
  }
  return arr;
};

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr){
  var obj= {};
  arr.forEach(function(value){obj[value] = false;});
  return obj;
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
function arraysToObject(arr1,arr2){
  if(arr1.length === arr2.length) {
    var obj = {};

    for(var i = 0; i < arr1.length; i++) {
      obj[arr1[i]] = arr2[i];
    }
    return obj;
  } else {
    return false;
  }
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(obj1, obj2){
  var arr = [];
  function extractObj(object){
    for(var key in object) {
      arr.push([key,object[key]]);
    }
  }
  extractObj(obj1);
  extractObj(obj2);

  return arr;
};

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
function mapArrayValues(strArr){
  var obj = {};
  for(var i = 0; i < strArr.length;i++) {
    obj[strArr[i]] = true;
  }
  return obj;
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(strArr){
  var obj = {};
  function eval(value) {
    if(value.length >= 5) {
      return  true;
    } else {
      return false;
    }
  }

  for(var i = 0; i < strArr.length;i++) {
    obj[strArr[i]] = eval(strArr[i]);
  }

  return obj;
};

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(numArr){
  var obj = {};
  numArr.forEach(function(value){obj[value]=true;});
  return obj;
};

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
function stringToKeys(str){
  var obj = {};
  var arr = str.split("");
  for(var i = 0; i < arr.length;i++) {
    obj[arr[i]] = true;
  }
  return obj;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap;

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: null,
  frequencyMap: null,
  tupleConvertToObject: null
}
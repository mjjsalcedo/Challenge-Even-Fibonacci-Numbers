/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
var test = 13;

function _sumFibs(maxFibValue) {
  let previous = 0;
  let current = 1;
  let sum;
  var evenFib = 0;
  var fibNum = [];

  for (var i = 1; current < maxFibValue; i++) {
    sum = previous + current;
    previous = current;
    current = sum;
    fibNum.push(sum);
  }

  for (var j = 0; j < fibNum.length; j++) {
    current = fibNum[j];
    if(current % 2 === 0 ){
      evenFib += current;
    }
  }
     return evenFib;
}

console.log(_sumFibs(test));

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  if( typeof maxFibValue !== 'number'){


  //define your base case, validate your input


  //do your work here

  return highest;
  }
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
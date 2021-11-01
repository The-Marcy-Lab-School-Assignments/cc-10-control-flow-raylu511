//1
function greatestOfTwo(intOne, intTwo){
  return intOne > intTwo ? intOne : intTwo;
}

//2
function greatestOfThree(intOne, intTwo, intThree){
  return intOne > intTwo && intOne > intThree ? intOne : intTwo > intOne && intTwo > intThree ? intTwo : intThree;
}

//3
function greatestOfFour(intOne, intTwo, intThree, intFour){
  return intOne > intTwo && intOne > intThree && intOne > intFour ? intOne : intTwo > intOne && intTwo > intThree && intTwo > intFour ? intTwo : intThree > intOne && intThree > intTwo && intThree > intFour ? intThree : intFour ;
}


//4
function leastOfFour(intOne, intTwo, intThree, intFour){
  return intOne < intTwo && intOne < intThree && intOne < intFour ? intOne : intTwo < intOne && intTwo < intThree && intTwo < intFour ? intTwo : intThree < intOne && intThree < intTwo && intThree < intFour ? intThree : intFour ;
}


console.log(greatestOfTwo(1, 14))           // returns 14
console.log(greatestOfTwo(-2, 2))           // returns 2
console.log(greatestOfThree(-5, -2, -6))    // returns -2
console.log(greatestOfThree(3, 2, 11))      // returns 11
console.log(greatestOfFour(-5, -2, -6, 0))  // returns 0
console.log(greatestOfFour(10, 2, 6, 11))   // returns 11
console.log(leastOfFour(-5, -2, -6, 0))     // returns -6
console.log(leastOfFour(10, 2, 6, 11))      // returns 2
function smallestOfThreeNums(numOne, numTwo, numThree){
    if (numOne < numTwo && numOne < numThree){
        console.log(numOne);
    } else if (numTwo < numOne && numTwo < numThree){
        console.log(numTwo);
    }else {
        console.log(numThree)
    }
}


smallestOfThreeNums(2, 3, 3)
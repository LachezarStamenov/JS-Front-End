function signCheck(numOne, numTwo, numThree){
 let arr = [numOne, numTwo, numThree];
 let negative=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            negative ++;
        }}
    if (negative % 2 === 0){
        console.log('Positive')
    }else {
        console.log('Negative')
    }
    }



signCheck(5,-12 ,-15)
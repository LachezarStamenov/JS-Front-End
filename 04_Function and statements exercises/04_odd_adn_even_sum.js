function oddEvenSum(num) {
    let oddNums = [];
    let evenNums = [];
    const stringArr = num.toString()
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] % 2 === 0){
            evenNums.push(Number(stringArr[i]));
        } else {
            oddNums.push(Number(stringArr[i]));
        }

    }
    console.log(`Odd sum = ${sumArr(oddNums)}, Even sum = ${sumArr(evenNums)}`)
        function sumArr(arr) {
        let sum = 0;
        arr.forEach(item => {sum += item;});
        return sum
    }
}



oddEvenSum(1000435)
oddEvenSum( 3495892137259234)
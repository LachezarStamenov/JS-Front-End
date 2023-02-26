function sumDigits(num){
    let result = 0;
    let string = num.toString()
    for (let i = 0; i < string.length; i++) {
        result += Number(string[i])
    }
    console.log(result)
}

sumDigits(97561)
function repeatString(text, nums) {
    let string = '';
    for (let i = 0; i < nums; i++) {
        string += text
    }
    console.log(string)
}

repeatString("abc", 3)
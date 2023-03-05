function charInRange(charOne, charTwo) {
    let asciCharOne = charOne.codePointAt()
    let asciCharTwo = charTwo.codePointAt()
    let result = [];

    for (let i = asciCharOne + 1; i < asciCharTwo; i++) {
        currentChar = String.fromCharCode(i)
        result.push(currentChar)
    }
    console.log(result.join(' '))
}

charInRange('#',
':'
)
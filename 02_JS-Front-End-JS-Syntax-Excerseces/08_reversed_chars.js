function solve(char1, char2, char3) {
    let string;
    string = (char1 + char2 + char3).split('').reverse().join(' ')
    console.log(string)
}

solve('A',
'B',
'C'
)
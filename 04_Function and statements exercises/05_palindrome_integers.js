function palindromeFinder(arr) {
    arr.forEach(element => console.log(element === Number(String(element).split('').reverse().join(''))));
}

palindromeFinder([123,323,421,121])

palindromeFinder(      	[32,2,232,1010])
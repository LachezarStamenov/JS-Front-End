function solve(array) {
    let object = {};
    for (const arrayElement of array) {
        object[arrayElement] = arrayElement.length;
    }

    for (const [key, value] of Object.entries((object))) {
        console.log(`Name: ${key} -- Personal Number: ${value}`)
    }
    }

solve([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
);
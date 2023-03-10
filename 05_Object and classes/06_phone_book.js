function solve(array) {
    let newArray = {};
    for (const arrayElement of array) {
        const [name, phone] = arrayElement.split(' ');
        newArray[name] = phone
        }
       let entries = Object.entries((newArray));
    for (const [key,value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}

solve(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
)
function solve(array) {
    let object = {};
    for (const arrayElement of array) {
        let [name, address] = arrayElement.split(":");
        object[name] = address
    }
    let sortedAddresses = Object.fromEntries(Object.entries(object).sort());
    let entries = Object.entries(sortedAddresses)
    for (const [name, street] of entries) {
        console.log(`${name} -> ${street}`)
    }
}



solve(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd'])

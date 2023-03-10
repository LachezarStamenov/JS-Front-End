function solve(array) {
    let object = {};
    for (const element of array) {

        let [day, name] = element.split(" ");
        if (!object[day]){
            object[day] = name
            console.log(`Scheduled for ${day}`)
        } else console.log(`Conflict on ${day}!`)
        }
    let entries = Object.entries(object);
    for (const [key, value] of  entries){
            console.log(`${key} -> ${value}`);
    }
}



solve(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim'])

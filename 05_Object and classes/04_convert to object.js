function solve(jsonString) {
    let person = JSON.parse(jsonString);
    for (const personKey in person) {
        console.log(`${personKey}: ${person[personKey]}`)
    }
}


solve('{"name": "George", "age": 40, "town": "Sofia"}')
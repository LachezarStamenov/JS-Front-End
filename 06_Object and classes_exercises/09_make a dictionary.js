
function dictMaker(jsonArr) {
    let dictionary = {}
    for (const data of jsonArr) {
        let parsedData = JSON.parse(data);
        let key = Object.keys(parsedData)[0];
        let value = Object.values(parsedData)[0];
        dictionary[key] = value;
    }

    for (item of Object.entries(dictionary).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))){
        console.log(`Term: ${item[0]} => Definition: ${item[1]}`)
    }
}

dictMaker([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])
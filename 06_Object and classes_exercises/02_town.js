function solve(array) {
    let townsArr = [];
    for (const arrayElement of array) {
        let [town, latitude, longitude] = arrayElement.split(" | ");
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        townsArr.push({town, latitude, longitude});
    }
    townsArr.forEach(town => console.log(town))
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
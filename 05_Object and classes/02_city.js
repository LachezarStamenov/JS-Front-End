function city(param) {
    Object.keys(param).forEach(x => {
    console.log(`${x} -> ${param[x]}`)
})

}



city({name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"}
)

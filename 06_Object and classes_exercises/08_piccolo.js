function piccolo(input) {
  const parkedCars = new Set();

  for (item of input) {
    let [direction, carNum ] = item.split(", ");
    if (direction === "IN") {
      parkedCars.add(carNum);
    } else {
      parkedCars.delete(carNum);
    }
  }

  if (parkedCars.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    console.log([...parkedCars].sort().join("\n"));
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

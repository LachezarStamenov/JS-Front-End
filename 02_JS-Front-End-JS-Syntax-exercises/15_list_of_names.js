function sortArrayNames(arr) {
    let sortedArr = arr.sort((aName, bName) => aName.localeCompare(bName));
      for (let i = 0; i < sortedArr.length; i++) {
    console.log(`${i + 1}.${sortedArr[i]}`);
  }
}



sortArrayNames(["John", "Bob", "Christina", "Ema"]);
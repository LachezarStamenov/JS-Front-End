function solve(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    let sortedArray = [];
    while (sortedNums.length > 0) {
        sortedArray.push(sortedNums.shift());
        sortedArray.push(sortedNums.pop());
    }
    return sortedArray;
}


solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
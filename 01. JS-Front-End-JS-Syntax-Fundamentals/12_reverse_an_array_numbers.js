function reverse(n, inputArray) {
    let arr=[];
    let output = [];
    for(let i=0; i<n; i++){
        arr.push(inputArray[i]);
    }
    for (let i=0; i<=n-1; i++){
        output.push(arr.pop())
    }
    console.log(output.join(' '))
}

reverse(3, [10, 20, 30, 40, 50])
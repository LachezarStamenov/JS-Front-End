function solve(arrCurrentStock, arrOrderedProd) {
    let storeStock = {};
    for (let i = 0; i < arrCurrentStock.length - 1; i++) {
        if (i % 2 === 0) {
            storeStock[arrCurrentStock[i]] = Number(arrCurrentStock[i+1]);
        }
    }
    for (let i = 0; i < arrOrderedProd.length-1; i++) {
        if (i % 2 === 0) {
            const product = arrOrderedProd[i];
            const quantity = Number(arrOrderedProd[i + 1])
            if (storeStock[product]) {
                storeStock[product] += quantity;
            } else {
                storeStock[product] = quantity;
            }
        }
    }
    for (const [product, quantity] of Object.entries(storeStock)) {
    console.log(`${product} -> ${quantity}`);
  }
}

solve([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]
)
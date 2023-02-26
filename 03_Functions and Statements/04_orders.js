function orderCalculator(product, pieces) {
    let price = 0
    let totalCost = 0;
    switch (product) {
    case 'coffee': price = 1.50; break;
    case 'water': price = 1.00; break;
    case 'coke': price = 1.40; break;
    case 'snacks': price = 2.00; break;
    }
    totalCost = price * pieces;
    console.log(totalCost.toFixed(2))
}

orderCalculator("water", 5)
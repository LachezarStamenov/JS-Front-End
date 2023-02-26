function fruitCostCalculator(fruitType, weight, price) {
    let totalPrice = 0;
    totalPrice = weight / 1000 * price
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruitType}.`)
}

fruitCostCalculator('orange', 2500, 1.80)
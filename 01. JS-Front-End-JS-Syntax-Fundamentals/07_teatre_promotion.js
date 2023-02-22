function ticketCalculator(typeDay, age){
    let price;
    if (typeDay === 'Weekday' && age <= 18 && age >= 0){
        price = '12$';
    } else if (typeDay === 'Weekday' && age > 18 && age <= 64){
        price = '18$';
    } else if (typeDay === 'Weekday' && age > 64 && age <= 122){
        price = '12$';
    } else if (typeDay === 'Weekend' && age <= 18 && age >= 0) {
        price = '15$';
    } else if (typeDay === 'Weekend' && age > 18 && age <= 64){
        price = '20$';
    } else if (typeDay === 'Weekend' && age > 64 && age <= 122) {
        price = '15$';
    }else if (typeDay === 'Holiday' && age <= 18 && age >= 0) {
        price = '5$';
    } else if (typeDay === 'Holiday' && age > 18 && age <= 64){
        price = '12$';
    } else if (typeDay === 'Holiday' && age > 64 && age <= 122) {
        price = '10$';
    } else {price='Error!'}
    console.log(price);
}

ticketCalculator('Weekday', 42)
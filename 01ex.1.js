function fruitProgram(fruit, weight,pricePerkg) {
    weight = weight/1000
    let money = weight*pricePerkg
    
    console.log(`I need $${(money).toFixed(2)} to buy ${(weight).toFixed(2)} kilograms ${fruit}.`);
    
}
fruitProgram('orange', 2500, 1.80)
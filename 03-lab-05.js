function lowestPricesInCities(params) {
    let productObj = {};
    let command = params.shift();
    while (command != undefined) {
        command = command.split(' | ')
        let currenTown = command[0];
        let currentProduct = command[1];
        let currentPrice = Number(command[2]);
        if (!(productObj.hasOwnProperty(currentProduct))) {
            productObj[currentProduct] = {}
            productObj[currentProduct].price = currentPrice;
            productObj[currentProduct].town = currenTown;
        } else {
            if (productObj[currentProduct].price > currentPrice) {
                productObj[currentProduct].price = currentPrice;
                productObj[currentProduct].town = currenTown;
            }
        }
        command = params.shift()
    }
    let workArr = Object.entries(productObj)
    
    for (const kvp of workArr) {
        console.log(`${kvp[0]} -> ${kvp[1].price} (${kvp[1].town})`);
        
    }
}
lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',]
)
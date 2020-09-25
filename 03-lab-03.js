function populationsInTowns(params) {
    let obj = {};
    let command = params.shift();
    while (command != undefined) {
        command = command.split('<->')
        let currentTown = command[0];
        let currentPopulation = Number(command[1])
        if (obj.hasOwnProperty(currentTown)) {
            obj[currentTown] += currentPopulation
        } else {
            obj[currentTown] = currentPopulation
        }
        command = params.shift();
    }
    let workArr = Object.entries(obj)
    for (const kvp of workArr) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }


}
populationsInTowns(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <->2']
)
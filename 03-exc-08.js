function ticketsProgram(params, sortInput) {
    let emptyArr = [];
    class TicketClass {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let command = params.shift();
    while (command != undefined) {
        command = command.split('|');
        let price = (Number(command[1])).toFixed(2)
        let line = new TicketClass(command[0], Number(price), command[2])
        emptyArr.push(line)
        command = params.shift();
    }
    let sorted
    if (sortInput == 'destination') {
        sorted = emptyArr.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortInput == 'price') {
        sorted = emptyArr.sort((a, b) => a.price - b.price);
    } else if (sortInput == 'status') {
        sorted = emptyArr.sort((a, b) => a.status.localeCompare(b.status))
    }
    console.log(sorted);        //test
    return sorted
    
    
}
ticketsProgram(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'status')
function smallestTwoNumbers(params) {
    let emptyArr = [];

    let first = Math.min(...params)

    emptyArr.push(first)
    let indexOfFirst = params.indexOf(first)

    params.splice(indexOfFirst,1)

    let second = Math.min(...params);

    emptyArr.push(second)

    console.log(emptyArr.join(' '));
    

    
}
smallestTwoNumbers([30,15,50,5])
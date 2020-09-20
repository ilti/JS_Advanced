function printEveryNthElement(params) {
    let nEl = Number(params.pop());
    for (let i = 0; i < params.length; i++) {
        if (i % nEl == 0) {
            console.log(params[i]);
        }
    }
}
printEveryNthElement(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
)
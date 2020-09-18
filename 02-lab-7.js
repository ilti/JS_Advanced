function biggestElement(params) {
    let emptyArr= []

    for (let i = 0; i < params.length; i++) {
        let maxCurrent = Math.max(...params[i])
        emptyArr.push(maxCurrent)
        
    }
    console.log(Math.max(...emptyArr));
    
}
biggestElement([[20, 50, 10],
[8, 33, 145]]
)
function extractIncreasingSubsequenceFromArray(params) {

    let emptyArr = [];
    let currentBiggest = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < params.length; i++) {
        let currentI = params[i]
        if (currentI > currentBiggest) {
            currentBiggest = currentI;
            emptyArr.push(currentI);
            console.log(currentI);
        }
    }
}
extractIncreasingSubsequenceFromArray([111,  3, 8, 4,  10,    12,    3,    2,    24])
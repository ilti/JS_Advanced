function GCDProgramFinder(first, second) {
    let maxNum = Math.max(first, second)
    let minNUm = Math.min(first, second)
    let flag = true
    let greatestDivider = 0

    for (let i = minNUm; i > 0; i--) {
        if (minNUm % i == 0 && maxNum % i == 0) {
            greatestDivider = i
            break
        }
    }
    console.log(greatestDivider);

}
GCDProgramFinder(12, 9)
function processOddNumbers(params) {
    let fileteres = params.filter((x, y) => y % 2 != 0);
    let mapped = fileteres.map((x) => x * 2)
    let reversed = mapped.reverse();

    console.log(reversed);

}
processOddNumbers([10, 15, 20, 25])
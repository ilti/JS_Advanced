function sumnumberNtoM(params1, params2) {
    let first = Number(params1);
    let second = Number(params2);
    let sum = 0

    for (let i = first; i <= second; i++) {
        sum = sum + i

    }
    console.log(sum);


}
sumnumberNtoM('1', '5')
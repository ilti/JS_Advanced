function sumFirstLast(params) {
    let first = Number(params[0]);
    let last = Number(params.pop())

    let sum = first+last

    console.log(sum);
    
}
sumFirstLast(['20'])
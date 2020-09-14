function stringLength(param1, param2, param3) {

    let totalSum = 0

    let first = param1.length;
    let second = param2.length;
    let third = param3.length;

    totalSum = first + second + third

    console.log(totalSum);

    let medium = Math.floor(totalSum / 3);


    console.log(medium);



}
stringLength('chocolate', 'ice cream', 'cake')
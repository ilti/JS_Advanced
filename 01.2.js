function mathOps(params1, params2, params3) {
    let totalSum = 0;
    if (params3 == '+') {
        totalSum = params1 + params2;
    }
    else if (params3 == '-') {
        totalSum = params1 - params2;
    }
    else if (params3 == '*') {
        totalSum = params1 * params2;
    }
    else if (params3 == '/') {
        totalSum = params1 / params2;
    }
    else if (params3 == '%') {
        totalSum = params1 % params2;
    }
    else if (params3 == '**') {
        totalSum = params1 ** params2;
    }

    console.log(totalSum);

}
mathOps(5, 6, '%')
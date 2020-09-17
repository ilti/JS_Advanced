function roadRadar(params) {
    let driverSpeed = params.shift()
    driverSpeed = Number(driverSpeed);
    let location = params.shift();

    if (location == 'motorway') {
        if (driverSpeed > 130 && driverSpeed <= 130 + 20) {
            console.log('speeding');

        } else if (driverSpeed > 130 + 20 && driverSpeed <= 120 + 40) {
            console.log('excessive speeding');
        } else if (driverSpeed > 120 + 40) {
            console.log('reckless driving');
        }
    }

    else if (location == 'interstate') {
        if (driverSpeed > 90 && driverSpeed <= 90 + 20) {
            console.log('speeding');

        } else if (driverSpeed > 90 + 20 && driverSpeed <= 90 + 40) {
            console.log('excessive speeding');
        } else if (driverSpeed > 90 + 40) {
            console.log('reckless driving');

        }
    }
    else if (location == 'city') {
        if (driverSpeed > 50 && driverSpeed <= 50 + 20) {
            console.log('speeding');
        } else if (driverSpeed > 50 + 20 && driverSpeed <= 50 + 40) {
            console.log('excessive speeding');
        } else if (driverSpeed > 50 + 40) {
            console.log('reckless driving');

        }
    }
    else if (location == 'residential') {
        if(driverSpeed > 20 && driverSpeed <= 20 + 20) {
            console.log('speeding');
        } else if (driverSpeed > 20 + 20 && driverSpeed <= 20 + 40) {
            console.log('excessive speeding');
        } else if (driverSpeed > 20 + 40) {
            console.log('reckless driving');

        }
    }

}
roadRadar([800, 'city'])
function roadRadar(speed, place) {
    let motorwayMaxLimit = 130;
    let interstateMaxLimit = 90;
    let cityMaxLimit = 50;
    let residentialMaxLimit = 20;
    let overSpeed = 0;
    let status;

    switch (place) {
        case 'motorway':
            if (speed <= motorwayMaxLimit) {
                console.log(`Driving ${speed} km/h in a ${motorwayMaxLimit} zone`)
            } else {
                overSpeed = speed - motorwayMaxLimit
                if (overSpeed <= 20) {
                    status = 'speeding';
                } else if (overSpeed > 20 && overSpeed <= 40) {
                    status = 'excessive speeding';
                } else status = 'reckless driving';
                console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${motorwayMaxLimit} - ${status}`)
            }
            break;
        case 'interstate':
            if (speed <= interstateMaxLimit) {
                console.log(`Driving ${speed} km/h in a ${interstateMaxLimit} zone`)
            } else {
                overSpeed = speed - interstateMaxLimit
                if (overSpeed <= 20) {
                    status = 'speeding';
                } else if (overSpeed > 20 && overSpeed <= 40) {
                    status = 'excessive speeding';
                } else status = 'reckless driving';
                console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${interstateMaxLimit} - ${status}`)
            }
            break;
        case 'city':
            if (speed <= cityMaxLimit) {
                console.log(`Driving ${speed} km/h in a ${cityMaxLimit} zone`)
            } else {
                overSpeed = speed - cityMaxLimit
                if (overSpeed <= 20) {
                    status = 'speeding';
                } else if (overSpeed > 20 && overSpeed <= 40) {
                    status = 'excessive speeding';
                } else status = 'reckless driving';
                console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${cityMaxLimit} - ${status}`)
            }
            break;
        case 'residential':
            if (speed <= residentialMaxLimit) {
                console.log(`Driving ${speed} km/h in a ${residentialMaxLimit} zone`)
            } else {
                overSpeed = speed - residentialMaxLimit
                if (overSpeed <= 20) {
                    status = 'speeding';
                } else if (overSpeed > 20 && overSpeed <= 40) {
                    status = 'excessive speeding';
                } else status = 'reckless driving';
                console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${residentialMaxLimit} - ${status}`)
            }
            break;
    }
}

roadRadar(40, 'city')
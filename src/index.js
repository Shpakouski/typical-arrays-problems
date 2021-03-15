exports.min = function min(array = []) {
    if (array.length === 0) {
        return 0;
    }
    let min = array[0];
    for (let num of array) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

exports.max = function max(array = []) {
    if (array.length === 0) {
        return 0;
    }
    let max = array[0];
    for (let num of array) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

exports.avg = function avg(array = []) {
    if (array.length === 0) {
        return 0;
    }
    let total = 0;
    for (let num of array) {
        total += num;
    }
    return total / array.length;
}

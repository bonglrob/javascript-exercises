const sumAll = function(startNum, endNum) {
    let sum = 0;
    if (startNum < 0 || endNum < 0 || !Number.isInteger(startNum) || !Number.isInteger(endNum)) return 'ERROR';

    let startIndex = startNum;
    let endIndex = endNum;

    if (endIndex < startIndex) {
        startIndex = endNum;
        endIndex = startNum;
    } 

    for (let i = startIndex; i <= endIndex; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

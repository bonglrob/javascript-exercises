const repeatString = function(stringToRepeat, numTimesToRepeat) {
    repeatedString = '';

    if (numTimesToRepeat < 0) { 
        return 'ERROR'; 
    } else if (numTimesToRepeat === 0) {
        return '';
    } else {
        for (let i = 0; i < numTimesToRepeat; i++) {
            repeatedString += stringToRepeat;
        }
        return repeatedString
    }
};

// Do not edit below this line
module.exports = repeatString;

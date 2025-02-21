const removeFromArray = function(givenArray, ...toRemove) {
    return givenArray.filter((elem) => !toRemove.includes(elem));
}

// Do not edit below this line
module.exports = removeFromArray;

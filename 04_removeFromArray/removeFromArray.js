const removeFromArray = function(arr, ...args) {
    for (arg of args) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == arg) arr.splice(i, 1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

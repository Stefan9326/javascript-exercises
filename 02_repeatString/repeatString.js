const repeatString = function(str, num) {
    let result = str;
    for (i = 1; i < num; i++) {
        result += str;
    }

    return result
};

// Do not edit below this line
module.exports = repeatString;

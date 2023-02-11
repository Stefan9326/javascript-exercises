const fibonacci = function(member) {
    let sum = 0;
    let previousNumber = 1;
    for (i = 0; i < member; i++) {
        sum += previousNumber;
        previousNumber = sum - previousNumber;
    
    }
    return sum
};

// Do not edit below this line
module.exports = fibonacci;

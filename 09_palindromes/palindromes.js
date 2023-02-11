const palindromes = function (str) {
    const punctuation = ["!", "?", ",", ".", " ", ":", ";"];
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        if (!punctuation.includes(str[i])) {
            newArr.push(str[i].toLowerCase());
        }
    }
    if (newArr == newArr.reverse()) {
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;

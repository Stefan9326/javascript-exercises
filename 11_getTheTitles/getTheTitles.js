const getTheTitles = function(arr) {
    let bookTitles = [];
    arr.map((book) => {bookTitles.push(book.title)});
    return bookTitles
};

// Do not edit below this line
module.exports = getTheTitles;

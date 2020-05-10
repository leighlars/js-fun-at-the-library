var checkoutBook = require('../src/library.js').checkoutBook;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, isMorning) {
    return !isMorning ? `Hello, ${name}!` : `Good morning, ${name}!`;
  }

  findBook(bookTitle) {
    var shelves = Object.values(this.library.shelves);
    for (var i = 0; i < shelves.length; i++) {
      if (shelves[i].find((book, index) => bookTitle === book.title)) {
        checkoutBook(this.library, bookTitle);
        return `Yes, we have ${bookTitle}`;
      }
    }
    return `Sorry, we do not have ${bookTitle}`;
  }

  calculateLateFee(day) {
    return Math.ceil(day * .25);
  }
}

module.exports = Librarian;

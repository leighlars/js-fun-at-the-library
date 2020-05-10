function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library;
}

function addBook(library, book) {
  var genres = Object.keys(library.shelves);
  for (var i = 0; i < genres.length; i++) {
    if (book.genre === genres[i]) {
      library.shelves[book.genre].push(book);
    }
  }
}

function checkoutBook(library, bookTitle) {
  var fantasyShelf = library.shelves.fantasy;
  var nonFictionShelf = library.shelves.nonFiction;
  var fictionShelf = library.shelves.fiction;
  var allBooks = [...fantasyShelf, ...nonFictionShelf, ...fictionShelf];
  for (var i = 0; i < allBooks.length; i++) {
    if (bookTitle === allBooks[i].title) {
      var removedBookIndex = library.shelves[allBooks[i].genre].findIndex(book => book.title === bookTitle);
      library.shelves[allBooks[i].genre].splice(removedBookIndex, 1);
      return `You have now checked out ${bookTitle} from the ${library.name}`;
    }
  }
  return  `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
}


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};

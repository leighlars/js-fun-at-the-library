function shelfBook(book, shelf) {
  shelf.length < 3 ? shelf.unshift(book) : undefined;
}

function unshelfBook(removedBookTitle, scifiShelf) {
  var i = scifiShelf.findIndex(book => book.title === removedBookTitle);
  scifiShelf.splice(i, 1);
}

function listTitles(shelf) {
  var titleList = shelf.map(book => book.title);
  return titleList.join(", ");
}

function searchShelf(shelf, bookTitle) {
  if (shelf.find(book => book.title === bookTitle)) {
    return true
  }
  return false;
}


module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};

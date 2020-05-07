function shelfBook(book, scifiShelf) {
  if (scifiShelf.length < 3) {
    scifiShelf.unshift(book)
  }
}

function unshelfBook(removedBookTitle, scifiShelf) {
  var i = scifiShelf.findIndex(book => book.title === removedBookTitle);
  scifiShelf.splice(i, 1);
}

function listTitles(fantasyShelf) {
  var titles = [];
  for (var i = 0; i < fantasyShelf.length; i++) {
    titles.push(fantasyShelf[i].title);
  }
  return titles.join(", ");
}

function searchShelf(scifiShelf, bookTitle) {
  if (scifiShelf.find(book => book.title === bookTitle)) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};

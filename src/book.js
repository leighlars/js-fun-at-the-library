function createTitle(bookTitle) {
  return `The ${bookTitle}`;
}

 function buildMainCharacter(name, age, pronouns) {
   var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns};
  return mainCharacter;
 }

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
  return book;
}

 function editBook(book) {
  book.pageCount = book.pageCount * .75;
  return book.pageCount
}


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}

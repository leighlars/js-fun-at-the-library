// Psuedo and Alternative Solutions for Fun At the Library Project

//--------------------------------
// Book file:

// pseudo for createLibrary test
// create function that takes in 1 param-- object property's name
// construct obj literal with:
//  name prop and name is key
//  shelves prop with key as empty obj
//  add shelf names with key of empty array as shelf key
// return the object literal


// pseudo for buildMainCharacter
// create function that takes in 3 params-- name value, age value, pronoun value
// create an object literal that uses these values in the respective prop
//  return that object

// refactor ES6
// function buildMainCharacter(name, age, pronouns) {
//   return {name, age, pronouns};
// }


// pseudo for saveReview test
// create function that takes in 2 params- a string, and an array
// add the string param to the reviews array (push)
// if array already has the string, don't do anything

// refactor w ternary
// function saveReview(review, reviews) {
//   !reviews.includes(review) ? reviews.push(review) : undefined;
// }


// pseudo for calculatePageCount
// create function that takes in 1 param-- bookTitle string
// return length of string * 20


// pseudo for writeBook test
// create function that takes in 3 params- values of book.title, mainCharacter, and genre
// create object literal that's keys are title, mainCharacter, genre, and pageCount
// for pageCount key, use calculatePageCount(title) as value


// pseudo for editBook test
// create func that takes in 1 param, book obj
// should reassign book.pageCount value to .75 of the original value
// return that new value

//--------------------------------
// Shelf file:

// pseudo for shelfBook test
// write function that takes in 2 params- an object and an array
// add the book object to the first index pos of the array
 // shelf can only hold max # of books

 // pseudo for unshelf test
 // create function with two params, the removedObjectKey and array
 //   // loop through shelf array
 //   // if bookTitle is the same as the shelf array's book element's title value,
 //   // remove it

 // function unshelfBook(removedBookTitle, shelf) {
//   for (var i = 0; i < shelf.length; i++) {
//     if (removedBookTitle === shelf[i].title) {
//       shelf.splice(i, 1);
    // }
  // }
 // }
// OR
 // function unshelfBook(removedBookTitle, shelf) {
 //   for (var i = 0; i < shelf.length; i++) {
 //     removedBookTitle === shelf[i].title ? shelf.splice(i, 1) : undefined;
 //   }
 // }

 // pseudo for listTitles test
 // create function that has 1 param that is an array
 // create a new array to hold book titles
 // loop through shelf array
 // add book titles from each book element's title property on array param to new array
 // return a converted array to single string with commas and spaces

 // pseudo for searchShelf test
 // create function that has 2 params-- an array and an object's key
 // loop through array param
 // if array's book object/element has a key(title) that matches param object key,
 // return true,
 // else explicitly return false

//--------------------------------
// Library file:

// pseudo for addBook test
// create function that takes in 2 params-- library obj and book obj
// create an array of the library shelf keys (can object keys be made in array? check mdn)
// loop through that array
// if book obj's shelf genre matches an array's element's genre,
// add the book obj to matching genre (obj.prop)

// function addBook(library, book) {
//   if (book.genre === "fantasy") {
//     library.shelves.fantasy.push(book);
//   } else if (book.genre === "fiction") {
//     library.shelves.fiction.push(book);
//   } else if (book.genre === "nonFiction") {
//     library.shelves.nonFiction.push(book);
//   }
// }

// pseudocode for checkoutBook test
// create a func that takes in 2 params - library object and bookTitle
// make array of shelves
// access library's shelves arrays
// if bookTitle matches any of the titles in the shelves arrays,
// remove it and return string
//  if not, return diff string

// function checkoutBook(library, bookTitle) {
//   var fantasyShelf = library.shelves.fantasy;
//   var fictionShelf = library.shelves.fiction;
//   var nonFictionShelf = library.shelves.fiction;
//   var allBooks = [...fantasyShelf, ...nonFictionShelf, ...fictionShelf];
//   console.log(allBooks);
// }

// var fantasyShelf = library.shelves.fantasy;
// var nonFictionShelf = library.shelves.nonFiction;
// var fictionShelf = library.shelves.fiction;
//
// function combineShelfArrays(monkey, zebra, hippo) {
//   return allShelves.concat(monkey, zebra, hippo);
// }
//
// // var allShelves = combineShelfArrays(fantasyShelf, nonFictionShelf, fictionShelf);
// var allShelves = combineShelfArrays(library.shelves.fantasy, library.shelves.nonFiction, library.shelves.fiction);

// function checkoutBook(library, bookTitle) {
  // var fantasyShelf = library.shelves.fantasy;
  // var nonFictionShelf = library.shelves.nonFiction;
  // var fictionShelf = library.shelves.fiction;
//   var allBooks = [...fantasyShelf, ...nonFictionShelf, ...fictionShelf];
//   for (var i = 0; i < allBooks.length; i++) {
//     if (bookTitle === allBooks[i].title) {
//       var removedBookIndex = library.shelves[allBooks[i].genre].findIndex(book => book.title === bookTitle);
//       library.shelves[allBooks[i].genre].splice(removedBookIndex, 1);
//       return `You have now checked out ${bookTitle} from the ${library.name}`;
//     }
//   }
// OR
// function checkoutBook(library, bookTitle) {
//   var foundBook = false;
//   var shelves = Object.values(library.shelves);
//   shelves.forEach(shelf => {
//     shelf.find((book, index) => {
//       if (bookTitle === book.title) {
//         foundBook = true;
//         shelf.splice(index, 1);
//       }
//       return `You have now checked out ${bookTitle} from the ${library.name}`
//     });
//     return  `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
// });

//--------------------------------
// Librarian file

// pseudo for class instantiation
// instantiate a lib obj using a constructor
// constructor has 2 params -- name value and library value
// add name property and library prop with values from resp param
// hoist property to Class constructor with keyword "this"


// psuedo for greetPatron
// // create function that takes in 2 params, name and var with boolean value
// if 2nd param boolean value is true, return string
// if 2nd param boolean value is false, return a diff string


// pseudo for findBook
// create func that takes in 1 param -- booktitle
// if the bookTitle matches any of the titles from any of the library shelves element's titles (will need to convert obj into array),
// remove book (checkoutBook method)
// and return string with param interpolated
// if it doesn't match, return diff string with param interpolated


// pseudo for calculateLateFee
// create func that takes in one param - the number of days late
// multiply day by 25 and round up to nearest whole number (research math methods)
// return that value

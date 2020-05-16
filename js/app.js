"use strict";
// // class HelloWorld {
// //     constructor(public message: string) {
// //     }
// // }
// // var hello= new HelloWorld("Hello Typescript");
// // console.log(hello.message);
// // console.log("Hello Visual Studio Code!");
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}
// function LogFirstAvailable(books = GetAllBooks()): void {
//     let numberOfBooks: number = books.length;
// 	let firstAvailable: string = '';
// 	for(let currentBook of books) {
// 		if(currentBook.available) {
// 			firstAvailable = currentBook.title;
// 			break;
// 		}
// 	}
// 	console.log('Total Books: ' + numberOfBooks);
// 	console.log('First Available: ' + firstAvailable);
// }
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
;
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        // get all books by a particular author
        for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
            var book = allBooks_1[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        // get all books based on specified availability
        for (var _a = 0, allBooks_2 = allBooks; _a < allBooks_2.length; _a++) {
            var book = allBooks_2[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
// let a = GetTitles('test');
// a.forEach(title => console.log(title));
var HermanBooks = GetTitles('Herman Melville');
HermanBooks.forEach(function (title) { return console.log(title); });
//# sourceMappingURL=app.js.map
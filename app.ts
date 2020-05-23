// import { Category } from './enums';
import { Book, Logger, Author, Librarian, Person, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from "./classes";
import refBook from "./encyclopedia";

import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge } from './lib/utilityFunctions';
import { Category } from './enums';
import Shelf from './shelf';

// let fee = CalcFee(5);
// let max = MaxBooksAllowed(12);

// function GetAllBooks(): Book[] {
	
// 	let books = [
// 		{ id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction},
// 		{ id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction},
//         { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
//         { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
        
// 	];
	
// 	return books;
// }

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

// function GetBookByTitleCategory(categoryFilter: Category = Category.Fiction): Array<string> {

//     console.log('Getting books in Category ' + Category[categoryFilter]);

//     const allBooks = GetAllBooks();
//     const filteredTitles: string[] = [];

//     for (let currentBook of allBooks) {
//         if (currentBook.category === categoryFilter) {
//             filteredTitles.push(currentBook.title);
//         }
//     }

//     return filteredTitles;

// }

// function LogBookTitles(titles: string[]): void {
//     for (let title of titles) {
//         console.log(title);
//     }
// }
//  //************************************** */
// // const poetryBooks = GetBookByTitleCategory(Category.Poetry);
// // LogBookTitles(poetryBooks);

// // const allBooks = GetAllBooks();
// // // allBooks = [];
// // LogFirstAvailable(allBooks);

// // const fictionBooks = GetBookByTitleCategory(Category.Fiction);
// // fictionBooks.forEach((val, idx, arr) => { console.log(++idx + ' - ' + val) });

// function GetBookById(id: number): Book {
//     const allBooks = GetAllBooks();
//     return allBooks.filter(book => book.id === id)[0];
// }

// function CreateCustomerID(name: string, id: number): string {
//     return name + id;
// }

// let x: number;
// x = 5;

// let IdGenerator: (chars: string, nums: number) => string;
// IdGenerator = CreateCustomerID;
// // IdGenerator = (name: string, id: number) => { return };

// let myID: string = IdGenerator('daniel', 15);
// // console.log(myID);


// function CreateCustomer(name: string, age?: number, city?: string) {
//     console.log('creating customer ' + name);

//     if (age) 
//     console.log('age: ' + age);

//     if (city) 
//     console.log('city: ' + city);
// }

// // let
// // CreateCustomer('Michelle');
// // CreateCustomer('Leigh', 6);
// // CreateCustomer('Marie', 12, "Atlanta");

// // let poetryBooks = GetBookByTitleCategory();
// // poetryBooks.forEach(title => console.log(title));

// function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
//     console.log('checking out books for ' + customer);
//     let booksCheckedOut: string[] = [];
//     for (let id of bookIDs) {
//         let book = GetBookById(id);
//         if (book.available) {
//             booksCheckedOut.push(book.title);
//         }
//     }

//     return booksCheckedOut;
// }


// // let myBooks: string[] = CheckoutBooks('Thorne', 1, 3, 4);
// // myBooks.forEach(title => console.log(title));


// function GetTitles(author: string): string[];
// function GetTitles(available: boolean): string[];
// function GetTitles(bookProperty: any): string[] {
// 	const allBooks = GetAllBooks();
// 	const foundTitles: string[] = [];
	
// 	if(typeof bookProperty == 'string') {
// 		// get all books by a particular author
// 		for(let book of allBooks) {
// 			if(book.author === bookProperty) {
// 				foundTitles.push(book.title);
// 			}
// 		}
//     }
//     else if(typeof bookProperty == 'boolean') {
// 		// get all books based on specified availability
// 		for(let book of allBooks) {
// 			if(book.available === bookProperty) {
// 				foundTitles.push(book.title);
// 			}
// 		}
// 	}
// 	return foundTitles;
// }

// // let a = GetTitles('test');
// // a.forEach(title => console.log(title));
// let HermanBooks = GetTitles('Herman Melville');
// HermanBooks.forEach(title => console.log(title));


// function PrintBook(book: Book): void {
// 	console.log(book.title + ' by ' + book.author);
// }

// let myBook: Book = {
// 	id: 5,
// 	title: 'Pride and Prejudice',
// 	author: 'Jane Austen',
// 	available: true,
// 	category: Category.Fiction,
// 	pages: 250,
// 	markDamaged: (reason: string) => console.log('Damaged: ' + reason)
// };

// // PrintBook(myBook);
// // myBook.markDamaged!('missing back cover');

// let logDamage: DamageLogger;

// logDamage = (damage: string) => console.log('Damage reported: ' + damage);
// logDamage('coffee stains');


// let favoriteAuthor: Author = {}
// let favoriteLibrarian: Librarian = {}

// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Sharon';
// favoriteLibrarian.assistCustomer('Lynda');


// let ref: ReferenceItem = new ReferenceItem('Updated Facts amd Figures', 2016);
// // ref.title = 'Facts amd Figures';
// // ref.year = 2016;
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);



// let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
// refBook.printCitation();
// // refBook.printItem();


let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }
}

let myPaper = new Newspaper('The Gazette', 2016);
myPaper.printItem();

class Novel extends class { title!: string } {
    mainCharacter!: string;
}


// let myFavoriteNovel = new Novel();
// myFavoriteNovel.

let inventory: Array<Book> =[
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A & B', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts', author: 'C. D.', available: true, category: Category.Software }
];

// let purgeBooks: Array<Book> = Purge(inventory);
// purgeBooks.forEach(book => console.log(book.title));

// let purgeNums: Array<number> = Purge<number>([1,2,3,4]);
// console.log(purgeNums);

let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
let firstBook: Book = bookShelf.getFirst();


let magazines: Array<Magazine> = [
    { title: "Programming Language Monthly", publisher: "Code Mags"},
    { title: "Literary Fiction Quarterly", publisher: "College Press"},
    { title: "Five Points", publisher: "GSU"}
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
let firstMagazine: Magazine = magazineShelf.getFirst();

// let numberShelf: Shelf<number> = new Shelf<number>();
// [5, 10, 15].forEach(num => numberShelf.add(num));

magazineShelf.printTitles();

let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`);

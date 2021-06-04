/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Book from "./Book.js";

const book1 = new Book("Cow", "Human", 10);
const book2 = new Book("The rift", "Vali", 100);
const book3 = new Book("Judges", "Courtman", 214);
const book4 = new Book("Jenkins the guide", "Mike", 915);
const book5 = new Book("Roy gone", "Roy", 195);

console.log("Book1 object:", book1);
console.log("Book2 object:", book2);
console.log("Book3 object:", book3);
console.log("Book4 object:", book4);
console.log("Book5 object:", book5);

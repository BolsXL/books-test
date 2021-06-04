// VARIABLES
let myLibrary = [];
const books = document.querySelector('.books');

// RUNNING CODE

// FUNCTIONS
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read == true ? "Read" : "Not read yet";
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}.`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    printLibrary();
}

// TESTING STUFF

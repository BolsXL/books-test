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

function printLibrary() {
    books.innerHTML = "";
    myLibrary.forEach(book => {
        let newListItem = document.createElement('li');
        let text = `${book.title} by ${book.author}. (${book.pages} pages) [${book.read}]`
        newListItem.textContent = text;
        books.appendChild(newListItem);
    });
}

// TESTING STUFF

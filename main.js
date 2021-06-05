'use strict'
// VARIABLES
let book1 = new Book("Moby Dick", "Herman Melville", 540, false);
let book2 = new Book("Title", "Author", 500, false);
let myLibrary = [book1, book2];
const books = document.querySelector('.books');
const newBook = document.querySelector('.new-book');

// RUNNING CODE
window.onload = printLibrary();
newBook.addEventListener('click', e => {
    let title = prompt("Add a title.");
    let author = prompt("Add an author.");
    let pages = prompt("How many pages?");
    let read = false;
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
})

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

function removeBookFromLibrary(book) {
    let arr = myLibrary.filter(item => item.title !== book.title);
    myLibrary = arr;
    printLibrary();
}

function toggleRead(book) {
    if (book.read == "Read") book.read = "Not read yet";
    else if (book.read == "Not read yet") book.read = "Read";
    printLibrary();
}

function printLibrary() {
    books.innerHTML = '';
    myLibrary.forEach(book => {
        let li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read}`;

        let newDiv = document.createElement('div');
        let delBtn = document.createElement('button');

        delBtn.classList.add("delete");
        delBtn.textContent = 'delete';
        delBtn.addEventListener('click', e => {
            let title = e.target.parentNode.parentNode.textContent.split(' by ')[0];

            myLibrary.forEach(book => {
                if (title == book.title) {
                    removeBookFromLibrary(book);
                }
            });

            printLibrary();
        });

        let readBtn = document.createElement('button');
        readBtn.classList.add("read");
        readBtn.textContent = 'toggle read';
        readBtn.addEventListener('click', e => {
            let title = e.target.parentNode.parentNode.textContent.split(' by ')[0];

            myLibrary.forEach(book => {
                if (title == book.title) {
                    if (book.read === "Read") {
                        book.read = "Not read yet";
                    }
                    else if (book.read === "Not read yet") {
                        book.read = "Read";
                    }
                }
            });

            printLibrary();
        })

        newDiv.appendChild(delBtn);
        newDiv.appendChild(readBtn);

        li.appendChild(newDiv);
        books.appendChild(li);
    });
}

// TESTING STUFF

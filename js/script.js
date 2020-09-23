import { books } from "./settings/books.js";

console.log(books);

// Create the HTML for the books
function createBookList () {
    const bookContainer = document.querySelector(".book-container ul");

    bookContainer.innerHTML = "";

    books.forEach(function(book) {
        bookContainer.innerHTML += `
            <li class="book">
                <span class="book-title">${book.title}</span>
                <span class="book-icon"><i class="fas fa-trash-alt" data-book="${book.isbn}"></i></span>
            </li>
        `;
    });

    

    // Trashcan
    const trashCans = document.querySelectorAll("li span i");

    trashCans.forEach(function (can) {
        can.addEventListener("click", removeBooks);
    });
}

createBookList();



// Remove Books
function removeBooks() {
    console.log(event);

    const deleteThisBook = event.target.dataset.book;

    let newBookList = books.filter(function (book) {
        if (deleteThisBook !== book) {
            return true;
        }
    });

    books = newBookList;

    createBookList();
}
import { displayMessage } from "../components/displayMessage.js";
import { emptyBooks } from "../constants/message.js";

let books = [
    {
        isbn: "1600506460320",
        title: "Great book",
    },
    {
        isbn: "1600506460373",
        title: "Ok book",
    },
    {
        isbn: "1600506460521",
        title: "Bad book",
    },
    {
        isbn: "1600506460456",
        title: "Terrible book",
    },
];

// Create the HTML for the books
export function createBookList() {
    const bookContainer = document.querySelector(".book-container ul");

    bookContainer.innerHTML = "";

    if (books.length === 0) {
        displayMessage("", emptyBooks, ".book-container");
    }

    books.forEach(function (book) {
        bookContainer.innerHTML += `
            <li class="book">
                <span class="book-title">${book.title}</span>
                <span class="book-icon"><i class="fas fa-trash-alt" data-item="${book.isbn}"></i></span>
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
export function removeBooks() {
    const deleteThisBook = event.target.dataset.item;

    const newBookList = books.filter((book) => deleteThisBook !== book.isbn);

    books = newBookList;

    createBookList();
}
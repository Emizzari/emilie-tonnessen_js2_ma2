// import { books } from "./settings/books.js";

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
function createBookList () {
    const bookContainer = document.querySelector(".book-container ul");

    bookContainer.innerHTML = "";

    books.forEach(function(book) {
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
function removeBooks() {
    // console.log(event);

    const deleteThisBook = event.target.dataset.item;

    const newBookList = books.filter(function (book) {
        if (deleteThisBook !== book) {
            return true;
        }
    });

    books = newBookList;

    createBookList();
}
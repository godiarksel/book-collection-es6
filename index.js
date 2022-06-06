import togglePages from "./modules/toggle.js";
import addBookToLocalStorage from "./modules/addLocalStorage.js";
import removeBook from "./modules/removeBook.js";
import addBookToList from "./modules/addList.js";
import displayBooks from "./modules/displayBooks.js";

const form = document.querySelector('form');
const bookList = document.querySelector('.book-list');
const dateTime = document.querySelector('#date-time');

const date = new Date();
dateTime.innerHTML = date;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }
}

document.addEventListener('DOMContentLoaded', displayBooks);

bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const currentBook = e.target.closest('.oneBook');
    currentBook.remove();
    const id = currentBook.querySelector('span').textContent;
    removeBook(Number(id));
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.querySelector('.title');
  const authorInput = document.querySelector('.author');
  if (titleInput.value.length > 0 && authorInput.value.length > 0) {
    const newBook = new Book(titleInput.value, authorInput.value);
    addBookToList(newBook);
    addBookToLocalStorage(newBook);
    titleInput.value = '';
    authorInput.value = '';
    titleInput.focus();
  }
});

togglePages();


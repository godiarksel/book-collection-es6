import { bookList } from './toggle.js';

const addBookToList = (book) => {
  const newBook = document.createElement('div');
  newBook.classList.add('oneBook');
  newBook.innerHTML += `
  <span hidden>${book.id}</span>
  <tr>"${book.title}" by ${book.author}</tr>
  <button type="button" class="remove">Remove</button>`;
  bookList.appendChild(newBook);
};
export default addBookToList;
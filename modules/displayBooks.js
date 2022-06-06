import getBooks from './getBook.js';
import addBookToList from './addList.js';

const displayBooks = () => {
  const books = getBooks();
  books.forEach((book) => {
    addBookToList(book);
  });
};
export default displayBooks;
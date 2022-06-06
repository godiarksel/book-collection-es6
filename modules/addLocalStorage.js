import getBooks from './getBook.js';

const addBookToLocalStorage = (book) => {
  const bookCollection = getBooks();
  bookCollection.push(book);
  localStorage.setItem('bookApp', JSON.stringify(bookCollection));
};
export default addBookToLocalStorage;
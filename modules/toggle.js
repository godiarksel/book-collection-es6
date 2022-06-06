export const bookList = document.querySelector('.book-list');

const togglePages = () => {
  const contacts = document.querySelector('.contacts');
  const bookForm = document.querySelector('.form');
  const listLink = document.querySelector('#nav__links__list');
  const addLink = document.querySelector('#nav__links__add');
  const contaLink = document.querySelector('#nav__links__contacts');

  listLink.addEventListener('click', () => {
    bookForm.classList.remove('enable');
    contacts.classList.remove('enable');
    bookList.classList.remove('disable');
  });
  addLink.addEventListener('click', () => {
    bookList.classList.add('disable');
    contacts.classList.remove('enable');
    bookForm.classList.add('enable');
  });
  contaLink.addEventListener('click', () => {
    bookList.classList.add('disable');
    bookForm.classList.remove('enable');
    contacts.classList.add('enable');
  });
};

export default togglePages;
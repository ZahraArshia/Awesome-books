/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
class Book {
  constructor(index, title, author) {
    this.index = index;
    this.title = title;
    this.author = author;
  }
}

const bookShelf = document.getElementById('bookShelf');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementsByClassName('remove-btn');
let bookList = [];
let currentIndex = 0;

function print(data) {
  if (data.title && data.author) {
    const element = document.createElement('div');
    element.setAttribute('id', data.index);
    element.innerHTML += `<p> Book" ${data.title} " By: ${data.author} </p> `;
    bookShelf.appendChild(element);
    const removeButton = document.createElement('div');
    removeButton.innerHTML = '<button type="button" class="remove-btn">Remove</button><hr>';
    removeButton.className = 'remove-btn';
    element.appendChild(removeButton);
  }
}

function add() {
  const NewBook = new Book(currentIndex, document.getElementById('title').value, document.getElementById('author').value);
  bookList.push(NewBook);
  window.localStorage.setItem('bookList', JSON.stringify(bookList));
  bookList = JSON.parse(window.localStorage.getItem('bookList'));
  print(NewBook);
  currentIndex += 1;
}

function displayInfo() {
  if (bookList.length) {
    currentIndex = (bookList[bookList.length - 1].index) + 1;
    for (const item in bookList) {
      print(bookList[item]);
    }
  }
}

function remove(event) {
  const removable = event.currentTarget.parentNode;
  const index = removable.id;
  bookShelf.removeChild(removable);
  bookList = bookList.filter((book) => book.index.toString() !== index);
  window.localStorage.setItem('bookList', JSON.stringify(bookList));
  bookList = JSON.parse(window.localStorage.getItem('bookList'));
}

window.onload = () => {
  if (window.localStorage.getItem('bookList')) {
    bookList = JSON.parse(window.localStorage.getItem('bookList'));
  }
  addButton.addEventListener('click', add);
  displayInfo();
  for (let i = 0; i < removeButton.length; i += 1) {
    removeButton[i].addEventListener('click', remove);
  }
};
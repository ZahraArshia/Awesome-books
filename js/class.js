class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  bookList = [];

  add() {
    if (document.getElementById('title').value && document.getElementById('author').value) {
      const temp = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
      };
      this.bookList.push(temp);
      localStorage.setItem('bookList', JSON.stringify(this.bookList));
      this.bookList = JSON.parse(localStorage.getItem('bookList'));
      this.displayInfo();
    }
  }

  displayInfo() {
    if (JSON.parse(localStorage.getItem('bookList'))) {
      this.bookList = JSON.parse(localStorage.getItem('bookList'));
      document.getElementById('bookShelf').innerHTML = '';
      this.bookList.forEach((book, index) => {
        document.getElementById('bookShelf').innerHTML += `
              <div class="book-row">
                      <p class="title-p">"${book.title}" By: ${book.author}</p>
                      <button class="removeButton" onClick = 'newBook.remove(${index})'>Remove</button>
              </div> `;
      });
    }
  }

  remove(index) {
    this.bookList.splice(index, 1);
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
    this.displayInfo();
  }
}

const newBook = new Book();
newBook.displayInfo();
document.getElementById('addButton').addEventListener('click', () => {
  newBook.add();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});
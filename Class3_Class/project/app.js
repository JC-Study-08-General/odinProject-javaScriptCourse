// Object Constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`
  }
}

let myLibrary = [new Book('test','test',10,true), new Book('test2','test2',210,false)];
console.log(myLibrary)

// Form Data
const form = document.querySelector('form');
const titleInput = form.elements.title;
const authorInput = form.elements.author;
const pagesInput = form.elements.pages;
const readInput = form.elements.read;

// List items
const booksPane = document.getElementById('books-pane');
const allBooks = document.getElementsByClassName('book');

// Listening for the form submit.
form.addEventListener('submit', (e) => {
  for (const book of allBooks) {
    book.classList.remove('just-created');
  };
  
  const newBook = new Book(titleInput.value, authorInput.value, +pagesInput.value, readInput.checked)

  myLibrary.push(newBook)

  createBookList(newBook);
  form.reset();
  
  e.preventDefault();
});

// Func - Create a list of books
createBookList = () => {
  booksPane.innerHTML = '';

  myLibrary.forEach((b, i) => {
    const textNode = document.createTextNode(b.info());
    const textSpan = document.createElement('span');
    textSpan.appendChild(textNode)
    textSpan.setAttribute('title', 'Delete');
    textSpan.classList.add('book');

    if(myLibrary.length - 1 === i) {
      textSpan.classList.add('just-created');
    }
    
    const textLi = document.createElement('li');
    textLi.appendChild(textSpan);
  
    // Add the delete listner
    textSpan.addEventListener('click', () => {
      deleteBook(i);
    });

    if(!b.read) {
      const readNode = document.createTextNode('read');
      const readSpan = document.createElement('span');
      readSpan.appendChild(readNode)
      readSpan.classList.add('read');

      textLi.appendChild(readSpan);

      // Add the read listner
      readSpan.addEventListener('click', () => {
        updateBook(i);
      });
    }

    booksPane.appendChild(textLi);
  })  
}

// Func - Delete book
deleteBook = (id) => {
  myLibrary.splice(id, 1);
  createBookList();
}

// Func - Update Read Status
updateBook = (id) => {
  myLibrary[id].read = true;
  createBookList();
}

createBookList()
const addBookBtn = document.getElementById('addbook-btn');
const submitBtn = document.getElementById('submit-btn');
const closeFormBtn = document.getElementById('close-form-btn');

const library = document.getElementById('books');
const form = document.getElementById('book-form');

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBook() {
    let title = form.querySelector('#title').value;
    let author = form.querySelector('#author').value;
    let pages = parseInt(form.querySelector('#pages').value);
    let readStatus = form.querySelector('#read-status').checked;
    let book = null;
    // console.log(typeof title, typeof author, typeof pages, typeof readStatus);

    // Create New Book
    if (title && author && pages && readStatus) {
        book = new Book(title, author, pages, readStatus);
    
        // Push To Library
        myLibrary.push(book);

        // console.log(myLibrary);

        form.classList.toggle('active');
        updateDisplay();
    }
}

function createCard(bookObj) {
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    bookCard.innerHTML = `
    <div class="card-details">
        <h2 id="book-title">${bookObj.title}</h2>
        <h3 id="book-author">by ${bookObj.author}</h3>
        <p id="book-pages">${bookObj.pages} pages</p>
        <div class="card-edit">
            <label class="card-status">
            <input type="checkbox"> Mark as read</label>
            <button class="delete-btn">
                <i class="fa-solid fa-trash"></i>
            </button>               
        </div>
    </div>`
    return bookCard;
}

function updateDisplay() {
    // Empty Out Current Display
    const display = document.getElementById('books');
    display.innerHTML = '';

    myLibrary.forEach((book) => {
        // Create New Book Card
        const bookCard = createCard(book);

        // Add Book To Display
        display.appendChild(bookCard);
        // console.log(book.title, book.author, book.pages, book.isRead);
    })
}

addBookBtn.addEventListener('click', () => {
    form.classList.toggle('active');
})

closeFormBtn.addEventListener('click', () => {
    form.classList.toggle('active');
})

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBook();
})
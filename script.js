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
    if (title && author && pages) {
        book = new Book(title, author, pages, readStatus);
    
        // Push To Library
        myLibrary.push(book);

        // console.log(myLibrary);

        form.classList.toggle('active');
        updateDisplay();
    }
}

function createCard(bookObj, index) {
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.setAttribute('id', `${index}`);

    bookCard.innerHTML = `
    <div class="card-details">
        <h2 id="book-title">${bookObj.title}</h2>
        <h3 id="book-author">by ${bookObj.author}</h3>
        <p id="book-pages">${bookObj.pages} pages</p>
        <div class="card-edit">
            <div class="card-status">
                <input type="checkbox">
                <label> Mark as read</label>
            </div>
            <button class="delete-btn">
                <i class="fa-solid fa-trash"></i>
            </button>               
        </div>
    </div>`
    if (bookObj.isRead == true) {
        bookCard.classList.toggle('read');
        bookCard.querySelector('input').checked = true;
    }
    return bookCard;
}

function updateDisplay() {
    // Empty Out Current Display
    const display = document.getElementById('books');
    display.innerHTML = '';

    let index = 0;
    myLibrary.forEach((book) => {
        // Create New Book Card
        const bookCard = createCard(book, index);

        // Add Book To Display
        display.appendChild(bookCard);
        index++;
        console.log(book.title, book.author, book.pages, book.isRead);
    })

    const checkboxes = document.querySelectorAll('.book-card .card-edit .card-status');
    let currentCheckbox = null;
    let card = null;
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', (event) => {
            // let checked = document.querySelectorAll('.book-card .card-edit .card-status input').checked;
            // console.log(event.target.checked);
            if (event.target.tagName == 'LABEL' || 'INPUT') {
                card = event.target.parentElement.parentElement.parentElement.parentElement;
                
                // console.log(card);
                card.classList.toggle('read');

                // update checkbox
                if (card.classList.contains('read')) {
                    card.querySelector('input').checked = true;
                    // update status inside the book objects for display purposes
                    myLibrary[card.id].isRead = true;
                } else {
                    card.querySelector('input').checked = false;
                    myLibrary[card.id].isRead = false;
                }
            }
        })
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
const addBookBtn = document.getElementById('addbook-btn');
const submitBtn = document.getElementById('submit-btn');
const closeFormBtn = document.getElementById('close-form-btn');

const form = document.getElementById('book-form');

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

addBookBtn.addEventListener('click', () => {
    form.classList.toggle('active');
})

closeFormBtn.addEventListener('click', () => {
    form.classList.toggle('active');
})

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let title = form.querySelector('#title').value;
    let author = form.querySelector('#author').value;
    let pages = parseInt(form.querySelector('#pages').value);
    let readStatus = form.querySelector('#read-status').checked;
    console.log(typeof title, typeof author, typeof pages, typeof readStatus);
})
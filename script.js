let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? "already read" : "not read yet"
  }`;
};

const addBookButton = document.querySelector("#add-book-btn");

addBookButton.addEventListener("click", addBookToLibrary);

function addBookToLibrary(event) {
  let title, author, pages, read;
  let form = document.getElementById("add-form");

  if (form.checkValidity()) {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read").checked;

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    printBook(book);

    form.reset();
  }

  event.preventDefault();
}

function printBook(book) {
  let bookRow = document.createElement("div");

  let title = document.createElement("div");
  title.textContent = book.title;

  let author = document.createElement("div");
  author.textContent = book.author;

  let pages = document.createElement("div");
  pages.textContent = book.pages;

  let readCtn = document.createElement("div");
  let readBtn = document.createElement("button");
  readBtn.textContent = "READ";
  readBtn.classList.add("read-btn");
  readCtn.appendChild(readBtn);

  readBtn.addEventListener("click", () => {
    if (readBtn.textContent === "READ") {
      readBtn.textContent = "NOT READ";
    } else {
      readBtn.textContent = "READ";
    }
  });

  let deleteCtn = document.createElement("div");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteCtn.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    console.table(myLibrary);
    myLibrary.splice(book, 1);
    console.table(myLibrary);
  });

  bookRow.appendChild(title);
  bookRow.appendChild(author);
  bookRow.appendChild(pages);
  bookRow.appendChild(readCtn);
  bookRow.appendChild(deleteCtn);

  document.getElementById("list").appendChild(bookRow);
}

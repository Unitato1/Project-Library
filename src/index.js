import { validating } from "./form_validation";

const bookFactory = (title, author, pages, read) => {
  const set_pos = (pos) => {
    this.pos = pos;
  };
  return { title, author, pages, read, set_pos };
};

const bookshelf = (() => {
  const book_container = document.querySelector("#book-container");
  const create_bookshelf = (books) => {
    book_container.replaceChildren();
    let curr_book;
    let title;
    let author;
    let pages;
    let read;
    let delete_btn;
    let counter = 0;
    let curr_pos;
    for (let book of books) {
      delete_btn = document.createElement("button");
      delete_btn.className = "del_book";
      delete_btn.innerHTML = "&times;";
      delete_btn.dataset.pos = counter;
      counter++;
      delete_btn.addEventListener("click", function () {
        curr_pos = this.dataset.pos;
        curr_pos === "0" ? books.shift() : books.splice(curr_pos, curr_pos);
        create_bookshelf(books);
      });
      title = document.createElement("p");
      title.textContent = book.title;
      author = document.createElement("p");
      author.textContent = book.author;
      pages = document.createElement("p");
      pages.textContent = book.pages;
      read = document.createElement("button");

      read.addEventListener("click", function () {
        this.textContent = this.textContent === "Read" ? "Not read" : "Read";
        this.className = this.textContent === "Read" ? "read" : "notread";
      });

      read.textContent = book.read === true ? "Read" : "Not read";
      read.className = read.textContent === "Read" ? "read" : "notread";
      curr_book = document.createElement("div");
      curr_book.className = "book";
      curr_book.appendChild(delete_btn);
      curr_book.append(title, author, pages, read);
      book_container.appendChild(curr_book);
    }
    return;
  };
  return { create_bookshelf };
})();

const main = (() => {
  const form = document.querySelector("#book-form");
  const add_book = document.querySelector("#book-add");
  const submit = document.querySelector("#submit");
  const main_con = document.querySelector("#main_con");
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("#read");
  const close = document.querySelector(".close");
  let books = [];

  const reset_form = () => {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
  };

  const toggle_form = (turn) => {
    if (turn) {
      main_con.className = "hidden_behind";
      form.className = "show";
      return;
    }
    main_con.className = "showed_behind";
    form.className = "hidden";
  };
  close.addEventListener("click", (e) => {
    toggle_form(false);
    e.preventDefault();
  });
  document.addEventListener("mousedown", (e) => {
    if (!form.contains(e.target)) {
      toggle_form(false);
    }
  });

  add_book.addEventListener("click", toggle_form);
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      validating.check_Validity_Text(title) &&
      validating.check_Validity_Text(author) &&
      validating.check_Validity_Num(pages)
    ) {
      books.push(
        bookFactory(title.value, author.value, pages.value, read.checked)
      );
      reset_form();
      toggle_form();
      bookshelf.create_bookshelf(books);
      console.table(books);
    } else {
      validating.display_error(title, false),
        validating.display_error(author, false),
        validating.display_error(pages, true);
    }
  });
})();

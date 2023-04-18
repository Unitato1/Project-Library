const bookFactory = (title, author, pages, read) => {
  return { title, author, pages, read };
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
    for (book of books) {
      title = document.createElement("p");
      title.innerHTML = book.title;
      author = document.createElement("p");
      author.innerHTML = book.author;
      pages = document.createElement("p");
      pages.innerHTML = book.pages;
      read = document.createElement("button");
      read.addEventListener("click", () => {});
      read.innerHTML = book.read === true ? "Read" : "Not read";

      curr_book = document.createElement("div");
      curr_book.className = "book";
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
  let books = [];

  const reset_form = () => {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
  };

  const toggle_form = () => {
    main_con.className =
      main_con.className === "hidden_behind"
        ? "showed_behind"
        : "hidden_behind";

    form.className = form.className === "hidden" ? "show" : "hidden";
  };

  add_book.addEventListener("click", (e) => {
    toggle_form();
    if (!form.contains(e.target)) {
      console.log("hello");
    }
  });
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    books.push(
      bookFactory(title.value, author.value, pages.value, read.checked)
    );

    reset_form();
    toggle_form();
    bookshelf.create_bookshelf(books);
    console.table(books);
  });
})();

const book = (author, title, pages, read) => {
  return { author, title, pages, read };
};

const bookself = (() => {
  const create_bookshelf = () => {
    return;
  };
})();
console.log("hello");
const form = document.querySelector("form");
const add_book = document.querySelector("#book-add");
add_book.addEventListener("click", () => {
  console.log("hello");
  form.className = form.className === "hidden" ? "show" : "hidden";
});

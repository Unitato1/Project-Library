const book = (author, title, pages, read) => {
  return { author, title, pages, read };
};

const bookself = (() => {
  const create_bookshelf = () => {
    return;
  };
})();

const main = (() => {
  const form = document.querySelector("#book-form");
  const add_book = document.querySelector("#book-add");
  const main_elements = [
    document.querySelector("header"),
    document.querySelector("footer"),
    document.querySelector("main"),
  ];
  let running = false;
  add_book.addEventListener("click", (e) => {
    for (element of main_elements) {
      element.className =
        element.className === "hidden_behind"
          ? "showed_behind"
          : "hidden_behind";
    }
    form.className = form.className === "hidden" ? "show" : "hidden";
    running = true;
    document.addEventListener("click", (e) => {
      if (!form.contains(e.target) && running === false) {
        console.log("hello");
        for (element of main_elements) {
          element.className =
            element.className === "hidden_behind"
              ? "showed_behind"
              : "hidden_behind";
          form.className = form.className === "hidden" ? "show" : "hidden";
          running = true;
        }
      }
      running = false;
    });
  });
})();

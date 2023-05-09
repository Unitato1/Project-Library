/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form_validation.js":
/*!********************************!*\
  !*** ./src/form_validation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validating\": () => (/* binding */ validating)\n/* harmony export */ });\nconst validating = (() => {\n  const check_Validity_Text = function (field) {\n    if (field.value.length < 5 || field.value.length >= 20) {\n      return true;\n    }\n    return false;\n  };\n  const check_Validity_Num = function (field) {\n    if (field.value > 1000 || field.value < 0) {\n      return true;\n    }\n    return false;\n  };\n  const error_message = (field, num) => {\n    if (num) {\n      if (check_Validity_Num(field)) {\n        return `${field.id}should be in range 5-999`;\n      }\n    } else if (check_Validity_Text(field)) {\n      return `${field.id} should be 5-18 characters long`;\n    }\n    return \"\";\n  };\n  const display_error = (field, num) => {\n    const error = error_message(field, num);\n    let div_error = field.parentElement.querySelector(\".error\");\n    if (error) {\n      if (!div_error) {\n        div_error = document.createElement(\"div\");\n        div_error.className = \"error\";\n        div_error.textContent = error;\n      }\n      field.parentElement.append(div_error);\n      console.log(\"Ho\");\n      return false;\n    }\n    console.log(\"Hello\");\n    return true;\n  };\n  return { display_error };\n})();\n\n\n\n\n//# sourceURL=webpack://project-library/./src/form_validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form_validation */ \"./src/form_validation.js\");\n\n\nconst bookFactory = (title, author, pages, read) => {\n  const set_pos = (pos) => {\n    undefined.pos = pos;\n  };\n  return { title, author, pages, read, set_pos };\n};\n\nconst bookshelf = (() => {\n  const book_container = document.querySelector(\"#book-container\");\n  const create_bookshelf = (books) => {\n    book_container.replaceChildren();\n    let curr_book;\n    let title;\n    let author;\n    let pages;\n    let read;\n    let delete_btn;\n    let counter = 0;\n    let curr_pos;\n    for (let book of books) {\n      delete_btn = document.createElement(\"button\");\n      delete_btn.className = \"del_book\";\n      delete_btn.innerHTML = \"&times;\";\n      delete_btn.dataset.pos = counter;\n      counter++;\n      delete_btn.addEventListener(\"click\", function () {\n        curr_pos = this.dataset.pos;\n        curr_pos === \"0\" ? books.shift() : books.splice(curr_pos, curr_pos);\n        create_bookshelf(books);\n      });\n      title = document.createElement(\"p\");\n      title.textContent = book.title;\n      author = document.createElement(\"p\");\n      author.textContent = book.author;\n      pages = document.createElement(\"p\");\n      pages.textContent = book.pages;\n      read = document.createElement(\"button\");\n\n      read.addEventListener(\"click\", function () {\n        this.textContent = this.textContent === \"Read\" ? \"Not read\" : \"Read\";\n        this.className = this.textContent === \"Read\" ? \"read\" : \"notread\";\n      });\n\n      read.textContent = book.read === true ? \"Read\" : \"Not read\";\n      read.className = read.textContent === \"Read\" ? \"read\" : \"notread\";\n      curr_book = document.createElement(\"div\");\n      curr_book.className = \"book\";\n      curr_book.appendChild(delete_btn);\n      curr_book.append(title, author, pages, read);\n      book_container.appendChild(curr_book);\n    }\n    return;\n  };\n  return { create_bookshelf };\n})();\n\nconst main = (() => {\n  const form = document.querySelector(\"#book-form\");\n  const add_book = document.querySelector(\"#book-add\");\n  const submit = document.querySelector(\"#submit\");\n  const main_con = document.querySelector(\"#main_con\");\n  const title = document.querySelector(\"#title\");\n  const author = document.querySelector(\"#author\");\n  const pages = document.querySelector(\"#pages\");\n  const read = document.querySelector(\"#read\");\n  const close = document.querySelector(\".close\");\n  let books = [];\n\n  const reset_form = () => {\n    title.value = \"\";\n    author.value = \"\";\n    pages.value = \"\";\n    read.checked = false;\n  };\n\n  const toggle_form = (turn) => {\n    if (turn) {\n      main_con.className = \"hidden_behind\";\n      form.className = \"show\";\n      return;\n    }\n    main_con.className = \"showed_behind\";\n    form.className = \"hidden\";\n  };\n  close.addEventListener(\"click\", (e) => {\n    toggle_form(false);\n    e.preventDefault();\n  });\n  document.addEventListener(\"mousedown\", (e) => {\n    if (!form.contains(e.target)) {\n      toggle_form(false);\n    }\n  });\n\n  add_book.addEventListener(\"click\", toggle_form);\n  submit.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    if (\n      form.checkValidity() &&\n      _form_validation__WEBPACK_IMPORTED_MODULE_0__.validating.display_error(title, false) &&\n      _form_validation__WEBPACK_IMPORTED_MODULE_0__.validating.display_error(author, false) &&\n      _form_validation__WEBPACK_IMPORTED_MODULE_0__.validating.display_error(pages, true)\n    ) {\n      console.log(\n        _form_validation__WEBPACK_IMPORTED_MODULE_0__.validating.display_error(title, false),\n        _form_validation__WEBPACK_IMPORTED_MODULE_0__.validating.display_error(author, false),\n        _form_validation__WEBPACK_IMPORTED_MODULE_0__.validating.display_error(pages, true)\n      );\n      books.push(\n        bookFactory(title.value, author.value, pages.value, read.checked)\n      );\n      reset_form();\n      toggle_form();\n      bookshelf.create_bookshelf(books);\n      console.table(books);\n    }\n  });\n})();\n\n\n//# sourceURL=webpack://project-library/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
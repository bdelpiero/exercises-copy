/* ===== Promises ====== */

function fetchBooks() {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        { available: true, title: "Clean Code", author: "Robert C. Martin" },
        { available: false, title: "Design Patterns", author: "GoF" },
        { available: true, title: "TDD By Example", author: "Kent Beck" },
      ]);
    }, 1000);
  });
}

//I want to get an array with all available titles.
//e.g. ["Clean Code", "TDD By example"]
const result = []; // ???

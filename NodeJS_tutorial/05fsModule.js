//import using common js syntax
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  console.log(err, data);
});

const a = fs.readFileSync("file.txt");
console.log("running the fileSync file", a.toString());
// fs.readFile("01index.js", "utf8", (err, data) => {
//   console.log(err, data);
// });
console.log("Finishhed reading file");

fs.writeFile("file1.txt", "This is file 1 data", () => {
  console.log("written the file 1 data");
});

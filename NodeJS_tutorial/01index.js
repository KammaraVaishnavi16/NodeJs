// -> Node js is a runtime environment for javascript which will run on the server side.
// -> it will run on Asynchronous non-blocking I/O model.
// -> Single thread can mannage multipple connections.

// npm :
// -> Stands for node package manager.
// -> it manages node packages
// -> which faciliates to install packages

// to initialize a file as node project, we use npm init
// after initialization a package.json would have been created.
// packagejson will consits of all the releated information about the project

//nodemon :
// The use of nodemon is, it automatically re runs the application
// when we run from hhtp server, then nodemon is very efficient and adaptable way to use

// dev dependency :
// we need some dependencies which we need only at the development time like nodemon
// to install then only at development time we use --save--dev
// eg : npm i --save--dev nodemon

//common js modules, where we can import other file and we can use the data of that file
//The below one second.js data can be accessed by the constant variable lovish
const lovish = require("./02second");
console.log("Hello world");
console.log(lovish);

//module wrapper function - see in second.js for theory

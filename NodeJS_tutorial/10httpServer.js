//to build http server inside node js
// to build this http server we have to use http module
// const http = require("http");

import http from "http";

const port = process.env.PORT || 3000;

//createServer is the method which is inside the http
const server = http.createServer((request, response) => {
  console.log(request);
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/json");
  response.end(`{name : "vaishnavi",age : 22, role : "Software Developer"}`);
});
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

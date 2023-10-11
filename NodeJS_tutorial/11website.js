import http from "http";

const port = process.env.port || 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/json");
  if (request.url == "/") {
    response.end(`{name : "Vaishnavi", age : 22, role : "Software Developer"}`);
  } else if (request.url == "/about") {
    response.end(
      `{name : "Vaishu", age : 21, role : "Software Developer Engineer"}`
    );
  } else {
    response.statusCode = 404;
    response.end(`The page was not found in the server`);
  }
});
server.listen(port, () => {
  console.log(`The server is running on port : ${port}`);
});

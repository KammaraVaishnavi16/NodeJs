// import { Express } from "express";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("hello world");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

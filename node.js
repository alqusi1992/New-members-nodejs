const http = require("http");
const path = require("path");
const fs = require("fs");

// fs.writeFile("message.txt", "hello from fs", (err) => {
//   if (err) throw err;

//   console.log("file has been written");
// });

// fs.readFile("./data.txt", "utf8", (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>hello from req</h1>");
    res.end();
  }

  if (req.url === "/user") {
    res.write("hello from user");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

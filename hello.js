// hello.jsddd1ddd   
const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Node.j4456s!\n');
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);

  // Log after 5 seconds
  setTimeout(() => {
    console.log(`⏱️ Logged after 5 seconds: Server is alive on port ${PORT}`);
  }, 5000);
});

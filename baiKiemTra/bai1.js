const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const currentDate = new Date();
  const responseText = currentDate.toISOString();
  res.end(responseText);
});
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});

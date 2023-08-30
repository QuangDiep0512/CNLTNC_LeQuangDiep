const express = require("express");
const app = express();
const PORT = 8080;
app.get("/:pageName", (req, res) => {
  const pageName = req.params.pageName;
  const content = getPageContent(pageName);

  if (content) {
    res.send(content);
  } else {
    res.status(404).send("Trang không tồn tại");
  }
});
function getPageContent(pageName) {
  const pages = {
    lecturer: "<h1>Thông tin Giảng Viên</h1><h3>TS.Trần Thị Minh Khoa</h3>",
    student: "<h1>Thông tin Sinh Viên</h1><h3>20115001 - Lê Quang Điệp</h3>",
  };
  return pages[pageName];
}

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});

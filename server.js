const express = require('express');
const http =require('http');
const path = require('path');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
// Chúng ta sẽ khởi tạo io ở đây nhưng chưa dùng vội
const io = new Server(server); 

const PORT = 3000;

// ----- Quan trọng -----
// Dòng này chỉ cho server biết phải phục vụ các file
// trong thư mục 'public' khi có người truy cập.
app.use(express.static(path.join(__dirname, 'public')));

// Server chỉ cần chạy và phục vụ file HTML, chưa cần logic gì thêm
server.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
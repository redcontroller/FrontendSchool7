const http = require("http"); // 서버를 쉽게 구축할 수 있게 해주는 패키지

http
.createServer((req,res) => { // 서버 생성
    if (req.url === "/") {
        res.writeHead(200);
        res.end("main url");
    } else if (req.url === "/upload") {
        res.writeHead(200);
        res.end("upload url");
    } else if (req.url === "/delete") {
        res.writeHead(200);
        res.end("delete url");
    } else {
        res.writeHead(404);
        res.end("Not found!!!");
    }

})
.listen(3000, () => { // 3000번 포트에서 대기하도록 함
    console.log("3000번 포트 서버 접속 완료~!!")
})
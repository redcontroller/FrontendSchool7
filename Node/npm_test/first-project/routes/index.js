var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post("/main", (req,res) => {
//   res.json({
//     message: "main success!!",
//   });
// });

// router.post("/main", (req,res) => {
//  // console.log(req.body);
//   const data = req.body.data;
//  // res.send("문자열이응답됩니다!!");
//   res.json({
//     message: "json 응답",
//     request: data
//   });
// });

// router.post("/main", (req,res) => {
//   const data = req.body.data;
//   // res.render("index");
//   res.render("index", { title: 'Express' });
// });

// let arr = [];

// // GET method
// router.get('/read', (req,res) => {
//   res.status(200).json({
//     message: "read success"
//   });
// });

// // POST method
// router.post('/create', (req,res) => {
//   // console.log(req.body);
//   const {data} = req.body; // 비구조화 할당
//   arr.push(data);
//   res.status(200).json({
//     message: "create success",
//     result: arr,
//   })
// })

// // PUT method
// // update/0 : 0번째 데이터를 수정 (id === 0)
// router.put('/update/:id', (req,res) =>{
//   const {id} = req.params;
//   // console.log(id);
//   const { data } = req.body;
//   arr[id] = data;
//   res.status(200).json({
//     message: "update success",
//     result: arr,
//   });
// });

// // DELETE method
// router.delete('/delete/:id', (req,res) => {
//   const {id} = req.params;
//   // const {data} = req.body;
//   arr.splice(id,1);
//   res.status(200).json({
//     message: "delete success",
//     result: arr,
//   })
// })

const loginCheck = require("../module/loginCheck");
const upload = require("../module/imageUpload");

router.get("/", loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success!!",
  });
});

router.post('/upload', upload.single('image'), (req, res) =>{
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload success!!",
  });
});

module.exports = router;

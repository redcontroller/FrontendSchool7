const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
aws.config.loadFromPath(__dirname + "/../config/s3Info.json");

const s3 = new aws.S3();
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "pet-sns-techitproject",
        acl: "public-read-write", // 권한
        key: (req, file, cb) => {
            cb(null, Date.now() + "." + file.originalname.split(".").pop()); // dog.png = [dog, png] => png
        }
    })
});

module.exports = upload;
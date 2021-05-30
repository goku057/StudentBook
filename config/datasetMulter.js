//file uploading
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/user/datasets')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + ".csv")
    }
  });
var upload = multer({ storage: storage });

module.exports = {
    upload
}
const multer = require('multer');
const path = require('path');


// Set up storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Init upload
exports.upload = multer({
    storage: storage,
    limits: { fileSize: 1000000000 }, // 1MB file size limit

}).single('myFile');


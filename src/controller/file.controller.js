const multer  = require('multer');
const fs = require('fs');

// Set up multer for file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)

    }
  });

// Create the multer instance and after upload middleware it store the file in the uploads folder
const upload = multer({ storage: storage });

// after the file is stored in the uploads folder it send the response to the client 
// and create req.file object which contain the file information like filename, path, size etc. 
// and send the response to the client
const uploadFile = (req, res) => {
    
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.redirect('/files/upload');

}

// after the file is stored in the uploads folder it send the response to the client 
// and create req.file object which contain the file information like filename, path, size etc. 
// and send the response to the client 
// and then it read the uploads folder and send the file information to the client in json format  
const uploadsee = (req, res) => {
    const file_show  = fs.readdirSync('uploads').map(file => {
        return {
            name: file,
            url: `/uploads/${file}`
        };
    });
    res.json(file_show);
};

// after the file is stored in the uploads folder it send the response to the client 
// and create req.file object which contain the file information like filename, path, size etc. 
// and send the response to the client 
// and then it read the uploads folder and send the file information to the client in json format
const deleteFile = (req, res) => {
    const filePath = `uploads/${req.params.filename}`;
    fs.unlink(filePath, (err) => {
        if (err) {
            return res.status(500).json({
                error: 'Failed to delete file.',
                err:err
            });
        }
        res.redirect('/files/upload');
    });
}


module.exports = {
    upload,
    uploadFile,
    uploadsee,
    deleteFile
};

const express = require('express');
const router = express.Router();




const { upload,uploadFile ,uploadsee,deleteFile} = require('../controller/file.controller');

router.post('/upload', upload.single('file'), uploadFile);
router.get('/upload', uploadsee);
router.delete('/upload/:filename', deleteFile);




module.exports = router;
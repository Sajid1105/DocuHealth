const express = require('express');
const multer = require('multer');
const router = express.Router();
const Document = require('../models/Document'); // define schema

// Setup storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// POST /api/upload
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const doc = new Document({
      filename: req.file.filename,
      originalName: req.file.originalname,
      uploadDate: new Date(),
      userId: req.body.userId,
    });
    await doc.save();
    res.status(200).json({ message: 'File uploaded', doc });
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload' });
  }
});

// GET /api/upload/:userId
router.get('/:userId', async (req, res) => {
  try {
    const docs = await Document.find({ userId: req.params.userId });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch docs' });
  }
});

module.exports = router;

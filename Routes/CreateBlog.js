const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'public/images')
  },
  filename: (req, file, cb)=>{
    cb(null, Date.now() + '_' + file.originalname)
  }
})

const upload = multer({
  storage: storage
})

router.post("/createBlog", upload.single("img"), async (req, res) => {
  try {
    await Blog.create({
      title: req.body.title,
      date: req.body.date,
      author: req.body.author,
      description: req.body.description, 
      img: req.file.filename   
    });
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false });
  }
});

module.exports = router;

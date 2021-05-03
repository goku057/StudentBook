const express = require("express");
const router = express.Router();
const userBasicController = require("../controllers/userBasicController.js")

router.get("/", userBasicController.home);
router.get("/home", userBasicController.home);
router.get("/organization", userBasicController.circulars);
router.get("/contracts", userBasicController.contracts);
router.get("/message", userBasicController.msg);
router.get("/datasets", userBasicController.datasets);

router.get("/blogs", userBasicController.blogs);
router.get("/blog-post", userBasicController.getBlogPost);
router.post("/blog-comment",userBasicController.comment);
router.post("/post-blog",userBasicController.postBlog);
router.get("/blog-edit", userBasicController.editBlog);
router.post("/save-blog",userBasicController.saveBlog);
router.get("/blog-delete", userBasicController.deleteBlog);

module.exports = router;
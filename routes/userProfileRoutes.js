const express = require("express");
const router = express.Router();
const userProfileController = require("../controllers/userProfileController.js")

router.get("/profile/about", userProfileController.about);
router.get("/profile/resume", userProfileController.resume);
router.get("/profile/works", userProfileController.works);
router.get("/profile/blogs", userProfileController.blogs);
router.get("/profile/contracts", userProfileController.contracts);
router.get("/profile/circulars", userProfileController.circulars);
router.get("/profile/datasets", userProfileController.datasets);
router.get("/profile/contact", userProfileController.contact);

module.exports = router;


 
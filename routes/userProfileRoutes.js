const express = require("express");
const router = express.Router();
const userProfileController = require("../controllers/userProfileController.js")
const {upload} = require("../config/userMulter");

router.get("/profile/about", userProfileController.about);
router.get("/profile/resume", userProfileController.resume);
router.get("/profile/works", userProfileController.works);
router.get("/profile/blogs", userProfileController.blogs);
router.get("/profile/contracts", userProfileController.contracts);
router.get("/profile/circulars", userProfileController.circulars);
router.get("/profile/datasets", userProfileController.datasets);
router.get("/profile/contact", userProfileController.contact);
router.get("/profile/editResume", userProfileController.editResume);
router.post("/profile/updateResume", userProfileController.updateResume);
router.get("/profile/payment", userProfileController.paymentPage)
router.get("/profile/payment/processFurther", userProfileController.payment);
router.get("/profile/payment/findUser", userProfileController.findUser);

router.post("/add-hardskill", userProfileController.addHardSkill);
router.get("/hardskill-delete", userProfileController.deleteHardSkill);

router.post("/add-softskill", userProfileController.addSoftSkill);
router.get("/softskill-delete", userProfileController.deleteSoftSkill);

router.post("/update-address", userProfileController.updateAddress);
router.post("/update-phone", userProfileController.updatePhone);
router.post("/update-email", userProfileController.updateEmail);

router.post("/add-exp", userProfileController.addExp);
router.get("/delete-exp", userProfileController.deleteExp);

router.post("/add-edu", userProfileController.addEdu);
router.get("/delete-edu", userProfileController.deleteEdu);

router.post("/upload-profile", upload.single('profile'), userProfileController.postProfilePic);
router.get("/profile/about-edit", userProfileController.showEditForm);
router.post("/edit-profile", userProfileController.saveProfile);

router.get("/works-details", userProfileController.getWorkPost);
router.get("/works-add", userProfileController.showWorkForm);
router.post("/works-add", userProfileController.saveWorkForm);
router.get("/works-delete", userProfileController.deleteWork);
router.get("/works-edit", userProfileController.editWork);
router.post("/works-edit", userProfileController.saveEditWork);

module.exports = router;


 
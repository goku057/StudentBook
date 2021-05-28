const express = require("express");
const router = express.Router();
const userOrgController = require("../controllers/userOrgController.js")


router.get("/circular-details", userOrgController.showCircular);
router.get("/apply-for-circular-job", userOrgController.applyForJob);
router.get("/show-applicant-list", userOrgController.applicantList);
router.get("/create-circular-post", userOrgController.showForm);
router.post("/circular-save", userOrgController.saveForm);



module.exports = router
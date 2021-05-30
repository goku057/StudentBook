const express = require("express");
const router = express.Router();
const userDatasetController = require("../controllers/userDatasetController.js")
const {upload} = require("../config/datasetMulter");

router.get("/dataset/post", userDatasetController.showDataset);
router.get("/datasets/add", userDatasetController.showDatasetForm);
router.post("/datasets/add", upload.single('dataset'), userDatasetController.postDatasetForm);
router.get("/datasets/delete", userDatasetController.deleteDataset);


module.exports = router
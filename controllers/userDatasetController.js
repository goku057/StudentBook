//including modules
const dateFormat = require("dateformat");
const userDatasetModel = require("../models/userDatasetModel.js");

//user id
const id = require("../config/activeUser");


const showDataset = async (req, res)=>{
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
    }
    if(val.uid == undefined || val.pid == undefined ) {
        res.render("404");
    }
    
    let uid = val.uid;
    let pid = val.pid;
    let dataset = await userDatasetModel.getDataset(uid, pid);
    // console.log(circularCat);
    let title = "Dataset Details";
    const data = {
        pageTitle: title,
        dataset: dataset,
        dateFormat,
        activeUser: id,
        
    }
    res.render("user/dataset-details", {data});
}

const showDatasetForm = async (req, res)=>{
    
    let uid = id;
    // console.log(circularCat);
    let title = "Dataset Details";
    const data = {
        pageTitle: title,
        activeUser: id,
        
    }
    res.render("user/dataset-add", {data});
}

const postDatasetForm =  async (req, res, next) => {

    let uid = id; 
    const file = req.file;
    // console.log(file);
    if (!file) {
      const error = new Error('Please upload a file');
      error.httpStatusCode = 400;
      res.redirect("/profile");
      return next(error)
    }
    // console.log("file name is " + file.filename);
    let fileName = "datasets/" + file.filename;
    let title = req.body.title;
    let body = req.body.body;

    await userDatasetModel.addDataset(uid, fileName, title, body);
    res.redirect("/datasets");
    
  }


const deleteDataset = async (req, res)=>{
    
    let uid = id;
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
    }
    if(val.pid == undefined ) {
        res.render("404");
    }
    // console.log(circularCat);
    let pid = val.pid;
    await userDatasetModel.deleteDataset(uid, pid);
    res.redirect("/datasets")
}

module.exports = {
    showDataset,
    showDatasetForm,
    postDatasetForm,
    deleteDataset
}
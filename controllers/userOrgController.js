//including modules
const dateFormat = require("dateformat");
const userOrgModel = require("../models/userOrgModel.js");
const userBasicModel = require("../models/userBasicModel.js");
//user id
const id = require("../config/activeUser");

const showCircular = async (req, res)=>{
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
    }
    if(val.uid == undefined || val.pid == undefined ) {
        res.render("404");
    }
    
    let uid = val.uid;
    let pid = val.pid;
    let job_circular_post = await userOrgModel.getCircularPost(uid, pid);
    // console.log(circularCat);
    let job_type = job_circular_post[0].job_type;
    let applicationCount = await   userOrgModel.getApplicantCount(id, uid, pid, job_type);
    applicationCount = applicationCount[0].row_count
    let title = "Circular Posts";
    const data = {
        pageTitle: title,
        circulars: job_circular_post,
        dateFormat,
        activeUser: id,
        applicationCount,
    }
    res.render("user/circular-details", {data});
}

const applyForJob = async (req, res)=>{
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
    }
    if(val.uid == undefined || val.pid == undefined ) {
        res.render("404");
    }
    
    let uid = val.uid;
    let pid = val.pid;
    let job_circular_post = await userOrgModel.getCircularPost(uid, pid);
    // console.log(circularCat);
    let job_type = job_circular_post[0].job_type;
    let applicationCount = await   userOrgModel.getApplicantCount(id, uid, pid, job_type);
    applicationCount = applicationCount[0].row_count;
    if(applicationCount > 0){
        res.render("404");
        return;
    }
    await userOrgModel.applyForJob(id, uid, pid, job_type); 
    // let title = "Circular Posts";
    // const data = {
    //     pageTitle: title,
    //     circulars: job_circular_post,
    //     dateFormat,
    //     activeUser: id,
    //     applicationCount,
    // }
    res.redirect("/circular-details?uid=" + uid + "&pid=" + pid);
}

const applicantList = async (req, res) =>{
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
    }
    if(val.pid == undefined ) {
        res.render("404");
    }
    let pid = val.pid;
    let applicantList = await userOrgModel.getApplicantList(id, pid);
    let title = "Applicant List";
    const data = {
        pageTitle: title,
        applicantList,
        dateFormat,
        activeUser: id,
        
    }
    console.log(applicantList);
    res.render("user/applicant-list", {data});

}

const showForm = async (req, res)=>{
    let jobType = await userOrgModel.getJobType();
    let title = "Applicant List";
    // console.log(jobType)
    const data = {
        pageTitle: title,
        jobType
    }
    res.render("user/circular-form", {data});
}

const saveForm = async (req, res)=>{
    // console.log(req.body);
    let uid = id;
    let lookingFor = req.body.lookingFor;
    let designation = req.body.designation;
    let jobDescription = req.body.jobDescription;
    let salary = req.body.salary;
    let empStatus = req.body.empStatus;
    let workplace = req.body.workplace;
    let eduReq = req.body.eduReq;
    let expReq = req.body.expReq;
    let addReq = req.body.addReq;
    let jobLocation = req.body.jobLocation;
    let benefits = req.body.benefits;
    let jobType = req.body.jobType;
    let orgName = req.body.orgName;
    await userOrgModel.saveForm(uid, lookingFor, designation, jobDescription, salary, empStatus, workplace, eduReq, expReq, addReq, jobLocation, benefits, jobType, orgName);
    let title = "Applicant List";
    // console.log(jobType)
    const data = {
        pageTitle: title,
    }
    res.redirect("/organization");
}

const deleteCircular = async (req, res) =>{
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
    }
    if(val.pid == undefined ) {
        res.render("404");
    }
    let pid = val.pid;
    let uid = id;
    await userOrgModel.deleteCircular(uid, pid);
    
    res.redirect("/organization");

}

const editCircular = async (req, res) =>{
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
    }
    if(val.pid == undefined ) {
        res.render("404");
    }
    let pid = val.pid;
    let uid = id;
    let job_circular_post = await userOrgModel.getCircularPost(uid, pid);
    // console.log(circularCat);
    let job_type = job_circular_post[0].job_type;
    let applicationCount = await   userOrgModel.getApplicantCount(id, uid, pid, job_type);
    applicationCount = applicationCount[0].row_count;
    jobType = await userOrgModel.getJobType();
    let title = "Circular Posts";
    const data = {
        pageTitle: title,
        circulars: job_circular_post,
        dateFormat,
        activeUser: uid,
        applicationCount,
        jobType
    }
    res.render("user/circular-edit", {data});

}

const editCircularPost =  async (req, res)=>{
    // console.log(req.body);
    let uid = id;
    let pid = req.body.pid;
    let lookingFor = req.body.lookingFor;
    let designation = req.body.designation;
    let jobDescription = req.body.jobDescription;
    let salary = req.body.salary;
    let empStatus = req.body.empStatus;
    let workplace = req.body.workplace;
    let eduReq = req.body.eduReq;
    let expReq = req.body.expReq;
    let addReq = req.body.addReq;
    let jobLocation = req.body.jobLocation;
    let benefits = req.body.benefits;
    let jobType = req.body.jobType;
    let orgName = req.body.orgName;
    await userOrgModel.editCircular(uid, pid, lookingFor, designation, jobDescription, salary, empStatus, workplace, eduReq, expReq, addReq, jobLocation, benefits, jobType, orgName);
    let title = "Applicant List";
    // console.log(jobType)
    const data = {
        pageTitle: title,
    }
    res.redirect("/circular-details?uid=" + uid + "&pid=" + pid);
}

module.exports = {
    showCircular,
    applyForJob,
    applicantList,
    showForm,
    saveForm,
    deleteCircular,
    editCircular,
    editCircularPost
}
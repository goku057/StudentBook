//including modules
const dateFormat = require("dateformat");
const userProfileModel = require("../models/userProfileModel.js");
const userBasicModel = require("../models/userBasicModel.js");

const helper = require('../helper');

const stripe = require('stripe')("sk_test_51Ick4IBNrUQf8H2jEebD5JkfJ9K7O1GuwksW3zJkAhuYHkjLeEhQB06kz65Q09fCrMzRwAWVfNZW6WzoGFFyLBQA00OgIeMjoz");
//user id
const id = require("../config/activeUser");;

const about = async (req, res) =>{
    let title = "Profile";
    let navF = "about";
    let user = await userProfileModel.getUserInfo(id);
    let socialLinks = await userProfileModel.getUserSocialLinks(id);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        dateFormat,
        socialLinks
    }
    res.render("user/profile/about.ejs", {data});
    
}

const resume = async (req, res) =>{
    let title = "Profile";
    let navF = "resume";
    let user = await userProfileModel.getUserInfo(id);
    let contact = await userProfileModel.getUserContact(id);
    let softSkills = await userProfileModel.getSoftSkills(id);
    let hardSkills = await userProfileModel.getHardSkills(id);
    let experience = await userProfileModel.getWorkExpInfo(id);
    let edu = await userProfileModel.getEduInfo(id);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        dateFormat,
        contact,
        softSkills,
        hardSkills,
        experience,
        edu,
        id
    }
    res.render("user/profile/resume.ejs", {data});
    
}

const works = async (req, res) =>{
    let title = "Profile";
    let navF = "works";
    let user = await userProfileModel.getUserInfo(id);
    let works = await userProfileModel.getUserWorks(id);
    console.log(user);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        works,
        dateFormat
    }
    res.render("user/profile/works.ejs", {data});
    
}

const blogs = async (req, res) =>{
    let title = "Profile";
    let navF = "blogs";
    let user = await userProfileModel.getUserInfo(id);
    let posts = await userProfileModel.getUserBlogPosts(id);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        dateFormat,
        posts
    }
    res.render("user/profile/prevBlogs.ejs", {data});
    
}

const contracts = async (req, res) =>{
    let title = "Profile";
    let navF = "contracts";
    let user = await userProfileModel.getUserInfo(id);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        dateFormat
    }
    res.render("user/profile/myProjects.ejs", {data});
    
}

const circulars = async (req, res) =>{

    let val = req.query;
    if(Object.keys(val).length == 0){
        val.cat = 0;
    }
    if(val.cat == undefined){
        val.cat = 0;
    }
    let circularCatCount = await userBasicModel.getJobCatCount();
    circularCatCount = circularCatCount[0].count;
    
    if(circularCatCount < val.cat){
        val.cat = 0;
    }
    let jobCatValidation = await userBasicModel.getCircularValidation(val.cat);
    if (jobCatValidation == false){
        res.render("404");
        return;
    }

    let circularCat = await userBasicModel.getCircularCat();
    let job_circular_post = await userProfileModel.getCircularPosts(val.cat, id);
    // console.log(job_circular_post);

    let title = "Profile";
    let navF = "circulars";
    let user = await userProfileModel.getUserInfo(id);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        dateFormat,
        cat: circularCat,
        circulars: job_circular_post,
    }
    res.render("user/profile/myCirculars.ejs", {data});
    
}

const datasets = async (req, res) =>{
    let title = "Profile";
    let navF = "datasets";
    let user = await userProfileModel.getUserInfo(id);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        dateFormat
    }
    res.render("user/profile/dataset.ejs", {data});
    
}

const contact = async (req, res) =>{
    let title = "Profile";
    let navF = "contact";
    let user = await userProfileModel.getUserInfo(id);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        dateFormat
    }
    res.render("user/profile/contact.ejs", {data});
    
}

const editResume = async (req, res) => {
    
    let title = "Edit Resume";
    let navF = "Resume";
    
    let user = await userProfileModel.getUserInfo(id);
    let contact = await userProfileModel.getUserContact(id);
    let softSkills = await userProfileModel.getSoftSkills(id);
    let hardSkills = await userProfileModel.getHardSkills(id);
    let experience = await userProfileModel.getWorkExpInfo(id);
    let edu = await userProfileModel.getEduInfo(id);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        dateFormat,
        contact,
        softSkills,
        hardSkills,
        experience,
        edu,
        id
    }
    res.render("user/profile/editResume", {data});
}

const updateResume = async (req, res) => {
    console.log(req.body, req.query);
    const result = await userProfileModel.updateWholeResume(id, req.body.address, req.body.phone, req.body.email, req.body.hard, req.body.soft);
    res.redirect('resume')
}

const paymentPage = async (req, res) => {
    let title = "Profile";
    let navF = "datasets";
    let user = await userProfileModel.getUserInfo(id);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        dateFormat
    }
    res.render('user/profile/payment', {data});
}

const payment = async (req, res) => {
    console.log(`Queries sent through request: ${req.query}`);
    const amount = 2500;
    await userProfileModel.addPayment(id, amount);
    let title = "Profile";
    let navF = "about";
    let user = await userProfileModel.getUserInfo(id);
    let socialLinks = await userProfileModel.getUserSocialLinks(id);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        dateFormat,
        socialLinks
    }
  ;
    stripe.customers.create({
        email: req.query.stripeEmail,
        source: req.query.stripeToken
    }).then(customer => stripe.charges.create({
        amount,
        description: "Student Book payment",
        currency: "usd",
        customer: customer.id
    })).then(charge =>   res.render("user/profile/about.ejs", {data}));
}

const findUser = async (req, res) => {

        helper.findUserByEmail(req.query.targetEmail, (err, success) => {
            if (err) {
                console.log("Looks shady! couldn't recover any payment from this pal... :(");
                if (req.query.redirect && req.query.redirect !== "false") {
                    res.render("error")
                } else {
                    res.json({ "userHasPaid": false });
                }
            } else {
                console.log(`Payment succeeded. ${success}`);
                if (req.query.redirect && req.query.redirect !== "false") {
                    res.render("success")
                } else {
                    res.json({ "userHasPaid": true });
                }
            }
        })

}

const addHardSkill = async(req, res) =>{
    let hardSkill = req.body.hard;
    let uid = id;
    let skillType = "hard";
    console.log(hardSkill);
    await userProfileModel.addHardSkill(uid, hardSkill, skillType);
    res.redirect("/profile/editResume");
}

const deleteHardSkill = async(req, res) =>{
    let val = req.query;
    // console.log("gg");
    if(Object.keys(val).length == 0){
        res.render("404");
    }
    if(val.sid == undefined || val.uid == undefined){
        res.render("404");
    }
    let uid = id;
    let sid = val.sid;
    // console.log(sid);
    await userProfileModel.deleteHardSkill(uid, sid);
    res.redirect("/profile/editResume");
}

const addSoftSkill = async(req, res) =>{
    let hardSkill = req.body.soft;
    let uid = id;
    let skillType = "soft";
    console.log(hardSkill);
    await userProfileModel.addSoftSkill(uid, hardSkill, skillType);
    res.redirect("/profile/editResume");
}

const deleteSoftSkill = async(req, res) =>{
    let val = req.query;
    // console.log("gg");
    if(Object.keys(val).length == 0){
        res.render("404");
    }
    if(val.sid == undefined || val.uid == undefined){
        res.render("404");
    }
    let uid = id;
    let sid = val.sid;
    // console.log(sid);
    await userProfileModel.deleteSoftSkill(uid, sid);
    res.redirect("/profile/editResume");
}


const updateAddress = async(req, res) =>{
    let uid = id;
    let address = req.body.address;
    await userProfileModel.updateAddress(uid, address);
    res.redirect("/profile/editResume");
}

const updatePhone = async(req, res) =>{
    let uid = id;
    let phone = req.body.phone;
    await userProfileModel.updatePhone(uid, phone);
    res.redirect("/profile/editResume");
}

const updateEmail = async(req, res) =>{
    let uid = id;
    let email = req.body.email;
    await userProfileModel.updateEmail(uid, email);
    res.redirect("/profile/editResume");
}

const addExp = async(req, res) =>{
    let uid = id;
    let orgName = req.body.orgName;
    let designation = req.body.designation;
    let startYear = req.body.startYear;
    let endYear = req.body.endYear;
    let curActive = "No";
    if(endYear == ""){
        curActive = "Yes";
        endYear = "NULL";
    }
    await userProfileModel.addExp(uid, orgName, designation, startYear, endYear, curActive);
    res.redirect("/profile/editResume");
}

const deleteExp = async(req, res) =>{
    let uid = id;
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
    }
    if(val.pid == undefined){
        res.render("404");
    }
    let pid = val.pid;
    await userProfileModel.deleteExp(uid, pid);
    res.redirect("/profile/editResume");
}


const addEdu = async(req, res) =>{
    let uid = id;
    let eduName = req.body.eduName;
    let certificate = req.body.certificate;
    let eduType = req.body.eduType;
    let result = req.body.result;
    let startYear = req.body.startYear;
    let endYear = req.body.endYear;
    let curActive = "No";
    if(endYear == ""){
        curActive = "Yes";
        endYear = "NULL";
    }
    await userProfileModel.addEdu(uid, eduName, certificate, eduType, result, startYear, endYear, curActive);
    res.redirect("/profile/editResume");
}


const deleteEdu = async(req, res) =>{
    let uid = id;
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
    }
    if(val.pid == undefined){
        res.render("404");
    }
    let pid = val.pid;
    await userProfileModel.deleteEdu(uid, pid);
    res.redirect("/profile/editResume");
}

const postProfilePic = async(req, res, next)=>{
    let uid = id; 
    const file = req.file;
    // console.log(file);
    if (!file) {
      const error = new Error('Please upload a file');
      error.httpStatusCode = 400;
      res.redirect("/profile");
      return next(error)
    }
    let fileName = "images/" + file.filename;
    await userProfileModel.addProfilePic(uid, fileName);
    res.redirect("/profile/about");
}


const showEditForm = async (req, res) =>{
    let title = "Profile";
    let navF = "about";
    let user = await userProfileModel.getUserInfo(id);
    let socialLinks = await userProfileModel.getUserSocialLinks(id);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        dateFormat,
        socialLinks
    }
    res.render("user/profile/about-edit.ejs", {data});
    
}

const saveProfile = async(req, res) =>{
    let uid = id;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let bday = req.body.bday;
    let interest = req.body.interest;
    let email = req.body.email;
    let linkedin = req.body.linkedin;
    let aboutMe = req.body.aboutMe;
    let website = req.body.website;
    
    await userProfileModel.saveProfile(uid, firstName, lastName, bday, interest, email, linkedin, aboutMe, website);
    res.redirect("/profile/about");
}


const getWorkPost = async (req, res) => {
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
        return;
    }
    if(val.pid == undefined ){
        res.render("404");
        return;
    }
    let uid = id;
    let pid = val.pid;
    let title = "Portfolio";
    let blogPosts = await userProfileModel.getWorkPost(uid, pid);
    // let user = await userBasicModel.getUserInfo(id);
    const data = {
        pageTitle: title,
        posts: blogPosts,
        dateFormat,
        activeUser: uid
        // user
    }
    // console.log(data.comment);
    res.render("user/profile/works-details.ejs", {data});

}

const showWorkForm = async(req, res) =>{
    let title = "Profile";
    let navF = "about";
    
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        dateFormat,
    }
    res.render("user/profile/works-add.ejs", {data});
    
}


const saveWorkForm = async(req, res) =>{
    let uid = id;
    let title = req.body.title;
    let body = req.body.body;
    let link = req.body.link;
    
    await userProfileModel.saveWorkForm(uid, title, body, link);
    res.redirect("/profile/works");
}

const deleteWork =  async(req, res) =>{
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
        return;
    }
    if(val.pid == undefined ){
        res.render("404");
        return;
    }
    let uid = id;
    let pid = req.query.pid;

    await userProfileModel.deleteWork(uid, pid);
    res.redirect("/profile/works");
}

const editWork =  async (req, res) => {
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
        return;
    }
    if(val.pid == undefined ){
        res.render("404");
        return;
    }
    let uid = id;
    let pid = val.pid;
    let title = "Portfolio";
    let blogPosts = await userProfileModel.getWorkPost(uid, pid);
    // let user = await userBasicModel.getUserInfo(id);
    const data = {
        pageTitle: title,
        posts: blogPosts,
        dateFormat,
        activeUser: uid
        // user
    }
    // console.log(data.comment);
    res.render("user/profile/works-edit.ejs", {data});

}


const saveEditWork = async(req, res) =>{
    let uid = id;
    let title = req.body.title;
    let body = req.body.body;
    let link = req.body.link;
    let pid =  req.body.pid;
    await userProfileModel.saveEditWorkForm(uid, pid, title, body, link);
    res.redirect("/works-details?pid=" + pid);
}


module.exports = {
    about,
    resume,
    works,
    blogs,
    contracts,
    circulars,
    datasets,
    contact,
    editResume, 
    updateResume,
    payment,
    paymentPage,
    findUser,
    addHardSkill,
    deleteHardSkill,
    addSoftSkill,
    deleteSoftSkill,
    updateAddress,
    updatePhone,
    updateEmail,
    addExp,
    deleteExp,
    addEdu,
    deleteEdu,
    postProfilePic,
    showEditForm,
    saveProfile,
    getWorkPost,
    showWorkForm,
    saveWorkForm,
    deleteWork,
    editWork,
    saveEditWork
}
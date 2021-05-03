//including modules
const dateFormat = require("dateformat");
const userProfileModel = require("../models/userProfileModel.js");
const userBasicModel = require("../models/userBasicModel.js");
//user id
const id = 3;

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
        edu
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

module.exports = {
    about,
    resume,
    works,
    blogs,
    contracts,
    circulars,
    datasets,
    contact
}
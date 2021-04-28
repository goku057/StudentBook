//including modules
const dateFormat = require("dateformat");
const userBasicModel = require("../models/userBasicModel.js");
//user id
const id = 3;

home = async(req, res) => {
    
    let title = "Home";
    let user = await userBasicModel.getUserInfo(id);
    // console.log(userLoginInfo[0].user_id);
    let posts = await userBasicModel.getHomePosts(id);
    const data = {
        pageTitle: title,
        user,
        posts
    }
    res.render("user/home.ejs", {data});

}

circulars = async (req, res) => {
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
    let job_circular_post = await userBasicModel.getCircularPosts(val.cat);
    // console.log(circularCat);

    let title = "Circular Posts";
    const data = {
        pageTitle: title,
        cat: circularCat,
        circulars: job_circular_post,
        activeCat:val.cat,
        dateFormat
    }
    res.render("user/circulars.ejs", {data});

}

contracts = async (req, res) => {

    let val = req.query;
    if(Object.keys(val).length == 0){
        val.cat = 0;
    }
    if(val.cat == undefined){
        val.cat = 0;
    }

    let contractCatCount = await userBasicModel.getJobCatCount();
    contractCatCount = contractCatCount[0].count;
    
    if(contractCatCount < val.cat){
        val.cat = 0;
    }

    let jobCatValidation = await userBasicModel.getContractValidation(val.cat);
    if (jobCatValidation == false){
        res.render("404");
        return;
    }
    let contractCat = await userBasicModel.getContractCat();
    let job_post = await userBasicModel.getContractPosts(val.cat);

    let title = "Contracts";
    const data = {
        pageTitle: title,
        cat: contractCat,
        contracts: job_post,
        activeCat:val.cat,
        dateFormat
    }
    res.render("user/contracts.ejs", {data});

}


msg = (req, res) => {
    let title = "Messages";
    const data = {
        pageTitle: title
    }
    res.render("user/message.ejs", {data});

}

datasets = async (req, res) => {

    let dataset = await userBasicModel.getDatasets();


    let title = "Dataset";
    const data = {
        pageTitle: title,
        dataset
    }
    res.render("user/dataset.ejs", {data});

}

blogs = async (req, res) => {
    let title = "Blogs";
    let posts = await userBasicModel.getHomePosts(id);
    const data = {
        pageTitle: title,
        posts
    }
    res.render("user/blogs.ejs", {data});

}



module.exports = {
    home,
    circulars,
    contracts,
    msg,
    datasets,
    blogs

}
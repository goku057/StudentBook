//including modules
const dateFormat = require("dateformat");
const userBasicModel = require("../models/userBasicModel.js");
//user id
const id = 3;

const home = async(req, res) => {
    
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

const circulars = async (req, res) => {
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

const contracts = async (req, res) => {

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


const msg = (req, res) => {
    let title = "Messages";
    const data = {
        pageTitle: title
    }
    res.render("user/message.ejs", {data});

}

const datasets = async (req, res) => {

    let dataset = await userBasicModel.getDatasets();


    let title = "Dataset";
    const data = {
        pageTitle: title,
        dataset
    }
    res.render("user/dataset.ejs", {data});

}

const blogs = async (req, res) => {
    let title = "Blogs";
    let blogs = await userBasicModel.getHomePosts(id);
    let activeUser = id;
    const data = {
        pageTitle: title,
        posts: blogs,
        activeUser
    }
    res.render("user/blogs.ejs", {data});

}

const getBlogPost = async (req, res) => {
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
        return;
    }
    if(val.bid == undefined || val.uid == undefined){
        res.render("404");
        return;
    }
    
    let title = "Blogs";
    let blogPosts = await userBasicModel.getBlogPost(val.uid, val.bid);
    // let user = await userBasicModel.getUserInfo(id);
    const data = {
        pageTitle: title,
        posts: blogPosts.post,
        comment: blogPosts.comment,
        dateFormat
        // user
    }
    // console.log(data.comment);
    res.render("user/blog-post.ejs", {data});

}

const comment = async (req, res) => {
    let val = req.body;
    console.log(val.uid);
    if(Object.keys(val).length == 0){
        res.render("404");
        return;
    }
    if(val.uid == undefined || val.pid == undefined){
        res.render("404");
        return;
    }
    if(val.body == ""){
        res.redirect("/blog-post?bid="+ val.pid +"&uid="+ val.uid);
        console.log("Blank comment dise");
    }
    let body = req.body.body;
    console.log(body);
    let commentCount = await userBasicModel.getCommentCount(id);
    commentCount = commentCount[0].count + 1;
    let comment = await userBasicModel.insertComment(id, commentCount, val.uid, val.pid, 1, body);//1 == blogtype
    // let title = "Blogs";
    // let blogPosts = await userBasicModel.getBlogPost(val.uid, val.pid);
    // // let user = await userBasicModel.getUserInfo(id);
    // const data = {
    //     pageTitle: title,
    //     posts: blogPosts.post,
    //     comment: blogPosts.comment,
    //     // user
    // }
    // console.log(data.comment);
    res.redirect("/blog-post?bid="+ val.pid +"&uid="+ val.uid);

}

const postBlog = async (req, res) => {
    let val = req.body;
    // console.log(val.uid);
    if(Object.keys(val).length == 0){
        res.render("404");
        return;
    }
    if(val.body == undefined ){
        res.render("404");
        return;
    }
    if(val.body == ""){
        res.redirect("/blog-post?bid="+ val.pid +"&uid="+ val.uid);
        console.log("Blank post dise");
    }
    let body = val.body;
    let title = val.title;
    let postCount = await userBasicModel.getBlogPostCount(id);
    postCount = postCount[0].count + 1;
    let blog = await userBasicModel.insertBlog(id, postCount, title, body);//1 == blogtype
    res.redirect("/blogs");

}

const editBlog = async(req, res) => {
    
    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
        return;
    }
    if(val.bid == undefined){
        res.render("404");
        return;
    }
    
    let title = "Edit Blog";
    let blogPosts = await userBasicModel.getBlogPost(id, val.bid);
    // let user = await userBasicModel.getUserInfo(id);
    const data = {
        pageTitle: title,
        posts: blogPosts.post,
        comment: blogPosts.comment,
        dateFormat
        // user
    }
    res.render("user/edit-blog.ejs", {data});

}

const saveBlog = async (req, res)=>{

    console.log(req.body);
    let bid = req.body.bid;
    let title = req.body.title;
    let body = req.body.body;
    let savePost = await userBasicModel.updateBlogPost(id, bid, title, body);
    // res.redirect("/blog-edit?bid=" + bid);
    res.redirect("/blogs");
    // let user = await userBasicModel.getUserInfo(id);
    

}

const deleteBlog = async (req, res)=>{

    let val = req.query;
    if(Object.keys(val).length == 0){
        res.render("404");
        return;
    }
    if(val.bid == undefined){
        res.render("404");
        return;
    }
    // console.log(req.body);
    let bid = val.bid;
    // let title = req.body.title;
    // let body = req.body.body;
    let savePost = await userBasicModel.deleteBlogPost(id, bid);
    // res.redirect("/blog-edit?bid=" + bid);
    res.redirect("/blogs");
    // let user = await userBasicModel.getUserInfo(id);
    

}

module.exports = {
    home,
    circulars,
    contracts,
    msg,
    datasets,
    blogs,
    getBlogPost,
    comment,
    postBlog,
    editBlog,
    saveBlog,
    deleteBlog

}
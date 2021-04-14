//including modules
const userBasicModel = require("../models/userBasicModel.js");

home = async (req, res) =>{
    let title = "Home";
    let userInfo = await userBasicModel.getUserInfo();
    console.log(userInfo[0].user_name);
    data = {
        pageTitle:title,
        userInfo
    }
    res.render("user/home.ejs", data);
    
}

circulars = (req, res) =>{
    let title = "Circular Posts";
    data = {
        pageTitle:title
    }
    res.render("user/circulars.ejs", data);
    
}

projects = (req, res) =>{
    let title = "Projects";
    data = {
        pageTitle:title
    }
    res.render("user/projects.ejs", data);
    
}
msg = (req, res) =>{
    let title = "Messages";
    data = {
        pageTitle:title
    }
    res.render("user/message.ejs", data);
    
}
datasets = (req, res) =>{
    let title = "Dataset";
    data = {
        pageTitle:title
    }
    res.render("user/dataset.ejs", data);
    
}

blogs = (req, res) =>{
    let title = "Blogs";
    data = {
        pageTitle:title
    }
    res.render("user/blogs.ejs", data);
    
}



module.exports = {
    home,
    circulars,
    projects,
    msg,
    datasets,
    blogs

}
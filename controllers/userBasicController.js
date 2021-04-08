home = (req, res) =>{
    let title = "Home";
    data = {
        pageTitle:title
    }
    res.render("user/home.ejs", data);
    
}

circulars = (req, res) =>{
    let title = "Circular Posts"
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
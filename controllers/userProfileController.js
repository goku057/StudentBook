about = (req, res) =>{
    let title = "Profile";
    let navF = "about";
    data = {
        pageTitle:title,
        pnavFocus:navF
    }
    res.render("user/profile/about.ejs", data);
    
}

resume = (req, res) =>{
    let title = "Profile";
    let navF = "resume";
    data = {
        pageTitle:title,
        pnavFocus:navF
    }
    res.render("user/profile/resume.ejs", data);
    
}

works = (req, res) =>{
    let title = "Profile";
    let navF = "works";
    data = {
        pageTitle:title,
        pnavFocus:navF
    }
    res.render("user/profile/works.ejs", data);
    
}

blogs = (req, res) =>{
    let title = "Profile";
    let navF = "blogs";
    data = {
        pageTitle:title,
        pnavFocus:navF
    }
    res.render("user/profile/prevBlogs.ejs", data);
    
}

projects = (req, res) =>{
    let title = "Profile";
    let navF = "projects";
    data = {
        pageTitle:title,
        pnavFocus:navF
    }
    res.render("user/profile/myProjects.ejs", data);
    
}

circulars = (req, res) =>{
    let title = "Profile";
    let navF = "circulars";
    data = {
        pageTitle:title,
        pnavFocus:navF
    }
    res.render("user/profile/myCirculars.ejs", data);
    
}

datasets = (req, res) =>{
    let title = "Profile";
    let navF = "datasets";
    data = {
        pageTitle:title,
        pnavFocus:navF
    }
    res.render("user/profile/dataset.ejs", data);
    
}

contact = (req, res) =>{
    let title = "Profile";
    let navF = "contact";
    data = {
        pageTitle:title,
        pnavFocus:navF
    }
    res.render("user/profile/contact.ejs", data);
    
}

module.exports = {
    about,
    resume,
    works,
    blogs,
    projects,
    circulars,
    datasets,
    contact
}
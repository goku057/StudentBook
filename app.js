//setting up express
const express = require("express");
const app = express();


//stripe
const stripe = require('stripe')("sk_test_51Ick4IBNrUQf8H2jEebD5JkfJ9K7O1GuwksW3zJkAhuYHkjLeEhQB06kz65Q09fCrMzRwAWVfNZW6WzoGFFyLBQA00OgIeMjoz");


//setting up view engine
app.set("view engine", "ejs");

//setting middlewares
app.use(express.static("./public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//setting up routes
const userBasicRoutes = require("./routes/userBasicRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");
const userOrganizationRoutes = require("./routes/userOrganizationRoutes");
//firing routes
app.use(userBasicRoutes);
app.use(userProfileRoutes);
app.use(userOrganizationRoutes);
//listening to port
app.listen(3000);



//testing area
app.get("/test", (req, res)=>{
    console.log(req.query);
    data = {
        pageTitle:req.path.split('/')[1],
        success:true
    }
    res.render("index", data);
});

//const {upload} = require("./config/userMulter");

app.post("/test"/*, upload.single('img')*/ ,(req, res) =>{
    console.log(req.body.name);
    const data = {
        pageTitle:req.path.split('/')[1],
        success:false
    }
    if (req.body.name != "" && req.body.name != undefined){
        data.name = req.body.name;
        data.success = true;
    }
    res.render("index", {data});
})

//Redirecting to error page
app.use((req, res) =>{
    res.render("404");
})



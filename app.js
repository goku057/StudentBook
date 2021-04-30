//setting up express
const express = require("express");
const app = express();

//setting up view engine
app.set("view engine", "ejs");

//setting middlewares
app.use(express.static("./public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//setting up routes
const userBasicRoutes = require("./routes/userBasicRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");

//firing routes
app.use(userBasicRoutes);
app.use(userProfileRoutes)
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



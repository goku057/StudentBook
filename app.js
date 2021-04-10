//setting up express
const express = require("express");
const app = express();

//setting up routes
const userBasicRoutes = require("./routes/userBasicRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");
//setting up view engine
app.set("view engine", "ejs");

//setting middlewares
app.use(express.static("./public"));

//firing routes
app.use(userBasicRoutes);
app.use(userProfileRoutes)
//listening to port
app.listen(3000);

app.get("/test", (req, res)=>{
    data = {
        pageTitle:req.path.split('/')[1]
    }
    if(typeof(dataa) == 'undefined'){
    console.log("ggwp"); 
    }
    res.render("user/blogs", data);
})

app.use((req, res) =>{
    res.render("404");
})


// habijabi
jim-branch
// kire ki khobor 
// f means force
// jim was again here for testing branch merging...
//ezpz
//arnob was here
//again changing
main

//importing database connection
const util = require("util");
const mysql = require("mysql");
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database: "studentbook",
    connectionLimit: 10
});
//binding database for using async and await
const query = util.promisify(db.query).bind(db);

const getUserInfo = async ()=>{
    let id = 1;
    let sqlCommand = "SELECT * FROM user_login_info WHERE user_id = " + id;
    console.log("wrwaksfa");
    let result = await query(sqlCommand);
    return result;
}


sayHi = () =>{
    console.log("Hi");
}


module.exports = {
    getUserInfo,
    sayHi
}
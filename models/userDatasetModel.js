//connecting database
const {query} = require("../config/db");

const getDataset = async(uid, pid) => {
    // let sqlCommand = "SELECT * FROM user_login_info WHERE user_id = " + id + ";";
    let sqlCommand = "SELECT di.`user_id`,uli.user_name,  `d_id`, `title`, `body`, `dataset`, `post_time` FROM `dataset_info` as di JOIN user_login_info AS uli ON di.user_id = uli.user_id WHERE di.user_id = " + uid + " AND d_id = " + pid + ";";
    let result;
    result = await query(sqlCommand);
    return result;
}

const addDataset = async(uid, fileName, title, body) => {
    let sqlCommand = "SELECT d_id FROM `dataset_info` WHERE user_id = " + uid + " ORDER BY d_id DESC LIMIT 1;";
    let oid;
    oid = await query(sqlCommand);
    if(oid[0] == undefined){
        oid = 1;
    }
    else{
        oid = oid[0].o_id + 1;
    }
    sqlCommand = "INSERT INTO `dataset_info`(`user_id`, `d_id`, `title`, `body`, `dataset`, `post_time`) VALUES (" + uid + ", " + oid + ", '" + title + "', '" + body + "', '" + fileName + "', CURRENT_TIMESTAMP)";
    let result = await query(sqlCommand);
    return result;
}

const deleteDataset = async(uid, pid) => {
    // let sqlCommand = "SELECT * FROM user_login_info WHERE user_id = " + id + ";";
    let sqlCommand = "DELETE FROM dataset_info WHERE user_id = " + uid + " AND d_id = " + pid + ";";
    let result;
    result = await query(sqlCommand);
    return result;
}


module.exports = {
    getDataset,
    addDataset,
    deleteDataset
}
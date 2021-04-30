//connecting database
const {query} = require("../config/db");

const getUserInfo = async(id) => {
    // let sqlCommand = "SELECT * FROM user_login_info WHERE user_id = " + id + ";";
    let sqlCommand = "SELECT * FROM `user_login_info`as uli JOIN user_category_info as uci ON uci.cat_id = uli.user_category JOIN `user_info`as ui ON ui.user_id = uli.user_id WHERE uli.user_id =" + id + ";";
    let result;
    // result.push( await query(sqlCommand));
    result = await query(sqlCommand);
    // console.log(result);
    return result;
}

const getHomePosts = async(id) => {
    // let sqlCommand = "SELECT * FROM user_login_info WHERE user_id = " + id + ";";
    let sqlCommand = "SELECT * FROM `blog` JOIN `user_login_info` AS uli ON blog.user_id = uli.user_id WHERE blog.user_id != " + id + ";";
    let result;
    // result.push( await query(sqlCommand));
    result = await query(sqlCommand);
    // console.log(result);
    return result;
}
const getJobCatCount = async ()=>{
     // let sqlCommand = "SELECT * FROM user_login_info WHERE user_id = " + id + ";";
     let sqlCommand = "SELECT COUNT(*) AS 'count' FROM `job_type_info`;";
     let result;
     // result.push( await query(sqlCommand));
     result = await query(sqlCommand);
     return result;
}

const getCircularValidation = async (cat)=>{
    if (cat == 0){
        return true;
    }
    let sqlCommand = "SELECT *  FROM `job_type_info` WHERE type_id = "+ cat + ";";
    let result;
    // result.push( await query(sqlCommand));
    result = await query(sqlCommand);
    if(result[0].job_type == "organization"){
        return true;
    }
    else{
        return false;
    }
}

const getCircularCat = async ()=>{
    let sqlCommand = "SELECT *  FROM `job_type_info` WHERE job_type = 'organization';";
        let result;
        result = await query(sqlCommand);
        return result;
}

const getCircularPosts = async(cat) =>{
    if(cat == 0){
        let sqlCommand = "SELECT oci.user_id, `o_id`, `org_name`, `designation`, `job_responsibility`, `salary`, `job_type`, `emp_status`, `workplace`, `edu_req`, `exp_req`, `additional_req`, `job_location`, `benefits`, `looking_for`, `post_time`, `recruit_id`, `user_name` FROM `org_circular_info` as `oci` JOIN `user_login_info` as `uli` on oci.user_id = uli.user_id  ORDER BY post_time DESC;";
        let result;
        result = await query(sqlCommand);
        return result;
    }
    else{
        let sqlCommand = "SELECT oci.user_id, `o_id`, `org_name`, `designation`, `job_responsibility`, `salary`, `job_type`, `emp_status`, `workplace`, `edu_req`, `exp_req`, `additional_req`, `job_location`, `benefits`, `looking_for`, `post_time`, `recruit_id`, `user_name` FROM `org_circular_info` as `oci` JOIN `user_login_info` as `uli` on oci.user_id = uli.user_id WHERE job_type =" + cat + "  ORDER BY post_time DESC;";
        let result;
        result = await query(sqlCommand);
        return result;
    }
    
}

const getContractValidation = async (cat)=>{
    if (cat == 0){
        return true;
    }
    let sqlCommand = "SELECT *  FROM `job_type_info` WHERE type_id = "+ cat + ";";
    let result;
    // result.push( await query(sqlCommand));
    result = await query(sqlCommand);
    if(result[0].job_type == "contract"){
        return true;
    }
    else{
        return false;
    }
}

const getContractCat = async ()=>{
    let sqlCommand = "SELECT *  FROM `job_type_info` WHERE job_type = 'contract';";
    let result;
    result = await query(sqlCommand);
    return result;
}

const getContractPosts = async(cat) =>{
    if(cat == 0){
        let sqlCommand = "SELECT ji.`user_id`, `j_id`, `job_type`, `dp_id`, `payment`, `title`, `body`, `looking_for`, `post_status`, `rate_given`, `deadline`, `post_body`, `file`, `post_time`, `user_name` FROM `job_info` as `ji` JOIN `user_login_info` as `uli` on ji.user_id = uli.user_id  ORDER BY post_time DESC;";
        let result;
        result = await query(sqlCommand);
        return result;
    }
    else{
        let sqlCommand = "SELECT ji.`user_id`, `j_id`, `job_type`, `dp_id`, `payment`, `title`, `body`, `looking_for`, `post_status`, `rate_given`, `deadline`, `post_body`, `file`, `post_time`, `user_name` FROM `job_info` as `ji` JOIN `user_login_info` as `uli` on ji.user_id = uli.user_id WHERE job_type =" + cat + "  ORDER BY post_time DESC;";
        let result;
        result = await query(sqlCommand);
        return result;
    }
    
}

const getDatasets = async () =>{
    let sqlCommand = "SELECT di.`user_id`, `d_id`, `title`, `body`, `dataset`, `post_time`, user_name FROM `dataset_info` as di JOIN user_login_info as uli ON di.user_id = uli.user_id  WHERE 1;";
    let result;
    result = await query(sqlCommand);
    return result;
}

module.exports = {
    getUserInfo,
    getHomePosts,
    getJobCatCount,
    getCircularValidation,
    getCircularCat,
    getCircularPosts,
    getContractValidation,
    getContractCat,
    getContractPosts,
    getDatasets
}
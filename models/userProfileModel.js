//connecting database
const {query} = require("../config/db");

const getUserInfo = async (id) =>{
    let sqlCommand = "SELECT ui.`user_id`, `user_img`, `first_name`, `last_name`, `gender`, `dob`, `currency`, `interest`, `about_me`, `blog_count`, `portfolio_count`, `job_count`, `dataset_count`, `circular_count`, user_category, uci.name, user_name, user_email FROM `user_info` as ui JOIN user_login_info as uli ON ui.user_id = uli.user_id JOIN user_category_info as uci ON uli.user_category = uci.cat_id WHERE ui.user_id = " + id + ";";
    let result;
    result = await query(sqlCommand);
    return result;
}

const getUserSocialLinks = async (id)=>{
    let sqlCommand = "SELECT `user_id`, `linkedin`, `google`, `github`, `facebook`, `kaggle`, `website` FROM `social_links` WHERE user_id = " + id + ";";
    let result;
    result = await query(sqlCommand);
    return result;
}

const getUserContact = async(id) =>{
    let sqlCommand = "SELECT `user_id`, `phone`, `email`, `adress` FROM `user_contact`  WHERE user_id = " + id + ";";
    let result;
    result = await query(sqlCommand);
    return result;
}

const getSoftSkills = async(id) =>{
    let sqlCommand = "SELECT `user_id`, `s_id`, `skill`, `skill_type` FROM `user_skills` WHERE user_id = " + id + " AND skill_type = 'soft';";
    let result;
    result = await query(sqlCommand);
    return result;
}

const getHardSkills = async(id) =>{
    let sqlCommand = "SELECT `user_id`, `s_id`, `skill`, `skill_type` FROM `user_skills` WHERE user_id = " + id + " AND skill_type = 'hard';";
    let result;
    result = await query(sqlCommand);
    return result;
}

const getWorkExpInfo = async(id) =>{
    let sqlCommand = "SELECT `user_id`, `w_id`, `designation`, `org_name`, `start_year`, `end_year`, `cur_active` FROM `user_work_experience` WHERE user_id = " + id + ";";
    let result;
    result = await query(sqlCommand);
    // console.log(result);
    return result;
}

const getEduInfo = async(id) =>{
    let sqlCommand = "SELECT `user_id`, `edu_id`, `edu_type`, `certificate`, `edu_name`, `start_year`, `end_year`, `result`, `cur_active` FROM `user_education`  WHERE user_id = " + id + ";";
    let result;
    result = await query(sqlCommand);
    // console.log(result);
    return result;
}

const getUserWorks = async(id) =>{
    let sqlCommand = "SELECT `user_id`, `p_id`, `image`, `title`, `body`, `link`, `post_time` FROM `portfolio` AS p WHERE p.user_id  = " + id + ";";
    let result;
    result = await query(sqlCommand);
    // console.log(result);
    return result;
}

const getUserBlogPosts = async(id) => {
    // let sqlCommand = "SELECT * FROM user_login_info WHERE user_id = " + id + ";";
    let sqlCommand = "SELECT * FROM `blog` JOIN `user_login_info` AS uli ON blog.user_id = uli.user_id WHERE blog.user_id = " + id + ";";
    let result;
    // result.push( await query(sqlCommand));
    result = await query(sqlCommand);
    // console.log(result);
    return result;
}

const getCircularPosts = async(cat, id) =>{
    if(cat == 0){
        let sqlCommand = "SELECT oci.user_id, `o_id`, `org_name`, `designation`, `job_responsibility`, `salary`, `job_type`, `emp_status`, `workplace`, `edu_req`, `exp_req`, `additional_req`, `job_location`, `benefits`, `looking_for`, `post_time`, `recruit_id`, `user_name` FROM `org_circular_info` as `oci` JOIN `user_login_info` as `uli` on oci.user_id = uli.user_id   WHERE oci.user_id = " + id + " ORDER BY post_time DESC;";
        let result;
        result = await query(sqlCommand);
        return result;
    }
    else{
        let sqlCommand = "SELECT oci.user_id, `o_id`, `org_name`, `designation`, `job_responsibility`, `salary`, `job_type`, `emp_status`, `workplace`, `edu_req`, `exp_req`, `additional_req`, `job_location`, `benefits`, `looking_for`, `post_time`, `recruit_id`, `user_name` FROM `org_circular_info` as `oci` JOIN `user_login_info` as `uli` on oci.user_id = uli.user_id WHERE job_type =" + cat + " AND   oci.user_id = " + id + " ORDER BY post_time DESC;";
        let result;
        result = await query(sqlCommand);
        return result;
    }
    
}

module.exports = {
    getUserInfo,
    getUserSocialLinks,
    getUserContact,
    getSoftSkills,
    getHardSkills,
    getWorkExpInfo,
    getEduInfo,
    getUserWorks,
    getUserBlogPosts,
    getCircularPosts
}
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

const updateWholeResume = async(id, address, phone, email, hard, soft) => {
    let sqlAddress = `UPDATE user_contact set adress="${address}" WHERE user_id=${id}`;
    let sqlPhone = `UPDATE user_contact set phone="${phone}" WHERE user_id=${id}`;
    let sqlEmail = `UPDATE user_contact set email="${email}" WHERE user_id=${id}`;
    let sqlHard = `UPDATE user_skills SET skill="${hard}" WHERE user_id=${id} AND s_id=2`;
    let sqlSoft = `UPDATE user_skills SET skill="${soft}" WHERE user_id=${id} AND s_id=1`;

    console.log(sqlAddress, sqlPhone, sqlEmail, sqlHard, sqlSoft);

    await query(sqlAddress);
    await query(sqlPhone);
    await query(sqlEmail);
    await query(sqlHard);
    await query(sqlSoft);
}

const addHardSkill = async(uid, hardSkill, skillType) =>{
    let sqlCommand = "SELECT s_id FROM `user_skills` WHERE user_id = " + uid + " ORDER BY s_id DESC LIMIT 1;";
    let oid;
    oid = await query(sqlCommand);
    // console.log(oid);
    if(oid[0] == undefined){
        oid = 1;
    }
    else{
        oid = oid[0].s_id + 1;
    }
    sqlCommand = "INSERT INTO `user_skills`(`user_id`, `s_id`, `skill`, `skill_type`) VALUES (" + uid +", " + oid +", '" + hardSkill +"', '" + skillType +"');";
    // console.log(sqlCommand);
    let result = await query(sqlCommand);
    return result;
}

const deleteHardSkill = async(uid, sid)=>{
    let sqlCommand = "DELETE FROM `user_skills` WHERE user_id = " + uid + " AND s_id = " + sid + ";";
    let result = await query(sqlCommand);
    return result;
}


const addSoftSkill = async(uid, hardSkill, skillType) =>{
    let sqlCommand = "SELECT s_id FROM `user_skills` WHERE user_id = " + uid + " ORDER BY s_id DESC LIMIT 1;";
    let oid;
    oid = await query(sqlCommand);
    // console.log(oid);
    if(oid[0] == undefined){
        oid = 1;
    }
    else{
        oid = oid[0].s_id + 1;
    }
    sqlCommand = "INSERT INTO `user_skills`(`user_id`, `s_id`, `skill`, `skill_type`) VALUES (" + uid +", " + oid +", '" + hardSkill +"', '" + skillType +"');";
    // console.log(sqlCommand);
    let result = await query(sqlCommand);
    return result;
}

const deleteSoftSkill = async(uid, sid)=>{
    let sqlCommand = "DELETE FROM `user_skills` WHERE user_id = " + uid + " AND s_id = " + sid + ";";
    let result = await query(sqlCommand);
    return result;
}


const updateAddress = async(uid, address) =>{
    let sqlCommand = `UPDATE user_contact set adress="${address}" WHERE user_id=${uid}`;
    let result = await query(sqlCommand);
    return result;
}

const updatePhone = async(uid, phone) =>{
    let sqlCommand = `UPDATE user_contact set phone="${phone}" WHERE user_id=${uid}`;
    let result = await query(sqlCommand);
    return result;
}

const updateEmail = async(uid, email) =>{
    let sqlCommand = `UPDATE user_contact set email="${email}" WHERE user_id=${uid}`;
    let result = await query(sqlCommand);
    return result;
}

const addExp = async(uid, orgName, designation, startYear, endYear, curActive)=>{
    let sqlCommand = "SELECT w_id FROM `user_work_experience` WHERE user_id = " + uid + " ORDER BY w_id DESC LIMIT 1;";
    let oid;
    oid = await query(sqlCommand);
    // console.log(oid);
    if(oid[0] == undefined){
        oid = 1;
    }
    else{
        oid = oid[0].w_id + 1;
    }

    if(endYear == "NULL"){
        sqlCommand = "INSERT INTO `user_work_experience`(`user_id`, `w_id`, `designation`, `org_name`, `start_year`, `end_year`, `cur_active`) VALUES (" + uid + "," + oid + " ,'" + designation + "' ,'" + orgName + "' , '" + startYear + "', NULL, '" + curActive + "');";
        // console.log(sqlCommand);
        let result = await query(sqlCommand);
        return result;
    }
    else{
        sqlCommand = "INSERT INTO `user_work_experience`(`user_id`, `w_id`, `designation`, `org_name`, `start_year`, `end_year`, `cur_active`) VALUES (" + uid + "," + oid + " ,'" + designation + "' ,'" + orgName + "' , '" + startYear + "', '" + endYear + "', '" + curActive + "');";
        // console.log(sqlCommand);
        let result = await query(sqlCommand);
        return result;
    }
}

const deleteExp = async (uid, wid) =>{
    let sqlCommand = "DELETE FROM `user_work_experience` WHERE user_id = " + uid + " AND w_id = " + wid + ";";
    let result = await query(sqlCommand);
    return result;
}



const addEdu = async(uid, eduName, certificate, eduType, resultt, startYear, endYear, curActive)=>{
    let sqlCommand = "SELECT edu_id FROM `user_education` WHERE user_id = " + uid + " ORDER BY edu_id DESC LIMIT 1;";
    let oid;
    oid = await query(sqlCommand);
    // console.log(oid);
    if(oid[0] == undefined){
        oid = 1;
    }
    else{
        oid = oid[0].edu_id + 1;
    }

    if(endYear == "NULL"){
        sqlCommand = "INSERT INTO `user_education`(`user_id`, `edu_id`, `edu_type`, `certificate`, `edu_name`, `start_year`, `end_year`, `result`, `cur_active`) VALUES ("+ uid + ", "+ oid + ", '"+ eduType + "', '"+ certificate + "', '"+ eduName + "', '"+ startYear + "', NULL, '"+ resultt + "', '"+ curActive + "')";
        // console.log(sqlCommand);
        let result = await query(sqlCommand);
        return result;
    }
    else{
        sqlCommand = "INSERT INTO `user_education`(`user_id`, `edu_id`, `edu_type`, `certificate`, `edu_name`, `start_year`, `end_year`, `result`, `cur_active`) VALUES ("+ uid + ", "+ oid + ", '"+ eduType + "', '"+ certificate + "', '"+ eduName + "', '"+ startYear + "', '"+ endYear + "', '"+ resultt + "', '"+ curActive + "')";
        // console.log(sqlCommand);
        let result = await query(sqlCommand);
        return result;
    }
}

const deleteEdu = async (uid, wid) =>{
    let sqlCommand = "DELETE FROM `user_education` WHERE user_id = " + uid + " AND edu_id = " + wid + ";";
    let result = await query(sqlCommand);
    return result;
}

const addProfilePic = async(uid, fileName) =>{
    let sqlCommand = "UPDATE `user_info` SET `user_img`='"+ fileName+"' WHERE user_id = " + uid +";";
    let result = await query(sqlCommand);
    return result;
}

const saveProfile  = async(uid, firstName, lastName, bday, interest, email, linkedin, aboutMe, website) =>{
    let sqlCommand = "UPDATE `user_info` SET `first_name`='"+ firstName+"',`last_name`='"+ lastName+"',`dob`='"+ bday+"',`interest`='"+ interest+"',`about_me`='"+ aboutMe+"' WHERE user_id = " + uid +";";
    let result = await query(sqlCommand);

    sqlCommand = "UPDATE user_login_info SET user_email = '"+ email +"' WHERE user_id = " + uid +";";
    await query(sqlCommand);

    sqlCommand = "UPDATE `social_links` SET `linkedin`='"+ linkedin+"',`website`='"+ website+"' WHERE user_id = " + uid +";";
    result = await query(sqlCommand);
    
    return result;
}

const getWorkPost = async (uid, pid)=>{
    let sqlCommand = "SELECT `user_id`, `p_id`, `image`, `title`, `body`, `link`, `post_time` FROM `portfolio`   WHERE user_id = "+ uid+ " AND p_id = " + pid + ";";
    let result = await query(sqlCommand);
    return result;
}

const saveWorkForm = async(uid, title, body, link) =>{
    let sqlCommand = "SELECT p_id FROM `portfolio` WHERE user_id = " + uid + " ORDER BY p_id DESC LIMIT 1;";
    let oid;
    oid = await query(sqlCommand);
    // console.log(oid);
    if(oid[0] == undefined){
        oid = 1;
    }
    else{
        oid = oid[0].p_id + 1;
    }

    sqlCommand = "INSERT INTO `portfolio`(`user_id`, `p_id`, `title`, `body`, `link`, `post_time`) VALUES ("+ uid + ", "+ oid + ", '"+ title + "', '"+ body + "', '"+ link + "', CURRENT_TIMESTAMP)";
        // console.log(sqlCommand);
        let result = await query(sqlCommand);
        return result;


}

const deleteWork = async(uid , pid)=>{
    let sqlCommand = "DELETE FROM `portfolio` WHERE user_id = " + uid + " AND p_id = " + pid + ";";
    let result = await query(sqlCommand);
    return result;
}

const saveEditWorkForm =  async(uid, pid, title, body, link)=>{
    let sqlCommand = "UPDATE `portfolio` SET `title`='" + title + "',`body`='" + body + "',`link`='" + link + "' WHERE user_id = " + uid+ " AND p_id = " + pid +";";
    let result = await query(sqlCommand);
    return result;
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
    getCircularPosts,
    updateWholeResume,
    addHardSkill,
    deleteHardSkill,
    addSoftSkill,
    deleteSoftSkill,
    updateAddress,
    updatePhone,
    updateEmail,
    addExp,
    deleteExp,
    addEdu,
    deleteEdu,
    addProfilePic,
    saveProfile,
    getWorkPost,
    saveWorkForm,
    deleteWork,
    saveEditWorkForm


}
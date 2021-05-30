//connecting database
const {query} = require("../config/db");

const getCircularPost = async(uid, pid) => {
    let sqlCommand = "SELECT oci.user_id, `o_id`, `org_name`, `designation`, `job_responsibility`, `salary`, `job_type`, `emp_status`, `workplace`, `edu_req`, `exp_req`, `additional_req`, `job_location`, `benefits`, `looking_for`, `post_time`, `recruit_id`, `user_name` FROM `org_circular_info` as `oci` JOIN `user_login_info` as `uli` on oci.user_id = uli.user_id WHERE oci.user_id =" + uid + " AND o_id = "+ pid +";";
    let result;
    result = await query(sqlCommand);
    return result;
}

const getApplicantCount = async(activeUserId, uid, pid, job_type) => {
    let sqlCommand = "SELECT COUNT(*) AS row_count FROM `applied_for_job_info` WHERE  post_by = " + uid + " AND post_id = "+ pid  + " AND applied_by = " + activeUserId + " AND job_type = " + job_type +";";
    let result;
    result = await query(sqlCommand);
    return result;
}

const applyForJob = async(activeUserId, uid, pid, job_type) => {
    let sqlCount = "SELECT COUNT(*) AS row_count FROM `applied_for_job_info` ";
    let count = await query(sqlCount);
    count = count[0].row_count + 1;
    let sqlCommand = "INSERT INTO `applied_for_job_info`(`post_by`, `post_id`, `applied_id`, `job_type`, `applied_by`, `apply_status`, `apply_time`) VALUES (" + uid + "," + pid + "," + count + "," + job_type + "," + activeUserId + ", 'not hired', CURRENT_TIMESTAMP);";
    let result;
    result = await query(sqlCommand);
    return result;
}

const getApplicantList = async (activeUserId, pid) =>{
    let sqlCommand = "SELECT * FROM `applied_for_job_info` AS afji JOIN user_login_info as uli ON afji.applied_by = uli.user_id WHERE post_by = "+ activeUserId + " AND post_id = "+ pid +";";
    let result;
    result = await query(sqlCommand);
    return result;
}

const getJobType = async () =>{
    let sqlCommand = "SELECT * FROM `job_type_info` WHERE job_type = 'organization';";
    let result;
    result = await query(sqlCommand);
    return result;
} 

const saveForm = async (uid, lookingFor, designation, jobDescription, salary, empStatus, workplace, eduReq, expReq, addReq, jobLocation, benefits, jobType, orgName) =>{
    let sqlCommand = "SELECT o_id FROM `org_circular_info` WHERE user_id = " + uid + " ORDER BY o_id DESC LIMIT 1;";
    let oid;
    oid = await query(sqlCommand);
    if(oid[0] == undefined){
        oid = 1;
    }
    else{
        oid = oid[0].o_id + 1;
    }
    sqlCommand = "INSERT INTO `org_circular_info`(`user_id`, `o_id`, `org_name`, `designation`, `job_responsibility`, `salary`, `job_type`, `emp_status`, `workplace`, `edu_req`, `exp_req`, `additional_req`, `job_location`, `benefits`, `looking_for`, `post_time`) VALUES (" + uid +", " + oid +", '" + orgName +"', '" + designation +"', '" + jobDescription +"', " + salary +", " + jobType +", '" + empStatus +"', '" + workplace +"', '" + eduReq +"', '" + expReq +"', '" + addReq +"', '" + jobLocation +"', '" + benefits +"', '" + lookingFor +"', CURRENT_TIMESTAMP);";
    let result = await query(sqlCommand);
    return result;
} 

const deleteCircular = async (uid, pid) =>{
    let sqlCommand = "DELETE  FROM `org_circular_info` WHERE user_id = " + uid + " AND o_id = " + pid + " ;";
    let result;
    result = await query(sqlCommand);
    return result;
} 

const editCircular = async (uid, pid, lookingFor, designation, jobDescription, salary, empStatus, workplace, eduReq, expReq, addReq, jobLocation, benefits, jobType, orgName) =>{
    let sqlCommand = "UPDATE `org_circular_info` SET `org_name`='" + orgName + "',`designation`='" + designation + "',`job_responsibility`='" + jobDescription + "',`salary`= " + salary + ",`job_type`=" + jobType + " ,`emp_status`='" + empStatus + "',`workplace`='" + workplace + "',`edu_req`='" + eduReq + "',`exp_req`='" + expReq + "',`additional_req`='" + addReq + "',`job_location`='" + jobLocation + "',`benefits`='" + benefits + "',`looking_for`='" + lookingFor + "' WHERE user_id = " + uid + " AND o_id = " + pid + ";";
    let result;
    result = await query(sqlCommand);
    return result;
} 



module.exports = {
    getCircularPost,
    getApplicantCount,
    applyForJob,
    getApplicantList,
    getJobType,
    saveForm,
    deleteCircular,
    editCircular,

}
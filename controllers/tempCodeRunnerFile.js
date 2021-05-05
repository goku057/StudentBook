let user = await userProfileModel.getUserInfo(id);
    let contact = await userProfileModel.getUserContact(id);
    let softSkills = await userProfileModel.getSoftSkills(id);
    let hardSkills = await userProfileModel.getHardSkills(id);
    let experience = await userProfileModel.getWorkExpInfo(id);
    let edu = await userProfileModel.getEduInfo(id);
    const data = {
        pageTitle:title,
        pnavFocus:navF,
        user,
        dateFormat,
        contact,
        softSkills,
        hardSkills,
        experience,
        edu,
        id
    }
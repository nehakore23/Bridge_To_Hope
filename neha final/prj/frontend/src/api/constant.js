let API = "http://localhost:5000";

export const endPoints = {
    register: `${API}/user/register`,
    ngoregister: `${API}/ngo/register`,
    getAllUsers: `${API}/user/all`,
    getAllNGOs: `${API}/ngo/all`,
    eventUpload: `${API}/event/upload`,
    eventAdd: `${API}/event/add`,
    eventAll: `${API}/event/all`,
    addEventParticipate: `${API}/event/addEventParticipate`,
    deleteEventParticipate: `${API}/event/deleteEventParticipate`,
    
    checkEventParticipateExists: `${API}/event/checkEventParticipateExists`,
    getEventParticipateUsers: `${API}/event/getEventParticipateUsers`,
    donationAll: `${API}/donation/all`,
    addDonation: `${API}/donation/add`,
    getDonationByUser: `${API}/donation/byUser`,

    volunteerAll: `${API}/volunteer/all`,
    volunteerAdd: `${API}/volunteer/add`,
    getVolunteerParticipateUsers: `${API}/volunteer/getVolunteerParticipateUsers`,
    addVolunteerParticipate: `${API}/volunteer/addVolunteerParticipate`,
    checkVolunteerParticipateExists: `${API}/volunteer/checkVolunteerParticipateExists`,
    deleteVolunteerParticipate: `${API}/volunteer/deleteVolunteerParticipate`,
    
    getAllCampaign: `${API}/campaign/all`,
    campaignAdd: `${API}/campaign/add`,
    campaignPayAmount: `${API}/campaign/payAmount`,
    campaignUpdateAmount: `${API}/campaign/updateAmount`,
    campaignUpdateStatus: `${API}/campaign/updateStatus`,
    getCampaignParticipateUsers: `${API}/campaign/getCampaignParticipateUsers`,
    deleteCampaignParticipate: `${API}/campaign/deleteCampaignParticipate`,
    

    getAllCareer: `${API}/career/all`,
    careerAdd: `${API}/career/add`,
    addCareerParticipate: `${API}/career/addCareerParticipate`,
    checkCareerParticipateExists: `${API}/career/checkCareerParticipateExists`,
    getCareerParticipateUsers: `${API}/career/getCareerParticipateUsers`,
    deleteCareerParticipate: `${API}/career/deleteCareerParticipate`,
    

    getAllFunding: `${API}/funding/all`,
    fundingAdd: `${API}/funding/add`,
    getFundingByUser: `${API}/funding/allbyuser`,
    

    getPress: `${API}/getPress`,
    updatePress: `${API}/updatePress`,
    editPress: `${API}/createPress`,
    deletePress: `${API}/deletePress`,
}
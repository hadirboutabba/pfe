const mongoose = require("mongoose");
const schema = mongoose.Schema


const VolunteerOpp = new schema({
  
    Title: {
        type: String,

    },
    CompanyName: {
        type: String,

    },
    Description: {
        type: String,

    },

    URL: {
        type: String,

    },


}
);


module.exports = mongoose.model("volunteerOpp", VolunteerOpp);


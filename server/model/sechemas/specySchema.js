const mongoose = require('mongoose');
// Person Schema
const SpecySchema = mongoose.Schema({
    specyId:{
        type:String,
        unique: true,
    },
    name: {
        type: String
    },
    designation:{
        type: String
    },
    classification:{
        type:String
    },
    average_height: {
        type: String
    },
    classification: {
        type: String
    },
    hair_color: {
        type: String
    },
    skin_color: {
        type: Number
    },
    eye_colors:{
        type:String
    },
    average_lifespan:{
        type: String,
    },
    language:{
        type:String
    }
    
    
}, { 
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

const SpecyModel = mongoose.model("SpeciesSw", SpecySchema, "specy");
module.exports = SpecyModel;
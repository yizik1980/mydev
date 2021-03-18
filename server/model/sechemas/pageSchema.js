const mongoose = require('mongoose');
// Person Schema
const EntitySchema = mongoose.Schema({
    pageId:{
        type:String,
    },
    type:{
        type:String,
    },
    amount:{
        type:Number,
    }
}, { 
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

const EntityModel = mongoose.model("Pages", EntitySchema, "page");
module.exports = EntityModel;
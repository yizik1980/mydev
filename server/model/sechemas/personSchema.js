const mongoose = require('mongoose');
// Person Schema
const PersonSchema = mongoose.Schema({
    personId: {
        type: String,
        unique:true
    },
    films: [String],
    species: [String],
    name: {
        type: String
    },
    height: {
        type: Number
    },
    mass: {
        type: String
    },
    hair_color: {
        type: String
    },
    eye_color: {
        type: String
    },
    skin_color: {
        type: String
    },
    gender: {
        type: String
    },
    birth_year: {
        type: String,
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

const PersonModel = mongoose.model("PersonSw", PersonSchema, "person");
module.exports = PersonModel;
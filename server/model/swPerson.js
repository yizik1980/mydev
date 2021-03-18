const {removeUrl, ConvertYearToDecimal} = require('./util');

class swPerson{
    constructor(arg){

        this.name = arg.name;
        this.height = parseFloat(arg.height) || 0;
        this.mass = parseFloat(arg.mass) || 0;
        this.hair_color = arg.hair_color || "";
        this.skin_color = arg.skin_color || "";
        this.eye_color = arg.eye_color;
        this.gender = arg.gender || "male";
        this.species = arg.species? arg.species.map(removeUrl) :[];
        this.films = arg.films? arg.films.map(removeUrl) :[];
        this.personId = arg.url? parseInt(arg.url.replace(/[^0-9]+/g,'')) :0;
        this.birth_year = arg.birth_year? ConvertYearToDecimal(arg.birth_year): 0;
    }
}
module.exports = swPerson;
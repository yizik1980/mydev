class specy {
  constructor(arg) {
    this.specyId = arg.url? parseInt(arg.url.replace(/[^0-9]+/g,'')) :0;
    this.name = arg.name;
    this.classification = arg.classification;
    this.designation = arg.designation;
    this.average_height = arg.average_height;
    this.skin_colors = arg.skin_colors;
    this.hair_colors = arg.hair_colors;
    this.average_lifespan = arg.average_lifespan;
    this.language = arg.language;
  }
}
module.exports = specy;

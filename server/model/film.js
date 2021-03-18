const {removeUrl} = require('./util');
class film {
  constructor(arg) {
    this.filmId = arg.url? parseInt(arg.url.replace(/[^0-9]+/g,'')) :0;
    this.title = arg.title;
    this.episode_id = arg.episode_id;
    this.opening_crawl = arg.opening_crawl;
    this.director = arg.director;
    this.producer = arg.producer;
    this.release_date = arg.release_date;
    this.characters = arg.characters ? arg.characters.map(removeUrl) :[];
  }
}
module.exports = film;

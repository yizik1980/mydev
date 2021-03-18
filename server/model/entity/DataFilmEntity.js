const film = require('./../sechemas/filmSchema');

class filmDataEntity{
    constructor(){}
    getFilm(id){
        return film.findOne({filmId:id}).exec();
    }
    async setFilm(filmOb){
        const filmsEntity = new film(filmOb);
        const filmResult = await filmsEntity.save();
        return filmResult;
    }
}

module.exports = filmDataEntity;
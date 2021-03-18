const specy = require('../sechemas/specySchema');

class DataspecyEntity{
    constructor(){}
    getspecy(id){
        return specy.findOne({specyId:id}).exec();
    }
    async setspecy(specyOb){
        const specysEntity = new specy(specyOb);
        const specyResult = await specysEntity.save();
        return specyResult;
    }
}

module.exports = DataspecyEntity;
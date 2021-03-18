const pageSw = require('../sechemas/pageSchema');
class DataPageEntityStarWar{
    constructor(){

    }
    validateDataHasMigrated(page, type,callBack){
        return pageSw.find({pageId:page, type}, callBack);
    }
    async addPageType(pageId, type, amount){
        if(pageId && type){
            const pageOb = new pageSw({pageId,type, amount})
            const result = await pageOb.save();
            return result;
        }
    }
    getEntityDataAmmount(type){
        return pageSw.findOne({type}).exec();
    }

}
module.exports = DataPageEntityStarWar;
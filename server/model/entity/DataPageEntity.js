const pageSw = require('../sechemas/pageSchema');
class DataPageEntityStarWar {
    constructor() {

    }
    validateDataHasMigrated(page, type, callBack) {
        return pageSw.find({ pageId: page, type }, callBack);
    }
    isPageExist(pageId) {
        return pageSw.find({ pageId }).exec();
    }
    async addPageType(pageId, type, amount) {
        console.log(amount);
        if (pageId && type && amount) {
            const pageOb = new pageSw({ pageId, type, amount });
            const result = await pageOb.save();
            return result;
        }
    }
    getEntityDataAmmount(type) {
        return pageSw.findOne({ type }).exec();
    }

}
module.exports = DataPageEntityStarWar;
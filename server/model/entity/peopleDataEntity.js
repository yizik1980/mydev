const personSw = require('../sechemas/personSchema');
class PeopleEntity{
    constructor(){}

    migratePeopleList(jsonList){
       return personSw.insertMany([...jsonList]);
    }
    
    getPeople(page){
        const pagesSkip = page * 10;
      return  personSw.find().skip(pagesSkip).limit(10).exec();
    }
    getOnePerson(id){
        return personSw.find({personId:id}).exec();
    }
}
module.exports = PeopleEntity;
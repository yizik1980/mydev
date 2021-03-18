const request = require("request");

class starWarInfo {
  url = "";
  constructor(url) {
    this.url = url || "https://swapi.dev/api";
  }
  getPeople(callBack, p) {
    p = parseInt(p);
    let page = p ? `?page=${p + 1}` : "";
    let url = `${this.url}/people${page}`;
    console.log(url);
    return request.get(url, callBack);
  }
  ////
  // get specific Person with id
  //
  ////
  genricGetOneSWInfo(id, serviceName, callBack) {
    if (id) {
      return request.get(`${this.url}/${serviceName}/${id}`, callBack);
    }
  }
  ////
  // search people
  //
  getPeopleSearchQuery(txt,callBack){
      if(txt && txt.length>1){
          return Request.get(`${this.url}/people/?search=${txt}`, callBack);
      }
  }
}

module.exports = starWarInfo;

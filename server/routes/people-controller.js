const express = require("express");
const swRequest = require("../model/sw");
const swperson = require("../model/swPerson");
const peopleDataEntity = require("../model/entity/peopleDataEntity");
const pageDataEntity = require("../model/entity/DataPageEntity");
const router = express.Router();
const swinfo = new swRequest("https://swapi.dev/api");
const pageDataInstance = new pageDataEntity();
const peopleEntityInstance = new peopleDataEntity();

router.get("/", async (req, res) => {
  let p = req.query.p;
  if (p) {
    try {
      const docPageResult = await pageDataInstance.isPageExist(p);
      if (docPageResult.length) {
        ////
        // is data exist get it from data base 
        //
        const peopleDbResult = await peopleEntityInstance.getPeople(p);
        res.status(200).json(peopleDbResult);

      } else {
        // otherwise draw it form the remote api 
        swinfo.getPeople(async (err, response, body) => {
          if (err) {
            res.status(500).json(err);
            return;
          }
          let personArr = JSON.parse(body);
          /// map out the relevent fields url => presonId
          personArr.results = personArr.results ? personArr.results.map((item) => new swperson(item)): [];

          const addPageResult = await pageDataInstance.addPageType(p, 'people', personArr.count);
          if (addPageResult) {
            const result = await peopleEntityInstance.migratePeopleList(personArr.results)
            res.status(200).json(result);
          }
        }, p);
      }
    } catch (err) {
      res.status(400).json(err);
    }

  }
});
router.get("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (id) {
      peopleEntityInstance.getOnePerson(id).then((doc) => {
        if (doc.length)
          res.status(200).json(doc[0]);
        res.status(400).json({ msg: "entity no found", doc });
      });
      return;
    }
    res.status(401).json({ msg: "require id field" });
  } catch {
    res.status(500).json({ msg: "api not reachable" });
  }
});

module.exports = router;

const express = require("express");
const swRequest = require("./../model/sw");
const swperson = require("./../model/swPerson");
const peopleDataEntity = require("../model/entity/peopleDataEntity");
const pageDataEntity = require("./../model/entity/DataPageEntity");
const router = express.Router();
const swinfo = new swRequest("https://swapi.dev/api");
const pageDataInstance = new pageDataEntity();
const peopleEntityInstance = new peopleDataEntity();

router.get("/", (req, res) => {
  try {
    let p = req.query.p;
    if (p) {
      pageDataInstance.validateDataHasMigrated(p, "people", function (err, docs) {
        if (err) {
          res.status(500).send(err);
          return;
        }
        if (docs.length) {
          ////
          // is data exist 
          //
          peopleEntityInstance.getPeople(p).then((docsResult) => {
            res.status(200).send(docsResult);
          });

        } else {
          // get the page list p=?
          swinfo.getPeople((err, response, body) => {
            if (err) {
              res.status(500).json(err);
              return;
            }
            let personArr = JSON.parse(body);
            personArr.results = personArr.results
              ? personArr.results.map((item) => {
                return new swperson(item);
              })
              : [];
            
            pageDataInstance
              .addPageType(p, 'people', personArr.count)
              .then((doc) => {
                peopleEntityInstance
                  .migratePeopleList(personArr.results)
                  .then((result) => {
                    res.status(200).json(result);
                  });
              })
              .catch((err) => {
                res.status(400).json(err);
              });
          }, p);

        }
      });
    }
  } catch {
    res.status(500).json({ msg: "api not reachable" });
  }
});
router.get("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (id) {
      peopleEntityInstance.getOnePerson(id).then((doc) => {
        if(doc.length)
          res.status(200).json(doc[0]);
        res.status(400).json({msg:"entity no found", doc});
      });
      return;
    }
    res.status(401).json({ msg: "require id field" });
  } catch {
    res.status(500).json({ msg: "api not reachable" });
  }
});

module.exports = router;

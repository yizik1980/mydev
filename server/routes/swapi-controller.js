const express = require("express");
const swRequest = require("./../model/sw");
const swperson = require("./../model/swPerson");
const router = express.Router();
const swinfo = new swRequest("https://swapi.dev/api");

router.get("/", (req, res) => {
  try {
    let p = req.query.p;
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
      res.status(200).json(personArr);
    },p);
  } catch {
    res.status(500).json({ msg: "api not reachable" });
  }
});
router.get("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (id) {
      console.log(req.params);
      swinfo.genricGetOneSWInfo(id,'people', (err, response, body) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        const arg = JSON.parse(body);
        const person = new swperson(arg);
        res.status(200).json(person);
      });
      return;
    }
    res.status(401).json({ msg: "require id field" });
  } catch {
    res.status(500).json({ msg: "api not reachable" });
  }
});
router.get("/search/:txt",(req, res)=>{
    const txt = req.params.txt;
    if(txt){
        
    }

})
module.exports = router;

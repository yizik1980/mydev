const express = require("express");
const swRequest = require("../model/sw");
const film = require("../model/film");
const router = express.Router();
const swinfo = new swRequest("https://swapi.dev/api");

router.get("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (id) {
      swinfo.genricGetOneSWInfo(id,'films',(err, response, body) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        
        const arg = JSON.parse(body);
        console.log(arg);
        const f = new film(arg);
        res.status(200).json(f);
      });
      return;
    }
    res.status(401).json({ msg: "require id field" });
  } catch {
    res.status(500).json({ msg: "api not reachable" });
  }
});
module.exports = router;

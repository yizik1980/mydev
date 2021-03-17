const express = require("express");
const swRequest = require("../model/sw");
const specy = require("../model/specy");
const router = express.Router();
const swinfo = new swRequest("https://swapi.dev/api");

router.get("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (id) {
      swinfo.genricGetOneSWInfo(id, 'species', (err, response, body) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        const arg = JSON.parse(body);
        const s = new specy(arg);
        res.status(200).json(s);
      });
      return;
    }
    res.status(401).json({ msg: "require id field" });
  } catch {
    res.status(500).json({ msg: "api not reachable" });
  }
});
module.exports = router;

const express = require("express");
const swRequest = require("../model/sw");
const film = require("../model/film");
const filmEntity = require('../model/entity/DataFilmEntity');
const router = express.Router();
const swinfo = new swRequest("https://swapi.dev/api");
const filmEntityInstanse = new filmEntity();

router.get("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (id) {
      filmEntityInstanse.getFilm(id).then(function (filmResult) {
        if (!filmResult) {
          swinfo.genricGetOneSWInfo(id, 'films', (err, response, body) => {
            if (err) {
              res.status(500).send(err);
              return;
            }
            const arg = JSON.parse(body);
            const f = new film(arg);
            filmEntityInstanse.setFilm(f).then((setResult) => {
              res.status(200).json(setResult);
            });

          });
        } else {
          res.status(200).json(filmResult);
        }

      }).catch(err => {
        res.status(500).send(err);
      });

      return;
    }
    res.status(401).json({ msg: "require id field" });
  } catch {
    res.status(500).json({ msg: "api not reachable" });
  }
});
module.exports = router;

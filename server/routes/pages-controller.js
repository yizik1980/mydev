const express = require("express");
const pageDataEntity = require("../model/entity/DataPageEntity");
const router = express.Router();
const pageDataInstance = new pageDataEntity();


router.get("/:type", (req, res) => {
  try {
    const type = req.params.type;
    if (type) {
      pageDataInstance.getEntityDataAmmount(type)
        .then((doc) => {
          if (doc)
            res.status(200).json(doc);
          res.status(400).json({ msg: "entity not found", doc });
        });
      return;
    }
    res.status(401).json({ msg: "no type avilable" });
  } catch {
    res.status(500).json({ msg: "api not reachable" });
  }
});

module.exports = router;

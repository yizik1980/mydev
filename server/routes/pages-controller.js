const express = require("express");
const pageDataEntity = require("../model/entity/DataPageEntity");
const router = express.Router();
const pageDataInstance = new pageDataEntity();


router.get("/:type", async (req, res) => {
  try {
    const type = req.params.type;
    if (type) {
      const dataAmount = await pageDataInstance.getEntityDataAmmount(type);
      if (dataAmount) {
        res.status(200).json(doc);
        return;
      }
      res.status(401).json({ msg: 'page not found' })
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

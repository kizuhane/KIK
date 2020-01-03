const router = require("express").Router();

const articlesList = require("../../../database/articlesList");

router.get("/sidebar/:department", async (req, res) => {
  try {
    const data = articlesList.find(
      el => el.departmentName === req.params.department
    );

    res.json(data.ArticlesList);
  } catch (error) {
    res.status(400).json({ msg: "no exiting departments" });
  }
});

module.exports = router;

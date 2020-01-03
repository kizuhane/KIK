const router = require("express").Router();

const departments = require("../../../database/departments");

router.get("/departments", async (req, res) => {
  try {
    const data = departments;

    res.json(data);
  } catch (error) {
    res.status(400).json({ msg: "no exiting departments" });
  }
});

router.get("/departments/:name", async (req, res) => {
  try {
    const AvailablePages = departments.find(el => el.url === req.params.name);

    if (AvailablePages) {
      res.json({ exist: true });
    } else {
      res.status(404).json({ exist: false });
    }
  } catch (error) {
    res.status(400).json({ msg: "no exiting departments" });
  }
});

module.exports = router;

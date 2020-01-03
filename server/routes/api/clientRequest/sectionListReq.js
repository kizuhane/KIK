const router = require("express").Router();

const articlesList = require("../../../database/articlesList");
const ErrorMessage = require("../../../src/errors/responseErrorMessageTemplate");

/* import function translating url to name */
const nameToUrl = require("../../../src/function/urlToName");

router.get("/section/:department/:sectionName", async (req, res) => {
  try {
    const translatedSectionName = nameToUrl(req.params.sectionName);

    const sectionData = articlesList.find(
      el => el.departmentName === req.params.department
    );

    const data = {
      ...sectionData.ArticlesList.find(
        section => section.name === translatedSectionName
      )
    };

    if (Object.keys(data).length === 0 && data.constructor === Object)
      res
        .status(404)
        .json(
          ErrorMessage("error", `no data  exist for: ${req.params.sectionName}`)
        );

    delete data.icon;
    res.json(data);
  } catch (error) {
    res.status(400).json({ msg: "no exiting section" });
  }
});

module.exports = router;

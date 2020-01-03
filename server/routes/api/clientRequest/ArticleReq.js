const router = require("express").Router();

const articlesDB = require("../../../database/article");
const ErrorMessage = require("../../../src/errors/responseErrorMessageTemplate");

/* import function translating url to name */
const nameToUrl = require("../../../src/function/urlToName");

router.get("/article/:department/:section/:articleName", async (req, res) => {
  try {
    const translatedSectionName = nameToUrl(req.params.section);
    const translatedArticleNameName = nameToUrl(req.params.articleName);

    const departmentData = articlesDB.find(
      el => el.departmentName === req.params.department
    );

    const data = departmentData.Articles.find(
      el =>
        el.section === translatedSectionName &&
        el.lesson === translatedArticleNameName
    );

    if (!data)
      res
        .status(404)
        .json(
          ErrorMessage(
            "error",
            `no data  exist for: ${translatedSectionName} / ${translatedArticleNameName}`
          )
        );
    if (Object.keys(data).length === 0 && data.constructor === Object)
      res
        .status(404)
        .json(
          ErrorMessage(
            "error",
            `no data  exist for: ${translatedSectionName} / ${translatedArticleNameName}`
          )
        );

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(ErrorMessage("error", `no exiting section`));
  }
});

module.exports = router;

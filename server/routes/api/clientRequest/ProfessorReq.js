const router = require("express").Router();

const professorDB = require("../../../database/professors");
const ErrorMessage = require("../../../src/errors/responseErrorMessageTemplate");

/* import function translating url to name */
const nameToUrl = require("../../../src/function/urlToName");

router.get("/professors/:department", async (req, res) => {
  try {
    const ProfessorsList = professorDB.find(
      el => el.departmentName === req.params.department
    );

    if (!ProfessorsList.Professors.length)
      res
        .status(400)
        .json(
          ErrorMessage("error", `no professors for ${req.params.department}`)
        );

    const data = [];
    ProfessorsList.Professors.forEach(el => {
      data.push({
        id: el.id,
        name: el.name,
        surname: el.surname,
        titles: el.titles,
        department: el.department,
        contactInfo: {
          address: el.contactInfo.address,
          mail: el.contactInfo.mail,
          phone: el.contactInfo.phone
        },
        ORCID: el.ORCID,
        photo: el.photo
      });
    });

    res.json(data);
  } catch (error) {
    res
      .status(400)
      .json(
        ErrorMessage("error", `no professors for ${req.params.department}`)
      );
  }
});

router.get("/professors/:department/:name", async (req, res) => {
  const translatedSectionName = nameToUrl(req.params.name).split(" ");
  try {
    const departmentData = professorDB.find(
      el => el.departmentName === req.params.department
    );

    const data = departmentData.Professors.find(
      el =>
        el.name === translatedSectionName[0] &&
        el.surname === translatedSectionName[1]
    );

    if (Object.keys(data).length === 0 && data.constructor === Object)
      res
        .status(404)
        .json(
          ErrorMessage("error", `no data  exist for: ${translatedSectionName}`)
        );

    res.json(data);
  } catch (error) {
    res
      .status(400)
      .json(
        ErrorMessage("error", `no data  exist for: ${translatedSectionName}`)
      );
  }
});

module.exports = router;

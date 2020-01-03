const express = require("express");
const logger = require("morgan");

// Custom logger
const customLogger = require("./routes/middleware/logger");

const app = express();

const PORT = process.env.PORT || 5000;
// call routers to variable

// BODY PHASER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MIDDLEWARE

// LOGGER
app.use(logger("dev"));
// app.use(customLogger);

// API ROUTS
app.use("/api", require("./routes/api/clientRequest/departmentReq"));
app.use("/api", require("./routes/api/clientRequest/sideBarReq"));
app.use("/api", require("./routes/api/clientRequest/sectionListReq"));
app.use("/api", require("./routes/api/clientRequest/ArticleReq"));
app.use("/api", require("./routes/api/clientRequest/ProfessorReq"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

const {
  repositories
} = require("../database/controllers/repositories_controller");
const bodyParser = require("body-parser");
const express = require("express");

let app = express();
const port = 5000;
app.use(bodyParser.json());
app.use("/src/templates", express.static("src/templates"));
app.use("/src/styles", express.static("src/styles"));
app.use("/src/icons", express.static("src/icons"));
app.use("/dist", express.static("dist"));
// app.use("/repositories_files", express.static("repositories_files"));
app.use("/repositories", repositories);
try {
  app.listen(port, () => console.log(`Server at port: ${port}`));
  console.log(`http://127.0.0.1:${port}/src/templates/index.html`);
} catch (e) {
  console.log(e);
}

const { readme } = require("./readme_controller");
const { files } = require("./files_controller");
const {repositories} = require("./repositories_controller");
const bodyParser = require("body-parser");
const express = require("express");

let app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(express.static("./"));
app.use("/readme", readme);
app.use("/files", files);
app.use("/repositories", repositories);
app.listen(port, () => console.log(`Server at port: ${port}`));
console.log(`http://127.0.0.1:${port}/src/templates/index.html`);

const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const api = require("./routes/api");
const auth = require("./routes/auth");
const bodyParser = require("body-parser");
const passport = require("./auth").passport;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = process.env.PORT||3000;

app.use(passport.initialize());
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(express.static(path.resolve(__dirname, "../client/new_dist")));
app.use(express.static(path.resolve(__dirname, "../client/assets")));
app.use(bodyParser.json());

// routes
app.use("/api/", api);
app.use("/auth/", auth);

//default
app.get("/*", (req, res) => res.sendFile(path.resolve("client/index.html")));

app.listen(PORT, () =>
  console.log(`Running at Port ${PORT}`)
);

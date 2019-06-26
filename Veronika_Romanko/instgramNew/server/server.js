const express = require('express');
const app = express();
const path = require("path");
const PORT = 3000;


app.use(express.static(path.resolve(__dirname, "../client/assets")));



app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, "../client/index.html")));


app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
let express = require("express");
let app = express();
let path = require("path");

app.use(express.static(path.resolve(__dirname, "assets")));
app.use(express.static(path.resolve(__dirname, "dist")));
app.use(express.static(path.resolve(__dirname, "styles")));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

let port_number = 3000;

app.listen(port_number);
process.stdout.write("Server is running.\nGo to http://localhost:" + port_number + ".\n");
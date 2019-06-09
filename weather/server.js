let express = require("express");
let app = express();
let path = require("path");

app.use(express.static(path.resolve(__dirname,"static")));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
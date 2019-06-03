const uri = "mongodb://mongo:27017/docker-node-mongo";

const mongoose = require("mongoose")
mongoose.connect(uri);

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log("connected")
})

let userSchema = mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    icon: Number,
});
exports.User = mongoose.model("user", userSchema);


let courseSchema = mongoose.Schema({
    courseName: {type: String, required: true},
    courseTech: {type: String, required: true,},
    courseAuthor: {type: Number, required: true},
    courseDescription: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});


exports.Course = mongoose.model("Course", courseSchema);
// exports.Course.find({},(err,users)=>{
//     users.map(course=>{
//         console.log(course.toString())
//     })
// });

// exports.User.insertMany({
//
//     name:"test"
// }, (err, res) => {
//     console.log(err, res)
// })

// exports.Course.insertMany({
//
//     courseName: "ract",
//     courseTech: "react",
//     courseAuthor: 4,
//     courseDescription: "testing",
//     author: "5cf3c54d3ab0c440e1d48a68"
// }, (err, res) => {
//     console.log(err, res)
// })
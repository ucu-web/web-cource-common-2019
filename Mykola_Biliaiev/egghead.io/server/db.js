const dotenv = require("dotenv");
dotenv.config();
const uri = `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME};`;
const mongoose = require("mongoose");
mongoose.connect(uri);
let db = mongoose.connection;
db.on("error", ()=>console.log("connection error"));
db.once("open", () => console.log("connected"));


let userSchema = mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    icon: Number
});
exports.User = mongoose.model("user", userSchema);

let courseSchema = mongoose.Schema({
    courseName: {type: String, required: true},
    courseTech: {type: String, required: true},
    courseDescription: String,
    lessons: [{type: mongoose.Schema.Types.ObjectId, ref: "Lesson"}],
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

exports.Course = mongoose.model("Course", courseSchema);

let lessonSchema = mongoose.Schema({
    name: {type: String, required: true},
    time: {type: String, required: true},
    video: {type: String, required: true},
    description: {type: String},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

exports.Lesson = mongoose.model("Lesson", lessonSchema);

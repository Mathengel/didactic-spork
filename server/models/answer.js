console.log("answer model loaded...")

var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
    answer: String,
    detail: String,
    likes: Number,
    name: String,
}, {timestamps: true})

mongoose.model("Answer", AnswerSchema);
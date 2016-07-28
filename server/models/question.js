console.log("question model loaded...")

var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    question: String,
    yes: Number,
    no: Number,
    name: String,
    // _answers: [{type: mongoose.Schema.ObjectId, ref: "Answer"}],
    _user: {type: mongoose.Schema.ObjectId, ref: "User"}
}, {timestamps: true})

mongoose.model("Question", QuestionSchema);
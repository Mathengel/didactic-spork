console.log("question model loaded...")

var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    question: String,
    description: String,
    _answers: [{type: mongoose.Schema.ObjectId, ref: "Answer"}],
}, {timestamps: true})

mongoose.model("Question", QuestionSchema);
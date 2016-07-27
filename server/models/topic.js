console.log("topic model loaded...")

var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
    topic: String,
    description: String,
    category: String,
    name: String,
    _answers: [{type: mongoose.Schema.ObjectId, ref: "Answer"}],
    _user: {type: mongoose.Schema.ObjectId, ref: "User"}
}, {timestamps: true})

mongoose.model("Topic", TopicSchema);
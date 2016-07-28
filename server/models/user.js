console.log("user model loaded...")

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    _questions: [{type: mongoose.Schema.ObjectId, ref: "Question"}]
}, {timestamps: true})

mongoose.model("User", UserSchema);
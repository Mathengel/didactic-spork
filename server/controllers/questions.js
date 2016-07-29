console.log("questions controller loaded...")
var mongoose = require('mongoose');
var Question = mongoose.model('Question');


module.exports = {

    index: function(req, res){
        console.log('getting from /questions')
        Question.find({}, function(err, questions){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            res.json(questions);            
        })
    },

    create: function(req, res){
        console.log("question creation from the questions.js", req.body);
        var newQuestion = new Question(req.body)
        console.log('posting to /questions', req.body)
        Question.create(req.body, function(err, question){
            if(err){
                res.status(400).json(err);
            }
            res.json(question);
        })
    }, 

    show: function(req, res){
        console.log('getting one question', req.params.id)
        Question.findOne({_id: req.params.id}, function(err, question){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            res.json(question);             
        })
    },

}

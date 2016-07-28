console.log("questions controller loaded...")
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');


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
        console.log("question creation from the questions.js"+ req.params.id, req.body);
        User.findOne({_id: req.params.id}, function(err, user){
            if(err){
                console.log(err);
                res.status(400).json(err);
            }
            else{
                var question = new Question(req.body);
                user._questions.push(question)
                question.save(function(err, question){
                    if(err){
                    console.log(err);
                    res.status(400).json(err);
                    }
                    else{
                        user.save(function(err, user){
                           if(err){
                                res.status(400).json(err);
                            }
                                res.json(user);  
                        })
                    }                  
                })
            }
        })
        // var newQuestion = new Question(req.body)
        // console.log('posting to /questions', req.body)
        // Question.create(req.body, function(err, question){
        //     if(err){
        //         res.status(400).json(err);
        //     }
        //     res.json(question);
        // })
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

    yes: function(req, res){
        console.log('posting to yes', req.params.id, req.body)
        Question.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true, new: true}, function(err, question){
            if(err){
                res.status(400).json(err);
            }
            res.json(question);
        })
    },

    no: function(req, res){
        console.log('posting to no', req.params.id, req.body)
        Question.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true, new: true}, function(err, question){
            if(err){
                res.status(400).json(err);
            }
            res.json(question);
        })
    }
}

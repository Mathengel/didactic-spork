console.log("answers controller loaded...")
var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');


module.exports = {

    create: function(req, res){
        console.log("answer creation from the answers.js", req.body);
        Question.findOne({_id: req.params.id}, function(err, question){
            if(err){
                console.log(err);
                res.status(400).json(err);
            }
            else{
                var answer = new Answer(req.body);
                question._answers.push(answer)
                answer.save(function(err, answer){
                    if(err){
                    console.log(err);
                    res.status(400).json(err);
                    }
                    else{
                        question.save(function(err, question){
                           if(err){
                                res.status(400).json(err);
                            }
                                res.json(question);  
                        })
                    }                  
                })
            }
        })
    }, 

    show: function(req, res){
        console.log('getting one question', req.params.id)
        Question.findOne({_id: req.params.id}).populate("_answers").exec(function(err, question){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            res.json(question);             
        })
    },
    like: function(req, res){
        console.log('posting to like', req.params.id, req.body)
        Answer.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true, new: true}, function(err, answer){
            if(err){
                res.status(400).json(err);
            }
            res.json(answer);
        })
    },

}

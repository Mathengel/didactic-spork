console.log("topics controller loaded...")
var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');


module.exports = {

    index: function(req, res){
        console.log('getting from /topics')
        Topic.find({}, function(err, topics){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            res.json(topics);            
        })
    },

    create: function(req, res){
        var newTopic = new Topic(req.body)
        console.log('posting to /topics', req.body)
        Topic.create(req.body, function(err, topic){
            if(err){
                res.status(400).json(err);
            }
            res.json(topic);
        })
    }, 

    show: function(req, res){
        console.log('getting one topic', req.params.id)
        Topic.findOne({_id: req.params.id}, function(err, topic){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            res.json(topic);             
        })
    }
}

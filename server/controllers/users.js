console.log("users controller loaded...")
var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = {

    show: function(req, res){
        console.log('getting from /users/'+ req.params.id)
        User.findOne({_id: req.params.id}, function(err, user){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            console.log(user)
            res.json(user);            
        })
    },

    index: function(req, res){
        console.log('getting all users via /users')
        User.find({}, function(err, users){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            console.log(users)
            res.json(users);             
        })
    },

    create: function(req, res){
        console.log('posting to /user #', req.body)
        User.findOneAndUpdate({name: req.body.name}, req.body, {upsert: true, new: true}, function(err, user){
            if(err){
                res.status(400).json(err);
            }
            res.json(user);
        })
    }
}

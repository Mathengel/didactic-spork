console.log("module routes loaded...")
var users = require('../controllers/users.js')
var questions = require('../controllers/questions.js')
var answers = require('../controllers/answers.js')

module.exports = function(app){

    app.get('/users', users.index)
    app.get('/users/:id', users.show)
    app.post('/users/', users.create)

    app.get('/questions', questions.index)
    app.post('/questions/', questions.create)
    app.get('/questions/:id', answers.show)

    app.post('/answers/:id', answers.create)
    app.post('/answers/:id/like', answers.like)



}
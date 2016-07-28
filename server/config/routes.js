console.log("module routes loaded...")
var users = require('../controllers/users.js')
// var questions = require('../controllers/questions.js')
// var orders = require('../controllers/orders.js')

module.exports = function(app){

    app.get('/users', users.index)
    app.get('/users/:id', users.show)
    app.post('/users/', users.create)

    // app.get('/questions', questions.index)
    // app.post('/questions/:id', questions.create)
    // app.get('/questions/:id', questions.show)
    // app.post('/questions/:id/yes', questions.yes)
    // app.post('/questions/:id/no', questions.no)


}
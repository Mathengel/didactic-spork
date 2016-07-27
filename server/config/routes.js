console.log("module routes loaded...")
var users = require('../controllers/users.js')
var topics = require('../controllers/topics.js')
// var orders = require('../controllers/orders.js')

module.exports = function(app){

    app.get('/users', users.index)
    app.get('/users/:id', users.show)
    app.post('/users/', users.create)

    app.get('/topics', topics.index)
    app.post('/topics/', topics.create)
    app.get('/topics/:id', topics.show)


}
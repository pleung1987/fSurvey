console.log("got into routes.js");
var mongoose = require('mongoose')
//getter -gets the model
var Question = mongoose.model('Question') // We are retrieving this Schema from our Models, named 'Friend'
var questions = require('./../controllers/questions.js')  //requiring the dictionary of customers.js, require all the controllers to route them
// var Answer = mongoose.model('Answer')
// var answers = require('./../controllers/answers.js')
// var Product = mongoose.model('Product')
// var products = require('./../controllers/products.js')

var path = require('path');

module.exports = function(app){
//questions route
    //index grab all data
    app.get('/questions', function(req, res) {
        console.log("got into the /index route at routes.js");
        questions.index(req, res);
    });
    //grab specific id (show)
    app.get('/questions/:id', function(req, res) {
        console.log("got into the /show route at routes.js");
        questions.show(req, res);
    });
    //create
    app.post('/questions', function(req, res) {
        console.log("got into the /create route from route.js passing in:", req.body);
      questions.create(req, res);
    });
    app.put('/vote1/:id', function(req, res) {
        console.log("this is the req.body at the server route update:", req.body);
        questions.update1(req, res);
    });
    app.put('/vote2/:id', function(req, res) {
        console.log("this is the req.body at the server route update:", req.body);
        questions.update2(req, res);
    });
    app.put('/vote3/:id', function(req, res) {
        console.log("this is the req.body at the server route update:", req.body);
        questions.update3(req, res);
    });
    app.put('/vote4/:id', function(req, res) {
        console.log("this is the req.body at the server route update:", req.body);
        questions.update4(req, res);
    });
    app.delete('/questions/:id', function(req, res) {
        console.log("this is the req.body at the server route delete:", req.body);
        questions.delete(req, res);
    });

};

console.log('inside question.js models');
var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
 creator: {type: String, required: true},
 question: {type: String, required: true, minlength: 8},
 option1: {type: String, required: true, minlength: 2 },
 opt1Count:{type:Number},
 option2: {type: String, minlength: 2},
 opt2Count:{type:Number},
 option3: {type: String, required: true,  minlength: 2},
 opt3Count:{type:Number},
 option4: {type: String, required: true, minlength: 2},
 opt4Count:{type:Number},
}, {timestamps: true});

//setter-> sets the friend model
mongoose.model('Question', QuestionSchema);
// We are setting this Schema in our Models as 'Friend'. Friend model in Mongoose looks for 'friends' in Mongo.
//FriendSchema is the DB you are putting your information in

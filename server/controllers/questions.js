console.log('got inside server side controller questions.js');

var mongoose = require('mongoose');
var Question = mongoose.model('Question');  //getting the collection in the model
//create variable for the Schema that you need your controller to access

module.exports = {
  index: function(req,res){
    //your code here
    Question.find({},function(err,results){      // .find comes back in an array so thats why we can use a forloop to send as context
    // behind the hood of -> function find(object, callback){
    // inside the call back it uses the object to query the database which invoke the callback with erros and the resut of the database
        if(err){
            res.json({message: "Error happened", error: err});
                //in our client side, we can look at message and error to see what didn't work
        } else {
            res.json({message:"Success", result: results});
                //put the render index into call back so it can run without being an asychronous command
        }
    })
},
  show: function(req,res){
      Question.findOne({ _id: req.params.id }, function(err, result){   //params are the body in the url, body is the objects.name etc.
// .findOne comes back as object directly and not an array
      if(err){
          res.json({message: "Error happened", error: err});
      } else {
          console.log("********************************");
          console.log(result);
          console.log("********************************");
          res.json({message:"Success", result: result});  //need to ask why response passes back an array with the particular _id friend.
      }
  });
},
  create: function(req,res){
      Question.create(req.body,function(err, result){
          console.log("got to /create at questions.js passing in -> ", req.body);
          var question = new Question(req.body);
          console.log("this is the Question variable", question);
          if(err){
              res.json({message: "Error happened Creating Poll", error: err});
          } else {
              console.log("successfully created question:", result);

              res.json({message:"Successfully created message", result: result});
          }
      })
},
  update1: function(req,res){
      console.log("got into the friend update @ server-side questions.js");
    Question.findOne({ _id:req.params.id}, function(err, question){   //friend is the body that we need to edit
        console.log("this is the body that is updated:", req.body);
        if(err){
            console.log("there is an error updating our option:", err);
            res.json({message:"Error Can't Find option", error:err});
        } else {
            question.opt1Count ++;
            question.save(function(err, updated){
                //if you need to just update one thing, use the save function(look at MEAN_store Assignment)
                if(err){
                    res.json(err);
                }else{
                    res.json({message:"Success", updated: updated})
                    }
                })
            }
    })
},
update2: function(req,res){
    console.log("got into the friend update @ server-side questions.js");
  Question.findOne({ _id:req.params.id}, function(err, question){   //friend is the body that we need to edit
      console.log("this is the body that is updated:", req.body);
      if(err){
          console.log("there is an error updating our option:", err);
          res.json({message:"Error Can't Find option", error:err});
      } else {
          question.opt2Count ++;
          question.save(function(err, updated){
              //if you need to just update one thing, use the save function(look at MEAN_store Assignment)
              if(err){
                  res.json(err);
              }else{
                  res.json({message:"Success", updated: updated})
                  }
              })
          }
  })
},
update3: function(req,res){
    console.log("got into the friend update @ server-side questions.js");
  Question.findOne({ _id:req.params.id}, function(err, question){   //friend is the body that we need to edit
      console.log("this is the body that is updated:", req.body);
      if(err){
          console.log("there is an error updating our option:", err);
          res.json({message:"Error Can't Find option", error:err});
      } else {
          question.opt3Count ++;
          question.save(function(err, updated){
              //if you need to just update one thing, use the save function(look at MEAN_store Assignment)
              if(err){
                  res.json(err);
              }else{
                  res.json({message:"Success", updated: updated})
                  }
              })
          }
  })
},
update4: function(req,res){
    console.log("got into the friend update @ server-side questions.js");
  Question.findOne({ _id:req.params.id}, function(err, question){   //friend is the body that we need to edit
      console.log("this is the body that is updated:", req.body);
      if(err){
          console.log("there is an error updating our option:", err);
          res.json({message:"Error Can't Find option", error:err});
      } else {
          question.opt4Count ++;
          question.save(function(err, updated){
              //if you need to just update one thing, use the save function(look at MEAN_store Assignment)
              if(err){
                  res.json(err);
              }else{
                  res.json({message:"Success", updated: updated})
                  }
              })
          }
  })
},
  delete: function(req,res){
    //your code here
    Question.remove({ _id: req.params.id }, function(err, result){
        if(err){
            res.json({message: "Error happened", error: err});
        }else{
            res.json({message:'question deleted', result: result});
        }
    })
  },
}

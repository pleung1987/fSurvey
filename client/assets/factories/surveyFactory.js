console.log('got into Factory');

app.factory('surveyFactory', function($http) {
  var factory = {};
  var logged_user = "";
//check if logged in
  factory.loggedIn = function(callback){
    callback(logged_user);
  }
//logs out if has logged_user
  factory.loggedOut = function(callback){
      logged_user= ""
      callback(logged_user)
  }
  //log a temporary user
  factory.logUser = function(logUser, callback){
      logged_user = logUser.name;
      console.log("this is logUser:", logged_user);
      callback({message:"Successfully logged in", logUser: logUser})
  }

//Serving Question Schema
  factory.indexQuestion = function(callback) {
      //call this method if you want to update or set the questions variable
      $http.get('/questions').then(function(returned_data){
        console.log("these are the returned datas:",returned_data.data.result);
        callback(returned_data.data.result);
      });
    }
  //show    //this function takes the id from controllers and views that is the $index
    factory.showQuestion = function(id, callback) {
        console.log("this is the id passed in:", id);
        $http.get('/questions/'+id).then(function(returned_data){
            console.log("this is the returned data from show @ friends Factory:", returned_data.data.result);
            callback(returned_data.data.result)
        });
    }
    //create
    factory.createQuestion = function(newQuestion, callback) {
        $http.post('/questions', newQuestion).then(function(returned_data){
        console.log("the object passed at the factory:", newQuestion);    //newUser logs as the object passed in by controller from $scope.newFriend
        console.log("these are the returned data:",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    }
    //Votes
    factory.addVote1 = function(objectToVote, callback){
        console.log("this is the object to vote @ the factory:", objectToVote);
        $http.put('/vote1/'+ objectToVote._id, objectToVote).then(function(returned_data){
            console.log("this is the returned data from the factory:",returned_data.data);
            if (typeof(callback) == 'function'){
              callback(returned_data.data);
            }
        })
    }

    factory.addVote2 = function(objectToVote, callback){
        console.log("this is the object to vote @ the factory:", objectToVote);
        $http.put('/vote2/'+ objectToVote._id, objectToVote).then(function(returned_data){
            console.log("this is the returned data from the factory:",returned_data.data);
            if (typeof(callback) == 'function'){
              callback(returned_data.data);
            }
        })
    }

    factory.addVote3 = function(objectToVote, callback){
        console.log("this is the object to vote @ the factory:", objectToVote);
        $http.put('/vote3/'+ objectToVote._id, objectToVote).then(function(returned_data){
            console.log("this is the returned data from the factory:",returned_data.data);
            if (typeof(callback) == 'function'){
              callback(returned_data.data);
            }
        })
    }
    factory.addVote4 = function(objectToVote, callback){
        console.log("this is the object to vote @ the factory:", objectToVote);
        $http.put('/vote4/'+ objectToVote._id, objectToVote).then(function(returned_data){
            console.log("this is the returned data from the factory:",returned_data.data);
            if (typeof(callback) == 'function'){
              callback(returned_data.data);
            }
        })
    }
    //Delete Question
    factory.delete = function(questionToDelete, callback) {
    console.log("this is the friend to delete at the Factory:", questionToDelete);
    $http.delete('/questions/'+ questionToDelete._id, questionToDelete).then(function(returned_data){
        console.log("this is the returned data from the factory:",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }

  return factory;
});


app.controller('questionController', function($scope, surveyFactory, $routeParams, $location) {
    console.log("got into the questions Controller");
    console.log("this is the routeParams:", $routeParams);

// giving a callback to the factory to check if you are logged in yet.
surveyFactory.loggedIn(function(data){
    if( data == ""){
        console.log("this is the data for redirecting:", data);
        $location.url('/')
    } else {
        console.log("this is the data for SUCCESS: ", data);
        $scope.user = data
        if($routeParams.success === undefined){
            $scope.message = "Loggin as: " + $scope.user
        } else {
        $scope.message = $routeParams.success + ", Welcome: " + $scope.user
        }
    }
});
//create question
    $scope.createQuestion = function() {
        $scope.newQuestion.creator = $scope.user;
        $scope.newQuestion.opt1Count = 0 ;
        $scope.newQuestion.opt2Count = 0 ;
        $scope.newQuestion.opt3Count = 0 ;
        $scope.newQuestion.opt4Count = 0 ;
        console.log("got into create in question_Controller and passing these data to Factory:",$scope.newQuestion );
    surveyFactory.createQuestion($scope.newQuestion, function(data){
        console.log("this is the questionController data returned:",data);
        if(data.message == "Successfully created message"){
            $location.url('/dashboard/' + data.message)
        } else {
            $scope.message = "Please Make sure Question is greater than 8 characters and all Options fields are filled in before submitting..."
        }
      })
    }
});

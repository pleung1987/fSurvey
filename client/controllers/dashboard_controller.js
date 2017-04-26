
app.controller('dashboardController', function($scope, surveyFactory, $routeParams, $location) {
    console.log("got into the Dashboard Controller");
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

    var indexQuestion = function () {
        surveyFactory.indexQuestion(function(data) {
            console.log("this is the dashboardController data:",data);
            $scope.questions = data;
        })
    }
    indexQuestion();//immediately invoked after passing callback to grab all data from db
//show if created by user:

$scope.delete = function(question){
    console.log("got to the delete method at show_controller");
    console.log("this is the friend object you are going to delete:", question );
    surveyFactory.delete(question)
    indexQuestion();
    }
});

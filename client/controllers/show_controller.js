
app.controller('showController', function($scope, surveyFactory, $routeParams, $location) {
    console.log("got into the Show Controller");
    console.log("this is the routeParams:", $routeParams);

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
var showQuestion = function(){
    surveyFactory.showQuestion($routeParams.id, function(returnedData){
        console.log("got into the show function at show controller passing id:", $routeParams.id);
        console.log("this is the returned data from showController:",returnedData);
        $scope.question = returnedData;
        console.log($scope.question);
    });
}
showQuestion();
//voting the options
    $scope.clickVote1 = function(question){
        console.log("got to the clickVote1 in the show controller:", question);
        surveyFactory.addVote1(question, function(data){
            console.log("this is the show controller data from clickVote1:", data);
        showQuestion();
        })
    }
    $scope.clickVote2 = function(question){
        console.log("got to the clickVote2 in the show controller:", question);
        surveyFactory.addVote2(question, function(data){
            console.log("this is the show controller data from clickVote2:", data);
        showQuestion();
        })
    }
    $scope.clickVote3 = function(question){
        console.log("got to the clickVote3 in the show controller:", question);
        surveyFactory.addVote3(question, function(data){
            console.log("this is the show controller data from clickVote3:", data);
        showQuestion();
        })
    }
    $scope.clickVote4 = function(question){
        console.log("got to the clickVote4 in the show controller::", question);
        surveyFactory.addVote4(question, function(data){
            console.log("this is the show controller data from clickVote4:", data);
        showQuestion();
        })
    }
});

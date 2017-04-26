
app.controller('loginController', function($scope, surveyFactory, $routeParams, $location) {
    console.log("got into the login Controller");

    surveyFactory.loggedOut(function(data){
        console.log("This is the logged_user:", data);
        $scope.message = "You are now logged out, Please Log in..."
    });
//Log in User function
    $scope.logUser = function() {
        console.log("this is scope.newUser:", $scope.newUser);
        if($scope.newUser.name.length < 3 || $scope.newUser == undefined){
            $scope.message = "loggin name greater than 3 letters"
        }else{
        console.log("got into create in login_Controller and passing these data to Factory:",$scope.newUser );
        surveyFactory.logUser($scope.newUser, function(data){
            console.log("this is the login Controller data returned:",data);
            $location.url('/dashboard/' + data.message)
          })
        }
    }

});

app.controller('userCtrl', ['$scope', 'userFctry', '$routeParams', '$location', userCtrl])

function userCtrl($scope, userFctry, $routeParams, $location){
    console.log('users controller loaded!!!!!!!!')
    var id = $routeParams.id


    $scope.checkUser = function(user){
        userFctry.checkUsers(user, function(data){
        })
    }

    $scope.userCheck = function(){
        if($scope.user){
            return true;
        }
        return false;
    }

}

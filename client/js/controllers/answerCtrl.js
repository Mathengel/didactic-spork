app.controller('answerCtrl', ['$scope', 'answerFctry', 'questionFctry', 'userFctry', '$routeParams', '$location', answerCtrl])

function answerCtrl($scope, answerFctry, questionFctry, userFctry, $routeParams, $location){
    console.log('answer controller loaded!!!!!!!! serving answers for user #')

    function getQuestion(){
        console.log("getting a question...", $routeParams.id)
        questionFctry.show($routeParams.id, function(response){
            console.log("response from questionFctry.show", response)
            $scope.question = response.data;
        })
    }
    getQuestion();

    function getUser(){ 
        userFctry.getCurrentUser(function(data){
        $scope.currentUser = data;
        })
    }
    getUser();

    $scope.create = function(newAnswer, currentUser){
        $scope.newAnswer = {};
        newAnswer.name = currentUser.name;
        newAnswer.likes = 0;
        console.log('scope.create method fires!!!', newAnswer, $routeParams.id)
        answerFctry.create(newAnswer, $routeParams.id, function (response){
            console.log("response from answerFctry.create, but from controller call", response)
        })
        $location.path('home')
    }

    $scope.like = function(answer){ 
        console.log("like method firing on", answer) 
        answerFctry.like(answer, function(response){
            console.log("response from like function")
        })
    }

}
